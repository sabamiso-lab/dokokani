# 🚙 どこかへブーン！ (Dokokade Boon!) - FOR DRIVE

JR東日本の「どこかにビューン！」をリスペクトし、自動車（ドライブ）版としてアレンジした、ワクワクする目的地ガチャ決定Webアプリケーション（SPA）です。

**「爽快ブルースカイ・ロード」**をテーマにした爽やかでモダンなUIデザインと、滑らかなアニメーションでドライブの計画を楽しく彩ります。

---

## 🔗 公開URL
👉 **[https://sabamiso-lab.github.io/dokokani/](https://sabamiso-lab.github.io/dokokani/)**  
*(※GitHub Pagesにて完全無料公開中)*

---

## 🌟 主な機能と特徴

- **📍 デフォルト出発地は「長野県塩尻市（塩尻駅）」**
  - 信州・中部・甲信越の素晴らしいドライブロードへアクセスしやすい塩尻市を標準の出発地に設定しています。
- **🛰️ GPS現在地連動**
  - ボタン一つでブラウザのGPSから現在地を検知し、最も近い出発主要都市（東京、名古屋、大阪、福岡など）を自動セットします。
- **🎯 距離に応じた密度グラデーションDB (約50以上の厳選スポット)**
  - 長野県内および隣接県（山梨・群馬・静岡・岐阜・新潟・北陸など）の絶景・温泉・歴史・リゾートスポットを「手厚く」収録。遠方（関西、東北、中四国、九州、北海道）になるにつれて適度にセレクトされるよう配置しています。
  - **堅牢な選出アルゴリズム**: 条件に合うスポットが4つ未満の場合、テーマの自動解除や距離枠の自動拡大を行い、常に重複のない4つの異なる目的地候補を提案します。
- **🗺️ インタラクティブな地図連携 (Leaflet.js & OpenStreetMap)**
  - 無料・APIキー不要のクリアな日本地図を使用。選ばれた4つの目的地をピンでマッピングし、出発地からのネットワーク線を破線で描画します。
- **⚡ 疾走感あふれる「どこかへブーン！」決定演出**
  - スロットが回ると、画面が「Boon! モード」に切り替わり、車の上下バウンドとセンターラインの高速スクロールでドライブの臨場感を演出。
  - スピードメーター（km/h）が急上昇・急ブレーキを踏む数値連動と、エンジン始動〜目的地接近のステータステキストが走り、決定の瞬間に豪華な紙吹雪（Confetti）でお祝いします。
- **🗺️ Google Maps ナビ連携＆旅程シェア**
  - 決定した目的地に対して、出発地からの車ルートナビを開くURLを自動生成。さらにSNSなどにすぐシェアできるよう、絵文字付きの旅程テキストを1クリックでコピーできます。
- **✨ AIドライブプラン生成**
  - 目的地決定後、ローカルLLM（`https://llm-api.sabamiso-lab.uk/api/chat`）で午前〜夕方の過ごし方・寄り道・注意点を生成。再生成・コピーにも対応。

---

## 🛠️ 使用技術 (Tech Stack)

- **Frontend**: HTML5, Vanilla CSS (CSS Variables & 3D Transforms & Keyframes), Vanilla JavaScript (ES Modules)
- **Maps**: Leaflet.js & OpenStreetMap
- **Icons**: Lucide Icons
- **Effects**: Canvas-Confetti (紙吹雪演出), Animate.css (フェード演出)
- **Typography**: Google Fonts (Outfit & Noto Sans JP)
- **Hosting**: GitHub Pages (完全無料・静的ホスティング)
- **AI**: 自前 Ollama 互換 API（`gemma4:latest`）でドライブプラン生成

---

## 🌐 Cloudflare CORS（GitHub Pages 公開時）

ブラウザから `https://sabamiso-lab.github.io` 経由で LLM API を呼ぶには、Cloudflare 側でオリジン許可が必要です（`localhost` だけ通っていても本番は 403 になり得ます）。

1. **Security → WAF / Custom rules / Bots**  
   `Origin: https://sabamiso-lab.github.io` の POST / OPTIONS を弾いていないか確認。API サブドメインは Bot Fight の Skip も検討。
2. **Rules → Snippets（または Worker）**（推奨）  
   Ollama は OPTIONS に 405 を返すため、プリフライトは Cloudflare で完結させる。
   - 許可: `http://localhost:8000`, `https://sabamiso-lab.github.io`
   - OPTIONS → 204 + CORS ヘッダー
   - POST 応答にも `Access-Control-Allow-Origin`（リクエスト Origin をエコー） / `Allow-Methods: POST, OPTIONS` / `Allow-Headers: Content-Type` / `Vary: Origin`
3. **Transform Rules → Modify Response Header** だけだと OPTIONS 405 は直らないので、プリフライト用 Snippet と併用すること。

確認コマンド例:

```bash
curl -i -X OPTIONS https://llm-api.sabamiso-lab.uk/api/chat \
  -H "Origin: https://sabamiso-lab.github.io" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: content-type"
```

---

## 🚀 ローカルでの開発・起動方法

本アプリはビルド不要な静的ファイルのみで構成されていますが、ES Modules（`import/export`）を使用しているため、ローカルの簡易HTTPサーバー経由で起動する必要があります。

### Pythonを使用する場合
プロジェクトのルートディレクトリで以下を実行します。
```bash
python -m http.server 8000
```
ブラウザで `http://localhost:8000` にアクセスします。

### Node.js (npx) を使用する場合
```bash
npx serve
```
または、VS Codeの「Live Server」拡張機能などを使用しても即座に起動できます。
