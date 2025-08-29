// ====== CONFIGURAZIONE QUIZ ======
const FISH = {
  GATTO: "Pesce Gatto",
  SILURO: "Siluro",
  STORIONE: "Storione",
  CARPA: "Carpa",
  ANGUILLA: "Anguilla",
};

// Testi dei risultati
const RESULT_TEXT = {
  [FISH.GATTO]: "Empatico e adattabile. Ti muovi bene nei contesti sociali senza perdere la tua autenticità.",
  [FISH.SILURO]: "Determinato e diretto. Punti all’obiettivo con energia e focosità.",
  [FISH.STORIONE]: "Riflessivo e autorevole. Prendi decisioni ponderate e ispiri fiducia.",
  [FISH.CARPA]: "Calmo e costante. Preferisci la qualità e la pazienza ai fuochi d’artificio.",
  [FISH.ANGUILLA]: "Creativo e flessibile. Ti reinventi con facilità quando serve.",
};

// 7 domande, 5 opzioni. Ogni opzione assegna 1 punto a un pesce.
const QUESTIONS = [
  {
    q: "Come affronti una nuova sfida?",
    options: [
      { label: "Parlo con gli altri e mi adatto", fish: FISH.GATTO },
      { label: "Attacco di petto, subito", fish: FISH.SILURO },
      { label: "Valuto pro e contro con calma", fish: FISH.STORIONE },
      { label: "Vado per piccoli passi", fish: FISH.CARPA },
      { label: "Cerco un’idea fuori dagli schemi", fish: FISH.ANGUILLA },
    ],
  },
  {
    q: "Nel team tu sei…",
    options: [
      { label: "Il collante sociale", fish: FISH.GATTO },
      { label: "Il motivatore energico", fish: FISH.SILURO },
      { label: "Il saggio che consiglia", fish: FISH.STORIONE },
      { label: "Il metronomo affidabile", fish: FISH.CARPA },
      { label: "Il creativo improvvisatore", fish: FISH.ANGUILLA },
    ],
  },
  {
    q: "Sotto pressione:",
    options: [
      { label: "Resto gentile e ascolto", fish: FISH.GATTO },
      { label: "Stringo i denti e spingo", fish: FISH.SILURO },
      { label: "Mi prendo un momento per riflettere", fish: FISH.STORIONE },
      { label: "Procedo con metodo", fish: FISH.CARPA },
      { label: "Cambio approccio al volo", fish: FISH.ANGUILLA },
    ],
  },
  {
    q: "Tempo libero ideale:",
    options: [
      { label: "Amici, famiglia, community", fish: FISH.GATTO },
      { label: "Sport/avventure", fish: FISH.SILURO },
      { label: "Libri, musei, approfondimenti", fish: FISH.STORIONE },
      { label: "Natura e routine rilassante", fish: FISH.CARPA },
      { label: "Hobby creativi e sperimentazione", fish: FISH.ANGUILLA },
    ],
  },
  {
    q: "Quando prendi una decisione:",
    options: [
      { label: "Cerco il consenso del gruppo", fish: FISH.GATTO },
      { label: "Vado d’istinto", fish: FISH.SILURO },
      { label: "Analizzo i dati", fish: FISH.STORIONE },
      { label: "Seguo una procedura", fish: FISH.CARPA },
      { label: "Provo la via non convenzionale", fish: FISH.ANGUILLA },
    ],
  },
  {
    q: "Cosa ti dà energia?",
    options: [
      { label: "Stare con gli altri", fish: FISH.GATTO },
      { label: "Raggiungere obiettivi sfidanti", fish: FISH.SILURO },
      { label: "Imparare qualcosa di nuovo", fish: FISH.STORIONE },
      { label: "Far bene le piccole cose", fish: FISH.CARPA },
      { label: "Creare e reinventare", fish: FISH.ANGUILLA },
    ],
  },
  {
    q: "Se qualcosa va storto:",
    options: [
      { label: "Chiedo aiuto, non sono solo", fish: FISH.GATTO },
      { label: "Resisto finché non passa", fish: FISH.SILURO },
      { label: "Capisco il perché e riparto", fish: FISH.STORIONE },
      { label: "Aggiusto il processo", fish: FISH.CARPA },
      { label: "Cambio strada senza drammi", fish: FISH.ANGUILLA },
    ],
  },
];

// ====== GENERAZIONE UI ======
const wrap = document.getElementById("questions-wrap");
const form = document.getElementById("quiz-form");
const progressBar = document.getElementById("progress-bar");

const resultBox = document.getElementById("result");
const resultBadges = document.getElementById("result-badges");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");

const btnReset = document.getElementById("btn-reset");
const btnAgain = document.getElementById("btn-again");
const btnCopy = document.getElementById("btn-copy");
const btnShare = document.getElementById("btn-share");

const hiddenRisposte = document.getElementById("risposte");
const hiddenPunteggio = document.getElementById("punteggio");
const hiddenRisultato = document.getElementById("risultato");

// Crea le domande (radio per q1..q7)
function renderQuestions() {
  wrap.innerHTML = "";
  QUESTIONS.forEach((item, i) => {
    const qIndex = i + 1;
    const qId = `q${qIndex}`;

    const section = document.createElement("section");
    section.className = "q";
    section.innerHTML = `
      <h3>${qIndex}. ${item.q}</h3>
      <div class="options" role="radiogroup" aria-labelledby="${qId}-label"></div>
    `;

    const optionsWrap = section.querySelector(".options");
    item.options.forEach((opt, j) => {
      const id = `${qId}_opt${j}`;
      const label = document.createElement("label");
      label.className = "option";
      label.setAttribute("for", id);
      label.innerHTML = `
        <input type="radio" name="${qId}" id="${id}" value="${opt.fish}" required>
        <span>${opt.label}</span>
      `;
      optionsWrap.appendChild(label);
    });

    wrap.appendChild(section);
  });
}
renderQuestions();

// ====== LOGICA QUIZ ======
function getAnswers() {
  const answers = [];
  let answered = 0;

  QUESTIONS.forEach((_, i) => {
    const qName = `q${i + 1}`;
    const chosen = form.querySelector(`input[name="${qName}"]:checked`);
    if (chosen) {
      answered++;
      answers.push({ name: qName, value: chosen.value });
    } else {
      answers.push({ name: qName, value: null });
    }
  });

  const percent = Math.round((answered / QUESTIONS.length) * 100);
  progressBar.style.width = `${percent}%`;
  return answers;
}

function computeResult(answers) {
  const tally = {
    [FISH.GATTO]: 0,
    [FISH.SILURO]: 0,
    [FISH.STORIONE]: 0,
    [FISH.CARPA]: 0,
    [FISH.ANGUILLA]: 0,
  };
  answers.forEach(a => {
    if (a.value) tally[a.value]++;
  });

  // vincitore: il fish con più punti; in caso di pari, preferenza all’ordine definito
  const ranking = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  const top = ranking[0][0];
  return { top, tally, ranking };
}

function showResult({ top, tally }) {
  const total = QUESTIONS.length;
  const points = tally[top];

  // Badge + titolo + testo
  resultBadges.innerHTML = `
    <span class="badge">${top}</span>
    <span class="badge">Punti: ${points}/${total}</span>
  `;
  resultTitle.textContent = `Sei ${top}!`;
  resultText.textContent = RESULT_TEXT[top] || "";

  resultBox.style.display = "block";
}

function resetQuiz() {
  form.reset();
  progressBar.style.width = "0%";
  resultBox.style.display = "none";
}

// ====== EVENTI UI ======
form.addEventListener("change", () => {
  getAnswers(); // aggiorna progress
});

btnReset.addEventListener("click", () => {
  resetQuiz();
});

btnAgain?.addEventListener("click", () => {
  resetQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

btnCopy?.addEventListener("click", async () => {
  const text = `${resultTitle.textContent}\n${resultText.textContent}`;
  try {
    await navigator.clipboard.writeText(text);
    btnCopy.textContent = "Copiato!";
    setTimeout(() => (btnCopy.textContent = "Copia risultato"), 1500);
  } catch (_) {}
});

btnShare?.addEventListener("click", async () => {
  const title = resultTitle.textContent || "Il mio risultato";
  const text = resultText.textContent || "";
  const url = window.location.href;
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
    } catch (_) {}
  } else {
    // fallback: copia link
    try {
      await navigator.clipboard.writeText(`${title}\n${text}\n${url}`);
      btnShare.textContent = "Link copiato!";
      setTimeout(() => (btnShare.textContent = "Condividi"), 1500);
    } catch (_) {}
  }
});

// ====== INVIO A NETLIFY FORMS ======
// IMPORTANTE: lasciamo che il form faccia il POST standard (action="/grazie.html")
// Prima dell’invio, riempiamo i campi nascosti con JSON leggibile da Netlify
form.addEventListener("submit", (e) => {
  // Verifica che tutte le domande siano risposte
  const answers = getAnswers();
  const incomplete = answers.some(a => a.value === null);
  if (incomplete) {
    e.preventDefault();
    alert("Per favore, rispondi a tutte le domande prima di inviare.");
    return;
  }

  const { top, tally } = computeResult(answers);

  // Mostra il risultato a schermo (non blocca l’invio)
  showResult({ top, tally });

  // Prepara i campi nascosti che saranno salvati da Netlify
  hiddenRisposte.value = JSON.stringify(answers);     // es. [{"name":"q1","value":"Carpa"}, ...]
  hiddenPunteggio.value = JSON.stringify(tally);      // es. {"Carpa":3,"Siluro":2,...}
  hiddenRisultato.value = top;                        // es. "Carpa"

  // NIENTE fetch qui: lasciamo procedere il submit naturale verso /grazie.html
  // Netlify intercetta e salva tutti i campi del form (inclusi i hidden).
});
