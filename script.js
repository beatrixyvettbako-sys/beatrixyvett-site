// De completat înainte de publicare
const CONFIG = {
  whatsapp: "40752776655", // fără + și spații
  web3formsKey: "1c788479-ef19-4957-aeba-137873a7b9bf" // cheie publică Web3Forms
};

const TXT = {
  ro: {
    nav_about: "Despre", nav_services: "Servicii", nav_results: "Rezultate", nav_contact: "Contact", privacy: "Confidențialitate",
    hero_eyebrow: "Antrenor personal · 18 Gym Cluj-Napoca",
    hero_title: "Forță, echilibru și un corp în care te simți <em>bine</em>.",
    hero_lead: "Antrenamente personalizate, construite pentru obiectivele și ritmul tău. Fără rețete generice, cu rezultate pe care le vezi și le simți.",
    cta_book: "Programează o ședință", cta_services: "Vezi serviciile",
    stat_1: "atenție personalizată", stat_2: "antrenamente în trei limbi", stat_3: "și online, oriunde ești",
    about_eyebrow: "Despre mine", about_title: "Salut, sunt Beatrix.",
    about_p1: "Sunt antrenor personal la 18 Gym Cluj și cred că mișcarea trebuie să se potrivească vieții tale, nu invers.",
    about_p2: "Lucrez cu fiecare clientă individual: evaluez, stabilim obiective realiste și le atingem pas cu pas, cu tehnică corectă și motivație constantă.",
    about_t1: "Plan construit în jurul tău", about_t2: "Tehnică corectă, fără accidentări", about_t3: "Progres măsurat, nu ghicit",
    svc_eyebrow: "Servicii", svc_title: "Alege formatul care ți se potrivește.",
    svc1_t: "Antrenament personal", svc1_d: "Ședințe 1:1 la 18 Gym Cluj, cu plan personalizat, corecții în timp real și atenție totală.",
    svc2_t: "Coaching online", svc2_d: "Plan de antrenament și ghidare săptămânală, din orice oraș. Primești program, feedback și suport direct.",
    svc3_t: "Grupuri mici", svc3_d: "Antrenament în două-trei persoane: energie de grup, preț împărțit, aceeași atenție la tehnică.",
    svc_more: "Află mai multe", svc_note: "Prețurile se stabilesc după o discuție scurtă despre obiectivele tale.",
    res_eyebrow: "Rezultate", res_title: "Transformări reale, povești reale.",
    q1: "„Pentru prima dată am rămas constantă. Beatrix te ține pe drum fără să te streseze.”",
    q2: "„Am învățat să mă antrenez corect și mă simt mai puternică decât oricând.”",
    q_who: "Clientă B-Fit", res_ig: "Urmărește-mă pe Instagram",
    how_eyebrow: "Cum lucrăm", how_title: "Trei pași simpli.",
    how1_t: "Ne cunoaștem", how1_d: "Îmi spui obiectivele, istoricul și programul tău.",
    how2_t: "Primești planul", how2_d: "Un program clar, adaptat nivelului și timpului tău.",
    how3_t: "Progresăm împreună", how3_d: "Ajustăm constant și măsurăm rezultatele.",
    faq_title: "Întrebări frecvente",
    faq1_q: "Sunt începătoare, pot începe?", faq1_a: "Da. Pornim de la nivelul tău și avansăm gradual, fără presiune.",
    faq2_q: "Unde au loc antrenamentele?", faq2_a: "La 18 Gym Cluj-Napoca, sau online, din orice loc.",
    faq3_q: "Cât durează până văd rezultate?", faq3_a: "Primele schimbări de energie și forță apar de regulă în 3-4 săptămâni, cu constanță.",
    faq4_q: "Antrenezi și în maghiară sau engleză?", faq4_a: "Da, antrenamentele pot fi în română, maghiară sau engleză.",
    ct_eyebrow: "Contact", ct_title: "Hai să începem.",
    ct_lead: "Scrie-mi pe WhatsApp sau trimite formularul. Îți răspund cât de repede pot.",
    ct_loc: "18 Gym, Cluj-Napoca",
    f_name: "Nume", f_contact: "Telefon sau email", f_msg: "Mesaj", f_send: "Trimite",
    f_ok: "Mulțumesc! Revin cât de curând.", f_err: "Nu s-a putut trimite. Încearcă pe WhatsApp.", f_req: "Completează toate câmpurile.",
    wa_msg: "Salut Beatrix! Aș vrea să programez o ședință."
  },
  en: {
    nav_about: "About", nav_services: "Services", nav_results: "Results", nav_contact: "Contact", privacy: "Privacy",
    hero_eyebrow: "Personal trainer · 18 Gym Cluj-Napoca",
    hero_title: "Strength, balance and a body you feel <em>good</em> in.",
    hero_lead: "Personalised training built around your goals and your pace. No generic recipes, just results you can see and feel.",
    cta_book: "Book a session", cta_services: "See services",
    stat_1: "personal attention", stat_2: "training in three languages", stat_3: "and online, wherever you are",
    about_eyebrow: "About me", about_title: "Hi, I'm Beatrix.",
    about_p1: "I'm a personal trainer at 18 Gym Cluj and I believe movement should fit your life, not the other way around.",
    about_p2: "I work with every client individually: we assess, set realistic goals and reach them step by step, with proper technique and steady motivation.",
    about_t1: "A plan built around you", about_t2: "Proper technique, no injuries", about_t3: "Progress measured, not guessed",
    svc_eyebrow: "Services", svc_title: "Pick the format that suits you.",
    svc1_t: "Personal training", svc1_d: "1:1 sessions at 18 Gym Cluj with a tailored plan, real-time corrections and full attention.",
    svc2_t: "Online coaching", svc2_d: "Training plan and weekly guidance from any city. You get a programme, feedback and direct support.",
    svc3_t: "Small groups", svc3_d: "Train in twos or threes: group energy, shared cost, the same attention to technique.",
    svc_more: "Learn more", svc_note: "Pricing is set after a short chat about your goals.",
    res_eyebrow: "Results", res_title: "Real transformations, real stories.",
    q1: "“For the first time I stayed consistent. Beatrix keeps you on track without stressing you out.”",
    q2: "“I learned to train properly and I feel stronger than ever.”",
    q_who: "B-Fit client", res_ig: "Follow me on Instagram",
    how_eyebrow: "How we work", how_title: "Three simple steps.",
    how1_t: "We meet", how1_d: "You tell me your goals, history and schedule.",
    how2_t: "You get the plan", how2_d: "A clear programme, adapted to your level and time.",
    how3_t: "We progress together", how3_d: "We keep adjusting and measuring results.",
    faq_title: "Frequently asked questions",
    faq1_q: "I'm a beginner, can I start?", faq1_a: "Yes. We start at your level and progress gradually, with no pressure.",
    faq2_q: "Where do sessions take place?", faq2_a: "At 18 Gym Cluj-Napoca, or online from anywhere.",
    faq3_q: "How long until I see results?", faq3_a: "The first changes in energy and strength usually show within 3-4 weeks of consistency.",
    faq4_q: "Do you train in Hungarian or English?", faq4_a: "Yes, sessions can be in Romanian, Hungarian or English.",
    ct_eyebrow: "Contact", ct_title: "Let's get started.",
    ct_lead: "Message me on WhatsApp or send the form. I'll reply as soon as I can.",
    ct_loc: "18 Gym, Cluj-Napoca",
    f_name: "Name", f_contact: "Phone or email", f_msg: "Message", f_send: "Send",
    f_ok: "Thank you! I'll be in touch soon.", f_err: "Could not send. Please try WhatsApp.", f_req: "Please fill in all fields.",
    wa_msg: "Hi Beatrix! I'd like to book a session."
  },
  hu: {
    nav_about: "Rólam", nav_services: "Szolgáltatások", nav_results: "Eredmények", nav_contact: "Kapcsolat", privacy: "Adatvédelem",
    hero_eyebrow: "Személyi edző · 18 Gym Kolozsvár",
    hero_title: "Erő, egyensúly és egy test, amelyben <em>jól</em> érzed magad.",
    hero_lead: "Személyre szabott edzések, a te céljaidhoz és ritmusodhoz igazítva. Nincsenek sablonok, csak olyan eredmények, amelyeket látsz és érzel.",
    cta_book: "Időpontot kérek", cta_services: "Szolgáltatások",
    stat_1: "személyes figyelem", stat_2: "edzés három nyelven", stat_3: "és online, bárhol vagy",
    about_eyebrow: "Rólam", about_title: "Szia, Beatrix vagyok.",
    about_p1: "Személyi edző vagyok a 18 Gymben, Kolozsváron, és hiszem, hogy a mozgásnak az életedhez kell igazodnia, nem fordítva.",
    about_p2: "Minden ügyféllel egyénileg dolgozom: felmérjük a kiindulópontot, reális célokat tűzünk ki, és lépésről lépésre elérjük őket, helyes technikával és folyamatos motivációval.",
    about_t1: "A te igényeidre szabott terv", about_t2: "Helyes technika, sérülések nélkül", about_t3: "Mért, nem megérzett fejlődés",
    svc_eyebrow: "Szolgáltatások", svc_title: "Válaszd ki a hozzád illő formát.",
    svc1_t: "Személyi edzés", svc1_d: "Egyéni edzések a kolozsvári 18 Gymben, személyre szabott tervvel, valós idejű korrekcióval és teljes figyelemmel.",
    svc2_t: "Online coaching", svc2_d: "Edzésterv és heti útmutatás bármelyik városból. Programot, visszajelzést és közvetlen támogatást kapsz.",
    svc3_t: "Kiscsoportos edzés", svc3_d: "Edzés két-három fővel: csoportenergia, megosztott költség, ugyanaz a figyelem a technikára.",
    svc_more: "Tudj meg többet", svc_note: "Az árakat a céljaidról folytatott rövid beszélgetés után egyeztetjük.",
    res_eyebrow: "Eredmények", res_title: "Valódi átalakulások, valódi történetek.",
    q1: "„Először maradtam következetes. Beatrix úgy tart a helyes úton, hogy nem stresszel.”",
    q2: "„Megtanultam helyesen edzeni, és erősebbnek érzem magam, mint valaha.”",
    q_who: "B-Fit ügyfél", res_ig: "Kövess Instagramon",
    how_eyebrow: "Hogyan dolgozunk", how_title: "Három egyszerű lépés.",
    how1_t: "Megismerkedünk", how1_d: "Elmondod a céljaidat, a korábbi tapasztalataidat és a napirendedet.",
    how2_t: "Megkapod a tervet", how2_d: "Egy világos program, a szintedhez és az időbeosztásodhoz igazítva.",
    how3_t: "Együtt haladunk", how3_d: "Folyamatosan finomhangolunk és mérjük az eredményeket.",
    faq_title: "Gyakori kérdések",
    faq1_q: "Kezdő vagyok, elkezdhetem?", faq1_a: "Igen. A te szintedről indulunk, és fokozatosan haladunk, nyomás nélkül.",
    faq2_q: "Hol zajlanak az edzések?", faq2_a: "A kolozsvári 18 Gymben, vagy online, bárhonnan.",
    faq3_q: "Mennyi idő alatt látok eredményt?", faq3_a: "Az energia és az erő első változásai általában 3-4 hét következetes munka után jelentkeznek.",
    faq4_q: "Edzel magyarul is?", faq4_a: "Igen, az edzések lehetnek románul, magyarul vagy angolul.",
    ct_eyebrow: "Kapcsolat", ct_title: "Kezdjük el.",
    ct_lead: "Írj WhatsAppon vagy küldd el az űrlapot. Amilyen hamar tudok, válaszolok.",
    ct_loc: "18 Gym, Kolozsvár",
    f_name: "Név", f_contact: "Telefon vagy e-mail", f_msg: "Üzenet", f_send: "Küldés",
    f_ok: "Köszönöm! Hamarosan jelentkezem.", f_err: "Nem sikerült elküldeni. Próbáld meg WhatsAppon.", f_req: "Kérlek, tölts ki minden mezőt.",
    wa_msg: "Szia Beatrix! Szeretnék időpontot foglalni egy edzésre."
  }
};

const $ = s => document.querySelector(s);
let lang = "ro";
try {
  const salvata = localStorage.getItem("by_lang");
  const browser = navigator.language.slice(0, 2);
  lang = TXT[salvata] ? salvata : TXT[browser] ? browser : "en";
} catch (e) {}

function aplicaLimba() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = TXT[lang][el.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = TXT[lang][el.dataset.i18nHtml]; });
  document.querySelectorAll("#langBtn button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  const wa = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(TXT[lang].wa_msg);
  ["#waLink", "#waFloat", "#ctaWa"].forEach(id => { $(id).href = wa; });
  $("#ctaWa").target = "_blank";
  try { localStorage.setItem("by_lang", lang); } catch (e) {}
}

$("#langBtn").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b) { lang = b.dataset.lang; aplicaLimba(); }
});

// meniu mobil
const burger = $("#burger"), links = $("#navLinks");
function inchideMeniu() { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
links.addEventListener("click", e => { if (e.target.tagName === "A") inchideMeniu(); });

// header + reveal la scroll
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 8), { passive: true });
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".section > *, .hero-text, .hero-media").forEach(el => { el.classList.add("reveal"); io.observe(el); });

// butonul WhatsApp plutitor: ascuns în hero și în secțiunea de contact
const vizibile = new Set();
const waFloat = $("#waFloat");
const ioWa = new IntersectionObserver(es => {
  es.forEach(e => e.isIntersecting ? vizibile.add(e.target) : vizibile.delete(e.target));
  waFloat.classList.toggle("show", vizibile.size === 0);
});
document.querySelectorAll(".hero, #contact").forEach(el => ioWa.observe(el));

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
