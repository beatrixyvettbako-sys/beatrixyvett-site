// De completat înainte de publicare
const CONFIG = {
  whatsapp: "40752776655", // fără + și spații
  web3formsKey: "1c788479-ef19-4957-aeba-137873a7b9bf" // cheie publică Web3Forms
};

const TXT = {
  ro: {
    close: "Închide", menu_label: "Meniu",
    m_home: "Acasă", m_about: "Despre mine", m_services: "Antrenamente", m_reviews: "Recenzii", m_contact: "Contact", m_faq: "Întrebări frecvente",
    hero_eyebrow1: "Antrenor personal", hero_eyebrow2: "18 Gym · Cluj-Napoca",
    hero_title: "Forță, echilibru și un corp în care te simți <em>bine</em>.",
    hero_sub: "Antrenamente gândite pentru tine, nu pentru toată lumea.",
    cta_contact: "Scrie-mi", cta_services: "Antrenamente",
    hero_loc1: "La 18 Gym, Cluj", hero_loc2: "Online, oriunde",
    about_eyebrow: "Despre mine", about_role: "Antrenor personal",
    about_p1: "Sunt antrenor personal la 18 Gym Cluj și cred că mișcarea trebuie să se potrivească vieții tale, nu invers.",
    about_p2: "Lucrez cu fiecare clientă individual: vedem de unde pornești, stabilim obiective realiste și le atingem pas cu pas, cu tehnică corectă, răbdare și motivație constantă.",
    about_btn: "Programează o ședință",
    quote_h: "Mișcarea e un <em>dar,</em><br>nu o pedeapsă.",
    quote_p: "Fiecare pas contează…<br>Fiecare repetare te apropie<br>de cea care vrei să fii.",
    cred_eyebrow: "Pe scurt", stat1_l: "atenție personalizată", stat2_l: "limbi: română, maghiară, engleză",
    how_eyebrow: "Cum lucrez",
    c1_t: "Plan personalizat", c1_d: "Construit în jurul obiectivelor, nivelului și programului tău.",
    c2_t: "Tehnică corectă", c2_d: "Te corectez în timp real la fiecare exercițiu, fără accidentări.",
    c3_t: "Progres măsurat", c3_d: "Măsurăm rezultatele constant și ajustăm planul după ele.",
    svc_eyebrow: "Antrenamente", svc_title: "Alege antrenamentul <em>potrivit ție.</em>",
    svc_lead: "Antrenament personal la 18 Gym, în grup mic sau coaching online. Scrie-mi și stabilim împreună ce ți se potrivește.",
    tab_s: "Ședințe", tab_p: "Pachete", tab_o: "Online",
    lbl_dur: "Durata", lbl_loc: "Locația", price_req: "Preț la cerere", btn_write: "Scrie-mi",
    svc_note: "Prețurile se stabilesc după o discuție scurtă despre obiectivele tale.",
    rev_eyebrow: "Recenzii", rev_title: "Ce spun <em>clientele</em>",
    rev_google: "Vezi pe Google", rev_leave: "Lasă o recenzie",
    rev_empty_t: "Aici vor apărea părerile clientelor.",
    rev_empty_d: "Ai lucrat deja cu mine? Mi-ar face mare plăcere să-mi lași o recenzie pe Google.",
    rev_more: "Citește mai mult", rev_less: "Mai puțin",
    ct_eyebrow: "Contact", ct_title: "Hai să <em>începem</em>",
    ct_lead: "Ca să-ți pot răspunde cât mai repede, <strong>WhatsApp</strong> este metoda principală de contact. Scrie-mi oricând și revin cât de curând pentru a stabili împreună detaliile.",
    row_wa: "WhatsApp", row_wa_v: "Scrie-mi pe WhatsApp", row_ig: "Instagram", row_loc: "Locație", row_loc_v: "18 Gym, Cluj-Napoca",
    ct_form_t: "Sau trimite un mesaj",
    f_name: "Nume", f_contact: "Telefon sau email", f_msg: "Mesaj", f_send: "Trimite",
    f_ok: "Mulțumesc! Revin cât de curând.", f_err: "Nu s-a putut trimite. Încearcă pe WhatsApp.", f_req: "Completează toate câmpurile.",
    faq_eyebrow: "Întrebări frecvente", faq_title: "Ce vrei să știi <em>înainte de prima ședință</em>",
    faq_lead: "Dacă întrebarea ta nu e aici, scrie-mi direct.", faq_btn: "Scrie-mi o întrebare",
    faq_hl_tag: "Pentru începătoare", faq_hl_q: "Sunt începătoare. Pot începe?",
    faq_hl_a: "Da, și antrenamentele sunt gândite exact pentru tine. Pornim de la nivelul tău și avansăm gradual, fără presiune și fără judecăți.",
    faq1_q: "Unde au loc antrenamentele?", faq1_a: "La 18 Gym din Cluj-Napoca sau online, de oriunde.",
    faq2_q: "Cât durează până văd rezultate?", faq2_a: "Primele schimbări de energie și forță apar de regulă după 3-4 săptămâni de constanță.",
    faq3_q: "Antrenezi și în maghiară sau engleză?", faq3_a: "Da, antrenamentele pot fi în română, maghiară sau engleză.",
    faq4_q: "Ce aduc la prima ședință?", faq4_a: "Haine comode, încălțăminte sport, un prosop și o sticlă cu apă. De rest mă ocup eu.",
    faq5_q: "Cum programez o ședință?", faq5_a: "Scrie-mi pe WhatsApp sau trimite formularul și stabilim împreună o oră care ți se potrivește.",
    ft_text: "Antrenor personal în Cluj-Napoca și online. Antrenamente personalizate în română, maghiară și engleză.",
    ft_contact: "Contact", ft_legal: "Legal", privacy: "Confidențialitate",
    wa_msg: "Salut Beatrix! Aș vrea să programez o ședință.",
    wa_svc: "Salut Beatrix! Mă interesează: "
  },
  hu: {
    close: "Bezárás", menu_label: "Menü",
    m_home: "Kezdőlap", m_about: "Rólam", m_services: "Edzések", m_reviews: "Vélemények", m_contact: "Kapcsolat", m_faq: "Gyakori kérdések",
    hero_eyebrow1: "Személyi edző", hero_eyebrow2: "18 Gym · Kolozsvár",
    hero_title: "Erő, egyensúly és egy test, amelyben <em>jól</em> érzed magad.",
    hero_sub: "Edzések, amelyeket neked tervezek, nem mindenkinek.",
    cta_contact: "Írj nekem", cta_services: "Edzések",
    hero_loc1: "18 Gym, Kolozsvár", hero_loc2: "Online, bárhonnan",
    about_eyebrow: "Rólam", about_role: "Személyi edző",
    about_p1: "Személyi edző vagyok a kolozsvári 18 Gymben, és hiszem, hogy a mozgásnak az életedhez kell igazodnia, nem fordítva.",
    about_p2: "Minden ügyféllel egyénileg dolgozom: megnézzük, honnan indulsz, reális célokat tűzünk ki, és lépésről lépésre elérjük őket – helyes technikával, türelemmel és folyamatos motivációval.",
    about_btn: "Időpontot kérek",
    quote_h: "A mozgás <em>ajándék,</em><br>nem büntetés.",
    quote_p: "Minden lépés számít…<br>Minden ismétlés közelebb visz<br>ahhoz, aki lenni szeretnél.",
    cred_eyebrow: "Röviden", stat1_l: "személyes figyelem", stat2_l: "nyelv: román, magyar, angol",
    how_eyebrow: "Hogyan dolgozom",
    c1_t: "Személyre szabott terv", c1_d: "A céljaidhoz, a szintedhez és az időbeosztásodhoz igazítva.",
    c2_t: "Helyes technika", c2_d: "Minden gyakorlatnál valós időben javítalak, sérülések nélkül.",
    c3_t: "Mért fejlődés", c3_d: "Rendszeresen mérjük az eredményeket, és ehhez igazítjuk a tervet.",
    svc_eyebrow: "Edzések", svc_title: "Válaszd a <em>hozzád illő</em> edzést.",
    svc_lead: "Személyi edzés a 18 Gymben, kiscsoportos edzés vagy online coaching. Írj nekem, és együtt eldöntjük, mi illik hozzád.",
    tab_s: "Alkalmak", tab_p: "Bérletek", tab_o: "Online",
    lbl_dur: "Időtartam", lbl_loc: "Helyszín", price_req: "Ár egyeztetés szerint", btn_write: "Írj nekem",
    svc_note: "Az árakat egy rövid beszélgetés után egyeztetjük, a céljaid alapján.",
    rev_eyebrow: "Vélemények", rev_title: "Mit mondanak az <em>ügyfeleim</em>",
    rev_google: "Megnézem a Google-ön", rev_leave: "Véleményt írok",
    rev_empty_t: "Hamarosan itt lesznek az ügyfelek véleményei.",
    rev_empty_d: "Edzettél már velem? Nagyon örülnék, ha írnál egy véleményt a Google-ön.",
    rev_more: "Tovább olvasom", rev_less: "Kevesebb",
    ct_eyebrow: "Kapcsolat", ct_title: "Kezdjük <em>el</em>",
    ct_lead: "A <strong>WhatsApp</strong> a leggyorsabb módja annak, hogy elérj. Írj bármikor, és amint tudok, válaszolok, hogy együtt egyeztessük a részleteket.",
    row_wa: "WhatsApp", row_wa_v: "Írj nekem WhatsAppon", row_ig: "Instagram", row_loc: "Helyszín", row_loc_v: "18 Gym, Kolozsvár",
    ct_form_t: "Vagy küldj üzenetet",
    f_name: "Név", f_contact: "Telefon vagy e-mail", f_msg: "Üzenet", f_send: "Küldés",
    f_ok: "Köszönöm! Hamarosan jelentkezem.", f_err: "Nem sikerült elküldeni. Próbáld meg WhatsAppon.", f_req: "Kérlek, tölts ki minden mezőt.",
    faq_eyebrow: "Gyakori kérdések", faq_title: "Amit tudni szeretnél <em>az első edzés előtt</em>",
    faq_lead: "Ha nem találod itt a kérdésedet, írj nekem közvetlenül.", faq_btn: "Kérdezz tőlem",
    faq_hl_tag: "Kezdőknek", faq_hl_q: "Kezdő vagyok. Elkezdhetem?",
    faq_hl_a: "Igen, és ezek az edzések pont neked szólnak. A te szintedről indulunk, és fokozatosan haladunk, nyomás és ítélkezés nélkül.",
    faq1_q: "Hol zajlanak az edzések?", faq1_a: "A kolozsvári 18 Gymben, vagy online, bárhonnan.",
    faq2_q: "Mennyi idő alatt látok eredményt?", faq2_a: "Az energia és az erő első változásai általában 3-4 hét következetes munka után jelentkeznek.",
    faq3_q: "Edzel magyarul vagy angolul is?", faq3_a: "Igen, az edzések lehetnek románul, magyarul vagy angolul.",
    faq4_q: "Mit hozzak az első edzésre?", faq4_a: "Kényelmes ruhát, sportcipőt, egy törölközőt és egy üveg vizet. A többit én intézem.",
    faq5_q: "Hogyan foglalhatok időpontot?", faq5_a: "Írj WhatsAppon vagy küldd el az űrlapot, és együtt megbeszélünk egy neked megfelelő időpontot.",
    ft_text: "Személyi edző Kolozsváron és online. Személyre szabott edzések románul, magyarul és angolul.",
    ft_contact: "Kapcsolat", ft_legal: "Jogi információk", privacy: "Adatvédelem",
    wa_msg: "Szia Beatrix! Szeretnék időpontot foglalni egy edzésre.",
    wa_svc: "Szia Beatrix! Érdekel: "
  },
  en: {
    close: "Close", menu_label: "Menu",
    m_home: "Home", m_about: "About me", m_services: "Training", m_reviews: "Reviews", m_contact: "Contact", m_faq: "FAQ",
    hero_eyebrow1: "Personal trainer", hero_eyebrow2: "18 Gym · Cluj-Napoca",
    hero_title: "Strength, balance and a body you feel <em>good</em> in.",
    hero_sub: "Training designed for you, not for everyone.",
    cta_contact: "Message me", cta_services: "Training",
    hero_loc1: "At 18 Gym, Cluj", hero_loc2: "Online, anywhere",
    about_eyebrow: "About me", about_role: "Personal trainer",
    about_p1: "I'm a personal trainer at 18 Gym Cluj and I believe movement should fit your life, not the other way around.",
    about_p2: "I work with every client individually: we look at where you're starting from, set realistic goals and reach them step by step, with proper technique, patience and steady motivation.",
    about_btn: "Book a session",
    quote_h: "Movement is a <em>gift,</em><br>not a punishment.",
    quote_p: "Every step counts…<br>Every rep brings you closer<br>to who you want to be.",
    cred_eyebrow: "In short", stat1_l: "personal attention", stat2_l: "languages: Romanian, Hungarian, English",
    how_eyebrow: "How I work",
    c1_t: "A personal plan", c1_d: "Built around your goals, your level and your schedule.",
    c2_t: "Proper technique", c2_d: "I correct you in real time on every exercise, with no injuries.",
    c3_t: "Measured progress", c3_d: "We track results regularly and adjust the plan to them.",
    svc_eyebrow: "Training", svc_title: "Choose the training <em>that suits you.</em>",
    svc_lead: "Personal training at 18 Gym, small groups or online coaching. Message me and we'll decide together what fits you best.",
    tab_s: "Sessions", tab_p: "Packages", tab_o: "Online",
    lbl_dur: "Duration", lbl_loc: "Location", price_req: "Price on request", btn_write: "Message me",
    svc_note: "Pricing is set after a short chat about your goals.",
    rev_eyebrow: "Reviews", rev_title: "What <em>clients</em> say",
    rev_google: "See on Google", rev_leave: "Leave a review",
    rev_empty_t: "Client reviews will appear here.",
    rev_empty_d: "Have you trained with me? I'd love it if you left a review on Google.",
    rev_more: "Read more", rev_less: "Show less",
    ct_eyebrow: "Contact", ct_title: "Let's <em>start</em>",
    ct_lead: "To reply as quickly as possible, <strong>WhatsApp</strong> is my main contact channel. Message me anytime and I'll get back to you soon to sort out the details together.",
    row_wa: "WhatsApp", row_wa_v: "Message me on WhatsApp", row_ig: "Instagram", row_loc: "Location", row_loc_v: "18 Gym, Cluj-Napoca",
    ct_form_t: "Or send a message",
    f_name: "Name", f_contact: "Phone or email", f_msg: "Message", f_send: "Send",
    f_ok: "Thank you! I'll be in touch soon.", f_err: "Could not send. Please try WhatsApp.", f_req: "Please fill in all fields.",
    faq_eyebrow: "FAQ", faq_title: "What to know <em>before your first session</em>",
    faq_lead: "If your question isn't here, message me directly.", faq_btn: "Ask me a question",
    faq_hl_tag: "For beginners", faq_hl_q: "I'm a beginner. Can I start?",
    faq_hl_a: "Yes, and these sessions are designed exactly for you. We start at your level and progress gradually, with no pressure and no judgement.",
    faq1_q: "Where do sessions take place?", faq1_a: "At 18 Gym in Cluj-Napoca, or online from anywhere.",
    faq2_q: "How long until I see results?", faq2_a: "The first changes in energy and strength usually show after 3-4 weeks of consistency.",
    faq3_q: "Do you train in Hungarian or English?", faq3_a: "Yes, sessions can be in Romanian, Hungarian or English.",
    faq4_q: "What should I bring to the first session?", faq4_a: "Comfortable clothes, trainers, a towel and a bottle of water. I'll take care of the rest.",
    faq5_q: "How do I book a session?", faq5_a: "Message me on WhatsApp or send the form and we'll find a time that suits you.",
    ft_text: "Personal trainer in Cluj-Napoca and online. Personalised training in Romanian, Hungarian and English.",
    ft_contact: "Contact", ft_legal: "Legal", privacy: "Privacy",
    wa_msg: "Hi Beatrix! I'd like to book a session.",
    wa_svc: "Hi Beatrix! I'm interested in: "
  }
};

// Serviciile din tab-uri. De validat cu Beatrix (durate, locații, ce include fiecare).
const SERVICII = {
  sedinte: [
    { t: { ro: "Antrenament personal", hu: "Személyi edzés", en: "Personal training" },
      dur: { ro: "60 min", hu: "60 perc", en: "60 min" },
      loc: { ro: "18 Gym, Cluj", hu: "18 Gym, Kolozsvár", en: "18 Gym, Cluj" },
      b: [
        { ro: "<strong>Evaluare la început.</strong> Pornim de la nivelul, istoricul și obiectivele tale.", hu: "<strong>Felmérés az elején.</strong> A szintedből, a múltadból és a céljaidból indulunk ki.", en: "<strong>Assessment first.</strong> We start from your level, history and goals." },
        { ro: "<strong>Atenție 100%.</strong> Corectez tehnica în timp real, la fiecare exercițiu.", hu: "<strong>Teljes figyelem.</strong> Minden gyakorlatnál valós időben javítom a technikádat.", en: "<strong>Full attention.</strong> I correct your technique in real time on every exercise." },
        { ro: "<strong>Plan care evoluează.</strong> Ajustăm exercițiile de la o ședință la alta.", hu: "<strong>Fejlődő terv.</strong> Edzésről edzésre igazítjuk a gyakorlatokat.", en: "<strong>A plan that evolves.</strong> We adjust the exercises from one session to the next." }
      ] },
    { t: { ro: "Antrenament în grup mic", hu: "Kiscsoportos edzés", en: "Small group training" },
      dur: { ro: "60 min", hu: "60 perc", en: "60 min" },
      loc: { ro: "18 Gym, Cluj", hu: "18 Gym, Kolozsvár", en: "18 Gym, Cluj" },
      b: [
        { ro: "<strong>2-3 persoane.</strong> Vii cu o prietenă și împărțiți costul.", hu: "<strong>2-3 fő.</strong> Hozz egy barátnőt, és osszátok meg a költséget.", en: "<strong>2-3 people.</strong> Bring a friend and share the cost." },
        { ro: "<strong>Aceeași atenție la tehnică.</strong> Fiecare primește corecții.", hu: "<strong>Ugyanaz a figyelem a technikára.</strong> Mindenki kap javítást.", en: "<strong>The same focus on technique.</strong> Everyone gets corrections." },
        { ro: "<strong>Energie de grup.</strong> Motivație în plus și rezultate împreună.", hu: "<strong>Csoportenergia.</strong> Több motiváció és közös eredmények.", en: "<strong>Group energy.</strong> Extra motivation and results together." }
      ] },
    { t: { ro: "Ședință de evaluare", hu: "Felmérő alkalom", en: "Assessment session" },
      dur: { ro: "45 min", hu: "45 perc", en: "45 min" },
      loc: { ro: "18 Gym / Online", hu: "18 Gym / Online", en: "18 Gym / Online" },
      b: [
        { ro: "<strong>Discuție despre obiective.</strong> Ce vrei să schimbi și în cât timp.", hu: "<strong>Beszélgetés a célokról.</strong> Min szeretnél változtatni, és mennyi idő alatt.", en: "<strong>A chat about goals.</strong> What you want to change and how soon." },
        { ro: "<strong>Test de mobilitate și forță.</strong> Vedem de unde pornim.", hu: "<strong>Mobilitás- és erőfelmérés.</strong> Megnézzük, honnan indulunk.", en: "<strong>Mobility and strength check.</strong> We see where we're starting from." },
        { ro: "<strong>Pași clari.</strong> Pleci cu recomandări concrete.", hu: "<strong>Világos lépések.</strong> Konkrét javaslatokkal távozol.", en: "<strong>Clear next steps.</strong> You leave with concrete recommendations." }
      ] }
  ],
  pachete: [
    { t: { ro: "Pachet 8 ședințe", hu: "8 alkalmas bérlet", en: "8-session package" },
      dur: { ro: "4 săptămâni", hu: "4 hét", en: "4 weeks" },
      loc: { ro: "18 Gym, Cluj", hu: "18 Gym, Kolozsvár", en: "18 Gym, Cluj" },
      b: [
        { ro: "<strong>2 ședințe pe săptămână.</strong> Ritm constant, fără grabă.", hu: "<strong>Heti 2 alkalom.</strong> Egyenletes tempó, kapkodás nélkül.", en: "<strong>2 sessions a week.</strong> A steady pace, no rush." },
        { ro: "<strong>Plan scris.</strong> Știi mereu ce lucrăm și de ce.", hu: "<strong>Írásos terv.</strong> Mindig tudod, min dolgozunk és miért.", en: "<strong>A written plan.</strong> You always know what we're doing and why." },
        { ro: "<strong>Suport pe WhatsApp</strong> între ședințe.", hu: "<strong>WhatsApp-támogatás</strong> az edzések között.", en: "<strong>WhatsApp support</strong> between sessions." }
      ] },
    { t: { ro: "Pachet 12 ședințe", hu: "12 alkalmas bérlet", en: "12-session package" },
      dur: { ro: "4-6 săptămâni", hu: "4-6 hét", en: "4-6 weeks" },
      loc: { ro: "18 Gym, Cluj", hu: "18 Gym, Kolozsvár", en: "18 Gym, Cluj" },
      b: [
        { ro: "<strong>2-3 ședințe pe săptămână.</strong> Pentru rezultate mai rapide.", hu: "<strong>Heti 2-3 alkalom.</strong> A gyorsabb eredményekért.", en: "<strong>2-3 sessions a week.</strong> For faster results." },
        { ro: "<strong>Măsurători la început și la final.</strong> Progresul se vede.", hu: "<strong>Mérések az elején és a végén.</strong> Látszik a fejlődés.", en: "<strong>Measurements at the start and end.</strong> You see the progress." },
        { ro: "<strong>Exerciții pentru acasă</strong> și suport pe WhatsApp.", hu: "<strong>Otthoni gyakorlatok</strong> és WhatsApp-támogatás.", en: "<strong>Home exercises</strong> and WhatsApp support." }
      ] }
  ],
  online: [
    { t: { ro: "Coaching online lunar", hu: "Havi online coaching", en: "Monthly online coaching" },
      dur: { ro: "4 săptămâni", hu: "4 hét", en: "4 weeks" },
      loc: { ro: "Online", hu: "Online", en: "Online" },
      b: [
        { ro: "<strong>Program adaptat</strong> echipamentului și timpului tău.", hu: "<strong>Személyre szabott program</strong> a felszereléseddel és idődhöz igazítva.", en: "<strong>A programme adapted</strong> to your equipment and time." },
        { ro: "<strong>Feedback pe filmări.</strong> Îmi trimiți exercițiile, eu corectez.", hu: "<strong>Visszajelzés videók alapján.</strong> Elküldöd a gyakorlatokat, én javítok.", en: "<strong>Video feedback.</strong> You send your exercises, I correct them." },
        { ro: "<strong>Check-in săptămânal</strong> și ajustări ale planului.", hu: "<strong>Heti egyeztetés</strong> és a terv finomhangolása.", en: "<strong>Weekly check-in</strong> and plan adjustments." }
      ] },
    { t: { ro: "Plan de antrenament", hu: "Edzésterv", en: "Training plan" },
      dur: { ro: "O singură dată", hu: "Egyszeri", en: "One-off" },
      loc: { ro: "Online", hu: "Online", en: "Online" },
      b: [
        { ro: "<strong>Plan pe 4 săptămâni,</strong> construit pentru tine.", hu: "<strong>4 hetes terv,</strong> neked összeállítva.", en: "<strong>A 4-week plan,</strong> built for you." },
        { ro: "<strong>Explicații clare</strong> pentru fiecare exercițiu.", hu: "<strong>Világos magyarázat</strong> minden gyakorlathoz.", en: "<strong>Clear explanations</strong> for every exercise." },
        { ro: "<strong>O discuție de lămuriri</strong> după primirea planului.", hu: "<strong>Egy egyeztető beszélgetés</strong> a terv átadása után.", en: "<strong>A follow-up call</strong> after you receive the plan." }
      ] }
  ]
};

// Recenzii reale, adăugate doar cu acordul clientelor: { titlu: {ro,hu,en}, text: {ro,hu,en}, nume: "Prenume" }
const RECENZII = [];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
let lang = "ro";
let tabActiv = "sedinte";
try {
  const salvata = localStorage.getItem("by_lang");
  const browser = navigator.language.slice(0, 2);
  lang = TXT[salvata] ? salvata : TXT[browser] ? browser : "ro";
} catch (e) {}

const linkWa = text => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);

// carduri servicii
function randeazaServicii() {
  const T = TXT[lang];
  $("#svcTrack").innerHTML = SERVICII[tabActiv].map(s => `
    <article class="card">
      <h3 class="card__title">${s.t[lang]}</h3>
      <p class="card__price">${T.price_req}</p>
      <dl class="card__meta"><dt>${T.lbl_dur}</dt><dd>${s.dur[lang]}</dd><dt>${T.lbl_loc}</dt><dd>${s.loc[lang]}</dd></dl>
      <ul>${s.b.map(b => `<li>${b[lang]}</li>`).join("")}</ul>
      <a class="btn btn--dark" href="${linkWa(T.wa_svc + s.t[lang])}" target="_blank" rel="noopener">${T.btn_write}</a>
    </article>`).join("");
}

// recenzii
function randeazaRecenzii() {
  const T = TXT[lang];
  const track = $("#revTrack");
  if (!RECENZII.length) {
    track.innerHTML = `<article class="review review--empty"><p class="review__stars">★★★★★</p><h3 class="review__title">${T.rev_empty_t}</h3><p class="review__text">${T.rev_empty_d}</p></article>`;
  } else {
    track.innerHTML = RECENZII.map(r => `
      <article class="review"><p class="review__stars">★★★★★</p>
        <h3 class="review__title">„${r.titlu[lang]}”</h3>
        <p class="review__text is-clamped">${r.text[lang]}</p>
        <button class="review__more" type="button" aria-expanded="false">${T.rev_more}</button>
        <p class="review__who">— ${r.nume}</p></article>`).join("");
    track.querySelectorAll(".review").forEach(rv => {
      const txt = rv.querySelector(".review__text"), btn = rv.querySelector(".review__more");
      if (txt.scrollHeight <= txt.clientHeight + 2) btn.hidden = true;
      btn.addEventListener("click", () => {
        const deschis = txt.classList.toggle("is-clamped") === false;
        btn.textContent = deschis ? T.rev_less : T.rev_more;
        btn.setAttribute("aria-expanded", deschis);
      });
    });
  }
}

function aplicaLimba() {
  const T = TXT[lang];
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(el => { el.textContent = T[el.dataset.i18n]; });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = T[el.dataset.i18nHtml]; });
  $$("[data-lang-switch] button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  $$("[data-wa]").forEach(a => { a.href = linkWa(T.wa_msg); a.target = "_blank"; });
  randeazaServicii();
  randeazaRecenzii();
  $$("[data-carousel]").forEach(c => c.actualizeaza && c.actualizeaza(true));
  try { localStorage.setItem("by_lang", lang); } catch (e) {}
}

$$("[data-lang-switch]").forEach(g => g.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) { lang = b.dataset.lang; aplicaLimba(); }
}));

// header: transparent peste hero, mat după scroll
const hdr = $("#hdr");
const laScroll = () => hdr.classList.toggle("is-scrolled", scrollY > 24);
addEventListener("scroll", laScroll, { passive: true });
laScroll();

// meniu sertar
const menu = $("#menu"), btnMeniu = $("#menuOpen");
let seInchide = false;
function deschideMeniu() {
  seInchide = false;
  menu.showModal();
  btnMeniu.setAttribute("aria-expanded", "true");
  menu.getBoundingClientRect();
  menu.classList.add("is-visible");
}
function inchideMeniu() {
  if (!menu.open || seInchide) return;
  seInchide = true;
  menu.classList.remove("is-visible");
  btnMeniu.setAttribute("aria-expanded", "false");
  setTimeout(() => { menu.close(); seInchide = false; }, reduceMotion.matches ? 0 : 440);
}
btnMeniu.addEventListener("click", deschideMeniu);
$("#menuClose").addEventListener("click", inchideMeniu);
menu.addEventListener("cancel", e => { e.preventDefault(); inchideMeniu(); });
menu.addEventListener("click", e => {
  if (e.target === menu) { // click pe fundal (în afara sertarului)
    const r = menu.getBoundingClientRect();
    if (e.clientX > r.right || e.clientX < r.left || e.clientY < r.top || e.clientY > r.bottom) inchideMeniu();
  }
  if (e.target.closest(".menu__nav a")) inchideMeniu();
});

// tab-uri servicii
$$(".tabs [data-tab]").forEach(b => b.addEventListener("click", () => {
  if (b.dataset.tab === tabActiv) return;
  tabActiv = b.dataset.tab;
  $$(".tabs [data-tab]").forEach(x => x.setAttribute("aria-selected", x === b));
  const track = $("#svcTrack");
  track.classList.add("is-fading");
  setTimeout(() => {
    randeazaServicii();
    track.scrollLeft = 0;
    track.closest("[data-carousel]").actualizeaza(true);
    track.classList.remove("is-fading");
  }, reduceMotion.matches ? 0 : 250);
}));

// carusel: bară de progres, săgeți, drag cu mouse-ul pe desktop
function initCarusel(c) {
  const track = c.querySelector("[data-track]"), bar = c.querySelector("[data-progress]");
  const prev = c.querySelector("[data-prev]"), next = c.querySelector("[data-next]");
  const max = () => Math.max(0, track.scrollWidth - track.clientWidth);
  const pas = () => {
    const el = track.firstElementChild;
    return (el ? el.getBoundingClientRect().width : track.clientWidth) + (parseFloat(getComputedStyle(track).columnGap) || 0);
  };
  c.actualizeaza = () => {
    const m = max(), x = Math.min(track.scrollLeft, m);
    bar.value = m ? (x / m) * 100 : 0;
    bar.disabled = m <= 1;
    prev.disabled = x < 2;
    next.disabled = x >= m - 2;
    c.querySelector(".carousel__ctrl").hidden = m <= 1;
  };
  const comportament = () => reduceMotion.matches ? "instant" : "smooth";
  prev.addEventListener("click", () => track.scrollBy({ left: -pas(), behavior: comportament() }));
  next.addEventListener("click", () => track.scrollBy({ left: pas(), behavior: comportament() }));
  bar.addEventListener("input", () => { track.style.scrollSnapType = "none"; track.scrollLeft = (bar.value / 100) * max(); });
  bar.addEventListener("change", () => track.style.removeProperty("scroll-snap-type"));
  track.addEventListener("scroll", c.actualizeaza, { passive: true });
  addEventListener("resize", c.actualizeaza);

  if (track.hasAttribute("data-drag")) {
    let d = null;
    track.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse" || e.button !== 0 || max() <= 1 || e.target.closest("a, button")) return;
      d = { x: e.clientX, scroll: track.scrollLeft, activ: false, id: e.pointerId };
    });
    track.addEventListener("pointermove", e => {
      if (!d) return;
      const dx = e.clientX - d.x;
      if (!d.activ) {
        if (Math.abs(dx) < 6) return;
        d.activ = true;
        track.setPointerCapture(d.id);
        track.classList.add("is-dragging");
      }
      track.scrollLeft = d.scroll - dx;
    });
    const stop = () => {
      if (!d) return;
      const eraActiv = d.activ;
      d = null;
      track.classList.remove("is-dragging");
      if (eraActiv) {
        const p = pas();
        track.scrollTo({ left: Math.round(track.scrollLeft / p) * p, behavior: comportament() });
      }
    };
    track.addEventListener("pointerup", stop);
    track.addEventListener("pointercancel", stop);
  }
}
$$("[data-carousel]").forEach(initCarusel);

// FAQ: deschidere animată, una singură deschisă
const itemi = $$(".faq__item");
itemi.forEach(item => {
  const sum = item.querySelector("summary");
  item.dataset.expanded = String(item.open);
  const seteaza = deschide => {
    const h0 = item.getBoundingClientRect().height;
    item.open = true;
    item.dataset.expanded = String(deschide);
    const h1 = deschide ? item.getBoundingClientRect().height : sum.getBoundingClientRect().height;
    if (reduceMotion.matches) { item.open = deschide; return; }
    const a = item.animate([{ height: h0 + "px" }, { height: h1 + "px" }], { duration: 360, easing: "cubic-bezier(.22,.61,.36,1)" });
    a.onfinish = () => { item.open = deschide; };
  };
  item.seteaza = seteaza;
  sum.addEventListener("click", e => {
    e.preventDefault();
    const deschide = item.dataset.expanded !== "true";
    if (deschide) itemi.forEach(alt => { if (alt !== item && alt.dataset.expanded === "true") alt.seteaza(false); });
    seteaza(deschide);
  });
});

// apariție la scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12 });
$$(".section:not(.contact) > *, .dark .wrap > *, .contact__content > *, .footer__grid > *").forEach(el => { el.classList.add("reveal"); io.observe(el); });

// butonul WhatsApp plutitor: ascuns în hero și în secțiunea de contact
const vizibile = new Set();
const waFloat = $("#waFloat");
const ioWa = new IntersectionObserver(es => {
  es.forEach(e => e.isIntersecting ? vizibile.add(e.target) : vizibile.delete(e.target));
  waFloat.classList.toggle("show", vizibile.size === 0);
});
$$("#hero, #contact").forEach(el => ioWa.observe(el));

// formular
$("#form").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, st = $("#formStatus"), d = Object.fromEntries(new FormData(f));
  if (d.botcheck) return;
  if (!d.name.trim() || !d.contact.trim() || !d.message.trim()) { st.textContent = TXT[lang].f_req; return; }
  try {
    const r = await fetch("https://api.web3forms.com/submit", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ access_key: CONFIG.web3formsKey, subject: "Mesaj nou de pe beatrixyvett.com", ...d })
    });
    if (!r.ok) throw 0;
    st.textContent = TXT[lang].f_ok; f.reset();
  } catch (_) { st.textContent = TXT[lang].f_err; }
});

$("#yr").textContent = new Date().getFullYear();
aplicaLimba();
