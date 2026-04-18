const VALUES = [
  { id: "acceptance", name: "Acceptance", description: "To be open to and accepting of myself, others, life, etc." },
  { id: "adventure", name: "Adventure", description: "To be adventurous; to actively seek, create, or explore novel or stimulating experiences." },
  { id: "assertiveness", name: "Assertiveness", description: "To respectfully stand up for my rights and request what I want." },
  { id: "authenticity", name: "Authenticity", description: "To be authentic, genuine, real; to be true to myself." },
  { id: "beauty", name: "Beauty", description: "To appreciate, create, nurture, or cultivate beauty in myself, others, the environment, etc." },
  { id: "caring", name: "Caring", description: "To be caring towards myself, others, the environment, etc." },
  { id: "challenge", name: "Challenge", description: "To keep challenging myself to grow, learn, improve." },
  { id: "compassion", name: "Compassion", description: "To act with kindness towards those who are suffering." },
  { id: "connection", name: "Connection", description: "To engage fully in whatever I am doing, and be fully present with others." },
  { id: "contribution", name: "Contribution", description: "To contribute, help, assist, or make a positive difference to myself or others." },
  { id: "conformity", name: "Conformity", description: "To be respectful and obedient of rules and obligations." },
  { id: "cooperation", name: "Cooperation", description: "To be cooperative and collaborative with others." },
  { id: "courage", name: "Courage", description: "To be courageous or brave; to persist in the face of fear, threat, or difficulty." },
  { id: "creativity", name: "Creativity", description: "To be creative or innovative." },
  { id: "curiosity", name: "Curiosity", description: "To be curious, open-minded, and interested; to explore and discover." },
  { id: "encouragement", name: "Encouragement", description: "To encourage and reward behaviour that I value in myself or others." },
  { id: "equality", name: "Equality", description: "To treat others as equal to myself, and vice versa." },
  { id: "excitement", name: "Excitement", description: "To seek, create, and engage in activities that are exciting, stimulating, or thrilling." },
  { id: "fairness", name: "Fairness", description: "To be fair to myself or others." },
  { id: "fitness", name: "Fitness", description: "To maintain or improve my fitness; to look after my physical and mental health and wellbeing." },
  { id: "flexibility", name: "Flexibility", description: "To adjust and adapt readily to changing circumstances." },
  { id: "freedom", name: "Freedom", description: "To live freely; to choose how I live and behave, or help others do likewise." },
  { id: "friendliness", name: "Friendliness", description: "To be friendly, companionable, or agreeable towards others." },
  { id: "forgiveness", name: "Forgiveness", description: "To be forgiving towards myself or others." },
  { id: "fun", name: "Fun", description: "To be fun-loving; to seek, create, and engage in fun-filled activities." },
  { id: "generosity", name: "Generosity", description: "To be generous, sharing, and giving, to myself or others." },
  { id: "gratitude", name: "Gratitude", description: "To be grateful for and appreciative of the positive aspects of myself, others, and life." },
  { id: "honesty", name: "Honesty", description: "To be honest, truthful, and sincere with myself and others." },
  { id: "humour", name: "Humour", description: "To see and appreciate the humorous side of life." },
  { id: "humility", name: "Humility", description: "To be humble or modest; to let my achievements speak for themselves." },
  { id: "industry", name: "Industry", description: "To be industrious, hard-working, dedicated." },
  { id: "independence", name: "Independence", description: "To be self-supportive, and choose my own way of doing things." },
  { id: "intimacy", name: "Intimacy", description: "To open up, reveal, and share myself emotionally or physically in my close personal relationships." },
  { id: "justice", name: "Justice", description: "To uphold justice and fairness." },
  { id: "kindness", name: "Kindness", description: "To be kind, compassionate, considerate, nurturing, or caring towards myself or others." },
  { id: "love", name: "Love", description: "To act lovingly or affectionately towards myself or others." },
  { id: "mindfulness", name: "Mindfulness", description: "To be conscious of, open to, and curious about my here-and-now experience." },
  { id: "order", name: "Order", description: "To be orderly and organized." },
  { id: "open_mindedness", name: "Open-mindedness", description: "To think things through, see things from others' points of view, and weigh evidence fairly." },
  { id: "patience", name: "Patience", description: "To wait calmly for what I want." },
  { id: "persistence", name: "Persistence", description: "To continue resolutely, despite problems or difficulties." },
  { id: "pleasure", name: "Pleasure", description: "To create and give pleasure to myself or others." },
  { id: "power", name: "Power", description: "To strongly influence or wield authority over others, e.g. taking charge, leading, organizing." },
  { id: "reciprocity", name: "Reciprocity", description: "To build relationships in which there is a fair balance of giving and taking." },
  { id: "respect", name: "Respect", description: "To be respectful towards myself or others; to be polite, considerate, and show positive regard." },
  { id: "responsibility", name: "Responsibility", description: "To be responsible and accountable for my actions." },
  { id: "romance", name: "Romance", description: "To be romantic; to display and express love or strong affection." },
  { id: "safety", name: "Safety", description: "To secure, protect, or ensure safety of myself or others." },
  { id: "self_awareness", name: "Self-awareness", description: "To be aware of my own thoughts, feelings, and actions." },
  { id: "self_care", name: "Self-care", description: "To look after my health and wellbeing, and get my needs met." },
  { id: "self_development", name: "Self-development", description: "To keep growing, advancing, or improving in knowledge, skills, character, or life experience." },
  { id: "self_control", name: "Self-control", description: "To act in accordance with my own ideals." },
  { id: "sensuality", name: "Sensuality", description: "To create, explore, and enjoy experiences that stimulate the five senses." },
  { id: "sexuality", name: "Sexuality", description: "To explore or express my sexuality." },
  { id: "spirituality", name: "Spirituality", description: "To connect with things bigger than myself." },
  { id: "skilfulness", name: "Skilfulness", description: "To continually practice and improve my skills, and apply myself fully when using them." },
  { id: "supportiveness", name: "Supportiveness", description: "To be supportive, helpful, encouraging, and available to myself or others." },
  { id: "trust", name: "Trust", description: "To be trustworthy; to be loyal, faithful, sincere, and reliable." }
];

const appEl = document.getElementById("app");

// Single in-memory state tree. Start screen has sessionStarted=false.
let state = createInitialState();
render();

function createInitialState() {
  return {
    sessionStarted: false,
    mode: "start",
    roundLabel: "",
    instruction: "",
    activePile: [],
    activeIndex: 0,
    veryPile: [],
    kindOfPile: [],
    notAtAllPile: [],
    rescuePassMoved: 0,
    rescuePassCount: 0,
    rescueWarning: "",
    reduction: null,
    finalTopValues: [],
    finalBottomValues: []
  };
}

function beginSession() {
  state = createInitialState();
  state.sessionStarted = true;
  state.mode = "round1";
  state.roundLabel = "Round 1: Initial Sort";
  state.instruction = "Rate each value as Very, Kind of, or Not at all important to you right now.";
  state.activePile = shuffle([...VALUES]);
  state.activeIndex = 0;
  render();
}

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function handleRound1Choice(choice) {
  const current = state.activePile[state.activeIndex];
  if (!current) return;

  if (choice === "very") state.veryPile.push(current);
  if (choice === "kind") state.kindOfPile.push(current);
  if (choice === "not") state.notAtAllPile.push(current);

  state.activeIndex += 1;

  if (state.activeIndex >= state.activePile.length) {
    preparePostRound1();
    return;
  }

  render();
}

function preparePostRound1() {
  const veryNeed = Math.max(0, 3 - state.veryPile.length);
  const notNeed = Math.max(0, 3 - state.notAtAllPile.length);

  if (veryNeed === 0 && notNeed === 0) {
    startTopFlow();
    return;
  }

  startRescueRound(true);
}

// Rescue rounds revisit Kind of cards until minimums are met or rescue cannot progress.
function startRescueRound(firstPass = false) {
  state.mode = "rescue";
  state.roundLabel = "Rescue Round";
  state.instruction = "You need at least 3 values in each final category. We’ll do another pass through the Kind of values to help fill in the missing side.";

  if (firstPass) {
    state.rescuePassCount = 0;
    state.rescueWarning = "";
  }

  state.rescuePassMoved = 0;
  state.rescuePassCount += 1;
  state.activePile = [...state.kindOfPile];
  state.activeIndex = 0;

  if (state.activePile.length === 0) {
    state.rescueWarning = "No Kind of values remain to use for rescue. Continuing with available values.";
    startTopFlow();
    return;
  }

  render();
}

function handleRescueChoice(choice) {
  const current = state.activePile[state.activeIndex];
  if (!current) return;

  if (choice === "very") {
    moveFromKindTo(current.id, state.veryPile);
    state.rescuePassMoved += 1;
  } else if (choice === "not") {
    moveFromKindTo(current.id, state.notAtAllPile);
    state.rescuePassMoved += 1;
  }

  state.activeIndex += 1;

  if (state.activeIndex >= state.activePile.length) {
    evaluateRescuePass();
    return;
  }

  render();
}

function moveFromKindTo(valueId, destination) {
  const idx = state.kindOfPile.findIndex((item) => item.id === valueId);
  if (idx >= 0) {
    const [moved] = state.kindOfPile.splice(idx, 1);
    destination.push(moved);
  }
}

function evaluateRescuePass() {
  const veryNeed = Math.max(0, 3 - state.veryPile.length);
  const notNeed = Math.max(0, 3 - state.notAtAllPile.length);

  if (veryNeed === 0 && notNeed === 0) {
    startTopFlow();
    return;
  }

  if (state.rescuePassMoved === 0 || state.kindOfPile.length === 0) {
    state.rescueWarning = "Rescue rounds could not fill both sides to 3. The app will continue using available values.";
    startTopFlow();
    return;
  }

  startRescueRound();
}

function startTopFlow() {
  startReductionFlow({
    sourcePile: [...state.veryPile],
    stage: "top",
    next: startBottomFlow
  });
}

function startBottomFlow() {
  startReductionFlow({
    sourcePile: [...state.notAtAllPile],
    stage: "bottom",
    next: finishFlow
  });
}

function startReductionFlow({ sourcePile, stage, next }) {
  const finalTarget = 3;
  const reduceToTenTarget = 10;

  if (sourcePile.length <= finalTarget) {
    if (stage === "top") state.finalTopValues = [...sourcePile];
    if (stage === "bottom") state.finalBottomValues = [...sourcePile];
    next();
    return;
  }

  if (sourcePile.length <= reduceToTenTarget) {
    beginReductionRound(stage, sourcePile, finalTarget, next);
    return;
  }

  beginReductionRound(stage, sourcePile, reduceToTenTarget, (keptValues) => {
    beginReductionRound(stage, keptValues, finalTarget, next);
  });
}

function beginReductionRound(stage, pile, target, onDone) {
  state.mode = "reduction";
  state.reduction = {
    stage,
    target,
    onDone,
    currentPile: [...pile],
    keptPile: [],
    index: 0,
    passNumber: 1
  };

  updateReductionLabels();
  render();
}

function updateReductionLabels() {
  const { stage, target } = state.reduction;
  const stageName = stage === "top" ? "Top Values" : "Bottom Values";
  state.roundLabel = `${stageName}: Reduce to ${target}`;
  state.instruction =
    target === 10
      ? "Reduce this list to the 10 values that feel most important."
      : "Now reduce this list to your final 3 values.";
}

function handleReductionChoice(choice) {
  const r = state.reduction;
  const current = r.currentPile[r.index];
  if (!current) return;

  const unseenAfterThis = r.currentPile.length - (r.index + 1);
  const keptIfDiscard = r.keptPile.length;
  const maxPossibleIfDiscard = keptIfDiscard + unseenAfterThis;
  const minNeededKeepNow = maxPossibleIfDiscard < r.target;

  if (choice === "discard" && minNeededKeepNow) {
    // Guard rail: force keep if discard makes target impossible.
    r.keptPile.push(current);
  } else if (choice === "keep") {
    r.keptPile.push(current);
  }

  r.index += 1;
  autoResolveReductionIfDeterministic();

  if (r.index >= r.currentPile.length) {
    finishReductionPass();
    return;
  }

  render();
}

// Auto-resolve when outcome is mathematically determined.
function autoResolveReductionIfDeterministic() {
  const r = state.reduction;
  while (r.index < r.currentPile.length) {
    const unseenCount = r.currentPile.length - r.index;

    if (r.keptPile.length === r.target) {
      // All remaining must be discarded.
      r.index = r.currentPile.length;
      break;
    }

    if (r.keptPile.length + unseenCount === r.target) {
      // All remaining must be kept.
      for (let i = r.index; i < r.currentPile.length; i += 1) {
        r.keptPile.push(r.currentPile[i]);
      }
      r.index = r.currentPile.length;
      break;
    }

    break;
  }
}

function finishReductionPass() {
  const r = state.reduction;

  if (r.keptPile.length <= r.target) {
    const finalSet = [...r.keptPile];
    assignFinalValues(r.stage, finalSet);
    const done = r.onDone;
    state.reduction = null;
    done(finalSet);
    return;
  }

  // More than target remain, so run another pass through kept values.
  r.currentPile = [...r.keptPile];
  r.keptPile = [];
  r.index = 0;
  r.passNumber += 1;
  updateReductionLabels();
  render();
}

function assignFinalValues(stage, values) {
  if (stage === "top") state.finalTopValues = values;
  if (stage === "bottom") state.finalBottomValues = values;
}

function finishFlow() {
  state.mode = "results";
  state.roundLabel = "Results";
  state.instruction = "These are your current top and bottom values from this session.";
  render();
}

function restart() {
  state = createInitialState();
  render();
}

function render() {
  if (!state.sessionStarted || state.mode === "start") {
    renderStart();
    return;
  }

  if (state.mode === "round1") {
    renderSortRound();
    return;
  }

  if (state.mode === "rescue") {
    renderRescueRound();
    return;
  }

  if (state.mode === "reduction") {
    renderReductionRound();
    return;
  }

  if (state.mode === "results") {
    renderResults();
  }
}

function renderStart() {
  appEl.innerHTML = `
    <div class="round-label">Start</div>
    <h1 class="title">Values Sort</h1>
    <p class="instructions">This exercise helps you identify the values that feel most important and least important right now. You will sort cards, then narrow to top and bottom values.</p>
    <div class="button-row">
      <button class="btn-primary" id="begin-btn">BEGIN</button>
    </div>
  `;
  document.getElementById("begin-btn").addEventListener("click", beginSession);
}

function renderSortRound() {
  const current = state.activePile[state.activeIndex];
  appEl.innerHTML = `
    <div class="round-label">${state.roundLabel}</div>
    <p class="instructions">${state.instruction}</p>
    <p class="progress">${state.activeIndex + 1} of ${state.activePile.length}</p>
    <h2 class="value-name">${current.name}</h2>
    <p class="value-description">${current.description}</p>
    <div class="button-row">
      <button class="btn-primary" data-choice="very">Very</button>
      <button class="btn-secondary" data-choice="kind">Kind of</button>
      <button class="btn-danger" data-choice="not">Not at all</button>
    </div>
    ${renderSortConfirmationBar()}
  `;

  bindChoiceButtons(handleRound1Choice);
}

function renderSortConfirmationBar() {
  return `
    <div class="confirmation-bar">
      <div class="confirmation-item">Very: ${state.veryPile.length}</div>
      <div class="confirmation-item">Kind of: ${state.kindOfPile.length}</div>
      <div class="confirmation-item">Not at all: ${state.notAtAllPile.length}</div>
    </div>
  `;
}

function renderRescueRound() {
  const current = state.activePile[state.activeIndex];
  const veryNeed = Math.max(0, 3 - state.veryPile.length);
  const notNeed = Math.max(0, 3 - state.notAtAllPile.length);

  appEl.innerHTML = `
    <div class="round-label">${state.roundLabel} (Pass ${state.rescuePassCount})</div>
    <p class="instructions">${state.instruction}</p>
    ${state.rescueWarning ? `<p class="small-note">${state.rescueWarning}</p>` : ""}
    <div class="confirmation-bar">
      <div class="confirmation-item ${veryNeed > 0 ? "highlight" : ""}">Very: ${state.veryPile.length} ${veryNeed > 0 ? `(Need at least ${veryNeed} more in Very)` : ""}</div>
      <div class="confirmation-item">Kind of: ${state.kindOfPile.length}</div>
      <div class="confirmation-item ${notNeed > 0 ? "highlight" : ""}">Not at all: ${state.notAtAllPile.length} ${notNeed > 0 ? `(Need at least ${notNeed} more in Not at all)` : ""}</div>
    </div>
    <p class="progress">${state.activeIndex + 1} of ${state.activePile.length}</p>
    <h2 class="value-name">${current.name}</h2>
    <p class="value-description">${current.description}</p>
    <div class="button-row" id="rescue-buttons"></div>
  `;

  const rescueButtonsEl = document.getElementById("rescue-buttons");
  const buttons = [];

  if (veryNeed > 0) buttons.push({ key: "very", label: "Very", className: "btn-primary" });
  buttons.push({ key: "keep", label: "Keep in Kind of", className: "btn-secondary" });
  if (notNeed > 0) buttons.push({ key: "not", label: "Not at all", className: "btn-danger" });

  buttons.forEach((btn) => {
    const buttonEl = document.createElement("button");
    buttonEl.className = btn.className;
    buttonEl.textContent = btn.label;
    buttonEl.addEventListener("click", () => handleRescueChoice(btn.key));
    rescueButtonsEl.appendChild(buttonEl);
  });
}

function renderReductionRound() {
  const r = state.reduction;
  const current = r.currentPile[r.index];
  const remaining = r.currentPile.length - r.index;

  appEl.innerHTML = `
    <div class="round-label">${state.roundLabel}</div>
    <p class="instructions">${state.instruction}</p>
    <p class="small-note">Pass ${r.passNumber}</p>
    <p class="progress">${r.index + 1} of ${r.currentPile.length}</p>
    <h2 class="value-name">${current.name}</h2>
    <p class="value-description">${current.description}</p>
    <div class="button-row">
      <button class="btn-primary" data-choice="keep">Keep</button>
      <button class="btn-danger" data-choice="discard">Discard</button>
    </div>
    <div class="confirmation-bar">
      <div class="confirmation-item">Kept: ${r.keptPile.length} / Target: ${r.target}</div>
      <div class="confirmation-item">Remaining in round: ${remaining}</div>
    </div>
  `;

  bindChoiceButtons(handleReductionChoice);
}

function bindChoiceButtons(handler) {
  const choiceButtons = appEl.querySelectorAll("[data-choice]");
  choiceButtons.forEach((btn) => {
    btn.addEventListener("click", () => handler(btn.dataset.choice));
  });
}

function renderResults() {
  appEl.innerHTML = `
    <div class="round-label">${state.roundLabel}</div>
    <h1 class="title">Values Sort</h1>
    <p class="instructions">${state.instruction}</p>
    ${state.rescueWarning ? `<p class="small-note">${state.rescueWarning}</p>` : ""}
    <div class="results-grid">
      <section class="results-box">
        <h3>Top 3 Values</h3>
        ${renderValueList(state.finalTopValues)}
      </section>
      <section class="results-box">
        <h3>Bottom 3 Values</h3>
        ${renderValueList(state.finalBottomValues)}
      </section>
    </div>
    <div class="button-row">
      <button class="btn-primary" id="restart-btn">Start Over</button>
    </div>
  `;

  document.getElementById("restart-btn").addEventListener("click", restart);
}

function renderValueList(values) {
  if (values.length === 0) {
    return '<p class="small-note">No values available for this side in this session.</p>';
  }

  return `
    <div class="value-list">
      ${values
        .map(
          (value) => `
            <article>
              <div class="value-list-item-name">${value.name}</div>
              <div>${value.description}</div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}
