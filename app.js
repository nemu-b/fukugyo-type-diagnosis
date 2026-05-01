const questions = [
  {
    text: "自由な時間が2時間できたら、まず何をしたいですか。",
    category: "行動パターン",
    options: [
      { label: "静かな場所で作業を片づける", scores: { steady: 3, stable: 1 } },
      { label: "新しいアイデアを試してみる", scores: { creative: 3, growth: 1 } },
      { label: "人に会うか、誰かの相談に乗る", scores: { people: 3, starter: 1 } },
      { label: "気になっていた学習を進める", scores: { growth: 3, stable: 1 } },
    ],
  },
  {
    text: "副業で一番避けたいことに近いものはどれですか。",
    category: "不安の方向",
    options: [
      { label: "毎回やることが変わりすぎる", scores: { steady: 3, stable: 1 } },
      { label: "自分らしさを出せない", scores: { creative: 3 } },
      { label: "ひとりで全部抱える", scores: { people: 3 } },
      { label: "成長につながらない作業だけ続く", scores: { growth: 3, starter: 1 } },
    ],
  },
  {
    text: "人からよく頼まれやすいことは何ですか。",
    category: "強み",
    options: [
      { label: "文章の確認や細かい整理", scores: { steady: 3, stable: 1 } },
      { label: "デザイン、企画、見せ方の相談", scores: { creative: 3, growth: 1 } },
      { label: "説明、紹介、場の調整", scores: { people: 3 } },
      { label: "調べものや新しい方法の検証", scores: { growth: 3 } },
    ],
  },
  {
    text: "理想の副業ペースに近いものはどれですか。",
    category: "時間設計",
    options: [
      { label: "毎日少しずつ積み上げる", scores: { steady: 3, stable: 1 } },
      { label: "集中できる日に一気に作る", scores: { creative: 3, growth: 1 } },
      { label: "予定を合わせて人と進める", scores: { people: 3 } },
      { label: "まず小さく試して合うものを残す", scores: { starter: 3, growth: 1 } },
    ],
  },
  {
    text: "新しいことを始めるとき、最初に欲しいものは何ですか。",
    category: "始め方",
    options: [
      { label: "手順がまとまったチェックリスト", scores: { steady: 3 } },
      { label: "完成イメージや参考例", scores: { creative: 3 } },
      { label: "相談できる相手やコミュニティ", scores: { people: 3 } },
      { label: "学習ロードマップと教材", scores: { growth: 3, stable: 1 } },
    ],
  },
  {
    text: "成果が出たとき、どんな状態が一番うれしいですか。",
    category: "動機",
    options: [
      { label: "安定して同じ成果を出せる", scores: { steady: 3, stable: 2 } },
      { label: "自分の作品や発信が評価される", scores: { creative: 3 } },
      { label: "人の役に立った実感がある", scores: { people: 3 } },
      { label: "できることが増えて単価も上がる", scores: { growth: 3 } },
    ],
  },
  {
    text: "今の生活に一番入れやすい副業はどれですか。",
    category: "相性",
    options: [
      { label: "在宅で完結する作業", scores: { steady: 3, starter: 1 } },
      { label: "スマホやPCで作れるコンテンツ", scores: { creative: 3 } },
      { label: "会話や紹介を使う仕事", scores: { people: 3 } },
      { label: "資格やスキルを活かす仕事", scores: { stable: 3, growth: 1 } },
    ],
  },
  {
    text: "お金を稼ぐ前に、どの準備なら続けられそうですか。",
    category: "準備",
    options: [
      { label: "実績になるサンプルを少しずつ作る", scores: { steady: 2, creative: 1 } },
      { label: "SNSやポートフォリオを整える", scores: { creative: 3 } },
      { label: "人に話して反応をもらう", scores: { people: 3, starter: 1 } },
      { label: "講座や本で基礎を固める", scores: { growth: 2, stable: 2 } },
    ],
  },
  {
    text: "仕事で褒められるとしたら、どんな言葉がしっくりきますか。",
    category: "評価軸",
    options: [
      { label: "正確で安心できる", scores: { steady: 3, stable: 1 } },
      { label: "発想や表現がいい", scores: { creative: 3 } },
      { label: "話しやすくて任せやすい", scores: { people: 3 } },
      { label: "吸収が早くて伸びる", scores: { growth: 3, starter: 1 } },
    ],
  },
  {
    text: "副業で使いたい得意分野はどれですか。",
    category: "得意分野",
    options: [
      { label: "入力、整理、調査、文章補助", scores: { steady: 3 } },
      { label: "デザイン、動画、文章、企画", scores: { creative: 3 } },
      { label: "接客、営業、相談、説明", scores: { people: 3 } },
      { label: "IT、分析、マーケティング、専門知識", scores: { growth: 3, stable: 1 } },
    ],
  },
  {
    text: "収入の増やし方として、一番納得感があるものはどれですか。",
    category: "収益観",
    options: [
      { label: "小さな案件を安定して積む", scores: { steady: 3, starter: 1 } },
      { label: "作品や発信を育てて広げる", scores: { creative: 3 } },
      { label: "信頼関係から紹介を増やす", scores: { people: 3 } },
      { label: "スキルを磨いて単価を上げる", scores: { growth: 3, stable: 1 } },
    ],
  },
  {
    text: "最初の1万円を目指すなら、どの方法が近いですか。",
    category: "初速",
    options: [
      { label: "タスク型の案件を受ける", scores: { steady: 3, starter: 2 } },
      { label: "制作物を作って出品する", scores: { creative: 3 } },
      { label: "知人やSNSで相談を受ける", scores: { people: 3 } },
      { label: "学びながら資格や専門案件を狙う", scores: { stable: 3, growth: 2 } },
    ],
  },
  {
    text: "長く続けるうえで大切にしたいことは何ですか。",
    category: "継続条件",
    options: [
      { label: "生活リズムを崩さないこと", scores: { steady: 3, stable: 1 } },
      { label: "飽きずに工夫できること", scores: { creative: 3, starter: 1 } },
      { label: "人とのつながりがあること", scores: { people: 3 } },
      { label: "将来のキャリアに残ること", scores: { growth: 3, stable: 2 } },
    ],
  },
  {
    text: "いま一番近い気持ちはどれですか。",
    category: "現在地",
    options: [
      { label: "まずは無理なく始めたい", scores: { starter: 3, steady: 1 } },
      { label: "好きなことを収入につなげたい", scores: { creative: 3 } },
      { label: "人に喜ばれる副業がしたい", scores: { people: 3 } },
      { label: "本気でスキルを身につけたい", scores: { growth: 3, stable: 1 } },
    ],
  },
  {
    text: "半年後、どんな状態になっていたいですか。",
    category: "ゴール",
    options: [
      { label: "月に数万円を安定して積み上げている", scores: { steady: 3, starter: 1 } },
      { label: "自分の発信や作品が増えている", scores: { creative: 3 } },
      { label: "相談や紹介で仕事が生まれている", scores: { people: 3 } },
      { label: "資格や専門スキルで選択肢が増えている", scores: { stable: 3, growth: 2 } },
    ],
  },
];

const resultTypes = {
  steady: {
    title: "在宅コツコツ型",
    short: "正確さと継続力で積み上げるタイプ",
    color: "#107c72",
    tags: ["在宅作業", "文章補助", "データ整理"],
    summary:
      "決まった手順を整えながら、着実に成果を出す力があります。最初は小さな案件で実績を作り、作業の型を増やすほど安定しやすいタイプです。",
    strengths: ["丁寧な確認", "習慣化", "納期を守る力"],
    firstSteps: [
      "1週間で作業できる時間帯を固定する",
      "入力、調査、ライティング補助のサンプルを作る",
      "応募文のテンプレートを1つ用意する",
    ],
    offers: [
      ["在宅案件サイト", "小さなタスク案件から始める"],
      ["文章講座", "レビューや記事補助の基礎を学ぶ"],
      ["作業効率ツール", "時間管理とメモを整える"],
    ],
  },
  creative: {
    title: "クリエイティブ型",
    short: "発想と表現で価値を作るタイプ",
    color: "#e56a54",
    tags: ["デザイン", "動画", "SNS発信"],
    summary:
      "人の目に留まる表現や企画を作るのが得意です。最初は完成度より数を出して、反応が良いテーマを育てるほど強みが見えます。",
    strengths: ["企画力", "見せ方", "世界観づくり"],
    firstSteps: [
      "好きなジャンルで制作サンプルを3つ作る",
      "SNSかポートフォリオにまとめる",
      "低単価でも実績になる案件を選ぶ",
    ],
    offers: [
      ["デザイン学習", "制作の基礎と見せ方を固める"],
      ["動画編集講座", "需要のある制作スキルを学ぶ"],
      ["素材サービス", "制作スピードを上げる"],
    ],
  },
  people: {
    title: "対話サポート型",
    short: "人との信頼から仕事を広げるタイプ",
    color: "#426aa1",
    tags: ["相談", "営業", "接客"],
    summary:
      "相手の困りごとを聞き取り、安心してもらう力があります。紹介、オンライン相談、カスタマーサポートなど、人の反応が見える副業と相性が良いタイプです。",
    strengths: ["聞く力", "説明力", "信頼づくり"],
    firstSteps: [
      "身近な人の困りごとを3つ聞いてみる",
      "自分が説明できるテーマを1つ選ぶ",
      "相談、紹介、サポート系の案件を探す",
    ],
    offers: [
      ["営業基礎講座", "提案と聞き取りを学ぶ"],
      ["オンライン相談サービス", "得意分野をメニュー化する"],
      ["コミュニティ", "人との接点を増やす"],
    ],
  },
  growth: {
    title: "スキル投資型",
    short: "学びを収入とキャリアに変えるタイプ",
    color: "#4d8d5b",
    tags: ["IT", "分析", "マーケティング"],
    summary:
      "新しい知識を吸収して、できることを増やすほど伸びるタイプです。最初は学ぶ範囲を絞り、成果物を作りながら単価アップを狙う流れが合っています。",
    strengths: ["学習意欲", "改善力", "専門性"],
    firstSteps: [
      "学ぶ分野を1つだけ決める",
      "30日で見せられる成果物を作る",
      "初心者向け案件で実務経験を積む",
    ],
    offers: [
      ["プログラミング学習", "Web制作や自動化を学ぶ"],
      ["マーケティング講座", "集客と分析の基礎を身につける"],
      ["転職支援サービス", "副業からキャリアにも広げる"],
    ],
  },
  stable: {
    title: "資格・安定型",
    short: "信頼できる肩書きで選択肢を増やすタイプ",
    color: "#d99a25",
    tags: ["資格", "専門知識", "安定"],
    summary:
      "根拠や信用を大切にしながら、堅実に進めるタイプです。資格、専門講座、実務に近い学習を組み合わせると、自信を持って仕事にしやすくなります。",
    strengths: ["信頼感", "計画性", "責任感"],
    firstSteps: [
      "興味のある資格を3つ比較する",
      "学習期間と費用を見える化する",
      "資格後に使える案件や仕事も同時に調べる",
    ],
    offers: [
      ["資格講座", "学習計画を作って進める"],
      ["キャリア相談", "本業とのつなげ方を整理する"],
      ["専門スクール", "実務に近い課題で学ぶ"],
    ],
  },
  starter: {
    title: "小さく試す副収入型",
    short: "軽く始めて合うものを見つけるタイプ",
    color: "#7b6a45",
    tags: ["初めて", "低リスク", "お試し"],
    summary:
      "最初から大きく決めるより、試しながら続くものを選ぶと動きやすいタイプです。短時間でできる副収入から始め、反応を見て次の一手を選びましょう。",
    strengths: ["柔軟さ", "始める早さ", "試行回数"],
    firstSteps: [
      "興味のある副業を3つだけ選ぶ",
      "各1時間だけ試して疲れ方を見る",
      "続けられたものに1週間だけ集中する",
    ],
    offers: [
      ["初心者向け副業ガイド", "失敗しにくい始め方を確認する"],
      ["ポイント、アンケート", "小さな収入体験を作る"],
      ["クラウドソーシング", "短時間案件を探す"],
    ],
  },
};

const state = {
  current: 0,
  answers: [],
  lastResult: null,
};

const elements = {
  questionScreen: document.querySelector("#question-screen"),
  resultScreen: document.querySelector("#result-screen"),
  progressBar: document.querySelector(".progress-bar"),
  progressText: document.querySelector(".progress-text"),
  installButton: document.querySelector(".install-button"),
  toast: document.querySelector(".toast"),
};

let deferredInstallPrompt = null;
let toastTimer = null;

function renderQuestion() {
  const question = questions[state.current];
  const selectedIndex = state.answers[state.current];
  const questionNumber = state.current + 1;
  const percentage = Math.round((state.current / questions.length) * 100);

  elements.resultScreen.hidden = true;
  elements.questionScreen.hidden = false;
  elements.progressBar.style.width = `${percentage}%`;
  elements.progressText.textContent = `質問 ${questionNumber} / ${questions.length}`;

  elements.questionScreen.innerHTML = `
    <div class="question-meta">
      <span class="pill">${question.category}</span>
      <span class="pill">直感で選択</span>
    </div>
    <h2 class="question-title">${question.text}</h2>
    <div class="option-grid">
      ${question.options
        .map(
          (option, index) => `
            <button
              class="option-button ${selectedIndex === index ? "is-selected" : ""}"
              type="button"
              data-option="${index}"
            >
              ${option.label}
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="tool-actions">
      <button class="secondary-button" type="button" data-action="back" ${
        state.current === 0 ? "disabled" : ""
      }>戻る</button>
      <div class="action-group">
        <button class="ghost-button" type="button" data-action="reset">最初から</button>
        <button class="primary-button" type="button" data-action="next" ${
          selectedIndex === undefined ? "disabled" : ""
        }>${state.current === questions.length - 1 ? "結果を見る" : "次へ"}</button>
      </div>
    </div>
  `;
}

function answerQuestion(optionIndex) {
  state.answers[state.current] = optionIndex;
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }
  showResult();
}

function calculateResult() {
  const totals = Object.keys(resultTypes).reduce((scores, key) => {
    scores[key] = 0;
    return scores;
  }, {});

  state.answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex].options[optionIndex];
    Object.entries(option.scores).forEach(([key, score]) => {
      totals[key] += score;
    });
  });

  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const [primaryKey, topScore] = sorted[0];
  const secondScore = sorted[1]?.[1] ?? 0;
  const fit = Math.min(96, Math.max(68, 72 + topScore * 2 + Math.max(0, topScore - secondScore)));

  return {
    key: primaryKey,
    fit,
    totals,
    sorted,
    type: resultTypes[primaryKey],
  };
}

function showResult() {
  const result = calculateResult();
  state.lastResult = result;
  localStorage.setItem("workstyleDiagnosisResult", JSON.stringify({ key: result.key, fit: result.fit }));

  elements.progressBar.style.width = "100%";
  elements.progressText.textContent = "診断完了";
  elements.questionScreen.hidden = true;
  elements.resultScreen.hidden = false;
  elements.resultScreen.innerHTML = createResultMarkup(result);
}

function createResultMarkup(result) {
  const { type, fit } = result;
  const topThree = result.sorted
    .slice(0, 3)
    .map(([key, score]) => `${resultTypes[key].title}: ${score}`)
    .join(" / ");

  return `
    <div class="result-hero" style="--meter: ${fit}%">
      <div>
        <p class="result-label">あなたの副業タイプ</p>
        <h2 class="result-title">${type.title}</h2>
        <p class="result-summary">${type.summary}</p>
      </div>
      <div class="result-meter" aria-label="相性 ${fit}%">${fit}%</div>
    </div>

    <div class="tag-row">
      ${type.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
    </div>

    <div class="insight-grid">
      <article class="insight-item">
        <h3>強み</h3>
        <p>${type.strengths.join("、")}</p>
      </article>
      <article class="insight-item">
        <h3>向いている方向</h3>
        <p>${type.short}</p>
      </article>
      <article class="insight-item">
        <h3>スコア</h3>
        <p>${topThree}</p>
      </article>
    </div>

    <div class="insight-item">
      <h3>最初の一歩</h3>
      <p>${type.firstSteps.map((step, index) => `${index + 1}. ${step}`).join("<br>")}</p>
    </div>

    <div class="offer-list" aria-label="おすすめリンク">
      ${type.offers
        .map(
          ([title, description], index) => `
            <article class="offer-item accent-${["a", "b", "c"][index]}">
              <div>
                <h3>${title}</h3>
                <p>${description}</p>
              </div>
              <a class="link-button" href="#" data-affiliate-slot="${result.key}-${index + 1}">
                詳細を見る
              </a>
            </article>
          `,
        )
        .join("")}
    </div>

    <div class="share-row">
      <button class="primary-button" type="button" data-action="share">結果をシェア</button>
      <button class="secondary-button" type="button" data-action="x-share">Xで共有</button>
      <button class="secondary-button" type="button" data-action="save-image">画像保存</button>
      <button class="ghost-button" type="button" data-action="reset">もう一度診断</button>
    </div>
  `;
}

function nextQuestion() {
  if (state.answers[state.current] === undefined) {
    showToast("近いものを1つ選んでください。");
    return;
  }
  if (state.current === questions.length - 1) {
    showResult();
    return;
  }
  state.current += 1;
  renderQuestion();
}

function resetDiagnosis() {
  state.current = 0;
  state.answers = [];
  state.lastResult = null;
  renderQuestion();
}

async function shareResult() {
  if (!state.lastResult) return;
  const text = createShareText(state.lastResult);
  const url = location.href.split("#")[0];

  if (navigator.share) {
    try {
      await navigator.share({ title: "副業・働き方タイプ診断", text, url });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  await copyText(`${text}\n${url}`);
  showToast("結果をコピーしました。");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function shareToX() {
  if (!state.lastResult) return;
  const text = encodeURIComponent(createShareText(state.lastResult));
  const url = encodeURIComponent(location.href.split("#")[0]);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
}

function createShareText(result) {
  return `私の副業タイプは「${result.type.title}」でした。相性${result.fit}% #副業診断 #働き方診断`;
}

function saveResultImage() {
  if (!state.lastResult) return;

  const { type, fit } = state.lastResult;
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");

  context.fillStyle = "#f7f8f5";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = type.color;
  context.fillRect(0, 0, canvas.width, 18);

  context.fillStyle = "#ffffff";
  roundRect(context, 70, 70, 1060, 490, 24);
  context.fill();

  context.fillStyle = type.color;
  context.globalAlpha = 0.1;
  context.beginPath();
  context.arc(960, 170, 150, 0, Math.PI * 2);
  context.fill();
  context.globalAlpha = 1;

  context.fillStyle = "#107c72";
  context.font = "700 34px sans-serif";
  context.fillText("3分でわかる副業・働き方タイプ診断", 120, 150);

  context.fillStyle = "#1c2522";
  context.font = "800 68px sans-serif";
  wrapCanvasText(context, type.title, 120, 250, 650, 82);

  context.fillStyle = "#61706a";
  context.font = "400 30px sans-serif";
  wrapCanvasText(context, type.short, 120, 360, 680, 42);

  context.fillStyle = type.color;
  context.font = "800 74px sans-serif";
  context.fillText(`${fit}%`, 900, 290);
  context.font = "700 24px sans-serif";
  context.fillText("相性スコア", 902, 330);

  context.fillStyle = "#1c2522";
  context.font = "700 26px sans-serif";
  context.fillText(type.tags.join("  /  "), 120, 480);

  const link = document.createElement("a");
  link.download = `副業診断-${type.title}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("結果画像を保存しました。");
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight) {
  let line = "";
  let currentY = y;

  for (const char of text) {
    const testLine = line + char;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }

  context.fillText(line, x, currentY);
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = setTimeout(() => {
    elements.toast.hidden = true;
  }, 2600);
}

function handleToolClick(event) {
  const optionButton = event.target.closest("[data-option]");
  if (optionButton) {
    answerQuestion(Number(optionButton.dataset.option));
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const action = actionButton.dataset.action;
  if (action === "back" && state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
  if (action === "next") nextQuestion();
  if (action === "reset") resetDiagnosis();
  if (action === "share") shareResult();
  if (action === "x-share") shareToX();
  if (action === "save-image") saveResultImage();
}

function handleAffiliateClick(event) {
  const link = event.target.closest("[data-affiliate-slot]");
  if (!link) return;
  event.preventDefault();
  showToast("ここはASP承認後にリンクを差し替える枠です。");
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installButton.hidden = false;
  });

  elements.installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    elements.installButton.hidden = true;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!["http:", "https:"].includes(location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      showToast("オフライン機能の準備に失敗しました。");
    });
  });
}

document.addEventListener("click", handleToolClick);
document.addEventListener("click", handleAffiliateClick);
setupInstallPrompt();
registerServiceWorker();
renderQuestion();
