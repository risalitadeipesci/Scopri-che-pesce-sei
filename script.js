// 👉 Incolla qui l'URL della tua Web App (termina con /exec)
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

// Profili MIX (parità a 2) — discorsivi e completi
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
function tie
