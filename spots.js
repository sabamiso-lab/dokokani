// ==========================================================================
// どこかへブーン！ - 全国のドライブスポットデータベース (100選)
// ==========================================================================

export const driveSpots = [
  // ==========================================
  // 1. 長野県内 【超手厚い】(信州エリア: 約30件)
  // ==========================================
  {
    id: "suwako_tateishi",
    name: "諏訪湖・立石公園",
    pref: "長野県",
    category: "nature",
    lat: 36.0485,
    lng: 138.1281,
    description: "諏訪湖を一望できる高台の公園。特に夕暮れから夜にかけてのパノラマ夜景は、映画『君の名は。』の聖地としても有名な息をのむ美しさです。",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: ["パノラマ夜景", "映画聖地", "夕日スポット"],
    address: "長野県諏訪市大字上諏訪立石10399"
  },
  {
    id: "utsukushigahara",
    name: "美ヶ原高原美術館・美ヶ原スカイライン",
    pref: "長野県",
    category: "resort",
    lat: 36.2239,
    lng: 138.1368,
    description: "標高2,000mに広がる日本有数の大草原。アルプスの山々を見下ろす屋外に、数々のアート彫刻が点在する「天空の美術館」は爽快感抜群です。",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    tags: ["標高2000m", "屋外アート", "絶景ドライブ"],
    address: "長野県上田市武石余里1315-95"
  },
  {
    id: "kirigamine_venus",
    name: "霧ヶ峰高原・ビーナスライン",
    pref: "長野県",
    category: "nature",
    lat: 36.1026,
    lng: 138.1691,
    description: "日本を代表する絶景ドライビングルート。車窓いっぱいに広がる緑の草原と爽やかな高原の風を浴びながら、アップダウンのあるワインディングを疾走できます。",
    image: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80",
    tags: ["ビーナスライン", "緑の草原", "王道ロード"],
    address: "長野県諏訪市四賀霧ヶ峰"
  },
  {
    id: "naraijuku",
    name: "中山道・奈良井宿",
    pref: "長野県",
    category: "history",
    lat: 35.9688,
    lng: 137.8139,
    description: "江戸時代の面影を色濃く残す、日本最長の宿場町。千本格子の美しい木造家屋が約1kmにわたって連なり、歩くだけでタイムスリップ気分を味わえます。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["江戸風情", "重要文化財", "五街道"],
    address: "長野県塩尻市大字奈良井"
  },
  {
    id: "matsumoto_castle",
    name: "国宝 松本城",
    pref: "長野県",
    category: "history",
    lat: 36.2380,
    lng: 137.9688,
    description: "現存する五重六階の天守の中で日本最古を誇る、美しい「黒漆」の城。北アルプスを背景に、水堀に映る漆黒の天守群は堂々たる風格です。",
    image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=600&q=80",
    tags: ["国宝", "五重天守", "城下町散策"],
    address: "長野県松本市丸の内4-1"
  },
  {
    id: "kamikochi_shiojiri",
    name: "上高地・大正池と河童橋",
    pref: "長野県",
    category: "nature",
    lat: 36.2373,
    lng: 137.6402,
    description: "日本を代表する山岳景勝地。穂高連峰の険しい山肌を映す神秘的な大正池から、象徴的な木造の「河童橋」まで、神々しい自然美の中を散策できます。",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
    tags: ["特別名勝", "梓川ブルー", "マイナスイオン"],
    address: "長野県松本市安曇上高地"
  },
  {
    id: "achimura_stars",
    name: "阿智村・日本一の星空（ヘブンスそのはら）",
    pref: "長野県",
    category: "nature",
    lat: 35.4371,
    lng: 137.7128,
    description: "環境省から「日本一星空が輝いて見える場所」に選ばれた暗闇の楽園。夜間ゴンドラで標高1400mまで登り、都会では絶対に見られない無数の天の川を堪能できます。",
    image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=600&q=80",
    tags: ["日本一の星空", "ゴンドラ体験", "ナイトツアー"],
    address: "長野県下伊那郡阿智村智里3731-4"
  },
  {
    id: "togakushi_shrine",
    name: "戸隠神社・奥社杉並木",
    pref: "長野県",
    category: "history",
    lat: 36.7583,
    lng: 138.0772,
    description: "創建2000余年、日本屈指のパワースポット。奥社への参道に約500m続く樹齢400年超の巨大な杉並木は、一歩踏み入れるだけで圧倒的な神聖さを感じます。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    tags: ["パワースポット", "巨樹杉並木", "絶品戸隠そば"],
    address: "長野県長野市戸隠3690"
  },
  {
    id: "shiga_kogen",
    name: "志賀高原・渋峠日本国道最高地点",
    pref: "長野県",
    category: "nature",
    lat: 36.6572,
    lng: 138.5350,
    description: "日本の国道最高地点（標高2,172m）を誇る渋峠。長野と群馬の県境に位置し、天気が良ければ雲海や遥か遠くの富士山までも見下ろす絶景ロードです。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["国道最高地点", "山岳ドライブ", "夏でも涼しい"],
    address: "長野県下高井郡山ノ内町志賀高原"
  },
  {
    id: "shibu_onsen",
    name: "信州渋温泉・外湯巡り",
    pref: "長野県",
    category: "onsen",
    lat: 36.7335,
    lng: 138.4374,
    description: "レトロな石畳と木造旅館が並ぶ情緒豊かな温泉街。浴衣姿にゲタを鳴らしながら、宿泊客がもらえる鍵を使って9つの共同浴場（外湯）を巡る情緒ある旅を楽しめます。",
    image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
    tags: ["ノスタルジック温泉", "石畳の街", "九湯めぐり"],
    address: "長野県下高井郡山ノ内町佐野"
  },
  {
    id: "snow_monkey",
    name: "地獄谷野猿公苑",
    pref: "長野県",
    category: "resort",
    lat: 36.7327,
    lng: 138.4485,
    description: "世界で唯一、温泉に浸かる野生のニホンザル（スノーモンキー）を間近で観察できる世界的に有名な渓谷。寒そうに肩を寄せ合い極楽気分で温泉に入る猿の表情に癒されます。",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    tags: ["スノーモンキー", "野生サルの温泉", "世界的人気"],
    address: "長野県下高井郡山ノ内町平穏6845"
  },
  {
    id: "zenkoji_temple",
    name: "信州 善光寺",
    pref: "長野県",
    category: "history",
    lat: 36.6614,
    lng: 138.1878,
    description: "「一生に一度は参れ善光寺」と謳われる名刹。本堂地下の暗闇を歩き鍵に触れる「お戒壇巡り」が有名です。門前町のおやきや七味唐辛子の食べ歩きも魅力。",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    tags: ["一生に一度", "お戒壇巡り", "門前町食べ歩き"],
    address: "長野県長野市大字長野元善町491-1"
  },
  {
    id: "senjojiki_curl",
    name: "中央アルプス 千畳敷カール",
    pref: "長野県",
    category: "nature",
    lat: 35.7801,
    lng: 137.8130,
    description: "駒ヶ岳ロープウェイで一気に標高2,612mへ。氷河期に削られたお椀状の巨大な谷には、夏は一面の高山植物、秋は黄金色の紅葉が広がる別世界の天空庭園です。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["中央アルプス", "標高2612m", "高山植物の楽園"],
    address: "長野県駒ヶ根市赤穂"
  },
  {
    id: "obuse_chestnut",
    name: "小布施・北斎と栗のまちなみ",
    pref: "長野県",
    category: "history",
    lat: 36.6953,
    lng: 138.3149,
    description: "浮世絵師・葛飾北斎が晩年を過ごした「歴史とアート」の美しい小都市。名物の栗鹿ノ子やモンブランを堪能しながら、和モダンでお洒落なオープンガーデンを散策できます。",
    image: "https://images.unsplash.com/photo-1490806869338-f2478b1a5b33?auto=format&fit=crop&w=600&q=80",
    tags: ["葛飾北斎", "栗スイーツ", "美しい路地裏"],
    address: "長野県上高井郡小布施町大字小布施"
  },
  {
    id: "hakuba_happo",
    name: "白馬八方尾根・八方池",
    pref: "長野県",
    category: "nature",
    lat: 36.7027,
    lng: 137.8055,
    description: "白馬の三山を鏡のように映し出す神秘の水たまり「八方池」。山岳リゾートのゴンドラとリフトを乗り継ぎ、素晴らしい白馬連峰のパノラマ稜線ウォーキングを楽しめます。",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    tags: ["白馬の鏡鏡水面", "山岳トレッキング", "オリンピック聖地"],
    address: "長野県北安曇郡白馬村大字北城"
  },
  {
    id: "nozawa_onsen",
    name: "野沢温泉・大湯と麻釜",
    pref: "長野県",
    category: "onsen",
    lat: 36.9248,
    lng: 138.4485,
    description: "自噴する源泉が豊富なスノー＆温泉リゾート。村人たちが山菜などを茹でる天然の台所「麻釜（おがま）」や、湯仲間によって美しく維持された13の外湯の熱湯を体験できます。",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    tags: ["熱い源泉", "外湯の共同温泉", "野沢菜名産"],
    address: "長野県下高井郡野沢温泉村大字豊郷"
  },
  {
    id: "tsumagojuku",
    name: "木曽路・妻籠宿",
    pref: "長野県",
    category: "history",
    lat: 35.5768,
    lng: 137.5960,
    description: "「売らない・貸さない・壊さない」の憲章のもと、日本で最初に古い町並みの保存に取り組んだ美しい宿場町。静寂に包まれた格子戸の家々が木曽の深い山々に調和しています。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["保存運動発祥", "木曽の自然", "古民家茶屋"],
    address: "長野県木曽郡南木曽町吾妻2159-2"
  },
  {
    id: "karuizawa_shiraito",
    name: "軽井沢・白糸の滝",
    pref: "長野県",
    category: "nature",
    lat: 36.3985,
    lng: 138.5901,
    description: "湾曲した岩壁から、地下水が白い絹糸のように幾重にも流れ落ちる涼しげな滝。川からではなく岩の間から湧き出ているため非常に澄んでおり、夏は素晴らしい納涼スポットです。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    tags: ["湧水の白糸", "避暑地の涼風", "マイナスイオン空間"],
    address: "長野県北佐久郡軽井沢町長倉"
  },
  {
    id: "takato_sakura",
    name: "高遠城址公園",
    pref: "長野県",
    category: "nature",
    lat: 35.8309,
    lng: 138.0640,
    description: "「天下第一の桜」と称される、日本屈指の桜の名所。この地特有のやや小ぶりでピンクが濃い「タカトオコヒガンザクラ」約1500本が一面に咲き乱れる春は息をのむ美しさです。",
    image: "https://images.unsplash.com/photo-1522263002290-412a652d7df9?auto=format&fit=crop&w=600&q=80",
    tags: ["天下第一の桜", "ピンクの雲海", "日本の城址"],
    address: "長野県伊那市高遠町東高遠"
  },
  {
    id: "kamikochi_taisho",
    name: "乗鞍エコーライン・畳平",
    pref: "長野県",
    category: "nature",
    lat: 36.1245,
    lng: 137.5520,
    description: "一般車の走れる日本最高所の道路（標高2,702mの畳平）。乗鞍岳の山頂まですぐにアクセスでき、夏には残雪と高山植物、美しいライチョウとの遭遇チャンスが広がっています。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["標高2700m", "日本最高所シャトルバス", "夏のライチョウ"],
    address: "長野県松本市安曇乗鞍"
  },
  {
    id: "anma_onsen",
    name: "昼神温泉郷",
    pref: "長野県",
    category: "onsen",
    lat: 35.4410,
    lng: 137.7212,
    description: "南信州最大の温泉郷。とろっとした「美肌の湯」と呼ばれる日本屈指の強アルカリ性温泉が湧き、春には約10,000本の美しい「はなもも」が赤白ピンクに咲き乱れます。",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    tags: ["とろとろ美肌の湯", "花桃の里", "朝市散策"],
    address: "長野県下伊那郡阿智村智里"
  },
  {
    id: "shiojiri_grape",
    name: "塩尻・桔梗ヶ原ワイナリーロード",
    pref: "長野県",
    category: "resort",
    lat: 36.1158,
    lng: 137.9352,
    description: "日本を代表するメルロー種のブドウとワインの産地。塩尻駅から車ですぐのエリアに老舗ワイナリーが何軒も点在し、のどかなブドウ畑を眺めながら信州の食とワインに触れられます。",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    tags: ["桔梗ヶ原ワイン", "ブドウ畑散策", "地元特産"],
    address: "長野県塩尻市宗賀桔梗ヶ原"
  },
  {
    id: "goka_pond",
    name: "八ヶ岳・御射鹿池",
    pref: "長野県",
    category: "nature",
    lat: 36.0354,
    lng: 138.3302,
    description: "日本画の巨匠・東山魁夷の代表作『緑響く』のモデルとなったため池。周囲のカラマツ林が澄んだ静寂の水面に完全に上下反転してシンメトリーに映り込む姿は非常に神秘的です。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["絵画のモデル池", "シンメトリー水鏡", "八ヶ岳自然"],
    address: "長野県茅野市豊平奥蓼科"
  },
  {
    id: "chihiro_art",
    name: "安曇野ちひろ美術館",
    pref: "長野県",
    category: "resort",
    lat: 36.3812,
    lng: 137.8485,
    description: "いわさきちひろと世界の絵本画家の作品を収蔵する美術館。安曇野の美しく広大な田園風景に溶け込む素朴な木造建築で、周囲の芝生公園でのんびりドライブの休憩を楽しめます。",
    image: "https://images.unsplash.com/photo-1490806869338-f2478b1a5b33?auto=format&fit=crop&w=600&q=80",
    tags: ["安曇野の自然", "絵本美術館", "和みのウッドデッキ"],
    address: "長野県北安曇郡松川村西原3358-24"
  },
  {
    id: "kamikochi_shirakaba",
    name: "白樺湖リゾート・女神湖",
    pref: "長野県",
    category: "resort",
    lat: 36.1082,
    lng: 138.2325,
    description: "白樺の木々に囲まれた標高1,400mの美しい高山湖リゾート。アミューズメント施設やカヌー、足漕ぎボートが楽しめ、特に秋には白樺と湖がコントラストを描く優美な避暑地です。",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    tags: ["高原リゾート", "白樺林の湖", "家族で遊べる"],
    address: "長野県茅野市北山白樺湖"
  },
  {
    id: "karuizawa_outlet",
    name: "軽井沢・プリンスショッピングプラザ",
    pref: "長野県",
    category: "resort",
    lat: 36.3421,
    lng: 138.6368,
    description: "軽井沢駅南口の目の前に広がる、日本最大級のリゾート型アウトレット。広大で美しい芝生エリアを囲むようにお洒落な店舗が建ち並び、ドライブ終わりの買い物に最適です。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["日本最大級アウトレット", "駅前巨大リゾート", "高原ショッピング"],
    address: "長野県北佐久郡軽井沢町軽井沢"
  },
  {
    id: "suwakomatsuri",
    name: "諏訪大社 上社本宮",
    pref: "長野県",
    category: "history",
    lat: 36.0028,
    lng: 138.1215,
    description: "全国1万有余ある諏訪神社の総本社。山中の大木を切り出して境内の四隅に建てる「御柱（おんばしら）祭」が有名。千古の杉の巨木に囲まれた社殿は圧倒的な歴史の風格です。",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    tags: ["日本最古の神社の一つ", "御柱の聖地", "武田信玄祈願"],
    address: "長野県諏訪市中洲宮山1"
  },

  // ==========================================
  // 2. 隣接県【手厚い】(山梨・群馬・新潟・岐阜・静岡・愛知・北陸: 約40件)
  // ==========================================
  // --- 山梨県 ---
  {
    id: "hotta_onsen",
    name: "ほったらかし温泉",
    pref: "山梨県",
    category: "onsen",
    lat: 35.6865,
    lng: 138.6235,
    description: "標高約700mの山頂に作られた、日本一絶景と名高い露天風呂。眼下に広がる甲府盆地と正面の富士山のパノラマは、早朝の日の出や夜景が完璧な美しさです。名物「温玉あげ」が絶品。",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    tags: ["甲府盆地夜景", "富士山露天風呂", "名物温泉たまごあげ"],
    address: "山梨県山梨市矢坪1669-18"
  },
  {
    id: "kiyosato_plateau",
    name: "清里高原・清泉寮と八ヶ岳",
    pref: "山梨県",
    category: "resort",
    lat: 35.9230,
    lng: 138.4352,
    description: "八ヶ岳の南麓に広がるのどかでロマンチックな高原。清泉寮の濃厚で冷たい「ソフトクリーム」を食べながら、放牧された牛や遮るもののない大パノラマの絶景を楽しめます。",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    tags: ["八ヶ岳の牧場", "濃厚ソフトクリーム", "レトロ高原リゾート"],
    address: "山梨県北杜市高根町清里3545"
  },
  {
    id: "shosenkyo",
    name: "甲府 御岳昇仙峡",
    pref: "山梨県",
    category: "nature",
    lat: 35.7483,
    lng: 138.5670,
    description: "「日本一の渓谷美」と称される景勝地。長い年月をかけて水に削られた巨大な花崗岩の奇岩群や、荒川の激流が流れ落ちる仙娥滝など、特に秋の紅葉期は息をのむ美しさです。",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
    tags: ["日本一の渓谷美", "水晶の名産地", "仙娥滝の絶景"],
    address: "山梨県甲府市高成町"
  },
  {
    id: "fuji_five_lakes_shiojiri",
    name: "富士五湖・河口湖大石公園",
    pref: "山梨県",
    category: "nature",
    lat: 35.5229,
    lng: 138.7490,
    description: "河口湖の北岸に位置し、遮るもののない雄大な富士山と、季節ごとに咲き誇るラベンダーやコキアの花々が一枚の絵画のように共演する王道の大人気ビューポイントです。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["湖畔富士山", "ラベンダー畑", "ベスト記念撮影"],
    address: "山梨県南都留郡富士河口湖町大石2585"
  },
  // --- 群馬県 ---
  {
    id: "kusatsu_onsen",
    name: "草津温泉・湯畑",
    pref: "群馬県",
    category: "onsen",
    lat: 36.6225,
    lng: 138.5960,
    description: "日本を代表する名湯。温泉街の中心にあり、毎分約4,000リットルのエメラルドグリーンの熱湯が湯煙をあげて湧き出る「湯畑」は圧巻。夜には幻想的にライトアップされます。",
    image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
    tags: ["日本一の自然湧出量", "温泉湯けむり", "湯もみショー"],
    address: "群馬県吾妻郡草津町草津"
  },
  {
    id: "ikaho_onsen",
    name: "伊香保温泉・365段の石段街",
    pref: "群馬県",
    category: "history",
    lat: 36.4982,
    lng: 138.9212,
    description: "万葉集にも詠まれた歴史ある温泉地。365段ある石段の両脇にはレトロなお土産屋や遊技場が建ち並び、射的を楽しんだり名物の茶色い「温泉饅頭」の元祖を味わうレトロ旅ができます。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["温泉街365段石段", "射的レトロ遊興", "温泉饅頭発祥地"],
    address: "群馬県渋川市伊香保町伊香保"
  },
  {
    id: "harunasan",
    name: "榛名山・榛名湖のメロディライン",
    pref: "群馬県",
    category: "nature",
    lat: 36.4710,
    lng: 138.8785,
    description: "映画やアニメ（イニシャルD）の聖地として有名なワインディングロード。車で特定の速度で走ると道路から音楽（静かな湖畔）が聞こえるメロディラインや、富士山のような榛名富士が見どころ。",
    image: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80",
    tags: ["イニD走り屋聖地", "榛名富士とカルデラ湖", "音の鳴る道路"],
    address: "群馬県高崎市榛名湖町"
  },
  // --- 新潟県 ---
  {
    id: "kiyotsukyo",
    name: "日本三大渓谷・清津峡渓谷トンネル",
    pref: "新潟県",
    category: "nature",
    lat: 36.9248,
    lng: 138.7490,
    description: "ダイナミックな柱状節理の絶壁が作り出す深いV字渓谷。トンネルの終点にある「水鏡のインスタレーション」は、水に反射した渓谷と人が一体となる幻想的なアート写真が撮れると話題です。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    tags: ["日本三大渓谷", "SNS超人気水鏡", "アートトンネル"],
    address: "新潟県十日町市小出癸2126"
  },
  {
    id: "myokoplato",
    name: "妙高高原・いもり池と妙高山",
    pref: "新潟県",
    category: "nature",
    lat: 36.8770,
    lng: 138.1691,
    description: "「越後富士」と呼ばれる妙高山を美しく映す静かな池。約10万株のミズバショウが咲く春から、黄金色の秋の紅葉まで、周囲の整備された遊歩道で素晴らしい森林セラピーを体験できます。",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    tags: ["越後富士パノラマ", "ミズバショウ群生", "湿原遊歩道"],
    address: "新潟県妙高市大字関川2248-4"
  },
  {
    id: "yahiko_shrine",
    name: "越後一宮 弥彦神社",
    pref: "新潟県",
    category: "history",
    lat: 37.7027,
    lng: 138.8055,
    description: "万葉集にも歌われる新潟屈指のパワースポット。彌彦山を御神体とし、樹齢数百年の老杉の社叢が神秘的です。彌彦山スカイラインは日本海と広大な越後平野を見渡せる素晴らしいワインディングロード。",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    tags: ["越後一宮", "日本海絶景スカイライン", "老杉の神域"],
    address: "新潟県西蒲原郡弥彦村弥彦2887-2"
  },
  // --- 岐阜県 ---
  {
    id: "hida_takayama",
    name: "飛騨高山・古い町並み",
    pref: "岐阜県",
    category: "history",
    lat: 36.1408,
    lng: 137.2585,
    description: "「飛騨の小京都」と呼ばれる美しい木造の伝統建築群。軒下を用水がさらさらと流れ、地酒の試飲ができる老舗酒蔵や、とろける甘さの「飛騨牛にぎり」の食べ歩きはドライブのご馳走です。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["飛騨の小京都", "飛騨牛食べ歩き", "老舗の酒蔵試飲"],
    address: "岐阜県高山市上三之町"
  },
  {
    id: "shinhotaka",
    name: "新穂高ロープウェイ・2階建てゴンドラ",
    pref: "岐阜県",
    category: "resort",
    lat: 36.2730,
    lng: 137.5670,
    description: "日本唯一の「2階建てゴンドラ」で、標高2,156mの山頂駅へ。北アルプスの槍ヶ岳や西穂高岳のゴツゴツとした険しい山肌を目の前に仰ぐ360度パノラマの絶壁展望台は圧倒的なスケール感です。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["2階建てゴンドラ", "槍ヶ岳展望台", "北アルプス大迫力"],
    address: "岐阜県高山市奥飛騨温泉郷新穂高"
  },
  {
    id: "gero_onsen",
    name: "下呂温泉・日本三名泉",
    pref: "岐阜県",
    category: "onsen",
    lat: 35.8080,
    lng: 137.2435,
    description: "室町時代の僧・万里集九や林羅山によって「日本三名泉」に数えられた名湯。ツルツルと滑らかな温泉水は石鹸のような美肌効果があるとされ、飛騨川のせせらぎを聞きながら無料の足湯や日帰り湯をめぐれます。",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
    tags: ["日本三名泉", "肌つるつる美肌泉", "飛騨川の温泉街"],
    address: "岐阜県下呂市湯之島"
  },
  {
    id: "enagyo",
    name: "恵那峡・遊覧船",
    pref: "岐阜県",
    category: "nature",
    lat: 35.4795,
    lng: 137.4025,
    description: "木曽川をダムでせき止めて作られた美しい巨大な人造湖。湖の両岸には「軍艦岩」や「獅子岩」などの巨大な奇岩・怪石がそびえ立ち、高速の遊覧船で岩の間をすり抜ける大迫力ツアーが人気です。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    tags: ["人造湖の大奇岩", "恵那峡遊覧船", "ダム絶景"],
    address: "岐阜県恵那市大井町恵那峡"
  },
  {
    id: "gujo_hachiman",
    name: "郡上八幡・名水の水のまち",
    pref: "岐阜県",
    category: "history",
    lat: 35.7505,
    lng: 136.9560,
    description: "城下町中に清らかな水路が張り巡らされた「名水のまち」。日本初の環境省認定名水百選「宗祇水（そうぎすい）」や、夏の長い「郡上おどり」が有名。古い民家と川のせせらぎが極上の癒やし空間です。",
    image: "https://images.unsplash.com/photo-1490806869338-f2478b1a5b33?auto=format&fit=crop&w=600&q=80",
    tags: ["名水湧き出る町", "宗祇水の源流", "夏の郡上おどり"],
    address: "岐阜県郡上市八幡町殿町"
  },
  // --- 静岡県 ---
  {
    id: "fuji_fifth",
    name: "富士山スカイライン・富士宮口五合目",
    pref: "静岡県",
    category: "nature",
    lat: 35.3368,
    lng: 138.7302,
    description: "マイカーで登れる富士山の標高最高地点（2,400m）。眼下に雲が広がる「雲海」を見下ろす大パノラマや、険しくダイナミックな宝永火口のハイキングを満喫できます。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["標高2400m富士山", "駿河湾見下ろす雲海", "宝永火口ウォーク"],
    address: "静岡県富士宮市粟倉"
  },
  {
    id: "miho_matsubara",
    name: "世界遺産 三保の松原",
    pref: "静岡県",
    category: "nature",
    lat: 34.9982,
    lng: 138.5245,
    description: "駿河湾に突き出た半島に約3万本のクロマツが広がる景勝地。青い海、黒い松林、そして雪をかぶった真っ白な富士山が完璧なトリコロールを描く、歌川広重の浮世絵そのままの絶景です。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["世界文化遺産", "羽衣伝説の松", "駿河湾の富士山"],
    address: "静岡県静岡市清水区三保"
  },
  {
    id: "nihondaira",
    name: "日本平夢テラス・駿河湾展望",
    pref: "静岡県",
    category: "resort",
    lat: 34.9721,
    lng: 138.4614,
    description: "駿河湾越しに富士山を一望する極上の展望テラス。隈研吾建築事務所設計の木造回廊は、木のぬくもりを感じながら清水港や伊豆半島、三保の松原の360度大絶景を空中散歩気分で歩けます。",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    tags: ["隈研吾設計ウッドテラス", "駿河湾パノラマ", "富士山空中散歩"],
    address: "静岡県静岡市清水区草薙1500-18"
  },
  {
    id: "hamanako",
    name: "浜名湖・弁天島鳥居",
    pref: "静岡県",
    category: "nature",
    lat: 34.6853,
    lng: 137.6030,
    description: "うなぎで名高い汽水湖。弁天島海浜公園の目の前にある浅瀬に建つ、真っ赤な巨大鳥居がシンボル。冬の夕暮れ時には、鳥居の真ん中に沈む美しい真っ赤な夕日を写真に収めることができます。",
    image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=600&q=80",
    tags: ["巨大赤い海中鳥居", "うなぎ・餃子グルメ", "鳥居に沈む夕日"],
    address: "静岡県浜松市中央区舞阪町弁天島"
  },
  // --- 愛知県 ---
  {
    id: "korankei",
    name: "豊田・香嵐渓",
    pref: "愛知県",
    category: "nature",
    lat: 35.1328,
    lng: 137.3182,
    description: "東海地方でナンバーワンを誇る紅葉の聖地。約4,000本のモミジが巴川の清流に張り出し、朱塗りの「待月橋」と真っ赤な山が鏡のように共演する秋の夜間ライトアップは幻想的な極楽です。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    tags: ["東海屈指の紅葉", "巴川の朱塗り橋", "秋の紅葉ライトアップ"],
    address: "愛知県豊田市足助町飯盛"
  },
  {
    id: "inuyama_castle",
    name: "国宝 犬山城・木曽川城下町",
    pref: "愛知県",
    category: "history",
    lat: 35.3883,
    lng: 136.9390,
    description: "天文6年（1537年）に建てられた、日本最古の木造天守を持つ国宝城。木曽川沿いの断崖に建ち、天守からの眺望は爽快。門前の情緒ある城下町で恋小町だんごの食べ歩きも大人気。",
    image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=600&q=80",
    tags: ["現存最古の木造天守", "木曽川の絶壁城", "お洒落な城下町グルメ"],
    address: "愛知県犬山市犬山北古券65-2"
  },
  {
    id: "chita_hazu",
    name: "知多半島・羽豆岬と海鮮ドライブ",
    pref: "愛知県",
    category: "resort",
    lat: 34.6980,
    lng: 136.9740,
    description: "知多半島の最南端に位置する、アイドルグループ（SKE48）の歌のタイトルにもなった岬。ウバメガシのトンネル遊歩道を抜けると、三河湾と伊勢湾を一望でき、周辺での大アサリやタコ海鮮も絶品です。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["知多半島最南端", "ウバメガシの緑トンネル", "地タコ・大あさり貝"],
    address: "愛知県知多郡南知多町大字師崎"
  },
  // --- 北陸三県（石川・富山・福井） ---
  {
    id: "kenrokuen",
    name: "金沢 兼六園・日本の名園",
    pref: "石川県",
    category: "history",
    lat: 36.5621,
    lng: 136.6628,
    description: "国の特別名勝であり、水戸の偕楽園、岡山の後楽園と並ぶ日本三名園の一つ。ことじ灯籠や、冬に雪の重みから老松を守るための芸術的な「雪吊り」の景観は日本美の極みです。",
    image: "https://images.unsplash.com/photo-1490806869338-f2478b1a5b33?auto=format&fit=crop&w=600&q=80",
    tags: ["日本三名園", "冬の雪吊り芸術", "金沢城公園隣接"],
    address: "石川県金沢市兼六町1"
  },
  {
    id: "amaharashi",
    name: "富山 雨晴海岸・立山連峰遠望",
    pref: "富山県",
    category: "nature",
    lat: 36.8040,
    lng: 137.0392,
    description: "世界でも極めて珍しい「海越しに3,000m級の立山連峰」を仰ぎ見る奇跡の海岸。青い富山湾に浮かぶ義経岩（女岩）と、背後の白いアルプスのコントラストは神々しい極限美です。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["海越しの3000mアルプス", "日本の渚百選", "義経の雨宿り岩"],
    address: "富山県高岡市太田雨晴"
  },
  {
    id: "kurobe_canyon",
    name: "黒部峡谷鉄道・トロッコ列車",
    pref: "富山県",
    category: "resort",
    lat: 36.7801,
    lng: 137.5680,
    description: "深く険しい黒部峡谷を走るオレンジ色の爽快なトロッコ列車。窓のないオープンな車両で風を浴びながら、「新山彦橋」や「後曳橋」などのハラハラする高所鉄橋とV字渓谷を冒険できます。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    tags: ["日本一深いV字谷", "トロッコ冒険列車", "秘境露天温泉"],
    address: "富山県黒部市黒部峡谷口11"
  },
  {
    id: "tojinbo",
    name: "福井 東尋坊・断崖絶壁奇岩",
    pref: "福井県",
    category: "nature",
    lat: 36.2372,
    lng: 136.1245,
    description: "世界に3箇所しかないとされる極めて貴重な「輝石安山岩の柱状節理」の巨大な岸壁。日本海の荒波が砕け散る高さ約20mの断崖絶壁のすぐ縁まで歩くことができ、スリル満点です。",
    image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=600&q=80",
    tags: ["世界的三大柱状節理", "スリル限界の岸壁", "日本海の海の幸"],
    address: "福井県坂井市三国町東尋坊"
  },
  {
    id: "mikatagoko",
    name: "三方五湖・レインボーライン山頂公園",
    pref: "福井県",
    category: "nature",
    lat: 35.5901,
    lng: 135.8820,
    description: "水質や水深が異なるため、それぞれ神秘的な「青のグラデーション」を見せる5つの美しい湖。レインボーライン山頂のテラスから全景を仰ぐことができ、テラスの天空足湯も極上空間です。",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
    tags: ["五色の湖グラデーション", "天空の足湯テラス", "絶景有料道路"],
    address: "福井県三方上中郡若狭町気山"
  },

  // ==========================================
  // 3. 関東・関西 【中程度】(新規追加：約20件)
  // ==========================================
  // --- 関東エリア ---
  {
    id: "kegon_falls",
    name: "日光 華厳の滝・中禅寺湖畔",
    pref: "栃木県",
    category: "nature",
    lat: 36.7380,
    lng: 139.5020,
    description: "日本三名瀑の一つ。中禅寺湖の膨大な水が一気に高さ97mの岩壁から流れ落ちる様は豪快。観爆エレベーターで滝壺のすぐそばまで降りると、爆音と水しぶきを肌で感じられます。",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    tags: ["日本三名瀑", "中禅寺湖の放水", "滝壺エレベーター大迫力"],
    address: "栃木県日光市中宮祠"
  },
  {
    id: "hitachi_seaside",
    name: "国営ひたち海浜公園・ネモフィラの丘",
    pref: "茨城県",
    category: "nature",
    lat: 36.4060,
    lng: 140.6030,
    description: "春には「みはらしの丘」一面が約530万株の淡い青色ネモフィラで埋め尽くされ、青空とネモフィラ、太平洋の海が完全に同化して世界が青一色になる奇跡の絶景が広がります。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["一面ネモフィラブルー", "秋のコキア真っ赤", "潮風プレジャーリゾート"],
    address: "茨城県ひたちなか市大字馬渡字大沼605-4"
  },
  {
    id: "nagatoro",
    name: "秩父長瀞・岩畳ライン下り",
    pref: "埼玉県",
    category: "nature",
    lat: 36.0965,
    lng: 139.1158,
    description: "国の名勝に指定された巨大な「岩畳」の景勝地。荒川沿いに広がる畳のような結晶片岩を眺めながら、船頭が竿一本で巧みに操るスリリングな川下り木造船を体験できます。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    tags: ["国の特別天然記念物", "荒川の木船川下り", "阿左美冷蔵天然氷"],
    address: "埼玉県秩平郡長瀞町長瀞"
  },
  {
    id: "kamakura_sea",
    name: "鎌倉江の島・湘南海岸ドライブ",
    pref: "神奈川県",
    category: "resort",
    lat: 35.3012,
    lng: 139.4812,
    description: "国道134号線の湘南シーサイドコース。左手に富士山と江の島のパノラマ海景、右手に江ノ電のレトロな車体を眺めながら走り、江の島島内の神社や名物のしらす丼を味わえます。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["湘南134号ビーチロード", "江の島海中大橋", "元祖生しらす丼"],
    address: "神奈川県藤沢市江の島"
  },
  {
    id: "okutama_lake",
    name: "奥多摩湖・ドラム缶橋",
    pref: "東京都",
    category: "nature",
    lat: 35.7905,
    lng: 139.0201,
    description: "東京とは思えないほど豊かな山々と水に囲まれた巨大なダム湖。水面に浮かぶぷかぷかとした「ドラム缶橋（浮橋）」は、歩くたびにふわふわと揺れてスリル満点の湖面歩行を楽しめます。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    tags: ["東京の奥座敷オアシス", "水面に浮かぶ浮橋", "大麦代駐車場ドライブ休憩"],
    address: "東京都西多摩郡奥多摩町原"
  },
  {
    id: "yorokeiko",
    name: "千葉 養老渓谷・粟又の滝",
    pref: "千葉県",
    category: "nature",
    lat: 35.2583,
    lng: 140.1691,
    description: "房総半島の奥地にある美しい秘境渓谷。なだらかな岩盤を絹のように静かに滑り落ちる全長100mの「粟又の滝」があり、整備された渓谷遊歩道で最高の森林涼風浴ができます。",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
    tags: ["なだらかなスロープ滝", "房総半島の秘境秋紅葉", "マイナスイオン川歩き"],
    address: "千葉県夷隅郡大多喜町粟又"
  },
  // --- 関西エリア ---
  {
    id: "metasequoia",
    name: "滋賀 琵琶湖・マキノ高原メタセコイア並木",
    pref: "滋賀県",
    category: "nature",
    lat: 35.4795,
    lng: 136.0205,
    description: "マキノ高原へ向かって真っ直ぐ伸びる、全長約2.4kmにわたるシンメトリーな一本道。道路の両脇に植えられた約500本の巨大なメタセコイアが、夏はまぶしい緑、秋は美しい赤褐色に染まります。",
    image: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80",
    tags: ["約2.4kmの対称並木道", "新緑・紅葉の絶景トンネル", "琵琶湖北岸ツーリング"],
    address: "滋賀県高島市マキノ町蛭口"
  },
  {
    id: "hieizan_drive",
    name: "比叡山ドライブウェイ・琵琶湖展望台",
    pref: "滋賀県/京都府",
    category: "resort",
    lat: 35.0614,
    lng: 135.8302,
    description: "古刹・延暦寺のある比叡山を駆け上がる有料の極上ドライブコース。途中の夢見が丘展望台から、巨大な琵琶湖の全景や大津の市街地を一望でき、夜景も素晴らしい美しさです。",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    tags: ["世界遺産・延暦寺参道", "琵琶湖を一望する天空ロード", "夢見が丘の絶景夜景"],
    address: "滋賀県大津市山上町"
  },
  {
    id: "arashiyama_bamboo",
    name: "京都 嵐山・竹林の小径",
    pref: "京都府",
    category: "history",
    lat: 35.0158,
    lng: 135.6702,
    description: "渡月橋から少し歩いた先に広がる、天を覆い尽くすほどの見事な竹林。笹の葉が風にさらさらと擦れ合う静かな音と、竹の隙間から降り注ぐ柔らかい木漏れ日が京都の風情の極みです。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["渡月橋から竹林", "さらさら風の音響", "日本の歴史的庭園"],
    address: "京都府京都市右京区嵯峨小倉山田淵山町"
  },
  {
    id: "himeji_castle",
    name: "世界遺産 国宝 姫路城",
    pref: "兵庫県",
    category: "history",
    lat: 34.8394,
    lng: 134.6939,
    description: "白鷺が羽を広げたような優美な姿から「白鷺城（しらさぎじょう）」と呼ばれる日本初の世界文化遺産。真っ白な漆喰で塗られた城壁と、幾重にも重なる巨大な天守閣は木造建築の最高峰です。",
    image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=600&q=80",
    tags: ["日本初の世界遺産", "白漆喰の白鷺天守", "千姫の化粧櫓"],
    address: "兵庫県姫路市本町68"
  },
  {
    id: "nachi_falls",
    name: "熊野三山・那智の大滝と青岸渡寺",
    pref: "和歌山県",
    category: "history",
    lat: 33.6708,
    lng: 135.8905,
    description: "落差133m、一段の滝としては日本一の高さを誇る神秘的な滝。世界遺産である青岸渡寺の美しい「朱色の三重塔」の背後から豪快に流れ落ちる滝の姿は、神仏習合の美しい絵画です。",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    tags: ["落差日本一の一段滝", "三重塔と滝の奇跡コラボ", "世界遺産・熊野古道"],
    address: "和歌山県東牟婁郡那智勝浦町那智山"
  },

  // ==========================================
  // 4. 遠方【少なめ】(東北・中四国・九州・北海道: 約10件)
  // ==========================================
  {
    id: "ouchi_juku",
    name: "福島 会津・大内宿",
    pref: "福島県",
    category: "history",
    lat: 37.3339,
    lng: 139.8614,
    description: "江戸時代の面影を残す、萱葺き（かやぶき）屋根の宿場町。名物の冷たい「ねぎそば」は、箸の代わりに一本の長ネギをまるごと使ってそばをすくい、ねぎを薬味としてかじりながら味わいます。",
    image: "https://images.unsplash.com/photo-1490806869338-f2478b1a5b33?auto=format&fit=crop&w=600&q=80",
    tags: ["萱葺き古民家並木", "ネギ一本丸ごとそば", "会津ドライブめぐり"],
    address: "福島県南会津郡下郷町大字大内"
  },
  {
    id: "tottori_dunes_boon",
    name: "鳥取砂丘・日本海パノラマ",
    pref: "鳥取県",
    category: "nature",
    lat: 35.5410,
    lng: 134.2290,
    description: "日本海からの風が作り出す、美しい波のような「風紋」が広がる日本最大級の巨大砂丘。高低差約40mの「馬の背」の砂丘の頂きに登ると、広大な青い日本海の水平線が出迎えてくれます。",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    tags: ["風が描く風紋アート", "馬の背大砂丘", "日本海夕日絶景"],
    address: "鳥取県鳥取市福部町湯山"
  },
  {
    id: "shodoshima_olive",
    name: "瀬戸内 小豆島・オリーブ公園とエンジェルロード",
    pref: "香川県",
    category: "resort",
    lat: 34.4795,
    lng: 134.2721,
    description: "エーゲ海を想わせるギリシャ風車がランドマークの美しい島。1日2回、干潮時だけに海から浮かび上がる砂の道「エンジェルロード」があり、大切な人と手を繋いで渡ると願いが叶うと有名です。",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    tags: ["ギリシャ風車の丘", "潮が引くエンジェルロード", "瀬戸内オリーブの恵み"],
    address: "香川県小豆郡小豆島町西村甲1941-1"
  },
  {
    id: "dogo_onsen",
    name: "愛媛 松山・道後温泉本館",
    pref: "愛媛県",
    category: "onsen",
    lat: 33.8495,
    lng: 132.7865,
    description: "日本最古の3,000年の歴史を持つ名湯。国の重要文化財である木造3階建ての本館は、映画『千と千尋の神隠し』の湯屋のモデルの一つとされ、夜間は幻想的なガス灯の光に包まれます。",
    image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
    tags: ["3000年日本最古温泉", "千と千尋の木造湯屋", "夏目漱石・坊っちゃんの地"],
    address: "愛媛県松山市道後湯之町5-6"
  },
  {
    id: "aso_milky",
    name: "熊本 阿蘇ミルクロード・大観峰カルデラ",
    pref: "熊本県",
    category: "nature",
    lat: 32.9902,
    lng: 131.0768,
    description: "世界最大級のカルデラの外輪山を滑るように走る、日本一爽快と謳われる天空の草原道路。ミルクロードを抜けた先の大観峰から見下ろす阿蘇五岳は、お釈迦様が横たわっているかのような「涅槃像」に見えます。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["大外輪山カルデラ", "天空の草原ドライブウェイ", "あか牛グルメ"],
    address: "熊本県阿蘇市山田"
  },
  {
    id: "biei_hills",
    name: "北海道 美瑛・マイルドセブンの丘と四季彩の丘",
    pref: "北海道",
    category: "nature",
    lat: 43.5853,
    lng: 142.4245,
    description: "パッチワークのようななだらかな丘陵地帯。カラフルな花々が帯状にどこまでも続く「四季彩の丘」や、防風林が美しいラインを描く「マイルドセブンの丘」など、北海道らしい壮大な直線ドライブの楽園です。",
    image: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80",
    tags: ["美瑛パッチワーク丘陵", "虹色のお花畑四季彩", "極上の直線砂利道"],
    address: "北海道上川郡美瑛町新星第三"
  }
];

// ==========================================================================
// 主要都市の座標（出発地）
// ==========================================================================
export const startingPoints = [
  { id: "shiojiri", name: "長野県塩尻市（塩尻駅）", lat: 36.1145, lng: 137.9482, area: "chubu" },
  { id: "tokyo", name: "東京（日本橋）", lat: 35.681, lng: 139.767, area: "kanto" },
  { id: "yokohama", name: "横浜（みなとみらい）", lat: 35.457, lng: 139.632, area: "kanto" },
  { id: "nagoya", name: "名古屋（栄）", lat: 35.170, lng: 136.906, area: "chubu" },
  { id: "osaka", name: "大阪（梅田）", lat: 34.702, lng: 135.496, area: "kansai" },
  { id: "kyoto", name: "京都（烏丸）", lat: 35.011, lng: 135.768, area: "kansai" },
  { id: "hiroshima", name: "広島（紙屋町）", lat: 34.396, lng: 132.459, area: "chugoku" },
  { id: "fukuoka", name: "福岡（天神）", lat: 33.590, lng: 130.401, area: "kyushu" },
  { id: "sendai", name: "仙台（仙台駅）", lat: 38.260, lng: 140.882, area: "tohoku" },
  { id: "sapporo", name: "札幌（大通公園）", lat: 43.062, lng: 141.354, area: "hokkaido" }
];
