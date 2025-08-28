// https://script.google.com/macros/s/AKfycbwhCuXJjJGnRIaIg6UorvC6LFHWwl0bx5BSXmcjPyHG8pYEAKiL2qD19XTjxrf6mzH5Rg/exec
const SCRIPT_URL = ""; // es: "https://script.google.com/macros/s/AKfycbx.../exec"

// Profili singoli
const FISH = {
  "Pesce Gatto": {
    title: "PESCE GATTO",
    text: "A TE PROPI UN PASGÀT! A volte un pò superficiale e distratto, prendi la vita con leggerezza. Non ti fai troppi problemi, e spesso sei quello che riesce a strappare una risata agli altri con la tua spontaneità. Sei frivolo, allegro, capace di divertirti anche nelle situazioni più banali. E alla fine, tutti ti vogliono bene perché porti leggerezza ovunque. Bravo Pesce Gatto: ti sei guadagnato l’adesivo speciale, vieni a ritirarlo al banchetto della Risalita dei pesci!"
  },
  "Siluro": {
    title: "SILURO",
    text: "Sei un SILURO, il gigante del fiume! Forte, energico e deciso, quando entri in una situazione non passi inosservato. Sei un leader naturale, ami prendere in mano le cose e non hai paura di buttarti nelle sfide più impegnative. Attento però a non occupare troppo spazio: a volte la tua potenza può mettere in ombra gli altri. Ma nel complesso, sei carisma puro."
  },
  "Storione": {
    title: "STORIONE",
    text: "Sei uno STORIONE, antico e saggio. Hai memoria, profondità e spesso sei il punto di riferimento per chi ti sta vicino. Non corri dietro alle mode, preferisci la stabilità e la tradizione, e gli amici ti vedono come una persona affidabile, che dà sicurezza. Forse non sei il più rumoroso del gruppo, ma quando parli, lasci il segno."
  },
  "Carpa": {
    title: "CARPA",
    text: "Sei una CARPA: tranquillo, socievole, un amico vero. Ti piace la serenità, non ami i conflitti e sei quello che riesce sempre a riportare l’armonia nel gruppo. Non hai bisogno di stare al centro dell’attenzione, preferisci circondarti di persone con cui ti senti bene. Sei il collante che tiene unito il branco: affidabile, dolce e sempre disponibile."
  },
  "Anguilla": {
    title: "ANGUILLA",
    text: "Sei un’ANGUILLA: misterioso, creativo, imprevedibile. Gli altri non sanno mai cosa aspettarsi da te, e questo ti rende affascinante. Ami uscire dagli schemi, sorprendere con idee diverse e a volte sembri quasi inafferrabile. Non ti piace essere imbrigliato: sei libero e indipendente, e chi ti conosce non si annoia mai."
  }
};

// Profili MIX (parità a 2)
const TIE_RESULTS = {
  "Anguilla|Carpa": {
    title: "Mix: ANGUILLA + CARPA",
    text: "Sei un connettore creativo. Hai il gusto dell’imprevisto ma senza perdere la gentilezza: cerchi l’armonia nel gruppo e allo stesso tempo sparigli con idee originali che fanno sorridere e riflettere. Con te le persone si sentono a proprio agio, perché riesci a combinare empatia e fantasia: sai coinvolgere, proporre alternative e trasformare un incontro normale in qualcosa di speciale."
  },
  "Anguilla|Pesce Gatto": {
    title: "Mix: ANGUILLA + PESCE GATTO",
    text: "Ironia e immaginazione ti vengono naturali. Prendi la vita con leggerezza ma non per questo sei superficiale: la tua creatività spunta dove gli altri vedono routine, e spesso sei tu a cambiare l’umore di una stanza con una battuta o un’idea fuori dal coro. Spontaneo, versatile, sorprendi senza fare rumore e lasci dietro di te buonumore e curiosità."
  },
  "Anguilla|Siluro": {
    title: "Mix: ANGUILLA + SILURO",
    text: "Visione e azione: sogni soluzioni diverse e poi trovi il modo di farle accadere davvero. Hai il coraggio di osare e la fantasia per tracciare strade nuove. Guida naturale, ma mai scontata: la tua energia è magnetica e inviti gli altri a buttarsi in esperienze che raccontano chi sei, con una scintilla di sana follia."
  },
  "Anguilla|Storione": {
    title: "Mix: ANGUILLA + STORIONE",
    text: "Originale con profondità. Ami esplorare strade non battute, ma lo fai con giudizio e memoria. Sai dare un senso alle novità, collegandole a ciò che conta davvero. Le persone si fidano di te perché unisci creatività e saggezza: non cerchi solo l’effetto wow, ma un significato che resti."
  },
  "Carpa|Pesce Gatto": {
    title: "Mix: CARPA + PESCE GATTO",
    text: "Il tuo superpotere è portare leggerezza nelle relazioni. Fai gruppo, smorzi i conflitti e ricordi agli altri che si può stare bene anche nelle piccole cose. Sei accogliente e scanzonato al punto giusto: con te, ogni cena ha il suo momento di risate sincere e feeling vero."
  },
  "Carpa|Siluro": {
    title: "Mix: CARPA + SILURO",
    text: "Guida e ascolto: sai tenere il timone senza perdere di vista chi hai accanto. Pratico, deciso, ma capace di creare unità: trasformi gli obiettivi in azione e ti assicuri che tutti si sentano parte del viaggio. Il risultato? Una spinta in avanti che non schiaccia nessuno."
  },
  "Carpa|Storione": {
    title: "Mix: CARPA + STORIONE",
    text: "Stabilità che rassicura. Dai valore a tradizioni, memoria e qualità del tempo insieme. Quando c’è bisogno di equilibrio, sei il punto fermo: ascolti, organizzi, riporti calma. Le persone ti cercano perché con te ritrovano serenità e chiarezza, senza bisogno di grandi effetti speciali."
  },
  "Pesce Gatto|Siluro": {
    title: "Mix: PESCE GATTO + SILURO",
    text: "Carisma con sorriso. Ti butti nelle cose e trascini gli altri, ma con quella ironia che rende tutto più leggero. Sei energia che unisce: sai alleggerire la tensione, motivare e accendere l’entusiasmo del gruppo. Impossibile non seguirti — e divertirsi."
  },
  "Pesce Gatto|Storione": {
    title: "Mix: PESCE GATTO + STORIONE",
    text: "Leggerezza consapevole. Sai quando scherzare e quando andare a fondo: alterni momenti ironici a riflessioni che restano. Stai bene nelle tradizioni, ma ci metti il tuo tocco brillante. Il risultato è un equilibrio unico tra profondità e spontaneità."
  },
  "Siluro|Storione": {
    title: "Mix: SILURO + STORIONE",
    text: "Decisione con visione lunga. Prendi in mano le situazioni con fermezza e responsabilità, ragionando sul quadro d’insieme. Affidabile e autorevole, ispiri fiducia perché unisci coraggio e prudenza: sai accelerare quando serve, ma con una rotta chiara."
  }
};
function tieKey(a,b){ return [a,b].sort().join("|"); }

// Domande e opzioni (il mapping al pesce sta nel value, non visibile)
const QUESTIONS = [
  { q: "Domanda 1: Sei a una cena con amici. Ti servono un piatto che non conosci..",
    options: [
      ["Lo assaggio senza sapere cos’è, tanto… che sarà mai!", "Pesce Gatto"],
      ["Voglio capire bene cosa c’è dentro prima di provarlo", "Storione"],
      ["Lo condivido con tutti, così è più divertente", "Carpa"],
      ["Ne mangio un po’, poi mi invento una scusa strana", "Anguilla"],
      ["Mi butto e lo mangio tutto senza pensarci due volte", "Siluro"]
    ]},
  { q: "Domanda 2: Se il tuo weekend fosse un film, che genere sarebbe?",
    options: [
      ["Commedia stile una notte da leoni, dove il giorno dopo non ti ricordi più nulla", "Pesce Gatto"],
      ["Saltare da un palazzo in fiamme con una mustang? Ogni weekend", "Siluro"],
      ["Un bel film storico sul divano, camino acceso", "Storione"],
      ["Commedia comica, un tavolo, piatti di ogni genere e risate a non finire", "Carpa"],
      ["Mistero e incontri sovrannaturali", "Anguilla"]
    ]},
  { q: "Domanda 3: Se fossi un drink, quale saresti?",
    options: [
      ["Un gin tonic come si deve", "Pesce Gatto"],
      ["Un vino rosso corposo", "Storione"],
      ["Una cochina ghiaccio e limone", "Carpa"],
      ["Un cocktail inedito, improvvisato al momento", "Anguilla"],
      ["Un Negroni o uno Sbagliato", "Siluro"]
    ]},
  { q: "Domanda 4: In un gruppo di lavoro tu sei quello che…",
    options: [
      ["Dice \"ci pensiamo domani\" e intanto scrolla i reel su instagram", "Pesce Gatto"],
      ["Mette ordine e tiene memoria di tutto", "Storione"],
      ["Tiene unito il gruppo e smorza i conflitti", "Carpa"],
      ["Trova la soluzione più bizzarra, ma che funziona", "Anguilla"],
      ["Prende in mano la situazione e decide", "Siluro"]
    ]},
  { q: "Domanda 5: Sei in viaggio e ti perdi. Cosa fai?",
    options: [
      ["Scatto un selfie instagrammabile e me la rido", "Pesce Gatto"],
      ["Controllo la mappa e cerco di ritornare sui miei passi", "Storione"],
      ["Chiedo indicazioni con calma a qualcuno", "Carpa"],
      ["Vado a caso, convinto che sia un’avventura", "Anguilla"],
      ["Seguo l’istinto e cammino dritto fino a destinazione", "Siluro"]
    ]},
  { q: "Domanda 6: In una cena con amici, tu sei quello che…",
    options: [
      ["Commenta ironicamente dietro le quinte come la Giallapa's Band", "Pesce Gatto"],
      ["Racconta vecchi aneddoti e fa riflettere tutti", "Storione"],
      ["Fa partire i brindisi e mette d’accordo tutti", "Carpa"],
      ["Sparisce un’ora e poi ricompare con una storia assurda", "Anguilla"],
      ["Tiene banco raccontando storie e battute", "Siluro"]
    ]},
  { q: "Domanda 7: Ti propongono un viaggio last-minute. Come reagisci?",
    options: [
      ["Accetto solo se il viaggio è offerto", "Pesce Gatto"],
      ["Parto solo se c’è un programma chiaro e definito", "Storione"],
      ["Chiamo gli amici e organizziamo in gruppo", "Carpa"],
      ["Scelgo le esperienze più strane da fare", "Anguilla"],
      ["Mi gaso, sarà un’avventura piena di adrenalina", "Siluro"]
    ]}
];

// ---- DOM refs
const form = document.getElementById('quiz-form');
const qWrap = document.getElementById('questions-wrap');
const progress = document.getElementById('progress-bar');
const resultEl = document.getElementById('result');
const badgesEl = document.getElementById('result-badges');
const titleEl = document.getElementById('result-title');
const textEl = document.getElementById('result-text');
const btnSubmit = document.getElementById('btn-submit');
const btnReset = document.getElementById('btn-reset');
const btnAgain = document.getElementById('btn-again');
const btnCopy = document.getElementById('btn-copy');
const btnShare = document.getElementById('btn-share');

// ---- Render delle domande (mapping nascosto)
function renderQuestions(){
  let html = '';
  QUESTIONS.forEach((item, idx) => {
    const qId = `q${idx+1}`;
    html += `<fieldset class="q"><legend class="hidden">Domanda ${idx+1}</legend>`;
    html += `<h3>${item.q}</h3>`;
    html += `<div class="options" role="radiogroup" aria-labelledby="${qId}-label">`;
    item.options.forEach((op, oi) => {
      const id = `${qId}-opt${oi+1}`;
      html += `<label class="option" for="${id}">
        <input type="radio" name="${qId}" id="${id}" value="${op[1]}" required />
        <span>${op[0]}</span>
      </label>`;
    });
    html += `</div></fieldset>`;
  });
  qWrap.innerHTML = html;
}
renderQuestions();

// ---- Progress bar
function updateProgress(){
  const total = QUESTIONS.length + 2;
  let count = 0;
  const data = new FormData(form);
  if(data.get('nomeCognome')) count++;
  if(data.get('cittaProvincia')) count++;
  for(let i=1;i<=QUESTIONS.length;i++){ if(data.get('q'+i)) count++; }
  progress.style.width = Math.round(count/total*100) + '%';
}
form.addEventListener('input', updateProgress);
updateProgress();

// ---- Calcolo risultato
function computeResult(){
  const data = new FormData(form);
  const scores = {"Pesce Gatto":0,"Siluro":0,"Storione":0,"Carpa":0,"Anguilla":0};
  const missing = [];
  if(!data.get('nomeCognome')) missing.push("Nome e Cognome");
  if(!data.get('cittaProvincia')) missing.push("Città e Provincia");
  QUESTIONS.forEach((_, i) => {
    const key = `q${i+1}`;
    const val = data.get(key);
    if(!val){ missing.push("Domanda " + (i+1)); }
    else { scores[val]++; }
  });
  if(missing.length){
    alert("Compila tutti i campi (mancano: " + missing.join(", ") + ").");
    return null;
  }
  const max = Math.max(...Object.values(scores));
  const winners = Object.entries(scores).filter(([k,v]) => v === max).map(([k]) => k);
  return {data, scores, winners};
}

// ---- Invio silenzioso a Google Sheets (nessuna UI di notifica)
async function sendToSheet(payload){
  if(!SCRIPT_URL) return; // se non impostato, non fa nulla
  try{
    await fetch(SCRIPT_URL, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    });
  }catch(e){
    console.warn("Invio Sheet fallito:", e);
  }
}

// ---- Costruzione testo risultato
function showResult(winners){
  let title, text, badgesHtml;
  if (winners.length === 1) {
    const w = winners[0];
    title = "Risultato: " + FISH[w].title;
    text  = FISH[w].text;
    badgesHtml = `<span class="badge">🏅 ${FISH[w].title}</span>`;
  } else if (winners.length === 2) {
    const key = tieKey(winners[0], winners[1]);
    const tie = TIE_RESULTS[key];
    if (tie) { title = tie.title; text = tie.text; }
    else { title = "Risultato: Mix " + winners.join(" + "); text = "Parità perfetta tra stili diversi: unisci qualità complementari e ti adatti alle situazioni con naturalezza."; }
    badgesHtml = winners.map(w => `<span class="badge">🏅 ${FISH[w].title}</span>`).join(" ");
  } else {
    const elenco = winners.map(w => FISH[w].title).join(", ");
    title = "Risultato: Mix bilanciato";
    text  = "In te convivono più energie: " + elenco + ". Hai un profilo versatile e sfaccettato: sai quando spingere, quando ascoltare, quando alleggerire e quando sorprendere. Il tuo equilibrio è la tua forza.";
    badgesHtml = winners.map(w => `<span class="badge">🏅 ${FISH[w].title}</span>`).join(" ");
  }
  badgesEl.innerHTML = badgesHtml;
  titleEl.textContent = title;
  textEl.textContent  = text;
  resultEl.style.display = "block";
  resultEl.scrollIntoView({behavior:"smooth"});
}
function tieKey(a,b){ return [a,b].sort().join("|"); }

// ---- Handlers
btnSubmit.addEventListener('click', async () => {
  const r = computeResult(); if(!r) return;
  const name = r.data.get('nomeCognome').trim();
  const city = r.data.get('cittaProvincia').trim();
  const choices = [];
  for(let i=1;i<=QUESTIONS.length;i++){ choices.push(r.data.get('q'+i)); }
  const payload = {
    timestamp: new Date().toISOString(),
    name, city, choices, scores: r.scores, winners: r.winners,
    page: location.href, ua: navigator.userAgent
  };
  await sendToSheet(payload);
  showResult(r.winners);
});

btnReset.addEventListener('click', ()=>{ form.reset(); updateProgress(); resultEl.style.display="none"; });
btnAgain?.addEventListener('click', ()=>{ form.reset(); updateProgress(); resultEl.style.display="none"; window.scrollTo({top:0, behavior:"smooth"}); });

btnCopy?.addEventListener('click', async ()=>{
  const t = (titleEl.textContent||"") + "\n\n" + (textEl.textContent||"");
  try{ await navigator.clipboard.writeText(t); btnCopy.textContent="✅ Copiato"; setTimeout(()=>btnCopy.textContent="Copia risultato",1200); }catch{}
});
btnShare?.addEventListener('click', async ()=>{
  const data = { title:"Quale pesce sei?", text:titleEl.textContent, url:location.href };
  if(navigator.share){ try{ await navigator.share(data); }catch{} }
});
