import { driveSpots, startingPoints } from './spots.js';

// ==========================================================================
// 状態管理 (State)
// ==========================================================================
let currentMap = null;
let startingMarker = null;
let candidateMarkers = [];
let routePolyline = null;
let currentCandidates = [];
let selectedDestination = null;

// デフォルトの出発地 (長野県塩尻市)
let currentStartPoint = startingPoints[0];

// ==========================================================================
// アプリ初期化 (Initialize)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Lucideアイコンの初期化
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. 出発地セレクトボックスの初期化
  initStartSelect();

  // 3. イベントリスナーの設定
  setupEventListeners();

  // 4. GPSの自動初期試行 (可能であれば)
  tryAutodetectLocation();
});

// 出発地セレクトボックスの初期化
function initStartSelect() {
  const select = document.getElementById('select-start');
  select.innerHTML = '';

  startingPoints.forEach(point => {
    const option = document.createElement('option');
    option.value = point.id;
    option.textContent = `${point.name} (${point.area.toUpperCase()})`;
    select.appendChild(option);
  });

  // 初期選択を長野県塩尻市に設定
  select.value = 'shiojiri';
}

// ==========================================================================
// イベントリスナー (Event Listeners)
// ==========================================================================
function setupEventListeners() {
  const selectStart = document.getElementById('select-start');
  const btnDraw = document.getElementById('btn-draw');
  const btnReshuffle = document.getElementById('btn-reshuffle');
  const btnFinalBoon = document.getElementById('btn-final-boon');
  const btnGps = document.getElementById('btn-gps');
  const btnRetry = document.getElementById('btn-retry');
  const btnShare = document.getElementById('btn-share');

  // 出発地変更時
  selectStart.addEventListener('change', (e) => {
    const selected = startingPoints.find(p => p.id === e.target.value);
    if (selected) {
      currentStartPoint = selected;
      updateLocationBadge(selected.name);
    }
  });

  // GPSボタンクリック時
  btnGps.addEventListener('click', handleGPSLocation);

  // 「候補地を4つ選ぶ！」ボタン
  btnDraw.addEventListener('click', handleDrawCandidates);

  // 再シャッフルボタン
  btnReshuffle.addEventListener('click', handleDrawCandidates);

  // 「どこかへブーン！する」ボタン（決定演出）
  btnFinalBoon.addEventListener('click', startBoonAnimation);

  // もう一度選ぶボタン
  btnRetry.addEventListener('click', resetToHome);

  // シェア（旅程コピー）ボタン
  btnShare.addEventListener('click', copyItinerary);
}

// GPSステータスとバッジの更新
function updateLocationBadge(name) {
  const statusEl = document.getElementById('gps-status');
  statusEl.textContent = `出発地: ${name}`;
}

// ==========================================================================
// GPS現在地検知 (Geolocation API)
// ==========================================================================
function handleGPSLocation() {
  const btn = document.getElementById('btn-gps');
  const statusText = document.getElementById('gps-status');

  if (!navigator.geolocation) {
    alert('お使いのブラウザはGPS現在地取得に対応していません。');
    return;
  }

  btn.style.opacity = '0.7';
  statusText.textContent = '現在地を取得中...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      // 取得した緯度経度に一番近い「出発地」を判定
      let minDistance = Infinity;
      let closestPoint = startingPoints[0];

      startingPoints.forEach(point => {
        const dist = getHaversineDistance(lat, lng, point.lat, point.lng);
        if (dist < minDistance) {
          minDistance = dist;
          closestPoint = point;
        }
      });

      // セレクトボックスをその最も近い都市に設定
      const select = document.getElementById('select-start');
      select.value = closestPoint.id;
      currentStartPoint = closestPoint;

      updateLocationBadge(closestPoint.name + ' (GPS近接)');
      btn.style.opacity = '1';

      // 視覚的演出として一時的にバッジをグリーンに発光
      const badge = document.querySelector('.badge-location');
      badge.style.borderColor = 'var(--grass-green-500)';
      badge.style.background = '#eafaf1';
      badge.style.color = 'var(--grass-green-600)';
      setTimeout(() => {
        badge.style.borderColor = 'var(--sky-blue-100)';
        badge.style.background = 'var(--sky-blue-50)';
        badge.style.color = 'var(--sky-blue-700)';
      }, 2000);
    },
    (error) => {
      console.warn('GPS取得失敗:', error);
      statusText.textContent = 'GPS取得失敗（手動選択）';
      btn.style.opacity = '1';
      // ユーザー設定によりブロックされた場合などがあるため、静かにアラート
      alert('現在地を取得できませんでした。リストから手動で選択してください。');
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
  );
}

// 起動時に可能な限り現在地を自動推測（ブラウザにキャッシュがあれば）
function tryAutodetectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        let minDistance = Infinity;
        let closestPoint = startingPoints[0];

        startingPoints.forEach(point => {
          const dist = getHaversineDistance(lat, lng, point.lat, point.lng);
          if (dist < minDistance) {
            minDistance = dist;
            closestPoint = point;
          }
        });

        const select = document.getElementById('select-start');
        select.value = closestPoint.id;
        currentStartPoint = closestPoint;
        updateLocationBadge(closestPoint.name);
      },
      () => {
        // サイレントにスルー（デフォルトの「東京」のまま）
        updateLocationBadge(currentStartPoint.name);
      },
      { timeout: 2000 }
    );
  }
}

// ==========================================================================
// 地理的距離計算 (Haversine Formula)
// ==========================================================================
function getHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 地球の半径 (km)
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // 直線距離 (km)
}

// 距離からドライブ推定所要時間を取得 (平均速度 55km/h と仮定)
function estimateDriveTime(distanceKm) {
  const totalHours = distanceKm / 55;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  
  if (hours === 0) {
    return `約${minutes}分`;
  }
  return `約${hours}時間${minutes}分`;
}

// ==========================================================================
// 候補地の選出とフィルタリング (Filtering Logic with Auto-Fallback)
// ==========================================================================
function handleDrawCandidates() {
  // コントロール値の取得
  const driveTimeVal = document.querySelector('input[name="drive-time"]:checked').value;
  const selectedThemes = Array.from(document.querySelectorAll('input[name="theme"]:checked')).map(cb => cb.value);

  if (selectedThemes.length === 0) {
    alert('おでかけのテーマを少なくとも1つ選択してください。');
    return;
  }

  // 1. 各スポットの「出発地からの距離」を計算し、距離範囲で分類
  let eligibleSpots = driveSpots.map(spot => {
    const dist = getHaversineDistance(currentStartPoint.lat, currentStartPoint.lng, spot.lat, spot.lng);
    return { ...spot, distance: dist };
  });

  // 2. ドライブ時間（距離）の基準値
  // short: 40km - 130km
  // medium: 130km - 270km
  // long: 270km以上
  let minDistance = 0;
  let maxDistance = Infinity;

  if (driveTimeVal === 'short') {
    minDistance = 40;
    maxDistance = 130;
  } else if (driveTimeVal === 'medium') {
    minDistance = 130;
    maxDistance = 270;
  } else if (driveTimeVal === 'long') {
    minDistance = 270;
    maxDistance = 1000; // 日本国内ほぼカバー
  }

  // フィルタリング処理（段階的フォールバック付き）
  let filtered = filterSpots(eligibleSpots, minDistance, maxDistance, selectedThemes);

  // フォールバック1: 条件を満たすスポットが4つ未満の場合、カテゴリ(テーマ)条件を解除して再抽出
  if (filtered.length < 4) {
    console.log('テーマ条件を解除して再フィルタリングします (候補数:', filtered.length, ')');
    filtered = filterSpots(eligibleSpots, minDistance, maxDistance, []); // 空配列は全テーマOK
  }

  // フォールバック2: それでも4つ未満の場合、距離の許容範囲を25%広げて再抽出
  let attempts = 0;
  let distFactor = 1.25;
  while (filtered.length < 4 && attempts < 5) {
    console.log(`距離範囲を ${distFactor * 100}% に拡大して再試行します`);
    const newMin = Math.max(0, minDistance / distFactor);
    const newMax = maxDistance * distFactor;
    filtered = filterSpots(eligibleSpots, newMin, newMax, []);
    distFactor += 0.25;
    attempts++;
  }

  // 万が一、日本全国の全スポットを含めても4つ未満（基本あり得ないが安全策）
  if (filtered.length < 4) {
    filtered = [...eligibleSpots];
  }

  // 3. 4つの候補をランダムにシャッフルして選出
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  currentCandidates = shuffled.slice(0, 4);

  // 4. UIの更新
  renderCandidates(currentCandidates);
  initAndPopulateMap(currentStartPoint, currentCandidates);

  // ビューの切り替え（初期の空状態を非表示にし、地図とカードを表示）
  document.getElementById('state-empty').style.display = 'none';
  document.getElementById('state-map').style.display = 'block';
  document.getElementById('state-candidates').style.display = 'block';
  document.getElementById('state-result').style.display = 'none';

  // 地図の再描画を確実にする
  if (currentMap) {
    setTimeout(() => {
      currentMap.invalidateSize();
    }, 100);
  }

  // スクロールしてカードエリアへ案内
  document.getElementById('state-candidates').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// フィルタの実処理
function filterSpots(spots, minDist, maxDist, themes) {
  return spots.filter(spot => {
    // 距離判定
    const isWithinDistance = spot.distance >= minDist && spot.distance <= maxDist;
    
    // テーマ判定
    const matchesTheme = themes.length === 0 || themes.includes(spot.category);
    
    return isWithinDistance && matchesTheme;
  });
}

// 候補カードのレンダリング
function renderCandidates(candidates) {
  const grid = document.getElementById('candidates-grid');
  grid.innerHTML = '';

  candidates.forEach((spot, index) => {
    const card = document.createElement('div');
    card.className = 'spot-card animate__animated animate__fadeInUp';
    card.style.animationDelay = `${index * 0.1}s`;
    card.setAttribute('data-id', spot.id);
    card.setAttribute('data-index', index);

    // カテゴリの日本語表示
    const categoryName = getCategoryName(spot.category);

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${spot.image}" alt="${spot.name}">
        <span class="card-tag">${categoryName}</span>
      </div>
      <div class="card-body">
        <span class="card-pref">${spot.pref}</span>
        <h4 class="card-title">${spot.name}</h4>
        <div class="card-distance">
          <i data-lucide="car" style="width: 14px; height: 14px; color: var(--sky-blue-500);"></i>
          <span>約 ${Math.round(spot.distance)} km (${estimateDriveTime(spot.distance)})</span>
        </div>
      </div>
    `;

    // カードクリックで地図の該当マーカーをポップアップさせる
    card.addEventListener('click', () => {
      // 全カードから選択クラスを外す
      document.querySelectorAll('.spot-card').forEach(c => c.classList.remove('selected-candidate'));
      card.classList.add('selected-candidate');

      // 地図上のピンにフォーカス
      const marker = candidateMarkers.find(m => m.options.id === spot.id);
      if (marker && currentMap) {
        currentMap.setView(marker.getLatLng(), 10, { animate: true });
        marker.openPopup();
      }
    });

    grid.appendChild(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// カテゴリ名のマッピング
function getCategoryName(cat) {
  const map = {
    nature: '絶景・自然',
    onsen: '名湯・温泉',
    history: '歴史・レトロ',
    resort: '体験・リゾート'
  };
  return map[cat] || cat;
}

// ==========================================================================
// Leaflet.js 地図の操作
// ==========================================================================
function initAndPopulateMap(start, candidates) {
  const mapContainer = document.getElementById('map');
  
  // マップオブジェクトが未作成の場合は初期化
  if (!currentMap) {
    currentMap = L.map('map', {
      zoomControl: true,
      scrollWheelZoom: true
    }).setView([start.lat, start.lng], 7);

    // 美しくクリアな「爽快ブルースカイ・ロード」にぴったりのマップタイルを採用
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(currentMap);
  } else {
    // 既存マップがある場合は、マーカーとポリラインを初期化
    clearMapLayers();
  }

  // 1. 出発地のピンを設定 (赤いアイコン)
  const startIcon = L.divIcon({
    html: `<div style="background-color: #e84118; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.4);"></div>`,
    className: 'start-marker-icon',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  startingMarker = L.marker([start.lat, start.lng], { icon: startIcon })
    .addTo(currentMap)
    .bindPopup(`<b>出発地: ${start.name}</b><p>ここからブーン！と旅立ちます</p>`)
    .openPopup();

  // 2. 候補地のピンを設定 (スカイブルーのアイコン)
  const bounds = L.latLngBounds([[start.lat, start.lng]]);

  candidates.forEach((spot, idx) => {
    const latLng = [spot.lat, spot.lng];
    bounds.extend(latLng);

    const letter = String.fromCharCode(65 + idx); // A, B, C, D
    const candidateIcon = L.divIcon({
      html: `
        <div style="
          background-color: var(--sky-blue-500); 
          color: white; 
          width: 28px; 
          height: 28px; 
          border-radius: 50% 50% 50% 0; 
          transform: rotate(-45deg); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-weight: 800; 
          font-size: 0.8rem;
          border: 2px solid white;
          box-shadow: 0 4px 10px rgba(0,168,255,0.3);
          box-sizing: border-box;
        ">
          <span style="transform: rotate(45deg); margin-bottom: 2px; margin-right: 2px;">${letter}</span>
        </div>`,
      className: 'candidate-marker-icon',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28]
    });

    const marker = L.marker(latLng, { icon: candidateIcon, id: spot.id })
      .addTo(currentMap)
      .bindPopup(`
        <div style="font-family: 'Noto Sans JP', sans-serif;">
          <h3 style="margin:0 0 4px 0; color:var(--sky-blue-600);">${spot.name}</h3>
          <p style="font-size:0.75rem; margin:0 0 6px 0; color:var(--asphalt-light);">${spot.pref} | 約${Math.round(spot.distance)}km</p>
          <p style="font-size:0.75rem; margin:0;">${spot.description.slice(0, 40)}...</p>
        </div>
      `);

    // マーカークリック時の連動カード強調
    marker.on('click', () => {
      document.querySelectorAll('.spot-card').forEach(c => c.classList.remove('selected-candidate'));
      const card = document.querySelector(`.spot-card[data-id="${spot.id}"]`);
      if (card) {
        card.classList.add('selected-candidate');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    candidateMarkers.push(marker);

    // 出発地から候補地へ、細い青い破線をプロット（JR東日本のようなワクワクネットワーク線）
    const line = L.polyline([[start.lat, start.lng], latLng], {
      color: 'rgba(0, 168, 255, 0.4)',
      weight: 2,
      dashArray: '5, 10'
    }).addTo(currentMap);
    
    candidateMarkers.push(line); // 一括クリア用に格納
  });

  // 3. すべてのピンが画面内に収まるように地図範囲をフィット
  currentMap.fitBounds(bounds, {
    padding: [50, 50],
    animate: true,
    duration: 1.5
  });
}

// 地図レイヤーのクリア
function clearMapLayers() {
  if (startingMarker) {
    currentMap.removeLayer(startingMarker);
    startingMarker = null;
  }
  
  candidateMarkers.forEach(layer => {
    currentMap.removeLayer(layer);
  });
  candidateMarkers = [];

  if (routePolyline) {
    currentMap.removeLayer(routePolyline);
    routePolyline = null;
  }
}

// ==========================================================================
// どこかへブーン！スロット・シャッフル決定演出 (Boon Animation)
// ==========================================================================
function startBoonAnimation() {
  if (currentCandidates.length !== 4) return;

  const overlay = document.getElementById('boon-overlay');
  const speedEl = document.getElementById('meter-speed');
  const statusEl = document.getElementById('boon-status');
  const cards = document.querySelectorAll('.spot-card');

  // モーダル表示
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 背後スクロール防止

  // 演出フェーズの定義
  let speed = 0;
  let duration = 4000; // 全体演出4秒
  let startTime = performance.now();
  let cardIndex = 0;

  // 車の音を想起させるエンジンの加速テキスト
  const statusTexts = [
    { time: 0, text: 'スターターオン！エンジン始動...🔑' },
    { time: 800, text: 'ローギヤにシフトイン！加速します！💨' },
    { time: 1600, text: 'セカンド、サード！高速道路に合流します！🛣️' },
    { time: 2400, text: '爽快な青空の下、巡航速度へブーン！☁️🚙💨' },
    { time: 3200, text: 'まもなく目的地インターチェンジです！🏁' },
    { time: 3800, text: '目的地到着！キキーッ！🛑' }
  ];

  // 1. スピードメーターとテキストのアニメーションループ
  function animateBoon(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // スピードの上昇（イージングをかけて最後は0へ減速）
    if (progress < 0.8) {
      // 0〜180km/hまで加速
      speed = Math.floor(Math.sin((progress / 0.8) * Math.PI / 2) * 180);
    } else {
      // 180〜0km/hへ急減速
      const brakeProgress = (progress - 0.8) / 0.2;
      speed = Math.floor(180 * (1 - Math.sin(brakeProgress * Math.PI / 2)));
    }
    speedEl.textContent = speed;

    // ステータステキストの切替
    const currentText = statusTexts.reduce((prev, curr) => {
      return elapsed >= curr.time ? curr.text : prev;
    }, statusTexts[0].text);
    statusEl.textContent = currentText;

    if (progress < 1) {
      requestAnimationFrame(animateBoon);
    }
  }
  requestAnimationFrame(animateBoon);

  // 2. カードのスロット順次点灯アニメーション
  let slotInterval = setInterval(() => {
    // すべてのカードから点灯クラスを取り除く
    cards.forEach(c => {
      c.classList.remove('spinning');
      c.classList.add('eliminated'); // 他は暗く
    });

    // 現在のカードを点灯
    const activeCard = cards[cardIndex % 4];
    activeCard.classList.remove('eliminated');
    activeCard.classList.add('spinning');

    cardIndex++;
  }, 150); // 150msごとに回転

  // 3. 演出完了（決定の瞬間）
  setTimeout(() => {
    clearInterval(slotInterval);

    // 最終決定スポットをランダムで1つ決定
    const finalIndex = Math.floor(Math.random() * 4);
    selectedDestination = currentCandidates[finalIndex];

    // 全てのカードからアニメーションを解除し、決定したカードだけを目立たせる
    cards.forEach((c, idx) => {
      c.classList.remove('spinning', 'eliminated');
      if (idx !== finalIndex) {
        c.classList.add('eliminated');
      } else {
        c.classList.add('selected-candidate');
      }
    });

    // モーダルを閉じる
    overlay.style.display = 'none';
    document.body.style.overflow = ''; // スクロール復帰

    // 結果の処理を実行
    showFinalResult(selectedDestination, finalIndex);

  }, duration);
}

// ==========================================================================
// 最終結果の表示と地図ズーム (Result Visualization)
// ==========================================================================
function showFinalResult(spot, index) {
  const resultSection = document.getElementById('state-result');
  const reshuffleHeader = document.getElementById('btn-reshuffle');
  const finalBoonHeader = document.getElementById('btn-final-boon');

  // 再検索ボタン群を一時非表示（結果に集中させるため）
  reshuffleHeader.style.disabled = true;
  finalBoonHeader.style.disabled = true;

  // 1. 結果カードへの情報挿入
  document.getElementById('result-img').src = spot.image;
  document.getElementById('result-pref').textContent = spot.pref;
  document.getElementById('result-category').textContent = getCategoryName(spot.category);
  document.getElementById('result-name').textContent = spot.name;
  document.getElementById('result-desc').textContent = spot.description;
  document.getElementById('result-address-text').textContent = spot.address;

  // 距離と所要時間
  const distBadge = document.getElementById('result-dist-badge');
  distBadge.innerHTML = `<i data-lucide="gauge" style="width:14px; height:14px;"></i> 約 ${Math.round(spot.distance)} km | 推定時間 ${estimateDriveTime(spot.distance)}`;

  // Google Maps ナビ連携URLの設定
  const navBtn = document.getElementById('btn-navigation');
  navBtn.href = `https://www.google.com/maps/dir/?api=1&origin=${currentStartPoint.lat},${currentStartPoint.lng}&destination=${spot.lat},${spot.lng}&travelmode=driving`;

  // 2. 地図の更新（決定ルートのハイライト）
  highlightRouteOnMap(currentStartPoint, spot);

  // 3. 結果表示領域を表示
  resultSection.style.display = 'block';
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 結果セクションまでスムーズスクロール
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // 4. クラッカー演出 (Confetti)
  triggerConfetti();
}

// 決定ルートのハイライト描画
function highlightRouteOnMap(start, dest) {
  if (!currentMap) return;

  // 1. 既存の候補ピンと破線をすべて消去
  clearMapLayers();

  // 2. 出発地ピンの再描画 (赤い車風)
  const startIcon = L.divIcon({
    html: `<div style="background-color: #44bd32; width: 18px; height: 18px; border-radius: 50%; border: 3px solid white; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.3);"><i data-lucide="car" style="width:10px; height:10px; color:white;"></i></div>`,
    className: 'start-marker-icon',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
  startingMarker = L.marker([start.lat, start.lng], { icon: startIcon })
    .addTo(currentMap)
    .bindPopup(`<b>出発: ${start.name}</b>`)
    .openPopup();

  // 3. 決定した目的地のピンを描画 (豪華なゴールド/イエローのピン)
  const destIcon = L.divIcon({
    html: `
      <div style="
        background-color: var(--road-yellow); 
        color: var(--asphalt-dark); 
        width: 32px; 
        height: 32px; 
        border-radius: 50% 50% 50% 0; 
        transform: rotate(-45deg); 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        font-weight: 900; 
        border: 2px solid white;
        box-shadow: 0 4px 15px rgba(251, 197, 49, 0.6);
        box-sizing: border-box;
      ">
        <div style="transform: rotate(45deg); margin-bottom: 2px; margin-right: 2px; display:flex; align-items:center; justify-content:center;">
          🏁
        </div>
      </div>`,
    className: 'destination-marker-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const destMarker = L.marker([dest.lat, dest.lng], { icon: destIcon })
    .addTo(currentMap)
    .bindPopup(`
      <div style="font-family: 'Noto Sans JP', sans-serif; width: 180px;">
        <h3 style="margin:0 0 4px 0; color:var(--sky-blue-600);">${dest.name}</h3>
        <p style="font-size:0.75rem; margin:0; color:var(--asphalt-light);">ここに決定しました！安全運転でブーン！🚗💨</p>
      </div>
    `);
  candidateMarkers.push(destMarker); // クリア用配列で管理

  // 4. 太い青空ロード（美しいグラデーションポリライン）を描画
  routePolyline = L.polyline([[start.lat, start.lng], [dest.lat, dest.lng]], {
    color: 'var(--sky-blue-500)',
    weight: 6,
    opacity: 0.8,
    lineCap: 'round',
    lineJoin: 'round',
    shadowBlur: 10,
    shadowColor: 'rgba(0, 168, 255, 0.4)'
  }).addTo(currentMap);

  // 5. ルート全体が綺麗に見えるようにズーム調整
  const bounds = L.latLngBounds([[start.lat, start.lng], [dest.lat, dest.lng]]);
  currentMap.fitBounds(bounds, {
    padding: [60, 60],
    animate: true,
    duration: 1.5
  });

  // 少し遅れて目的地ポップアップを開く
  setTimeout(() => {
    destMarker.openPopup();
  }, 1500);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 決定時のお祝いクラッカー (Confetti)
function triggerConfetti() {
  if (window.confetti) {
    // 左右から紙吹雪を飛ばす
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      window.confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#00a8ff', '#4cd137', '#fbc531', '#ffffff']
      });
      window.confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#00a8ff', '#4cd137', '#fbc531', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}

// ==========================================================================
// 画面リセットとユーティリティ (Reset & Copy)
// ==========================================================================
function resetToHome() {
  // すべての候補カードの選択や薄暗さを解除
  document.querySelectorAll('.spot-card').forEach(c => {
    c.classList.remove('selected-candidate', 'eliminated');
  });

  // 地図のピンを出発地と4つの候補に戻す
  initAndPopulateMap(currentStartPoint, currentCandidates);

  // 結果セクションのみ非表示にし、候補セクションは維持（再抽選できるように）
  document.getElementById('state-result').style.display = 'none';

  // コントロールの活性化
  document.getElementById('btn-reshuffle').style.disabled = false;
  document.getElementById('btn-final-boon').style.disabled = false;

  // 候補セクションへスクロール
  document.getElementById('state-candidates').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 旅程のクリップボードコピー
function copyItinerary() {
  if (!selectedDestination) return;

  const text = 
`🚙💨 「どこかへブーン！」でドライブ目的地が決定しました！

📍 出発地：${currentStartPoint.name}
🏁 目的地：${selectedDestination.name} (${selectedDestination.pref})
📏 距離：約 ${Math.round(selectedDestination.distance)} km
⏱️ 所要時間：${estimateDriveTime(selectedDestination.distance)}

💡 スポット紹介：${selectedDestination.description}
🗺️ 住所：${selectedDestination.address}

#どこかへブーン #ドライブ #目的地ガチャ`;

  navigator.clipboard.writeText(text)
    .then(() => {
      alert('ドライブ旅程をクリップボードにコピーしました！SNS等でシェアしてください 🚗✨');
    })
    .catch(err => {
      console.error('コピー失敗:', err);
      alert('コピーできませんでした。恐れ入りますが、画面からテキストを直接選択してコピーしてください。');
    });
}
