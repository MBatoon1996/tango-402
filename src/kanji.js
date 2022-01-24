const kanji = {
    tango: {
        // Unit 1_1
        面する: { 読み方: ['（〜に）めんする'], form: 'する動詞', 意味: "to face~" },
        今どき: { 読み方: ['いまどき'], form: '名詞、副詞', 意味: "nowadays" },
        珍しい: { 読み方: ['めずらしい'], form: 'イ形容詞', 意味: "unusual; rare; curious" },
        壁: { 読み方: ['かべ'], form: '名詞', 意味: "wall" },
        立て掛ける: { 読み方: ['（〜に）たてかける'], form: '他動詞', 意味: "ot lean (something against~)" },
        無造作: { 読み方: ['むぞうさ'], form: 'ナ形容詞', 意味: "casual; careless" },
        張り紙: { 読み方: ['はりがみ'], form: '名詞', 意味: "（＝貼り紙）a sign, poster" },
        可能: { 読み方: ['かのう'], form: 'ナ形容詞、名詞', 意味: "possible; potential; feasible" },
        断り書き: { 読み方: ['ことわりガキ'], form: '名詞', 意味: "disclaimer" },
        込める: { 読み方: ['こめる'], form: '一段動詞、他動詞', 意味: "to infuse; load; put" },
        電源コード: { 読み方: ['でんげんコード'], form: '名詞', 意味: "power cord" },
        延びる: { 読み方: ['のびる'], form: '一段動詞、自動詞', 意味: "to extend;" },
        切れる: { 読み方: ['（スイッチが）きれる'], form: '一段動詞、自動詞', 意味: "to be cut; to stop working; to go dead; " },
        ところどころ: { 読み方: [''], form: '副詞、名詞', 意味: "here and there; in places" },
        サビつく: { 読み方: [''], form: '五段動詞、自動詞', 意味: "to rust; to beocme rusty" },
        泥: { 読み方: ['どろ'], form: '名詞', 意味: "mud" },
        泥がはねる: { 読み方: ['どろがはねる'], form: '表現、一段動詞、他動詞', 意味: "to splash with mud" },
        側面: { 読み方: ['そくめん'], form: '名詞', 意味: "side" },
        汚れる: { 読み方: ['よごれる'], form: '一段動詞、自動詞', 意味: "to get dirty; to become dirty" },
        表面: { 読み方: ['ひょうめん'], form: '名詞', 意味: "surface; exterior" },
        プリント: { 読み方: [''], form: '名詞', 意味: "printed images/texts" },
        以前: { 読み方: ['いぜん'], form: '名詞、副詞', 意味: "ago; since; before; previous" },
        恐れがある: { 読み方: ['おそれがある'], form: '表現', 意味: "there is a danger (possibility) that..." },
        明記: { 読み方: ['めいき'], form: '名詞、スル動詞、他動詞', 意味: "clear writing; specification" },
        解釈: { 読み方: ['かいしゃく'], form: '名詞、スル動詞、他動詞', 意味: "interpretation; to interpret (the meaning);" },
        持ち去る: { 読み方: ['もちさる'], form: '五段動詞', 意味: "to take away; to carry away" },
        やつ: { 読み方: [''], form: '名詞、代名詞', 意味: "guy; he/him; [vulgar version of] a \"person\" or a \"thing\"" },
        一度や二度ではない: { 読み方: ['いちどやにどではない'], form: '表現', 意味: "not just once or twice = many times" },
        持ち主: { 読み方: ['もちぬし'], form: '名詞', 意味: "owner" },
        行為: { 読み方: ['こうい'], form: '名詞', 意味: "action; act; deed; conduct" },
        裏側: { 読み方: ['うらがわ'], form: '名詞', 意味: "the reverse side; other side" },
        廊下: { 読み方: ['ろうか'], form: '名詞', 意味: "hallway; corridor" },
        ほっとく: { 読み方: [''], form: '表現', 意味: "＝（人を）ほうっておくto leave someone alone" },
        ある種: { 読み方: ['あるしゅの'], form: '名詞、ノ形容詞', 意味: "a sort of~; certain; some kind of" },
        気に入る: { 読み方: ['きにいる'], form: '表現、五段動詞', 意味: "to like; come into someone's favor" },
        越す: { 読み方: ['こす'], form: '五段動詞、尊敬語', 意味: "to go; to come" },
        瓶: { 読み方: ['びん'], form: '名詞', 意味: "bottle" },
        容器: { 読み方: ['ようき'], form: '名詞', 意味: "container; vessel; packaging" },
        塩: { 読み方: ['しお'], form: '名詞', 意味: "salt" },
        見かける: { 読み方: ['みかける'], form: '一段動詞、他動詞', 意味: "to see; come across; to catch sight of; to (happen to) see" },
        透明: { 読み方: ['とうめい'], form: 'ナ形容詞', 意味: "transparent; clear" },
        蓋: { 読み方: ['ふた'], form: '名詞', 意味: "cover; lid; cap" },
        穴: { 読み方: ['あな'], form: '名詞', 意味: "hole" },
        振る: { 読み方: ['ふる'], form: '五段動詞、他動詞', 意味: "to wave; to shake" },
        山盛り: { 読み方: ['やまもり'], form: '名詞、ノ形容詞', 意味: "heap" },
        ロビー: { 読み方: [''], form: '名詞', 意味: "lobby" },
        奥: { 読み方: ['おく'], form: '名詞', 意味: "(further in) back" },
        便座: { 読み方: ['べんざ'], form: '名詞', 意味: "toilet seat" },
        目撃: { 読み方: ['もくげき'], form: '名詞、スル動詞、他動詞', 意味: "witnessing; observing; sighting" },
        事実: { 読み方: ['じじつ'], form: '副詞、名詞', 意味: "fact; truth; reality" },
        足跡: { 読み方: ['あしあと'], form: '名詞', 意味: "footprint" },
        後を絶たない: { 読み方: ['あしをたたない'], form: '表現、イ形容詞', 意味: "never ceasing; never ending; endless" },
        事態: { 読み方: ['じたい'], form: '名詞', 意味: "state (of affairs/things); circumstances" },
        特有: { 読み方: ['とくゆう'], form: 'の形容詞、な形容詞', 意味: "characteristic (of); peculiar (of)" },
        比較的: { 読み方: ['ひかくてき'], form: '副詞', 意味: "comparatively; relatively" },
        謎: { 読み方: ['なぞ'], form: '名詞', 意味: "mystery; riddle" },
        板壁: { 読み方: ['いたかべ'], form: '名詞', 意味: "wooden wall" },
        丹念: { 読み方: ['たんねん'], form: 'な形容詞、名詞', 意味: "careful; patient; meticulous" },
        色あせる: { 読み方: ['いろあせる'], form: '一段動詞、自動詞', 意味: "to fade in color" },
        潜む: { 読み方: ['ひそむ'], form: '五段動詞、自動詞', 意味: "to lurk; to be hidden; to be concealed; to be dormant" },
        無法地帯: { 読み方: ['むほうちたい'], form: '名詞', 意味: "lawless area; lawless district" },
        醤油差し: { 読み方: ['しょうゆさし'], form: '名詞', 意味: "soy sauce bottle" },
        爪楊枝: { 読み方: ['つまようじ'], form: '名詞', 意味: "toothpick" },
        ガラス製: { 読み方: ['ガラスせい'], form: 'の形容詞', 意味: "(made of) glass" },
        塞ぐ: { 読み方: ['ふさぐ'], form: '五段動詞、他動詞', 意味: "to block; cover; clog up" },
        金属製: { 読み方: ['きんぞくせい'], form: '名詞、の形容詞', 意味: "(made from) metal; metallic" },
        常人: { 読み方: ['じょうじん'], form: '名詞', 意味: "ordinary person" },

        // Unit 1_2
        姿: { 読み方: ['すがた'], form: '名詞', 意味: "figure; form; shape; appearance" },
        友人: { 読み方: ['ゆうじん'], form: '名詞', 意味: "friend" },
        付き合う: { 読み方: ['つきあう'], form: '五段動詞、自動詞', 意味: "to associate with; to keep company with" },
        はっとする: { 読み方: [''], form: 'スル動詞', 意味: "to suddenly realize/remember; to be startled" },
        部分: { 読み方: ['ぶぶん'], form: '名詞', 意味: "portion; part" },
        しゃべる: { 読み方: [''], form: '五段動詞、自動詞', 意味: "to talk; to chatter" },
        趣味: { 読み方: ['しゅみ'], form: '名詞', 意味: "hobby" },
        オープンにする: { 読み方: [''], form: '', 意味: "to be open" },
        態度: { 読み方: ['たいど'], form: '名詞', 意味: "attitude; manner" },
        パーソナリティー: { 読み方: [''], form: '名詞', 意味: "personality" },
        自分自身: { 読み方: ['じぶんじしん'], form: '名詞', 意味: "oneself" },
        他人: { 読み方: ['たにん'], form: '名詞', 意味: "others; other people" },
        打ち明ける: { 読み方: ['うちあける'], form: '一段動詞、他動詞', 意味: "to confide; to disclose; to speak frankly" },
        自己開示: { 読み方: ['じこかいじ'], form: '名詞、スル動詞', 意味: "self disclosure; information of oneself that is public and easily shared" },
        米国人: { 読み方: ['べいこくじん'], form: '名詞', 意味: "American people" },
        留学生: { 読み方: ['りゅうがくせい'], form: '名詞', 意味: "exchange student" },
        ディスカッションする: { 読み方: [''], form: '名詞、スル動詞', 意味: "discussion" },
        恋人: { 読み方: ['こいびと'], form: '名詞', 意味: "lover; boyfriend; girlfriend" },
        問い掛け: { 読み方: ['といかけ'], form: '名詞', 意味: "query; question" },
        即座に: { 読み方: ['そくざ'], form: '副詞', 意味: "immediately; instantly" },
        手を挙げる: { 読み方: ['てをあげる'], form: '一段動詞、他動詞', 意味: "to raise one's hand" },
        恥ずかしい: { 読み方: ['はずかしい'], form: 'イ形容詞', 意味: "embarassing" },
        向く: { 読み方: ['むく'], form: '五段動詞、他動詞、自動詞', 意味: "to turn towards; to look (up, down, etc.)" },
        曖昧な: { 読み方: ['あいまい'], form: 'ナ形容詞', 意味: "vague" },
        笑う: { 読み方: ['わらう'], form: '五段動詞、自動詞', 意味: "to laugh; to smile" },
        たまる: { 読み方: [''], form: '五段動詞、自動詞', 意味: "to pile up; accumulate" },
        ストレスがたまる: { 読み方: [''], form: '五段動詞、自動詞', 意味: "to get stressed out" },
        場: { 読み方: ['ば'], form: '名詞', 意味: "place; field; scene" },
        異なる: { 読み方: ['ことなる'], form: '五段動詞、自動詞', 意味: "to differ" },
        窓: { 読み方: ['まど'], form: '名詞', 意味: "window" },
        によって: { 読み方: [''], form: '表現', 意味: "according to; by (means of); due to; because of" },
        提案する: { 読み方: ['ていあん'], form: '名詞、スル動詞', 意味: "proposal; suggestion" },
        組み合わせる: { 読み方: ['くみあわせる'], form: '一段動詞、他動詞', 意味: "to combine" },
        図: { 読み方: ['ず'], form: '名詞', 意味: "drawing; picture; diagram" },
        似る: { 読み方: ['（～に）にる'], form: '一段動詞、自動詞', 意味: "to resemble; be similar" },
        縦軸: { 読み方: ['たてじく'], form: '名詞', 意味: "vertical axis" },
        横軸: { 読み方: ['よこじく'], form: '名詞', 意味: "horizontal axis" },
        区切る: { 読み方: ['くぎる'], form: '五段動詞、他動詞', 意味: "to divide (an area)" },
        もしも: { 読み方: [''], form: '副詞', 意味: "if" },
        場合: { 読み方: ['ばあい'], form: '名詞', 意味: "case; situation" },
        例えば: { 読み方: ['たとえば'], form: '副詞', 意味: "for example" },
        比べる: { 読み方: ['（～に）くらべる'], form: '一段動詞、他動詞', 意味: "to compare" },
        違い: { 読み方: ['ちがい'], form: '名詞', 意味: "difference" },
        お互い: { 読み方: ['おたがい'], form: '名詞、副詞', 意味: "each other" },
        ギャップ: { 読み方: [''], form: '名詞', 意味: "gap" },
        生み出す: { 読み方: ['うみだす'], form: '五段動詞、他動詞', 意味: "to create, produce, generate" },
        なおさら: { 読み方: [''], form: '副詞', 意味: "all the more" },
        印象: { 読み方: ['いんしょう'], form: '名詞、スル動詞', 意味: "impression" },
        与える: { 読み方: ['あたえる'], form: '一段動詞、他動詞', 意味: "to give (esp. to someone of lower status" },
        発想する: { 読み方: ['はっそう'], form: '名詞、スル動詞', 意味: "idea; to conceive of" },
        分かち合う: { 読み方: ['わかちあう'], form: '五段動詞、他動詞', 意味: "to share （＝分け合う）" },
        公的な: { 読み方: ['こうてき'], form: 'ナ形容詞', 意味: "public" },
        私的な: { 読み方: ['してき'], form: 'ナ形容詞', 意味: "private" },
        もどかしい: { 読み方: [''], form: 'イ形容詞', 意味: "frustrating" },
        こうした: { 読み方: [''], form: '表現', 意味: "these~" },
        人間: { 読み方: ['にんげん'], form: '名詞', 意味: "human" },
        状況: { 読み方: ['じょうきょう'], form: '名詞', 意味: "situation; circumstances" },
        それぞれ: { 読み方: [''], form: '名詞、福祉', 意味: "each" },
        心に留める: { 読み方: ['こころにとめる'], form: '表現、一段動詞', 意味: "to bear/keep in mind" },
        必要な: { 読み方: ['ひつよう'], form: 'ナ形容詞', 意味: "necessary" },

        // Unit 2_1
        法則: { 読み方: ['ほうそく'], form: '名詞', 意味: "rule; law" },
        仲間: { 読み方: ['なかま'], form: '名詞', 意味: "companion; friend" },
        以外: { 読み方: ['いがい'], form: '名詞、福祉', 意味: "except; other than; besides" },
        風景: { 読み方: ['ふうけい'], form: '名詞', 意味: "scenery" },
        社会学者: { 読み方: ['しゃかいがくしゃ'], form: '名詞', 意味: "sociologist" },
        公共: { 読み方: ['こうきょう'], form: '名詞', 意味: "public (facilities); communal" },
        電柱: { 読み方: ['でんちゅう'], form: '名詞', 意味: "utility pole; telephone pole" },
        映る: { 読み方: ['うつる'], form: '五段動詞、自動詞', 意味: "to be reflected; to be displayed (on a screen); to be projected" },
        きわめて: { 読み方: [''], form: '副詞', 意味: "extremeley" },
        信頼性: { 読み方: ['しんらいせい'], form: '名詞', 意味: "credibility; reliability" },
        通じる: { 読み方: ['つうじる'], form: '一段動詞、自動詞', 意味: "to apply; to lead; to get across" },
        満員電車: { 読み方: ['まんいんでんしゃ'], form: '名詞', 意味: "full-train" },
        家具: { 読み方: ['かぐ'], form: '名詞', 意味: "furniture" },
        植木鉢: { 読み方: ['うえきばち'], form: '名詞', 意味: "potted plant" },
        車両: { 読み方: ['しゃりょう'], form: '名詞', 意味: "wheeled vehicle" },
        感覚: { 読み方: ['かんかく'], form: '名詞、スル動詞', 意味: "sense; feeling; sensation" },
        平気: { 読み方: ['へいき'], form: 'ナ形容詞', 意味: "ok; all right" },
        化粧: { 読み方: ['けしょう'], form: '名詞、スル動詞', 意味: "make-up" },
        弁当: { 読み方: ['べんとう'], form: '名詞', 意味: "boxed lunch" },
        机: { 読み方: ['つくえ'], form: '名詞', 意味: "desk" },
        傍若無人: { 読み方: ['ぼうじゃくぶじん'], form: '名詞、ナ形容詞、ノ形容詞', 意味: "insolence; outrageous; arrogant" },
        謎: { 読み方: ['なぞ'], form: '名詞', 意味: "mystery" },
        解く: { 読み方: ['とく'], form: '五段動詞、他動詞', 意味: "to solve" },
        解ける: { 読み方: ['とける'], form: '一段動詞、自動詞', 意味: "to be solved" },
        勝手: { 読み方: ['かって'], form: 'ナ形容詞、名詞', 意味: "selfishness; one's own convenience" },
        全体: { 読み方: ['ぜんたい'], form: '名詞、副詞', 意味: "whole; entire; general" },
        全員: { 読み方: ['ぜんいん'], form: '名詞、副詞', 意味: "all members; everybody" },
        共有: { 読み方: ['きょうゆう'], form: '名詞、スル動詞', 意味: "sharing (e.g. a viewpoint), sharing (files)" },
        摩擦: { 読み方: ['まさつ'], form: '名詞、スル動詞', 意味: "friction; conflict" },
        迷惑: { 読み方: ['めいわく'], form: '名詞、ナ形容詞', 意味: "trouble; bother; annoyance; nuisance; inconvenience" },
        被害: { 読み方: ['ひがい'], form: '名詞', 意味: "damage; injury; harm" },
        及ぶ: { 読み方: ['およぶ'], form: '五段動詞、自動詞', 意味: "to reach" },
        限り: { 読み方: ['～かぎり'], form: '動詞＋限り', 意味: "as long as~" },
        みっともない: { 読み方: [''], form: 'イ形容詞', 意味: "disgraceful; embarassing; ugly" },
        不愉快: { 読み方: ['ふゆかい'], form: 'ナ形容詞', 意味: "unpleasant" },
        //: { 読み方: [''], form: '', 意味: "" },

        // Unit 2_2
        標準: { 読み方: ['ひょうじゅん'], form: '名詞', 意味: "standard; norm" },
        かなり: { 読み方: [''], form: '副詞', 意味: "considerably; fairly; quite" },
        高度: { 読み方: ['こうど'], form: 'ナ形容詞', 意味: "high degree; high-grade; advanced; sophisticated" },
        要する: { 読み方: ['ようする'], form: 'スル動詞、他動詞', 意味: "to need; to demand; to require" },
        暴力的: { 読み方: ['ぼうりょくてき'], form: 'ナ形容詞', 意味: "violent" },
        酔っ払う: { 読み方: ['よっぱらう'], form: '五段動詞、自動詞', 意味: "to get drunk" },
        理性: { 読み方: ['りせい'], form: '名詞', 意味: "(a sense of) reasoning; reason" },
        意志: { 読み方: ['いし'], form: '名詞', 意味: "will; intention; intent; determination" },
        弱まる: { 読み方: ['よわまる'], form: '五段動詞、自動詞', 意味: "to abate; to weaken; to be emaciated" },
        ぶつかる: { 読み方: [''], form: '五段動詞、自動詞', 意味: "to strike against; to collide with; to bump into" },
        駅員: { 読み方: ['えきいん'], form: '名詞', 意味: "(train) station attendant; station employee/staff" },
        なぐりかかる: { 読み方: [''], form: '五段動詞、自動詞', 意味: "to throw a punch at; to swing at" },
        寛大: { 読み方: ['かんだい'], form: 'ナ形容詞、名詞', 意味: "tolerant; generous; lenient" },
        無視: { 読み方: ['むし'], form: '名詞、スル動詞', 意味: "ignoring; disregarding" },
        意外: { 読み方: ['いがい'], form: 'ナ形容詞', 意味: "unexpected; surprising" },
        周囲: { 読み方: ['しゅうい'], form: '名詞', 意味: "surroundings" },
        家庭: { 読み方: ['かてい'], form: '名詞', 意味: "home; family; household" },
        好き勝手: { 読み方: ['すきかって'], form: 'ナ形容詞', 意味: "doing whatever one pleases" },
        着替える: { 読み方: ['きがえる'], form: '一段動詞', 意味: "to change one's clothes" },
        済ませる: { 読み方: ['すませる'], form: '一段動詞、他動詞', 意味: "to finish; get it done（＝済む）" },
        耐える: { 読み方: ['たえる'], form: '一段動詞、自動詞、他動詞', 意味: "to bear; to stand; to endure; to put up with" },
        キレる: { 読み方: [''], form: '一段動詞、自動詞', 意味: "to get angry; lose one's temper" },
        続出: { 読み方: ['ぞくしゅつ'], form: '名詞、スル動詞', 意味: "appearing one after another" },
        実行: { 読み方: ['じっこう'], form: '名詞、スル動詞', 意味: "execution (e.g. of a plan); carrying out" },
        ある種: { 読み方: ['あるしゅ'], form: '名詞、ノ形容詞', 意味: "certain kind of~; some sort of" },
        言い切る: { 読み方: ['いいきる'], form: '五段動詞、他動詞', 意味: "to say positively; declare; assert" },
        使用: { 読み方: ['しよう'], form: '名詞、スル動詞', 意味: "use; application; utilization" },
        ごく: { 読み方: [''], form: '副詞', 意味: "quite; very" },
        小声: { 読み方: ['こごえ'], form: '名詞、ノ形容詞', 意味: "low voice; whisper" },
        個室: { 読み方: ['こしつ'], form: '名詞', 意味: "private room; single room" },
        保つ: { 読み方: ['たもつ'], form: '五段動詞、他動詞', 意味: "to keep; to preserve; to maintain" },
        光景: { 読み方: ['こうけい'], form: '名詞', 意味: "scene; spectacle; sight; view" },
        いっさい: { 読み方: [''], form: '名詞、ノ形容詞', 意味: "all; whole; entirely" },
        逸脱: { 読み方: ['いつだつ'], form: '名詞、スル動詞', 意味: "deviation; departure" },
        静けさ: { 読み方: ['しずけさ'], form: '名詞', 意味: "stillness; silence; calm; serenity" },

        
        //: { 読み方: [''], form: '', 意味: "" },
    },
    kaku: {
        // Unit 1_1
        かのう: { 読み方: ['可能'], form: 'な形容詞、名詞', 意味: "possible; potential; feasible" },
        よごれる: { 読み方: ['汚れる'], form: '一段動詞、自動詞', 意味: "to get dirty; to become dirty" },
        ひょうめん: { 読み方: ['表面'], form: '名詞、の形容詞', 意味: "surface; exterior; outside; apperances" },
        いぜん: { 読み方: ['以前'], form: '名詞、副詞', 意味: "ago; since; before; previous" },
        おそれ: { 読み方: ['恐れ'], form: '名詞', 意味: "fear; horror; anxiety; concern" },
        もちさる: { 読み方: ['持ち去る'], form: '五段動詞', 意味: "to take away; to carry away" },
        もちぬし: { 読み方: ['持ち主'], form: '名詞', 意味: "owner" },
        うらがわ: { 読み方: ['裏側'], form: '名詞、の形容詞', 意味: "the reverse; the other side" },
        きにいる: { 読み方: ['気に入る'], form: '表現； 五段動詞', 意味: "to like; to take a liking to; to suit one's fancy" },
        こす: { 読み方: ['越す'], form: '五段動詞、尊敬語', 意味: "to go; to come" },
        じじつ: { 読み方: ['事実'], form: '副詞、名詞', 意味: "fact; truth; reality" },

        // Unit 1_2
        まど: { 読み方: ['窓'], form: '名詞', 意味: "window" },
        くみあわせる: { 読み方: ['組み合わせる'], form: '一段動詞、他動詞', 意味: "to join together; to combine" },
        にる: { 読み方: ['似る'], form: '一段動詞、自動詞', 意味: "to resemble; to be similar" },
        くぎる: { 読み方: ['区切る'], form: '五段動詞、他動詞', 意味: "to divide (an area)" },
        たとえば: { 読み方: ['例えば'], form: '副詞', 意味: "for example" },
        ばあい: { 読み方: ['場合'], form: '名詞', 意味: "case; situation" },
        おたがい: { 読み方: ['お互い'], form: '名詞、副詞', 意味: "each other; one another" },
        あたえる: { 読み方: ['与える'], form: '一段動詞、他動詞', 意味: "to give (esp. to someone of lower status)" },
        こうてき: { 読み方: ['公的'], form: 'ナ形容詞', 意味: "public" },
        してき: { 読み方: ['私的'], form: 'ナ形容詞', 意味: "private" },
        にんげん: { 読み方: ['人間'], form: '名詞', 意味: "human being" },
        ばめん: { 読み方: ['場面'], form: '名詞', 意味: "scene; setting; place (where something happens)" },
        ひつよう: { 読み方: ['必要'], form: 'ナ形容詞', 意味: "necessary" },

        // Unit 2_1
        なかま: { 読み方: ['仲間'], form: '名詞', 意味: "companion; friend; comrade" },
        ふうけい: { 読み方: ['風景'], form: '名詞', 意味: "scenery" },
        しゃこうがくしゃ: { 読み方: ['社交学者'], form: '名詞', 意味: "sociologist" },
        こうきょう: { 読み方: ['公共'], form: '名詞', 意味: "public (facilities, service, etc.)" },
        よこ: { 読み方: ['横'], form: '名詞', 意味: "horizontal; side-to-side (as opposed to front-to-back)" },
        うつる: { 読み方: ['映る'], form: '五段動詞、自動詞', 意味: "to be reflected; to be projected; to be displayed" },
        しんらいせい: { 読み方: ['信頼性'], form: '名詞', 意味: "credibility; reliability" },
        ほうそく: { 読み方: ['法則'], form: '名詞', 意味: "rule; law" },
        つうじる: { 読み方: ['通じる'], form: '一段動詞、自動詞', 意味: "to apply; to lead; to get across" },
        まんいん: { 読み方: ['満員'], form: '名詞', 意味: "full house; no vacancy" },
        かぐ: { 読み方: ['家具'], form: '名詞', 意味: "furniture" },
        しゃりょう: { 読み方: ['車両'], form: '名詞', 意味: "railroad car; wheeled vehicle" },
        かんかく: { 読み方: ['感覚'], form: '名詞、スル動詞', 意味: "sense; sensation; feeling; intuition" },
        へいき: { 読み方: ['平気'], form: 'ナ形容詞', 意味: "all right; fine; okay" },
        つくえ: { 読み方: ['机'], form: '名詞', 意味: "desk" },
        なぞ: { 読み方: ['謎'], form: '名詞', 意味: "mystery" },
        とく: { 読み方: ['解く'], form: '五段動詞、他動詞', 意味: "to solve; to work out; to answer" },
        かって: { 読み方: ['勝手'], form: '名詞、ナ形容詞', 意味: "one's own convenience; one's way; selfishness" },
        ぜんいん: { 読み方: ['全員'], form: '名詞、副詞', 意味: "all members; whole crew; everyone" },
        きょうゆう: { 読み方: ['共有'], form: '名詞、スル動詞', 意味: "join ownership; sharing (e.g. a viewpoint; files)" },
        ちょくせつ: { 読み方: ['直接'], form: 'ナ形容詞、名詞', 意味: "direct; immediate; firsthand" },
        かぎり: { 読み方: ['限り'], form: '動詞＋～限り', 意味: "as long as~" },

        // Unit 2_2
        こんご: { 読み方: ['今後'], form: '名詞、副詞', 意味: "from now on; hereafter" },
        いしき: { 読み方: ['意識'], form: '名詞、スル動詞', 意味: "consciousness; becoming aware (of); awareness" },
        しかたない: { 読み方: ['仕方ない'], form: 'イ形容詞', 意味: "there's no (other) way; cannot be helped" },
        いっぽう: { 読み方: ['一方'], form: '接続詞', 意味: "on the other hand" },
        いがい: { 読み方: ['意外'], form: 'ナ形容詞', 意味: "unexpected; surprising" },
        こうど: { 読み方: ['高度'], form: 'ナ形容詞', 意味: "high-degree; high-grade; advanced; sophisticated" },
        ようする: { 読み方: ['要する'], form: 'スル動詞、他動詞', 意味: "to need; to demand; to require" },
        つかれる: { 読み方: ['疲れる'], form: '一段動詞、自動詞', 意味: "to get tired; to tire; to get fatigued" },
        りせい: { 読み方: ['理性'], form: '名詞', 意味: "reasoning; (sense of) reason" },
        えきいん: { 読み方: ['駅員'], form: '名詞', 意味: "(train) station staff/employee" },
        かてい: { 読み方: ['家庭'], form: '名詞', 意味: "home; family; household" },
        きがえる: { 読み方: ['着替える'], form: '一段動詞', 意味: "to change one's clothes" },
        じっこう: { 読み方: ['実行'], form: '名詞、スル動詞', 意味: "execution (e.g. of a plan); carrying out" },
        しよう: { 読み方: ['使用'], form: '名詞、スル動詞', 意味: "use; application; utilization" },
        こごえ: { 読み方: ['小声'], form: '名詞、ノ形容詞', 意味: "low voice; whisper" },
        こしつ: { 読み方: ['個室'], form: '名詞', 意味: "private room; single room" },
        あんぜん: { 読み方: ['安全'], form: 'ナ形容詞', 意味: "safety;security" },

        
        // : { 読み方: [''], form: '', 意味: "" },
    },

    yomerebaii: {
        // Unit 1_1
        珍しい: { 読み方: ['めずらしい'], form: 'い形容詞', 意味: "unusual; rare; new" },
        洗濯: { 読み方: ['せんたく'], form: '名詞、する動詞', 意味: "washing; laundry" },
        電源コード: { 読み方: ['でんげんコード'], form: '名詞', 意味: "power cord" },
        延びる: { 読み方: ['のびる'], form: '一段動詞、自動詞', 意味: "to stretch; to extend; to lengthen; to grow; to be prolonged (meeting; lifespan)" },
        泥: { 読み方: ['どろ'], form: '名詞', 意味: "mud" },
        側面: { 読み方: ['そくめん'], form: '名詞', 意味: "side; flank" },
        明記: { 読み方: ['めいき'], form: '名詞、する動詞、他動詞', 意味: "to make clear; specification" },
        塩: { 読み方: ['しお'], form: '名詞', 意味: "salt" },
        製: { 読み方: ['〜せい'], form: '接尾詞', 意味: "-made; make" },
        振る: { 読み方: ['ふる'], form: '五段動詞、他動詞', 意味: "to wave; to shake" },
        奥: { 読み方: ['おく'], form: '名詞', 意味: "(further in) back" },
        事態: { 読み方: ['じたい'], form: '名詞', 意味: "state (of affairs/things); circumstances" },
        比較的: { 読み方: ['ひかくてき'], form: '副詞', 意味: "comparatively; relatively" },

        // Unit 1_2
        提案: { 読み方: ['ていあん'], form: '名詞、スル動詞', 意味: "to propose; suggestion" },
        縦軸: { 読み方: ['たてじく'], form: '名詞', 意味: "vertical axis" },
        横軸: { 読み方: ['よこじく'], form: '名詞', 意味: "horizontal axis" },
        印象: { 読み方: ['いんしょう'], form: '名詞、スル動詞', 意味: "impression" },
        発想: { 読み方: ['はっそう'], form: '名詞、スル動詞', 意味: "idea; conception" },
        状況: { 読み方: ['じょうきょう'], form: '名詞', 意味: "situation; circumstances" },
        分かち合う: { 読み方: ['わかちあう'], form: '五段動詞、他動詞', 意味: "to share" },
        留める: { 読み方: ['(心に）とめる'], form: '一段動詞、他動詞', 意味: "to bear in mind" },

        // Unit 2_1
        電柱: { 読み方: ['でんちゅう'], form: '名詞', 意味: "utility pole; telephone pole" },
        植木鉢: { 読み方: ['うえきばち'], form: '名詞', 意味: "potted plant" },
        化粧: { 読み方: ['けしょう'], form: '名詞、スル動詞', 意味: "make-up" },
        弁当: { 読み方: ['べんとう'], form: '名詞', 意味: "boxed-lunch" },
        迷惑: { 読み方: ['めいわく'], form: '名詞、ナ形容詞', 意味: "trouble; bother; annoyance; inconvenience" },
        被害: { 読み方: ['ひがい'], form: '名詞', 意味: "damage; injury; harm" },
        及ぶ: { 読み方: ['およぶ'], form: '五段動詞、自動詞', 意味: "to reach" },
        不愉快: { 読み方: ['ふゆかい'], form: 'ナ形容詞', 意味: "unpleasant" },

        // Unit 2_2
        標準: { 読み方: ['ひょうじゅん'], form: '名詞', 意味: "standard; norm" },
        暴力的: { 読み方: ['ぼうりょくてき'], form: 'ナ形容詞', 意味: "violent" },
        載る: { 読み方: ['のる'], form: '五段動詞、自動詞', 意味: "to be placed on; to appear (in print)" },
        酔っ払う: { 読み方: ['よっぱらう'], form: '五段動詞、自動詞', 意味: "to get drunk" },
        意志: { 読み方: ['いし'], form: '名詞', 意味: "will; intention; intent; determination" },
        弱まる: { 読み方: ['よわまる'], form: '五段動詞、自動詞', 意味: "to abate; to weaken; to be emaciated" },
        寛大: { 読み方: ['かんだい'], form: 'ナ形容詞、名詞', 意味: "tolerant; generous; lenient" },
        無視: { 読み方: ['むし'], form: '名詞、スル動詞', 意味: "ignoring; disregarding" },
        周囲: { 読み方: ['しゅうい'], form: '名詞', 意味: "surroundings" },
        踊る: { 読み方: ['おどる'], form: '五段動詞、自動詞', 意味: "to dance" },
        耐える: { 読み方: ['たえる'], form: '一段動詞、自動詞、他動詞', 意味: "to bear; to stand; to endure; to put up with" },
        続出: { 読み方: ['ぞくしゅつ'], form: '名詞、スル動詞', 意味: "appearing one after another" },
        携帯電話: { 読み方: ['けいたいでんわ'], form: '名詞', 意味: "cellular phone" },
        保つ: { 読み方: ['たもつ'], form: '五段動詞、他動詞', 意味: "to keep; to preserve; to maintain" },
        光景: { 読み方: ['こうけい'], form: '名詞', 意味: "scene; spectacle; sight; view" },

        // : { 読み方: [''], form: '', 意味: "" },
    }
}

export default kanji;