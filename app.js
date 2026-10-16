/* ============================================================
   IL MANUALE DELLA MAMMA — logica dell'app
   ============================================================ */

const STORE = {
  onboardingDone: "imm_onboarding_done",
  ageRange: "imm_baby_age_range",
  allergens: "imm_allergens",
  favorites: "imm_favorites",
  diary: "imm_diary",
  shopChecked: "imm_shopping_checked"
};

function getJSON(key, fallback){
  try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch(e){ return fallback; }
}
function setJSON(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){}
}

let state = {
  ageRange: getJSON(STORE.ageRange, "6-8"),
  allergens: getJSON(STORE.allergens, []),
  favorites: getJSON(STORE.favorites, []),
  diary: getJSON(STORE.diary, []),
  shopChecked: getJSON(STORE.shopChecked, {}),
  currentView: "home",
  obStepIndex: 0,
  obSelectedAge: null,
  obSelectedAllergens: []
};

const obStepsOrder = ["ob-step-welcome", "ob-step-1", "ob-step-2"];

/* ================= ONBOARDING ================= */
function initOnboarding(){
  document.getElementById("ob-subtitle").textContent = APP_DATA.onboarding.welcomeSubtitle;
  document.getElementById("ob-disclaimer").textContent = APP_DATA.onboarding.disclaimer;

  const ageGroup = document.getElementById("ob-age-group");
  ageGroup.innerHTML = APP_DATA.ageRanges.map(a =>
    `<button type="button" class="chip" data-age="${a.id}">${a.label}</button>`).join("");
  ageGroup.querySelectorAll(".chip").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      ageGroup.querySelectorAll(".chip").forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
      state.obSelectedAge = btn.dataset.age;
    });
  });

  const allGroup = document.getElementById("ob-allergen-group");
  allGroup.innerHTML = APP_DATA.allergenList.map(a =>
    `<button type="button" class="chip" data-allergen="${a}">${a}</button>`).join("") +
    `<button type="button" class="chip" data-allergen="nessuna">nessuna nota</button>`;
  allGroup.querySelectorAll(".chip").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btn.classList.toggle("selected");
      const val = btn.dataset.allergen;
      if(state.obSelectedAllergens.includes(val)){
        state.obSelectedAllergens = state.obSelectedAllergens.filter(x=>x!==val);
      } else {
        state.obSelectedAllergens.push(val);
      }
    });
  });

  document.querySelectorAll('[data-action="ob-next"]').forEach(btn=>{
    btn.addEventListener("click", obNext);
  });
  document.querySelector('[data-action="ob-finish"]').addEventListener("click", obFinish);
}

function obNext(){
  document.getElementById(obStepsOrder[state.obStepIndex]).classList.add("hidden");
  state.obStepIndex++;
  document.getElementById(obStepsOrder[state.obStepIndex]).classList.remove("hidden");
}

function obFinish(){
  if(state.obSelectedAge) state.ageRange = state.obSelectedAge;
  state.allergens = state.obSelectedAllergens.filter(a=>a!=="nessuna");
  setJSON(STORE.ageRange, state.ageRange);
  setJSON(STORE.allergens, state.allergens);
  setJSON(STORE.onboardingDone, true);
  document.getElementById("onboarding").classList.add("hidden");
  startApp();
}

/* ================= NAVIGAZIONE ================= */
function startApp(){
  document.getElementById("app").classList.remove("hidden");

  document.querySelectorAll(".drawer-link").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      switchView(btn.dataset.view);
      closeDrawer();
    });
  });
  document.querySelector('[data-action="open-profile"]').addEventListener("click", ()=>switchView("profile"));
  document.querySelector('[data-action="open-drawer"]').addEventListener("click", openDrawer);
  document.querySelector('[data-action="close-drawer"]').addEventListener("click", closeDrawer);
  document.getElementById("drawer-overlay").addEventListener("click", closeDrawer);

  updateDrawerAge();
  switchView("home");
}

function openDrawer(){
  document.getElementById("drawer").classList.add("open");
  document.getElementById("drawer-overlay").classList.add("open");
}
function closeDrawer(){
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("drawer-overlay").classList.remove("open");
}
function updateDrawerAge(){
  const el = document.getElementById("drawer-age");
  if(el) el.textContent = ageLabel(state.ageRange);
}

function switchView(view){
  state.currentView = view;
  document.querySelectorAll(".drawer-link").forEach(b=>{
    b.classList.toggle("active", b.dataset.view === view);
  });
  updateDrawerAge();
  const c = document.getElementById("view-container");
  if(view === "home") c.innerHTML = renderHome();
  else if(view === "menu") c.innerHTML = renderMenu();
  else if(view === "recipes") c.innerHTML = renderRecipes();
  else if(view === "diary") c.innerHTML = renderDiary();
  else if(view === "library") c.innerHTML = renderLibrary();
  else if(view === "profile") c.innerHTML = renderProfile();
  else if(view === "recipeDetail") { /* gestito da openRecipe() */ }
  window.scrollTo(0,0);
  attachViewListeners(view);
}

/* ================= HELPERS DATI ================= */
function getRecipeById(id){
  return APP_DATA.recipes.find(r=>r.id===id) || APP_DATA.familyRecipes.find(r=>r.id===id);
}
function ageLabel(id){
  const a = APP_DATA.ageRanges.find(x=>x.id===id);
  return a ? a.label : id;
}
function recipeOfTheDay(){
  const pool = APP_DATA.recipes.filter(r=>r.ageRange===state.ageRange);
  if(pool.length===0) return APP_DATA.recipes[0];
  const dayIndex = new Date().getDate() % pool.length;
  return pool[dayIndex];
}

const COVER_COUNT = 6;
function coverForRecipe(id, variant){
  let hash = 0;
  for(let i=0;i<id.length;i++){ hash = (hash * 31 + id.charCodeAt(i)) >>> 0; }
  const n = (hash % COVER_COUNT) + 1;
  return variant === "wide" ? `assets/cover-${n}-wide.png` : `assets/cover-${n}.png`;
}

/* ================= HOME ================= */
function renderHome(){
  const rod = recipeOfTheDay();
  const menu = APP_DATA.weeklyMenus[state.ageRange] || [];
  const todayName = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"][new Date().getDay()];
  const todayMenu = menu.find(d=>d.day===todayName) || menu[0];

  const greeting = (()=>{ const h = new Date().getHours(); return h < 12 ? "Buongiorno" : h < 18 ? "Buon pomeriggio" : "Buonasera"; })();

  return `
    <div class="hero-card">
      <h2>${greeting}! 👋</h2>
      <p>Ecco cosa abbiamo preparato oggi per il tuo bambino.</p>
      <span class="tag age">${ageLabel(state.ageRange)}</span>
    </div>

    <div class="section-title">Ricetta del giorno</div>
    <div class="feature-card" data-open-recipe="${rod.id}">
      <img class="feature-media" src="${coverForRecipe(rod.id, 'wide')}" alt="${rod.title}">
      <span class="feature-badge">${rod.prepTime}</span>
      <button class="feature-fav" data-toggle-fav="${rod.id}">${state.favorites.includes(rod.id)?'❤️':'🤍'}</button>
      <div class="feature-overlay">
        <div class="f-title">${rod.title}</div>
        <span class="feature-cta">Vedi ricetta</span>
      </div>
    </div>

    <div class="section-title">Menù di oggi (${todayName})</div>
    <div class="card">
      ${todayMenu ? renderMenuDayRow(todayMenu) : `<p class="empty-state">Nessun menù disponibile per questa fascia d'età.</p>`}
      <button class="pill-btn outline" data-view="menu">Vedi il menù della settimana</button>
    </div>

    <div class="section-title">Accesso rapido</div>
    <div class="card">
      <button class="pill-btn" data-action="shopping-list">🛒 Lista della spesa</button>
      <button class="pill-btn outline" data-view="library">📚 Guide e PDF</button>
    </div>
  `;
}

function renderMenuDayRow(dayObj){
  const parts = [];
  if(dayObj.lunch) parts.push("Pranzo: " + getRecipeById(dayObj.lunch).title);
  if(dayObj.dinner) parts.push("Cena: " + getRecipeById(dayObj.dinner).title);
  if(dayObj.snack) parts.push("Merenda: " + getRecipeById(dayObj.snack).title);
  return `<p>${parts.join("<br>")}</p>`;
}

/* ================= MENÙ SETTIMANALE ================= */
function renderMenu(){
  const menu = APP_DATA.weeklyMenus[state.ageRange] || [];
  return `
    <div class="filter-row" id="age-filter-menu">
      ${APP_DATA.ageRanges.map(a=>`<button class="filter-chip ${a.id===state.ageRange?'active':''}" data-age="${a.id}">${a.label}</button>`).join("")}
    </div>
    <div class="card">
      <h2>Menù settimanale</h2>
      ${menu.map(d=>`
        <div class="day-row">
          <span class="day-name">${d.day}</span>
          <span class="day-meals">${renderMenuDayRow(d).replace(/<\/?p>/g,"")}</span>
        </div>
      `).join("")}
    </div>
    <button class="btn-primary" data-action="shopping-list">🛒 Genera lista della spesa</button>
    <div id="shopping-list-area"></div>
  `;
}

/* ================= LISTA DELLA SPESA ================= */
function generateShoppingList(){
  const menu = APP_DATA.weeklyMenus[state.ageRange] || [];
  const items = new Set();
  menu.forEach(d=>{
    ["lunch","dinner","snack"].forEach(slot=>{
      if(d[slot]){
        const r = getRecipeById(d[slot]);
        if(r) r.ingredients.forEach(ing=>items.add(ing));
      }
    });
  });
  return Array.from(items).sort();
}

function renderShoppingList(){
  const list = generateShoppingList();
  const checked = state.shopChecked;
  return `
    <div class="card">
      <h2>Lista della spesa — ${ageLabel(state.ageRange)}</h2>
      <ul class="shopping-list">
        ${list.map((item,i)=>`
          <li class="${checked[item] ? 'checked':''}" data-shop-item="${encodeURIComponent(item)}">
            <label><input type="checkbox" data-shop-check="${encodeURIComponent(item)}" ${checked[item]?'checked':''}> ${item}</label>
          </li>`).join("")}
      </ul>
      <button class="pill-btn outline" data-action="print-shopping">🖨️ Stampa / PDF</button>
    </div>
  `;
}

/* ================= RICETTE ================= */
let recipeFilter = { ageRange: "all", search: "" };

let recipeSearchOpen = false;

function renderRecipes(){
  const filtered = filterRecipes();
  const searchActive = recipeSearchOpen || recipeFilter.search.length > 0;
  return `
    <div class="search-toggle-row">
      <button type="button" class="search-icon-btn" id="search-toggle-btn" aria-label="Cerca"></button>
      <input type="text" class="search-bar ${searchActive ? '' : 'hidden-collapsed'}" id="recipe-search" placeholder="Cerca per ingrediente, ricetta..." value="${recipeFilter.search}">
    </div>
    <div class="filter-row" id="age-filter-recipes">
      <button class="filter-chip ${recipeFilter.ageRange==='all'?'active':''}" data-age="all">Tutte</button>
      ${APP_DATA.ageRanges.map(a=>`<button class="filter-chip ${recipeFilter.ageRange===a.id?'active':''}" data-age="${a.id}">${a.label}</button>`).join("")}
    </div>
    <div id="recipe-results">
      ${filtered.length ? filtered.map(r=>recipeCardHTML(r)).join("") : `<p class="empty-state">Nessuna ricetta trovata.</p>`}
    </div>
  `;
}

function filterRecipes(){
  return APP_DATA.recipes.filter(r=>{
    const ageOk = recipeFilter.ageRange === "all" || r.ageRange === recipeFilter.ageRange;
    const s = recipeFilter.search.trim().toLowerCase();
    const searchOk = !s || r.title.toLowerCase().includes(s) || r.ingredients.some(i=>i.toLowerCase().includes(s));
    return ageOk && searchOk;
  });
}

function recipeCardHTML(r){
  const isFav = state.favorites.includes(r.id);
  return `
    <div class="card recipe-card" data-open-recipe="${r.id}">
      <div class="rc-thumb-wrap">
        <img class="rc-thumb" src="${coverForRecipe(r.id)}" alt="${r.title}">
        <span class="rc-badge">${r.prepTime}</span>
      </div>
      <div class="rc-body">
        <div class="rc-title">${r.title}</div>
        <div class="rc-meta">${ageLabel(r.ageRange)} · ${r.texture}</div>
        <div>${r.allergens.map(a=>`<span class="tag">${a}</span>`).join("")}</div>
      </div>
      <button class="fav-btn ${isFav?'active':''}" data-toggle-fav="${r.id}">${isFav?'❤️':'🤍'}</button>
    </div>
  `;
}

/* ================= DETTAGLIO RICETTA ================= */
function openRecipe(id){
  const r = getRecipeById(id);
  if(!r) return;
  const isFav = state.favorites.includes(id);
  const c = document.getElementById("view-container");
  c.innerHTML = `
    <div class="detail-header">
      <button class="back-btn" data-action="back-recipes">←</button>
      <h2 style="margin:0">${r.title}</h2>
    </div>
    <div class="recipe-banner">
      <img src="${coverForRecipe(r.id, 'wide')}" alt="${r.title}">
      ${r.prepTime ? `<span class="rb-badge">${r.prepTime}</span>` : ""}
    </div>
    <div class="card">
      <p>
        ${r.ageRange ? `<span class="tag age">${ageLabel(r.ageRange)}</span>` : ""}
        ${(r.allergens||[]).map(a=>`<span class="tag">${a}</span>`).join("")}
      </p>
      <p><strong>Consistenza:</strong> ${r.texture || "—"}</p>

      <h3>Ingredienti</h3>
      <ul class="ingredient-list">${r.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul>

      <h3>Preparazione</h3>
      <ol class="step-list">${r.steps.map(s=>`<li>${s}</li>`).join("")}</ol>

      ${r.conservazione ? `<h3>Conservazione</h3><p>${r.conservazione}</p>` : ""}
      ${r.notaFamiglia ? `<h3>Nota per la famiglia</h3><p>${r.notaFamiglia}</p>` : ""}

      <button class="pill-btn ${isFav?'':'outline'}" data-toggle-fav="${r.id}">${isFav?'❤️ Nei preferiti':'🤍 Aggiungi ai preferiti'}</button>
      <button class="pill-btn outline" data-action="print-recipe" data-recipe-id="${r.id}">🖨️ Stampa / PDF</button>
    </div>
  `;
  attachDetailListeners();
}

/* ================= DIARIO ================= */
function renderDiary(){
  const entries = [...state.diary].sort((a,b)=> (a.date < b.date ? 1 : -1));
  return `
    <div class="card">
      <h2>Diario delle prime scoperte</h2>
      <p class="help-text">${APP_DATA.bonusDiary.description}</p>
      <form id="diary-form">
        <div class="form-field">
          <label>Data</label>
          <input type="date" name="date" required value="${new Date().toISOString().slice(0,10)}">
        </div>
        <div class="form-field">
          <label>Alimento offerto</label>
          <input type="text" name="food" required placeholder="Es. zucca">
        </div>
        <div class="form-field">
          <label>Prima volta?</label>
          <select name="firstTime">
            <option value="sì">Sì</option>
            <option value="no">No</option>
          </select>
        </div>
        <div class="form-field">
          <label>Reazione / gradimento</label>
          <input type="text" name="reaction" placeholder="Es. gradito, rifiutato, eruzione cutanea...">
        </div>
        <div class="form-field">
          <label>Note</label>
          <textarea name="notes" rows="2" placeholder="Osservazioni aggiuntive"></textarea>
        </div>
        <button type="submit" class="btn-primary">Aggiungi al diario</button>
      </form>
    </div>

    <div class="section-title">Traguardi da registrare</div>
    <div class="card">
      ${APP_DATA.bonusDiary.milestonesExamples.map(m=>`<p>🌟 ${m}</p>`).join("")}
    </div>

    <div class="section-title">Registro</div>
    ${entries.length ? entries.map(e=>`
      <div class="card diary-entry">
        <div class="de-date">${formatDate(e.date)}</div>
        <div class="de-food">${e.food} ${e.firstTime==='sì' ? '· prima volta' : ''}</div>
        <p>${e.reaction || ""}</p>
        ${e.notes ? `<p class="help-text">${e.notes}</p>` : ""}
      </div>
    `).join("") : `<p class="empty-state">Non hai ancora registrato nessun alimento.</p>`}
  `;
}

function formatDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("it-IT", { day:"2-digit", month:"long", year:"numeric" });
}

/* ================= BIBLIOTECA ================= */
function renderLibrary(){
  return `
    <div class="card">
      <h2>Biblioteca</h2>
      <p class="help-text">Guide, bonus e materiali da scaricare in PDF.</p>
    </div>

    <div class="section-title">Guida all'introduzione alimentare</div>
    <div class="card">
      ${APP_DATA.guides.map(g=>`
        <details class="guide-item">
          <summary>${g.title}</summary>
          <p>${g.body}</p>
        </details>
      `).join("")}
      <button class="pill-btn outline" data-action="print-guides">🖨️ Stampa guida completa</button>
    </div>

    <div class="section-title">Conservazione e igiene</div>
    <div class="card">
      <h3>${APP_DATA.conservationGuide.title}</h3>
      <ul>${APP_DATA.conservationGuide.points.map(p=>`<li>${p}</li>`).join("")}</ul>
    </div>

    <div class="section-title">Tabella delle sostituzioni</div>
    <div class="card">
      <table class="sub-table">
        <thead><tr><th>Ingrediente</th><th>Alternative</th><th>Nota</th></tr></thead>
        <tbody>
          ${APP_DATA.substitutions.map(s=>`
            <tr><td>${s.ingredient}</td><td>${s.alternatives.join(", ")}</td><td>${s.note}</td></tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div class="section-title">Bonus · ${APP_DATA.bonusBLW.title}</div>
    <div class="card">
      ${APP_DATA.bonusBLW.sections.map(s=>`<h3>${s.heading}</h3><p>${s.text}</p>`).join("")}
    </div>

    <div class="section-title">Bonus · 30 ricette per tutta la famiglia</div>
    <div class="card">
      <p class="help-text">Prima selezione disponibile, in continuo aggiornamento.</p>
      ${APP_DATA.familyRecipes.map(r=>`
        <div class="recipe-card" data-open-recipe="${r.id}" style="padding:10px 0;border-bottom:1px dashed var(--bordo)">
          <div class="rc-thumb-wrap">
            <img class="rc-thumb" src="${coverForRecipe(r.id)}" alt="${r.title}">
          </div>
          <div class="rc-body">
            <div class="rc-title">${r.title}</div>
            <div class="rc-meta">${(r.allergens||[]).join(", ") || "nessun allergene indicato"}</div>
          </div>
        </div>
      `).join("")}
    </div>

    <div class="section-title">Domande frequenti</div>
    <div class="card">
      ${APP_DATA.faq.map(f=>`
        <details class="guide-item"><summary>${f.q}</summary><p>${f.a}</p></details>
      `).join("")}
    </div>

    <div class="section-title">Informazioni legali</div>
    <div class="card">
      <p>${APP_DATA.legal.disclaimer}</p>
      <p class="help-text">${APP_DATA.legal.privacyNote}</p>
    </div>
  `;
}

/* ================= PROFILO ================= */
function renderProfile(){
  return `
    <div class="detail-header">
      <button class="back-btn" data-action="back-home">←</button>
      <h2 style="margin:0">Profilo</h2>
    </div>
    <div class="card">
      <h3>Dati del bambino</h3>
      <div class="form-field">
        <label>Fascia d'età</label>
        <select id="profile-age">
          ${APP_DATA.ageRanges.map(a=>`<option value="${a.id}" ${a.id===state.ageRange?'selected':''}>${a.label}</option>`).join("")}
        </select>
      </div>
      <button class="pill-btn" data-action="save-profile">Salva</button>
    </div>
    <div class="card">
      <h3>Lingua</h3>
      <p>Italiano</p>
    </div>
    <div class="card">
      <h3>Assistenza</h3>
      <p class="help-text">Per domande sull'app, scrivi al nostro supporto dalla pagina del prodotto su Hotmart.</p>
    </div>
    <div class="card">
      <h3>Informazioni legali</h3>
      <p class="help-text">${APP_DATA.legal.disclaimer}</p>
      <p class="help-text">${APP_DATA.legal.privacyNote}</p>
    </div>
  `;
}

/* ================= STAMPA / PDF (via finestra di stampa) ================= */
function printHTML(title, bodyHTML){
  const area = document.getElementById("print-area");
  area.innerHTML = `<h1>${title}</h1><div class="print-meta">Il Manuale della Mamma</div>${bodyHTML}`;
  window.print();
}

function printRecipe(id){
  const r = getRecipeById(id);
  if(!r) return;
  printHTML(r.title, `
    <p><strong>Fascia d'età:</strong> ${r.ageRange ? ageLabel(r.ageRange) : "—"} · <strong>Tempo:</strong> ${r.prepTime || "—"}</p>
    <h3>Ingredienti</h3>
    <ul>${r.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul>
    <h3>Preparazione</h3>
    <ol>${r.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    ${r.conservazione ? `<h3>Conservazione</h3><p>${r.conservazione}</p>` : ""}
  `);
}

function printShoppingList(){
  const list = generateShoppingList();
  printHTML(`Lista della spesa — ${ageLabel(state.ageRange)}`, `
    <ul>${list.map(i=>`<li>☐ ${i}</li>`).join("")}</ul>
  `);
}

function printGuides(){
  printHTML("Guida all'introduzione alimentare", `
    ${APP_DATA.guides.map(g=>`<h3>${g.title}</h3><p>${g.body}</p>`).join("")}
  `);
}

/* ================= LISTENERS ================= */
function attachViewListeners(view){
  // click su card ricetta / preferiti / navigazione interna
  document.querySelectorAll("[data-open-recipe]").forEach(el=>{
    el.addEventListener("click", (e)=>{
      if(e.target.closest("[data-toggle-fav]")) return;
      openRecipe(el.dataset.openRecipe);
    });
  });
  document.querySelectorAll("[data-toggle-fav]").forEach(el=>{
    el.addEventListener("click", (e)=>{
      e.stopPropagation();
      toggleFavorite(el.dataset.toggleFav);
      switchView(state.currentView);
    });
  });
  document.querySelectorAll('[data-view]').forEach(el=>{
    if(el.classList.contains("nav-btn")) return;
    el.addEventListener("click", ()=>switchView(el.dataset.view));
  });

  if(view === "menu"){
    document.querySelectorAll("#age-filter-menu .filter-chip").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        state.ageRange = btn.dataset.age;
        setJSON(STORE.ageRange, state.ageRange);
        switchView("menu");
      });
    });
    const btn = document.querySelector('[data-action="shopping-list"]');
    if(btn) btn.addEventListener("click", ()=>{
      document.getElementById("shopping-list-area").innerHTML = renderShoppingList();
      attachShoppingListeners();
    });
  }

  if(view === "home"){
    const btn = document.querySelector('[data-action="shopping-list"]');
    if(btn) btn.addEventListener("click", ()=>switchView("menu"));
  }

  if(view === "recipes"){
    const searchInput = document.getElementById("recipe-search");
    document.getElementById("search-toggle-btn").addEventListener("click", ()=>{
      recipeSearchOpen = !recipeSearchOpen;
      switchView("recipes");
      if(recipeSearchOpen) document.getElementById("recipe-search").focus();
    });
    searchInput.addEventListener("input", (e)=>{
      recipeFilter.search = e.target.value;
      document.getElementById("recipe-results").innerHTML =
        filterRecipes().length ? filterRecipes().map(r=>recipeCardHTML(r)).join("") : `<p class="empty-state">Nessuna ricetta trovata.</p>`;
      attachViewListeners("recipes");
    });
    document.querySelectorAll("#age-filter-recipes .filter-chip").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        recipeFilter.ageRange = btn.dataset.age;
        switchView("recipes");
      });
    });
  }

  if(view === "diary"){
    document.getElementById("diary-form").addEventListener("submit", (e)=>{
      e.preventDefault();
      const fd = new FormData(e.target);
      const entry = {
        date: fd.get("date"), food: fd.get("food"), firstTime: fd.get("firstTime"),
        reaction: fd.get("reaction"), notes: fd.get("notes")
      };
      state.diary.push(entry);
      setJSON(STORE.diary, state.diary);
      switchView("diary");
    });
  }

  if(view === "library"){
    const pg = document.querySelector('[data-action="print-guides"]');
    if(pg) pg.addEventListener("click", printGuides);
  }

  if(view === "profile"){
    const save = document.querySelector('[data-action="save-profile"]');
    if(save) save.addEventListener("click", ()=>{
      state.ageRange = document.getElementById("profile-age").value;
      setJSON(STORE.ageRange, state.ageRange);
      switchView("home");
    });
    const back = document.querySelector('[data-action="back-home"]');
    if(back) back.addEventListener("click", ()=>switchView("home"));
  }
}

function attachShoppingListeners(){
  document.querySelectorAll("[data-shop-check]").forEach(cb=>{
    cb.addEventListener("change", ()=>{
      const item = decodeURIComponent(cb.dataset.shopCheck);
      state.shopChecked[item] = cb.checked;
      setJSON(STORE.shopChecked, state.shopChecked);
      cb.closest("li").classList.toggle("checked", cb.checked);
    });
  });
  const printBtn = document.querySelector('[data-action="print-shopping"]');
  if(printBtn) printBtn.addEventListener("click", printShoppingList);
}

function attachDetailListeners(){
  document.querySelector('[data-action="back-recipes"]').addEventListener("click", ()=>switchView(state.currentView === "recipeDetail" ? "recipes" : state.currentView));
  document.querySelectorAll("[data-toggle-fav]").forEach(el=>{
    el.addEventListener("click", ()=>{
      toggleFavorite(el.dataset.toggleFav);
      openRecipe(el.dataset.toggleFav);
    });
  });
  const printBtn = document.querySelector('[data-action="print-recipe"]');
  if(printBtn) printBtn.addEventListener("click", ()=>printRecipe(printBtn.dataset.recipeId));
}

function toggleFavorite(id){
  if(state.favorites.includes(id)){
    state.favorites = state.favorites.filter(f=>f!==id);
  } else {
    state.favorites.push(id);
  }
  setJSON(STORE.favorites, state.favorites);
}

/* ================= AVVIO ================= */
document.addEventListener("DOMContentLoaded", ()=>{
  if(getJSON(STORE.onboardingDone, false)){
    document.getElementById("onboarding").classList.add("hidden");
    startApp();
  } else {
    initOnboarding();
  }

  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(()=>{});
  }
});
