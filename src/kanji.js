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
        こえる: { 読み方: ['越える'], form: '一段動詞、他動詞', 意味: "to cross over; to surpass" },
        どうろ: { 読み方: ['道路'], form: '名詞', 意味: "road; highway" },
        まがる: { 読み方: ['曲がる'], form: '五段動詞、自動詞', 意味: "to bend; to curve; to turn" },
        たに: { 読み方: ['谷'], form: '名詞', 意味: "valley" },
        てんらく: { 読み方: ['転落'], form: '名詞、する動詞、自動詞', 意味: "fall; tumble; plunge" },
        はっけん: { 読み方: ['発見'], form: '名詞、する動詞、他動詞', 意味: "discovery; finding" },
        あぶない: { 読み方: ['危ない'], form: 'い形容詞', 意味: "dangerous; risky; hazardous; perilous" },
        いのちしらず: { 読み方: ['命知らず'], form: '名詞、の形容詞、な形容詞', 意味: "recklessness; daredevilry; rashness" },
        あたま: { 読み方: ['頭'], form: '名詞', 意味: "head; mind; brains; intellect" },
        そうぞう: { 読み方: ['想像'], form: '名詞、する動詞、他動詞', 意味: "imagination; supposition" },
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

        // : { 読み方: [''], form: '', 意味: "" },
    }
}

export default kanji;