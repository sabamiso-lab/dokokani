// 全国の主要ドライブスポットデータベース
export const driveSpots = [
  // --- 関東・中部周辺 ---
  {
    id: "hakone",
    name: "箱根温泉・大涌谷",
    pref: "神奈川県",
    category: "onsen",
    lat: 35.244,
    lng: 139.020,
    description: "富士山を望む絶景と豊かな温泉、アートを楽しめる王道ドライブエリア。名物の「黒たまご」は必食！",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    tags: ["温泉", "絶景", "グルメ"],
    address: "神奈川県足柄下郡箱根町"
  },
  {
    id: "nikko",
    name: "日光東照宮・中禅寺湖",
    pref: "栃木県",
    category: "history",
    lat: 36.740,
    lng: 139.500,
    description: "いろは坂の絶景ワインディングロードを走り、世界遺産の東照宮と神秘的な中禅寺湖を巡る歴史ドライブ。",
    image: "https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&w=600&q=80",
    tags: ["歴史", "絶景", "パワースポット"],
    address: "栃木県日光市山内"
  },
  {
    id: "fuji_five_lakes",
    name: "富士五湖（河口湖・山中湖）",
    pref: "山梨県",
    category: "nature",
    lat: 35.517,
    lng: 138.752,
    description: "雄大な富士山を間近に仰ぎながら、湖畔をのんびり走る爽快ロード。ほうとうなど名物グルメも満載。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["絶景", "湖畔", "ご当地グルメ"],
    address: "山梨県南都留郡富士河口湖町"
  },
  {
    id: "karuizawa",
    name: "軽井沢高原",
    pref: "長野県",
    category: "resort",
    lat: 36.348,
    lng: 138.635,
    description: "おしゃれな洋館やカフェが点在する避暑地。白糸の滝やハルニレテラスなど、緑豊かな癒やしのドライブスポット。",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    tags: ["リゾート", "自然", "ショッピング"],
    address: "長野県北佐久郡軽井沢町"
  },
  {
    id: "izu_peninsula",
    name: "伊豆半島・城ヶ崎海岸",
    pref: "静岡県",
    category: "nature",
    lat: 34.891,
    lng: 139.124,
    description: "絶壁に砕け散る波がスリリングな吊り橋と、伊豆スカイラインからの大パノラマ。海の幸を堪能するドライブ。",
    image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=600&q=80",
    tags: ["絶景", "海沿い", "海鮮"],
    address: "静岡県伊東市富戸"
  },
  {
    id: "shirakawago",
    name: "白川郷 合掌造り集落",
    pref: "岐阜県",
    category: "history",
    lat: 36.256,
    lng: 136.906,
    description: "日本の原風景が今なお残る世界遺産の村。伝統的な合掌造りの民家と美しい山々に囲まれた、タイムスリップ空間。",
    image: "https://images.unsplash.com/photo-1490806869338-f2478b1a5b33?auto=format&fit=crop&w=600&q=80",
    tags: ["世界遺産", "歴史", "田舎風景"],
    address: "岐阜県大野郡白川村"
  },
  {
    id: "kamikochi",
    name: "上高地・乗鞍高原",
    pref: "長野県",
    category: "nature",
    lat: 36.237,
    lng: 137.640,
    description: "日本屈指の山岳リゾート。大正池に映る穂高連峰や爽やかな梓川沿いの散策など、最高峰のマイナスイオンを浴びる旅。",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80",
    tags: ["登山・トレッキング", "絶景", "避暑地"],
    address: "長野県松本市安曇上高地"
  },
  {
    id: "chirihama",
    name: "千里浜なぎさドライブウェイ",
    pref: "石川県",
    category: "nature",
    lat: 36.822,
    lng: 136.750,
    description: "日本で唯一、普通の車で波打ち際を走ることができる全長約8kmの砂浜道路。沈む夕日を眺めながら走る爽快感は格別！",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["砂浜ロード", "日本唯一", "絶景夕日"],
    address: "石川県羽咋市千里浜町"
  },

  // --- 関西・中国・四国周辺 ---
  {
    id: "amanohashidate",
    name: "天橋立",
    pref: "京都府",
    category: "nature",
    lat: 35.569,
    lng: 135.191,
    description: "日本三景の一つ、砂州に約8000本もの松林が続く神秘的な絶景。股のぞきから見る景色はまるで天に架かる橋のよう。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["日本三景", "松林", "展望台"],
    address: "京都府宮津市文珠"
  },
  {
    id: "awaji_island",
    name: "淡路島（明石海峡大橋・あわじ花さじき）",
    pref: "兵庫県",
    category: "resort",
    lat: 34.428,
    lng: 134.821,
    description: "明石海峡大橋を渡ってすぐ。広大な玉ねぎ畑やオーシャンビューのカフェ、季節の花々が咲き誇る丘を巡るリゾートドライブ。",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
    tags: ["島ドライブ", "花畑", "玉ねぎグルメ"],
    address: "兵庫県淡路市楠本"
  },
  {
    id: "shirahama",
    name: "南紀白浜・千畳敷",
    pref: "和歌山県",
    category: "onsen",
    lat: 33.682,
    lng: 135.343,
    description: "真っ白な砂浜とエメラルドグリーンの海、畳を敷き詰めたような大岩盤。名湯・白浜温泉ととれたて海鮮を楽しめる南国気分スポット。",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80",
    tags: ["温泉", "白砂ビーチ", "奇岩"],
    address: "和歌山県西牟婁郡白浜町"
  },
  {
    id: "koyasan",
    name: "高野山 金剛峯寺",
    pref: "和歌山県",
    category: "history",
    lat: 34.214,
    lng: 135.597,
    description: "標高約800mの山上盆地に広がる天空の仏教都市。杉木立に囲まれた奥之院の厳かな空気と、精進料理に触れる聖地ドライブ。",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    tags: ["聖地", "歴史", "精進料理"],
    address: "和歌山県伊都郡高野町高野山"
  },
  {
    id: "tottori_dunes",
    name: "鳥取砂丘",
    pref: "鳥取県",
    category: "nature",
    lat: 35.541,
    lng: 134.229,
    description: "日本最大級の海岸砂丘。風が織りなす美しい「風紋」や、日本海に向かってそびえる砂の丘「馬の背」は圧巻の大スケール。",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    tags: ["大砂丘", "絶景", "らくだ乗り"],
    address: "鳥取県鳥取市福部町湯山"
  },
  {
    id: "shimanami_kaido",
    name: "しまなみ海道（大三島・多々羅大橋）",
    pref: "愛媛県/広島県",
    category: "nature",
    lat: 34.305,
    lng: 133.065,
    description: "瀬戸内海の島々を美しい橋で繋ぐ、世界中のサイクリストやドライバーが憧れる海上ロード。瀬戸内の柑橘と新鮮なレモンを楽しんで。",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    tags: ["海上ドライブ", "多島美", "レモングルメ"],
    address: "愛媛県今治市大三島町"
  },
  {
    id: "miyajima",
    name: "宮島・厳島神社",
    pref: "広島県",
    category: "history",
    lat: 34.296,
    lng: 132.320,
    description: "海に浮かぶ朱色の大鳥居が美しい日本三景の一つ。もみじ饅頭の食べ歩きや、宮島口周辺でのあなごめしを堪能するドライブ旅。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["世界遺産", "神社", "食べ歩き"],
    address: "広島県廿日市市宮島町"
  },
  {
    id: "tsunoshima",
    name: "角島大橋",
    pref: "山口県",
    category: "nature",
    lat: 34.354,
    lng: 130.906,
    description: "まるでコバルトブルーの海の上を滑空するように走る、日本屈指の絶景大橋（全長1780m）。白い砂浜と灯台が出迎えてくれます。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tags: ["青い海", "大橋絶景", "ベストドライブ"],
    address: "山口県下関市豊北町大字神田"
  },
  {
    id: "iyakeiko",
    name: "祖谷渓・かずら橋",
    pref: "徳島県",
    category: "nature",
    lat: 33.877,
    lng: 133.831,
    description: "四国の秘境。シラクチカズラで作られたスリリングな吊り橋と、深く美しいV字谷を流れる祖谷川のコバルトブルーに癒やされる。",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    tags: ["秘境", "スリル吊り橋", "大自然"],
    address: "徳島県三好市西祖谷山村善徳"
  },

  // --- 九州・沖縄周辺 ---
  {
    id: "aso",
    name: "阿蘇ミルクロード・大観峰",
    pref: "熊本県",
    category: "nature",
    lat: 32.990,
    lng: 131.076,
    description: "世界最大級のカルデラを見下ろす広大な草原ロード。バイクや車のCMでも有名な、日本を代表する天空のドライビングウェイ。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["カルデラ絶景", "大草原", "あか牛丼"],
    address: "熊本県阿蘇市山田"
  },
  {
    id: "yufuin",
    name: "由布院温泉・金鱗湖",
    pref: "大分県",
    category: "onsen",
    lat: 33.267,
    lng: 131.362,
    description: "由布岳の麓に広がるオシャレな温泉街。朝霧に包まれる神秘的な金鱗湖の散策と、やまなみハイウェイを抜ける至高の山岳ドライブ。",
    image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
    tags: ["お洒落温泉街", "山岳道路", "食べ歩き"],
    address: "大分県由布市湯布院町"
  },
  {
    id: "takachiho",
    name: "高千穂峡",
    pref: "宮崎県",
    category: "nature",
    lat: 32.707,
    lng: 131.300,
    description: "阿蘇の火山活動が生み出した美しい柱状節理の断崖。真名井の滝が流れ落ちる峡谷を貸ボートで巡る、神話が宿る神秘のスポット。",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
    tags: ["パワースポット", "渓谷美", "ボート体験"],
    address: "宮崎県西臼杵郡高千穂町三田井"
  },
  {
    id: "sakurajima",
    name: "桜島・有村溶岩展望所",
    pref: "鹿児島県",
    category: "nature",
    lat: 31.564,
    lng: 130.660,
    description: "現在も活動を続けるかごしまのシンボル。大正溶岩原に作られた遊歩道から荒々しい噴火口を望む、火山エネルギーを肌で感じるドライブ。",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: ["活火山", "溶岩ロード", "大パノラマ"],
    address: "鹿児島県鹿児島市有村町"
  },

  // --- 東北・北海道周辺 ---
  {
    id: "matsushima",
    name: "松島湾（五大堂・福浦島）",
    pref: "宮城県",
    category: "nature",
    lat: 38.372,
    lng: 141.062,
    description: "260余りの島々が湾内に浮かぶ日本三景の一つ。朱塗りの出会い橋を渡る福浦島散策や、名物の焼き牡蠣を頬張る美味しいドライブ旅。",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    tags: ["日本三景", "牡蠣グルメ", "朱塗りの橋"],
    address: "宮城県宮城郡松島町松島"
  },
  {
    id: "oirase",
    name: "奥入瀬渓流・十和田湖",
    pref: "青森県",
    category: "nature",
    lat: 40.528,
    lng: 140.970,
    description: "深い森に囲まれた約14kmにわたる美しい清流。無数の滝や苔むした岩が織りなす緑のトンネルを、窓を開けて走り抜ける贅沢なドライブ。",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
    tags: ["森林浴", "美しい渓流", "十和田湖"],
    address: "青森県十和田市大字奥瀬"
  },
  {
    id: "zao",
    name: "蔵王御釜",
    pref: "宮城県/山形県",
    category: "nature",
    lat: 38.130,
    lng: 140.505,
    description: "エメラルドグリーンの神秘的な火口湖「御釜」。蔵王エコーライン・ハイラインを駆け上がり、ダイナミックな高山絶景に浸る。",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    tags: ["火口湖", "高山道路", "絶景"],
    address: "宮城県刈田郡蔵王町遠刈田温泉"
  },
  {
    id: "furano",
    name: "富良野ラベンダー・美瑛の丘",
    pref: "北海道",
    category: "nature",
    lat: 43.530,
    lng: 142.470,
    description: "どこまでも続くパッチワークの丘と、夏に一面を紫に染める広大なラベンダー畑。北海道ならではの大パノラマと、爽快な直線道路ドライブ。",
    image: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80",
    tags: ["お花畑", "大パノラマ", "直線道路"],
    address: "北海道空知郡中富良野町"
  },
  {
    id: "otaru",
    name: "小樽運河・積丹岬",
    pref: "北海道",
    category: "history",
    lat: 43.190,
    lng: 141.006,
    description: "歴史情緒あふれるガス灯揺らめく小樽運河から、積丹ブルーと呼ばれる息を呑むほど青い絶景の海を目指す爽快な海岸ドライブコース。",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    tags: ["歴史運河", "積丹ブルー", "ウニ丼"],
    address: "北海道小樽市港町"
  },
  {
    id: "hakodate",
    name: "函館山・赤レンガ倉庫",
    pref: "北海道",
    category: "history",
    lat: 41.761,
    lng: 140.704,
    description: "「100万ドルの夜景」と称される極上の函館夜景と、異国情緒あふれるベイエリア。イカ釣りや海鮮丼などグルメの宝庫を巡る。",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: ["極上夜景", "異国情緒", "朝市海鮮"],
    address: "北海道函館市函館山"
  }
];

// 主要都市の座標（出発地）
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
