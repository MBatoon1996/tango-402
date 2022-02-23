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
        峠: { 読み方: ['とうげ'], form: '名詞', 意味: "mountain peak" },
        越える: { 読み方: ['こえる'], form: '一段動詞、他動詞', 意味: "to surpass; to cross over" },
        峠を越える: { 読み方: ['とうげをこえる'], form: '表現、一段動詞、他動詞', 意味: "to pass the peak; to be over the worse" },
        険しい: { 読み方: ['けわしい'], form: 'い形容詞', 意味: "steep; grim" },
        曲がりくねる: { 読み方: ['まがりくねる'], form: '五段動詞、自動詞', 意味: "to turn and twist; to bend many times; to zigzag" },
        谷: { 読み方: ['たに'], form: '名詞', 意味: "valley" },
        ハンドル: { 読み方: [''], form: '名詞', 意味: "steering wheel" },
        操作: { 読み方: ['そうさ'], form: '名詞、する動詞、他動詞', 意味: "operation; handling" },
        誤る: { 読み方: ['あやまる'], form: '五段動詞、他動詞', 意味: "to make a mistake (in); to commit an error; to be wrong" },
        一瞬にして: { 読み方: ['いっしゅんにして'], form: '表現、副詞', 意味: "in an instant; in a moment; instantaneously" },
        転落: { 読み方: ['てんらく'], form: '名詞、する動詞、自動詞', 意味: "fall; tumble; plunge" },
        ジェットコースター: { 読み方: [''], form: '名詞', 意味: "roller coaster" },
        恐怖: { 読み方: ['きょうふ'], form: '名詞、する動詞', 意味: "fear; dread; dismay; terror; horror" },
        快感: { 読み方: ['かいかん'], form: '名詞', 意味: "pleasant feeling; pleasant sensation; pleasure" },
        はし: { 読み方: ['（〜の）はし'], form: '名詞', 意味: "end; tip; edge; margin" },
        標識: { 読み方: ['ひょうしき'], form: '名詞', 意味: "sign; mark; flag" },
        発見: { 読み方: ['はっけん'], form: '名詞、する動詞、他動詞', 意味: "discovery; detection; finding" },
        鮮やか: { 読み方: ['あざやか'], form: 'な形容詞', 意味: "vivid; bright; vibrant; skillful; brilliant" },
        命知らず: { 読み方: ['いのちしらず'], form: '名詞、の形容詞、な形容詞', 意味: "recklessness; daredevil; rashness" },
        わき: { 読み方: ['（〜の）わき'], form: '名詞', 意味: "side; beside" },
        プレート: { 読み方: [''], form: '名詞', 意味: "plate" },
        プラスチック: { 読み方: [''], form: '名詞', 意味: "plastic" },
        想像: { 読み方: ['そうぞう'], form: '名詞、する動詞、他動詞', 意味: "imagination; supposition" },
        際: { 読み方: ['（〜の）きわ／ぎわ'], form: '名詞、接尾辞', 意味: "edge; verge" },
        敷設: { 読み方: ['ふせつ'], form: '名詞、する動詞、他動詞', 意味: "to lay (a railroad, pipes, naval mines, etc.)" },
        同居: { 読み方: ['どうきょ'], form: '名詞、する動詞、自動詞', 意味: "living together; coexistence" },
        端的: { 読み方: ['たんてき'], form: 'な形容詞', 意味: "straightfoward; concise; plain; direct; frank" },
        塗料: { 読み方: ['とりょう'], form: '名詞', 意味: "paint" },

        // Unit 2_1
        滞在: { 読み方: ['たいざい'], form: '名詞、する動詞、自動詞', 意味: "stay" },
        駐車場: { 読み方: ['ちゅうしゃじょう'], form: '名詞', 意味: "parking lot; parking garage" },
        白人: { 読み方: ['はくじん'], form: '名詞', 意味: "caucasian" },
        中年男: { 読み方: ['ちゅうねんおとこ'], form: '名詞', 意味: "middle-aged man" },
        呼び止める: { 読み方: ['よびとめる'], form: '一段動詞、他動詞', 意味: "to (call to) stop [someone]" },
        日焼けする: { 読み方: ['ひやけする'], form: '名詞、する動詞、自動詞', 意味: "sunburn; suntan; become discolored from the sun" },
        簡素: { 読み方: ['かんそ'], form: 'な形容詞、名詞', 意味: "modest; simple; plain" },
        衣服: { 読み方: ['いふく'], form: '名詞', 意味: "clothes" },
        服装: { 読み方: ['ふくそう'], form: '名詞', 意味: "garments; attire" },
        市民: { 読み方: ['しみん'], form: '名詞', 意味: "citizen; city inhabitant; townspeople" },
        見分けがつかない: { 読み方: ['みわけがつかない'], form: '表現', 意味: "indistinguishable" },
        見分け: { 読み方: ['みわけ'], form: '名詞', 意味: "distinction" },
        見分ける: { 読み方: ['みわける'], form: '一段動詞、他動詞', 意味: "to distinguish; to recognize; to tell apart; to differentiate" },
        おおよそ: { 読み方: [''], form: '副詞', 意味: "about; roughly; approximately; generally" },
        想像がつく: { 読み方: ['そうぞうがつく'], form: '表現、五段動詞', 意味: "ot be imaginable; to be conceivable" },
        お腹が減る: { 読み方: ['おなかがへる'], form: '表現、五段動詞', 意味: "to become hungry" },
        小銭: { 読み方: ['こぜに'], form: '名詞', 意味: "small change; coins" },
        呼びかける: { 読み方: ['よびかける'], form: '一段動詞、他動詞', 意味: "to address; call (for help)" },
        金額: { 読み方: ['きんがく'], form: '名詞', 意味: "amount of money; sum of money" },
        限定: { 読み方: ['げんてい'], form: '名詞、する動詞、他動詞', 意味: "limit; restriction" },
        援助: { 読み方: ['えんじょ'], form: '名詞、する動詞、他動詞', 意味: "assistance; aid; support" },
        求める: { 読み方: ['もとめる'], form: '一段動詞、他動詞', 意味: "to want; to wish for; to request" },
        焼く: { 読み方: ['やく'], form: '五段動詞、他動詞', 意味: "to burn; to grill; to heat; to heat up" },
        匂い: { 読み方: ['におい'], form: '名詞', 意味: "odor; scent; aura" },
        漂う: { 読み方: ['ただよう'], form: '五段動詞、自動詞', 意味: "to drift; to float; to waft (e.g. a scent)" },
        つらい: { 読み方: [''], form: 'い形容詞', 意味: "painful; bitter; heart-breaking; difficult (emotinally)" },
        同情: { 読み方: ['どうじょう'], form: '名詞、する動詞、自動詞', 意味: "sympathy; compassion; pity" },
        確か: { 読み方: ['たしか'], form: 'な形容詞、名詞', 意味: "sure; certain; positive; definite; reliable; trustworthy" },
        全く: { 読み方: ['まったく'], form: '副詞、の形容詞', 意味: "really; truly; entirely; completely; good grief" },
        訴える: { 読み方: ['うったえる'], form: '一段動詞、他動詞', 意味: "to bring to (someone's attention); to appeal to (reason, emotions, etc.); to play on (one's sympathies); to sue" },
        企画力: { 読み方: ['きかくりょく'], form: '名詞', 意味: "planning ability" },
        素直: { 読み方: ['すなお'], form: 'な形容詞', 意味: "honest; frank; upfront (about one's feelings)" },
        感心: { 読み方: ['かんしん'], form: '名詞、する動詞', 意味: "admiration; being impressed" },
        にこりともせずに: { 読み方: [''], form: '表現', 意味: "with no smile" },
        突っ込む: { 読み方: ['つっこむ'], form: '五段動詞、他動詞', 意味: "to thrust (something) into (something); to cram; to stuff; to shove" },
        音を立てる: { 読み方: ['おとをたてる'], form: '表現、一段動詞', 意味: "to make a sound" },
        浮かぶ: { 読み方: ['うかぶ'], form: '五段動詞', 意味: "to float; to be suspended" },
        考えが浮かぶ: { 読み方: ['かんがえがうかぶ'], form: '表現', 意味: "to have an idea; idea occurs to [person]" },
        手遅れ: { 読み方: ['ておくれ（だ／になる）'], form: '名詞', 意味: "being too late; losing one's final chance" },
        街角: { 読み方: ['まちかど'], form: '名詞', 意味: "street corner" },
        微か: { 読み方: ['かすか'], form: 'な形容詞', 意味: "slight; faint; subtle" },

        // Unit 2_2
        教訓: { 読み方: ['きょうくん'], form: '名詞、する動詞、他動詞', 意味: "lesson, teachings, moral" },
        ある程度: { 読み方: ['あるていど'], form: '表現、の形容詞、副詞', 意味: "to some extent; to a certain extent" },
        領域: { 読み方: ['りょういき'], form: '名詞、の形容詞', 意味: "area; domain; region" },
        単に: { 読み方: ['たんに'], form: '副詞', 意味: "simply; merely; only" },
        義務的: { 読み方: ['ぎむてき'], form: 'な形容詞', 意味: "obligatory; mandatory" },
        具体的: { 読み方: ['ぐたいてき'], form: 'な形容詞', 意味: "specific; substantial; concrete; definite" },
        率直: { 読み方: ['そっちょく'], form: 'な形容詞、名詞', 意味: "straightforward; frank; direct; candid" },
        提出: { 読み方: ['ていしゅつ'], form: '名詞、する動詞、他動詞', 意味: "turning in; submission (of an application, report, etc.)" },
        他人事: { 読み方: ['たにんごと'], form: '名詞', 意味: "someone else's problem; other people's affairs" },
        事情: { 読み方: ['じじょう'], form: '名詞', 意味: "state of affairs; circumstances; conditions; situation" },
        反射的: { 読み方: ['はんしゃてき'], form: 'な形容詞', 意味: "reflexive; reflecting" },
        わずか: { 読み方: [''], form: 'な形容詞', 意味: "a little; a few; slight; small amount; only; just; merely" },
        隅: { 読み方: ['すみ'], form: '名詞、接尾詞', 意味: "corner; nook" },
        接す: { 読み方: ['せっす［＝coll.接する］'], form: 'する動詞、自動し、他動詞', 意味: "to treat someone; to come in contact with; to take care of; to look after; to connect" },
        接し方: { 読み方: ['（〜との）せっしかた'], form: '名詞', 意味: "the way someone treats (people)" },
        蝶: { 読み方: ['ちょう'], form: '名詞', 意味: "butterfly" },
        担任教師: { 読み方: ['たんにんきょうし'], form: '名詞', 意味: "class teacher" },
        胸: { 読み方: ['むね'], form: '名詞', 意味: "chest; heart; mind; feelings" },
        突き刺さる: { 読み方: ['つきささる'], form: '五段動詞、自動詞', 意味: "to stick into; to pierce" },
        チクリと: { 読み方: [''], form: '副詞', 意味: "prickling; stinging; biting" },
        痛む: { 読み方: ['いたむ'], form: '五段動詞、自動詞', 意味: "to hurt; to ache; to feel a pain" },
        当時: { 読み方: ['とうじ'], form: '名詞、副詞', 意味: "at that time; in those days" },
        いじめる: { 読み方: [''], form: '一段動詞、他動詞', 意味: "to ill-treat; to bully; to torment; to pick on; to tease" },
        避ける: { 読み方: ['さける'], form: '一段動詞、他動詞', 意味: "to avoid (physical contact with); to avoid (situation)" },
        いじめ: { 読み方: [''], form: '名詞', 意味: "bullying; teasing" },
        手を焼く: { 読み方: ['てをやく'], form: '表現、五段動詞', 意味: "do not know what to do with; to be at a loss with; to have difficulty with" },
        うなずき返す: { 読み方: ['うなずきかえす'], form: '五段動詞、自動詞', 意味: "to nod back" },
        今更: { 読み方: ['いまさら'], form: '副詞', 意味: "now (after such a long time); it's too late (to~)" },
        生意気: { 読み方: ['なまいき'], form: 'な形容詞、名詞', 意味: "impertinent; cheeky; impudent; audacious; cocky" },
        クモの巣: { 読み方: ['クモのす'], form: '名詞', 意味: "spider's web" },
        引っ掛かる: { 読み方: ['ひっかかる'], form: '五段動詞、自動詞', 意味: "to get stuck; to get caught" },
        はらう: { 読み方: [''], form: '五段動詞、他動詞', 意味: "to brush off; to slap away" },
        にこにこ: { 読み方: [''], form: '副詞、する動詞', 意味: "smilingly; with a friendly grin" },
        出来事: { 読み方: ['できごと'], form: '名詞', 意味: "incident; affair; happening; event" },
        日記: { 読み方: ['にっき'], form: '名詞', 意味: "diary; journal" },
        花丸: { 読み方: ['はなまる'], form: '名詞', 意味: "encircled flower seal" },
        返却: { 読み方: ['へんきゃく'], form: '名詞、する動詞、他動詞', 意味: "erturn of something; repayment" },
        息が詰まる: { 読み方: ['いきがつまる'], form: '表現、五段動詞', 意味: "to feel suffocate; to choke; to have trouble breathing" },
        思いやる: { 読み方: ['おもいやる'], form: '五段動詞、他動詞', 意味: "to be considerate; to sympathise with ［n.思いやり］" },
        理論的: { 読み方: ['りろんてき'], form: 'な形容詞', 意味: "theoretical" },
        響く: { 読み方: ['ひびく'], form: '五段動詞、自動詞', 意味: "to resound; to have an effect; to make an impression" },
        基本: { 読み方: ['きほん'], form: '名詞、の形容詞', 意味: "basics; basis; foundation; fundamentals" },

        // Unit 2_2 Sankout
        漠然: { 読み方: ['ばくぜん'], form: 'たる形容詞、と副詞', 意味: "ambiguous; obscure; vague" },
        思い巡らせる: { 読み方: ['おもいめぐらせる'], form: '一段動詞', 意味: "to think over; to speculate; to mull over" },
        あからさま: { 読み方: [''], form: 'な形容詞', 意味: "obviously; overtly; openly; direct; straightforward" },
        決め込む: { 読み方: ['きめこむ'], form: '五段動詞、他動詞', 意味: "to persist in doing; to do intentionally" },
        収まる: { 読み方: ['おさまる'], form: '五段動詞、自動詞', 意味: "to be settled; to calm down; to subside" },
        子供ながrに: { 読み方: ['こどもながらに'], form: '表現', 意味: "even as a child" },
        一連: { 読み方: ['いちれん'], form: '名詞、のけいようし', 意味: "series; a series of" },
        意気揚々: { 読み方: ['いきようよう'], form: 'たる形容詞、と副詞', 意味: "trimphant(ly), in high and proud spirits" },
        決めつける: { 読み方: ['きめつける'], form: '一段動詞、他動詞', 意味: "to stereotype; to decide prematurely" },
        常に: { 読み方: ['つねに'], form: '副詞', 意味: "always; constantly" },
        
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
        こえる: { 読み方: ['越える'], form: '一段動詞、他動詞', 意味: "to surpass; to cross over" },
        どうろ: { 読み方: ['道路'], form: '名詞', 意味: "road; highway" },
        まがる: { 読み方: ['曲がる'], form: '五段動詞、自動詞', 意味: "to turn; to bend; to curve" },
        たに: { 読み方: ['谷'], form: '名詞', 意味: "valley" },
        てんらく: { 読み方: ['転落'], form: '名詞、する動詞、自動詞', 意味: "fall; tumble; plunge" },
        かいかん: { 読み方: ['快感'], form: '名詞', 意味: "pleasant feeling; pleasant sensation; pleasure" },
        はっけん: { 読み方: ['発見'], form: '名詞、する動詞、他動詞', 意味: "discovery; detection; finding" },
        あぶない: { 読み方: ['危ない'], form: 'い形容詞', 意味: "dangerous; perilous; risky; hazardous" },
        いのちしらず: { 読み方: ['命知らず'], form: '名詞、の形容詞、な形容詞', 意味: "recklessness; daredevil; rashness" },
        あたま: { 読み方: ['頭'], form: '名詞', 意味: "head; brains; intellect" },
        そうぞう: { 読み方: ['想像'], form: '名詞、する動詞、他動詞', 意味: "imagination; supposition" },
        

        // Unit 2_1
        ちゅうしゃじょう: { 読み方: ['駐車場'], form: '名詞', 意味: "parking lot" },
        ちゅうねん: { 読み方: ['中年'], form: '名詞、の形容詞', 意味: "middle-age" },
        ひやけ: { 読み方: ['日焼け'], form: '名詞、する動詞、自動詞', 意味: "sunburn; suntan" },
        かんそ: { 読み方: ['簡素'], form: 'な形容詞、名詞', 意味: "modest; simple; plain" },
        いふく: { 読み方: ['衣服'], form: '名詞', 意味: "clothes" },
        かんする: { 読み方: ['（〜に）関する'], form: 'するどうし', 意味: "to concern; to be related" },
        しみん: { 読み方: ['市民'], form: '名詞', 意味: "citizen; townsfolk" },
        みわけ: { 読み方: ['見分け'], form: '名詞', 意味: "distinction" },
        きんがく: { 読み方: ['金額'], form: '名詞', 意味: "amount of money; sum of money" },
        げんてい: { 読み方: ['限定'], form: '名詞、する動詞、の形容詞', 意味: "limit; restriction" },
        もとめる: { 読み方: ['求める'], form: '一段動詞、他動詞', 意味: "to want; to wish for; to request" },
        やく: { 読み方: ['焼く'], form: '五段動詞、他動詞', 意味: "to burn; to heat; to grill" }, 
        におい: { 読み方: ['匂い'], form: '名詞', 意味: "scent; aroma" },
        どうじょう: { 読み方: ['同情'], form: '名詞、する動詞、自動詞', 意味: "sympathy; compassion; pity" },
        さつ: { 読み方: ['札'], form: '名詞', 意味: "banknote; bill; paper money" },
        ておくれ: { 読み方: ['手遅れ'], form: '名詞', 意味: "being too late; losing one's final chance" },

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
        峠: { 読み方: ['とうげ'], form: '名詞', 意味: "mountain peak" },
        険しい: { 読み方: ['けわしい'], form: 'い形容詞', 意味: "steep; grim" },
        誤る: { 読み方: ['あやまる'], form: '五段動詞、他動詞', 意味: "to make a mistake (in); to commit an error; to be wrong" },
        恐怖: { 読み方: ['きょうふ'], form: '名詞、する動詞', 意味: "fear; dread; dismay; terror; horror" },
        標識: { 読み方: ['ひょうしき'], form: '名詞', 意味: "sign; mark; flag" },

        // Unit 2_1
        滞在: { 読み方: ['たいざい'], form: '名詞、する動詞、自動詞', 意味: "stay" },
        髪: { 読み方: ['かみ'], form: '名詞', 意味: "hair (on the head)" },
        服装: { 読み方: ['ふくそう'], form: '名詞', 意味: "attire; garment" },
        お腹: { 読み方: ['おなか'], form: '名詞', 意味: "belly; stomach" },
        街角: { 読み方: ['まちかど'], form: '名詞', 意味: "street corner" },
        小銭: { 読み方: ['こぜに'], form: '名詞', 意味: "small change; coins" },
        援助: { 読み方: ['えんじょ'], form: '名詞、する動詞、他動詞', 意味: "assistance; aid; support" },
        漂う: { 読み方: ['ただよう'], form: '五段動詞、自動詞', 意味: "to drift; to float; to waft (e.g. a scent)" },
        訴える: { 読み方: ['うったえる'], form: '一段動詞、他動詞', 意味: "to bring to (someone's attention); to appeal to (reason, emotions, etc.); to play on (one's sympathies); to sue" },
        企画力: { 読み方: ['きかくりょく'], form: '名詞', 意味: "planning ability" },
        財布: { 読み方: ['さいふ'], form: '名詞', 意味: "wallet; handbag; purse" },
        浮かぶ: { 読み方: ['うかぶ'], form: '五段動詞', 意味: "to float; to be suspended" },



        // : { 読み方: [''], form: '', 意味: "" },
    }
}

export default kanji;