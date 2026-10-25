// データベース
const db = {
  // 主語 (既存21 + 新規15)
  subject: [
    "人生", "努力", "夢", "時間", "孤独", "挑戦",
    "未来", "過去", "希望", "言葉", "信念", "自分",
    "愛", "失敗", "成功", "迷い", "涙", "絆", "運命", "勇気", "覚悟",
    // ここから追加
    "青春", "命", "才能", "後悔", "真実", "嘘", "信頼", 
    "裏切り", "成長", "日常", "記憶", "情熱", "決断", "自由", "限界"
  ],

  // 比喩 (既存25 + 新規15)
  metaphor: [
    "旅", "戦い", "物語", "光", "影", "積み重ね",
    "選択", "種", "川の流れ", "嵐", "道", "炎",
    "鏡", "橋","羅針盤", "階段", "星空", "荒野", "翼", "キャンバス", "砂時計", "雨", "剣", "パズル", "海",
    // ここから追加
    "迷路", "航海", "舞台", "歯車", "結晶", "星屑", "深淵", 
    "太陽", "鎖", "鍵", "扉", "夜明け", "幻", "地図", "足跡"
  ],

  // 理由フレーズ (既存18 + 新規10)
  reason: [
    "未来をつくるからだ",
    "自分を変えるからだ",
    "止まれば終わるからだ",
    "それだけが本物を育てるからだ",
    "誰かの支えになるからだ",
    "今を生きることに意味があるからだ",
    "諦めた先には何も残らないからだ",
    "すべての経験が糧になるからだ",
    "信じた道だけが開けるからだ",
    "深く考えた者だけが先へ進めるからだ",
    "逃げ続けても現実は変わらないからだ",
    "真剣に向き合ったことは消えないからだ",
    "新しい景色を見せてくれるからだ",
    "本当の自分を呼び覚ますからだ",
    "何度でもやり直せるからだ",
    "その痛みがいつか優しさに変わるからだ",
    "限界を決めるのは自分だからだ",
    "誰の真似でもないからだ",
    // ここから追加
    "まだ見ぬ世界に出会うためだ",
    "自らの手で切り拓くしかないからだ",
    "失ったものの大きさを知るためだ",
    "答えは常に自分の中にあるからだ",
    "過去を乗り越えた証となるからだ",
    "暗闇の中でこそ光は輝くからだ",
    "それが明日を生きる理由になるからだ",
    "後悔さえも抱きしめて進むためだ",
    "どんな結末も自分の物語の一部だからだ",
    "不完全であることこそが美しいからだ"
  ],

  // 感情フレーズ (既存18 + 新規10)
  emotion: [
    "ときに苦しいが",
    "迷いながらも",
    "決して簡単ではないが",
    "恐れを抱えながらも",
    "傷ついてなお",
    "答えが見えなくとも",
    "誰もわかってくれなくても",
    "夜が長く感じられても",
    "心が折れそうになっても",
    "孤独を感じるときでも",
    "前が霞んで見えなくても",
    "焦りに駆られるときも",
    "何度つまずいても",
    "周りに笑われようとも",
    "手探りの状態でも",
    "理不尽に打ちのめされても",
    "涙が止まらなくとも",
    "泥まみれになっても",
    // ここから追加
    "どうしようもなく虚しくとも",
    "絶望の淵に立たされても",
    "言葉を失うような夜も",
    "すべてを投げ出したくなっても",
    "先が見えず立ちすくむときも",
    "呼吸さえ苦しいと感じる日も",
    "自分自身を信じられなくとも",
    "世界のすべてが敵に見えても",
    "声が届かないと悟ったときも",
    "どれほど遠回りをしようとも"
  ],

  // 動詞フレーズ (既存18 + 新規10)
  verb: [
    "進み続ける",
    "乗り越えていく",
    "問い続ける",
    "磨かれていく",
    "積み上げられていく",
    "形を変えながらも続く",
    "静かに育っていく",
    "やがて実を結ぶ",
    "深く根を張っていく",
    "一歩ずつ前進する",
    "その意味を問わずにはいられない",
    "自分の色を纏っていく",
    "高く飛躍する",
    "確かな軌跡を描く",
    "色鮮やかに染まっていく",
    "静かに燃え続ける",
    "新たな扉を叩く",
    "足跡を力強く刻んでいく",
    // ここから追加
    "新たな色を描き出す",
    "確かな熱を帯びていく",
    "静寂の中で響き渡る",
    "誰かの道を照らし出す",
    "ただそこにあるだけで美しい",
    "終わりのない問いを紡ぐ",
    "見えない糸で繋がっていく",
    "魂の奥底で息づいている",
    "決して消えない灯火となる",
    "鮮烈な記憶として刻まれる"
  ],

  // 形容表現 (既存18 + 新規10)
  adjective: [
    "静かな", "果てしない", "不確かな", "小さな",
    "重く長い", "鋭くも温かい", "終わりのない",
    "目に見えない", "ゆっくりとした", "眩しいほどの",
    "折れそうなほど細い", "誰も知らない",
    "残酷なほど美しい","泥臭くも尊い",
    "揺るぎない","途方もない","一瞬の","名もなき",
    // ここから追加
    "儚くも力強い", "目を背けたくなるほどリアルな",
    "決して色褪せない", "氷のように冷たく、炎のように熱い",
    "無慈悲で優しい", "息を呑むほどに純粋な",
    "ガラスのように繊細な", "血の通った",
    "どうしようもなく愛おしい", "底知れない"
  ],

  // 結論フレーズ (既存18 + 新規10)
  conclusion: [
    "それでも前に進め",
    "だからこそ価値がある",
    "そこに意味がある",
    "だから美しい",
    "それが生きるということだ",
    "諦めないことが答えだ",
    "立ち止まるな",
    "それを忘れるな",
    "深く受け止めて歩け",
    "だからこそ、今を大切にしろ",
    "その重さを誇れ",
    "それが本当の強さだ",
    "胸を張って生きろ",
    "その一歩を愛せ",
    "だからこそ面白い",
    "恐れずに飛び込め",
    "迷わずに行け",
    "すべては自分次第だ",
    // ここから追加
    "だから、今はただ進め",
    "その痛みを決して忘れるな",
    "それを抱きしめて生きろ",
    "それでも必ず朝は来る",
    "すべてを受け入れ、前を向け",
    "不恰好でも、それが君の証だ",
    "立ち上がった数が本当の強さだ",
    "後悔すらも味方につけろ",
    "だからこそ、君は美しい",
    "その先にある景色を信じろ"
  ]
};

// 相性（新規追加分もマッピングし、出力の精度と文脈の自然さを向上）
const affinity = {
  "人生":  ["旅", "物語", "川の流れ", "鏡", "道", "橋", "航海", "舞台", "迷路", "地図"],
  "努力":  ["積み重ね", "戦い", "炎", "種", "道", "階段", "歯車", "結晶", "足跡"],
  "夢":    ["光", "道", "種", "橋", "物語", "星空", "翼", "星屑", "幻", "夜明け"],
  "時間":  ["川の流れ", "旅", "積み重ね", "影", "物語", "砂時計", "星空", "深淵"],
  "孤独":  ["影", "旅", "鏡", "嵐", "光", "荒野", "深淵", "鎖", "夜明け"],
  "挑戦":  ["戦い", "嵐", "炎", "橋", "選択", "荒野", "扉", "航海", "剣"],
  "未来":  ["光", "道", "橋", "種", "選択", "キャンバス", "夜明け", "地図", "扉"],
  "過去":  ["物語", "影", "鏡", "川の流れ", "積み重ね", "足跡", "鎖", "記憶"],
  "希望":  ["光", "種", "橋", "道", "炎", "夜明け", "星屑", "鍵", "羅針盤"],
  "言葉":  ["光", "炎", "鏡", "物語", "種", "剣", "鍵", "結晶"],
  "信念":  ["炎", "道", "積み重ね", "戦い", "光", "剣", "羅針盤", "太陽", "鎖"],
  "自分":  ["物語", "旅", "鏡", "選択", "道", "パズル", "迷路", "深淵", "キャンバス"],
  "愛":    ["光", "炎", "鏡", "星空", "雨", "橋", "海", "太陽", "鎖", "結晶"],
  "失敗":  ["影", "種", "階段", "荒野", "雨", "傷跡", "迷路", "歯車", "足跡"],
  "成功":  ["光", "階段", "キャンバス", "翼", "星空", "太陽", "結晶", "夜明け"],
  "迷い":  ["荒野", "嵐", "羅針盤", "影", "砂時計", "パズル", "迷路", "霧", "幻", "地図"],
  "涙":    ["川の流れ", "雨", "星空", "鏡", "海", "星屑", "結晶", "深淵"],
  "絆":    ["橋", "光", "物語", "パズル", "海", "鎖", "糸", "結晶"],
  "運命":  ["川の流れ", "キャンバス", "砂時計", "星空", "嵐", "歯車", "迷路", "舞台", "羅針盤"],
  "勇気":  ["炎", "翼", "光", "羅針盤", "剣", "鍵", "扉", "太陽"],
  "覚悟":  ["剣", "炎", "道", "嵐", "選択", "鎖", "扉", "太陽", "鍵"],
  // 新規追加分
  "青春":  ["迷路", "光", "星空", "嵐", "キャンバス", "夜明け", "花火", "幻"],
  "命":    ["炎", "太陽", "砂時計", "海", "星屑", "川の流れ", "深淵", "種"],
  "才能":  ["翼", "剣", "光", "種", "星屑", "結晶", "刃", "キャンバス"],
  "後悔":  ["影", "雨", "砂時計", "鎖", "深淵", "幻", "傷跡"],
  "真実":  ["鏡", "光", "剣", "深淵", "太陽", "鍵", "結晶"],
  "嘘":    ["影", "幻", "仮面", "迷路", "霧", "鏡"],
  "信頼":  ["橋", "光", "羅針盤", "パズル", "結晶", "鍵"],
  "裏切り": ["刃", "嵐", "影", "鏡", "深淵", "雨"],
  "成長":  ["階段", "種", "脱皮", "翼", "旅", "足跡", "歯車"],
  "日常":  ["川の流れ", "歯車", "積み重ね", "キャンバス", "砂時計", "パズル"],
  "記憶":  ["物語", "鏡", "星屑", "影", "砂時計", "足跡", "深淵"],
  "情熱":  ["炎", "太陽", "嵐", "翼", "剣", "航海"],
  "決断":  ["選択", "扉", "鍵", "剣", "道", "羅針盤", "橋"],
  "自由":  ["翼", "空", "海", "荒野", "キャンバス", "光", "地図"],
  "限界":  ["壁", "扉", "鎖", "荒野", "深淵", "迷路"]
};

/* ============================================================
   3. 文法テンプレート（25種類 + 構造追加）
============================================================ */
const templates = [
  // ─── シンプル系 ───
  (w) => `${w.s}は${w.m}だ。\n${w.r}`,
  (w) => `${w.s}とは${w.m}のようなものだ。\n${w.r}`,
  (w) => `${w.s}は${w.e}、それでも${w.m}のように続く。`,
  (w) => `${w.s}に正解はない。\nだがそれは${w.m}だ。\n${w.c}`,
  (w) => `${w.s}は${w.a}${w.m}だ。\n${w.c}`,

  // ─── 感情スタート系 ───
  (w) => `${w.e}、${w.s}は${w.v}ものだ。`,
  (w) => `${w.e}、それでも${w.s}は${w.m}のように${w.v}。`,
  (w) => `${w.e}、${w.s}は${w.a}${w.v}。`,

  // ─── 問いかけ系 ───
  (w) => `${w.s}とは何か。\nそれは${w.m}だ。\n${w.r}`,
  (w) => `${w.s}の本質とは何だろう。\nそれは${w.a}${w.m}の中にある。\n${w.c}`,
  (w) => `あなたにとって${w.s}とは何か。\n${w.m}のように、ただ${w.v}。`,

  // ─── 動詞フレーズ中心系 ───
  (w) => `${w.s}は${w.m}のように、${w.v}。\n${w.c}`,
  (w) => `${w.s}は${w.a}${w.m}の中で、${w.v}。`,
  (w) => `${w.s}は${w.e}、\nそれでも${w.m}のごとく${w.v}。`,

  // ─── 結論強調系 ───
  (w) => `${w.s}を恐れるな。\nそれは${w.a}${w.m}だ。\n${w.c}`,
  (w) => `${w.s}はいつも${w.m}だ。\n${w.e}、${w.c}`,
  (w) => `${w.s}の重さを知れ。\nそれは${w.a}${w.m}だ。\n${w.c}`,
  (w) => `${w.s}を疑うな。\nそれは${w.m}のように、あなたの中で${w.v}。`,

  // ─── 対比・逆説系 ───
  (w) => `${w.s}は一見${w.m}に映る。\nしかし${w.e}、\nそれこそが本物だ。`,
  (w) => `輝くだけが${w.s}ではない。\n${w.a}${w.m}の中にこそ、真実がある。\n${w.c}`,
  (w) => `誰もが${w.s}を語る。\nだが本当に${w.s}と向き合うとは、\n${w.m}の重さを背負うことだ。`,

  // ─── 詩的・文語調系 ───
  (w) => `${w.s}は${w.m}に似ている。\n${w.e}、なおも${w.v}こと。\nそれが人間というものだ。`,
  (w) => `${w.a}${w.s}の先には、${w.m}がある。\n${w.c}`,
  (w) => `${w.s}を${w.m}に変えるのは、\n${w.e}それでも${w.v}意志だ。`,
  (w) => `${w.s}は${w.a}${w.m}のように${w.v}。\n${w.e}、${w.c}`
];

/* ============================================================
   4. 文法バリデーション（精度を高めるための新規ルールを追加）
============================================================ */
const grammarRules = [
  {
    id:    "CONJ_DEARI_KARA",
    label: "「であり、〜からだ」接続の破綻",
    test:  (q)    => /であり、[^。\n]+からだ/.test(q)
  },
  {
    id:    "DUP_TOKINI",
    label: "「時に」と「ときに」の重複",
    test:  (q)    => q.split("\n").some(
                       line => /時に/.test(line) && /ときに/.test(line)
                     )
  },
  {
    id:    "DUP_SHIZUKA",
    label: "「静かな」と「静かに」の重複",
    test:  (q)    => /静かな[^。\n]*静かに|静かに[^。\n]*静かな/.test(q)
  },
  {
    id:    "DOUBLE_GYAKU",
    label: "「しかし〜が、」逆接の二重",
    test:  (q)    => /しかし[^。\n]*が、/.test(q)
  },
  {
    id:    "TRIPLE_WA",
    label: "「は」の一文中三重複",
    test:  (q)    => q.split("\n").some(
                       line => (line.match(/は/g) || []).length >= 3
                     )
  },
  {
    id:    "TRIPLE_NAI",
    label: "「ない」の多用（3回以上）",
    test:  (q)    => (q.match(/ない/g) || []).length >= 3
  },
  {
    id:    "TRIPLE_SUBJECT",
    label: "主語の過剰出現（3回以上）",
    test:  (q, w) => (q.split(w.s).length - 1) >= 3
  },
  {
    id:    "DOUBLE_VERB_SHIZUKA",
    label: "動詞DB「静かに〜」とテンプレート内「静かに」の衝突",
    test:  (q)    => (q.match(/静かに/g) || []).length >= 2
  },
  {
    id:    "LONG_LINE",
    label: "1行が60文字を超えている",
    test:  (q)    => q.split("\n").some(line => line.length > 60)
  },
  // --- ここから追加ルール ---
  {
    id:    "DOUBLE_NOYOUNA",
    label: "「のような・のように」の重複による不自然な比喩",
    test:  (q)    => (q.match(/のよう[な|に]/g) || []).length >= 2
  },
  {
    id:    "DUP_KARA_DA",
    label: "「からだ」の語尾重複による不自然なリズム",
    test:  (q)    => (q.match(/からだ/g) || []).length >= 2
  },
  {
    id:    "REPEATED_NOUNS",
    label: "主語と比喩など、偶然の一致による同一単語の連続",
    test:  (q, w) => w.s === w.m // （例: 主語「光」比喩「光」になるのを防ぐ）
  }
];

/**
 * 名言の文法チェック
 * @param {string} quote  - 生成された名言文字列
 * @param {Object} words  - { s, m, r, e, v, a, c }
 * @returns {{ valid: boolean, violations: {id,label}[] }}
 */
function validateGrammar(quote, words) {
  const violations = [];
  for (const rule of grammarRules) {
    if (rule.test(quote, words)) {
      violations.push({ id: rule.id, label: rule.label });
    }
  }
  return { valid: violations.length === 0, violations };
}

/* ============================================================
   5. 生成ロジック（文法チェック + リトライ付き）
============================================================ */
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function pickMetaphor(subject) {
  const preferred = affinity[subject];
  if (preferred && Math.random() < 0.78) {
    return pick(preferred);
  }
  return pick(db.metaphor);
}

const MAX_RETRY = 20;

function buildQuote() {
  let lastResult = null;

  for (let attempt = 1; attempt <= MAX_RETRY; attempt++) {
    const s = pick(db.subject);
    const m = pickMetaphor(s);
    const r = pick(db.reason);
    const e = pick(db.emotion);
    const v = pick(db.verb);
    const a = pick(db.adjective);
    const c = pick(db.conclusion);
    const words = { s, m, r, e, v, a, c };

    const tmpl  = pick(templates);
    const quote = tmpl(words);
    const check = validateGrammar(quote, words);

    lastResult = { quote, attempt, ...check };

    if (check.valid) {
      console.log(
        `%c[文法OK] ${attempt}回目で生成`,
        "color:#4caf7d;font-weight:bold",
        "\n" + quote.replace(/\n/g, " ／ ")
      );
      return lastResult;
    }

    console.warn(
      `[文法NG] attempt ${attempt}/${MAX_RETRY}: ${check.violations.map(v=>v.label).join(" / ")}`,
      "\n→", quote.replace(/\n/g, " ／ ")
    );
  }

  // フォールバック（通常は到達しない）
  console.error("[文法NG多発] フォールバックで返します");
  return lastResult;
}

/* ============================================================
   5. タイピングアニメーション
============================================================ */
let typing = null;            
let currentQuote = "";        

function typeQuote(text, el, cursor) {
  // 前回のタイピングを即中断
  if (typing) clearTimeout(typing);

  el.classList.remove("visible");
  el.textContent = "";
  el.appendChild(cursor);   // カーソルをリセット

  const chars = [...text];  // サロゲートペア対応
  let i = 0;

  function step() {
    if (i < chars.length) {
      // カーソルの直前にテキストを挿入
      el.insertBefore(document.createTextNode(chars[i]), cursor);
      i++;
      // 句読点や改行のあとは少し間を取る
      const ch = chars[i - 1];
      const delay = (ch === "。" || ch === "、" || ch === "\n") ? 90 : 42;
      typing = setTimeout(step, delay);
    } else {
      // タイピング完了 → カーソルを消す（点滅カーソルは表示したまま）
      typing = null;
    }
  }

  // フェードインしてからタイピング開始
  setTimeout(() => {
    el.classList.add("visible");
    step();
  }, 200);
}

/* ============================================================
   6. UI制御
============================================================ */
const btnGenerate  = document.getElementById("btnGenerate");
const btnCopy      = document.getElementById("btnCopy");
const quoteText    = document.getElementById("quoteText");
const cursor       = document.getElementById("cursor");
const grammarBadge = document.getElementById("grammarBadge");

function generate() {
  const result = buildQuote();   // { quote, attempt, valid, violations }
  currentQuote = result.quote;

  // ボタン一時無効化（連打防止）
  btnGenerate.disabled = true;
  setTimeout(() => { btnGenerate.disabled = false; }, 1600);

  // タイピング表示
  typeQuote(result.quote, quoteText, cursor);

  // ── 文法バッジ更新 ──────────────────────────
  grammarBadge.className = "";          // クラスをリセット
  grammarBadge.textContent = "";

  if (result.valid) {
    grammarBadge.textContent =
      result.attempt === 1
        ? "名言Gen"
        : `名言Gen`;
    setTimeout(() => {
      grammarBadge.classList.add("show", "ok");
    }, 300);
  } else {
    const labels = result.violations.map(v => v.label).join(" / ");
    grammarBadge.textContent = `△ ${labels}`;
    setTimeout(() => {
      grammarBadge.classList.add("show", "warn");
    }, 300);
  }
  // ─────────────────────────────────────────────

  // コピーボタンを表示
  btnCopy.classList.add("show");
  btnCopy.classList.remove("copied");
  btnCopy.textContent = "✦ \u00A0コピー";
}

function copyQuote() {
  if (!currentQuote) return;

  navigator.clipboard.writeText(currentQuote).then(() => {
    btnCopy.classList.add("copied");
    btnCopy.textContent = "✔ \u00A0コピーしました";

    // トースト表示
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      btnCopy.classList.remove("copied");
      btnCopy.textContent = "✦ \u00A0コピー";
    }, 2200);
  });
}

/* ── 生成ボタンのホバー光源エフェクト ── */
btnGenerate.addEventListener("mousemove", (e) => {
  const r = btnGenerate.getBoundingClientRect();
  btnGenerate.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
  btnGenerate.style.setProperty("--my", ((e.clientY - r.top)  / r.height * 100) + "%");
});

/* ── 初回：ページロード時に自動生成 ── */
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(generate, 600);
});
