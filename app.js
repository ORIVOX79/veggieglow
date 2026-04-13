// ===== VEGGIEGLOW — APP.JS =====

let currentFilter  = 'tous';
let currentCuissonTab = 'legumes';
let currentPortions = 2;

// ── NAV ──────────────────────────────────────────────────────────────────
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.addEventListener('click', e => {
  const nav = document.getElementById('navLinks');
  if (nav && nav.classList.contains('open') && !e.target.closest('.navbar')) {
    nav.classList.remove('open');
  }
});

// ── HELPERS ──────────────────────────────────────────────────────────────
function catLabel(cat) {
  const map = { 'petit-dejeuner':'Petit-déjeuner','dejeuner':'Déjeuner','diner':'Dîner','soupe':'Soupe','snack':'Snack','dessert':'Dessert','boisson':'Boisson' };
  return map[cat] || cat;
}

// ── RECIPES ──────────────────────────────────────────────────────────────
function renderRecipes() {
  const search = (document.getElementById('recipeSearch').value || '').toLowerCase();
  const filtered = RECIPES.filter(r => {
    const matchCat    = currentFilter === 'tous' || r.cat === currentFilter;
    const matchSearch = !search || r.name.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  document.getElementById('recipeCount').textContent =
    `${filtered.length} recette${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}`;

  const grid = document.getElementById('recipeGrid');
  if (!filtered.length) {
    grid.innerHTML = '<div class="no-results">🥦 Aucune recette trouvée. Essayez un autre terme.</div>';
    return;
  }

  grid.innerHTML = filtered.map((r, i) => {
    const imgHtml = r.img
      ? `<img src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.style.display='none'" />`
      : `<span class="recipe-emoji-fallback">${r.emoji}</span>`;
    return `
    <div class="recipe-card" onclick="openRecipe(${r.id})" style="animation-delay:${(i%12)*0.04}s">
      <div class="recipe-card-img" style="background:${r.bg}">${imgHtml}</div>
      <div class="recipe-card-body">
        <div class="recipe-card-cat">${catLabel(r.cat)}</div>
        <h3>${r.name}</h3>
        <div class="recipe-card-meta">
          <span>⏱ ${r.time}</span>
          <span>👤 ${r.servings} pers.</span>
          <span>📊 ${r.difficulty}</span>
        </div>
        <div class="recipe-kcal">🔥 ${r.kcal} kcal</div>
      </div>
    </div>`;
  }).join('');
}

function setFilter(btn) {
  currentFilter = btn.dataset.cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderRecipes();
}
function filterRecipes() { renderRecipes(); }

function openRecipe(id) {
  const r = RECIPES.find(r => r.id === id);
  if (!r) return;

  const imgHtml = r.img
    ? `<img src="${r.img}" alt="${r.name}" class="modal-recipe-img" onerror="this.style.display='none'" />`
    : '';

  document.getElementById('modalContent').innerHTML = `
    ${imgHtml}
    <div class="modal-emoji">${r.emoji}</div>
    <div class="modal-cat">${catLabel(r.cat)}</div>
    <h2>${r.name}</h2>
    <div class="modal-meta">
      <span>⏱ ${r.time}</span>
      <span>👤 ${r.servings} portion(s)</span>
      <span>📊 ${r.difficulty}</span>
    </div>
    <div class="macro-pills">
      <span class="macro-pill pill-k">🔥 ${r.kcal} kcal</span>
      <span class="macro-pill pill-p">🥩 ${r.proteins}g protéines</span>
      <span class="macro-pill pill-g">🌾 ${r.carbs}g glucides</span>
      <span class="macro-pill pill-l">🫒 ${r.fats}g lipides</span>
    </div>
    <div class="modal-section">
      <h4>Ingrédients</h4>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h4>Préparation</h4>
      <ol>${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
    </div>`;

  document.getElementById('recipeModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('recipeModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ── CALORIES ─────────────────────────────────────────────────────────────
function calculateCalories() {
  const age      = parseFloat(document.getElementById('cal-age').value);
  const sex      = document.getElementById('cal-sex').value;
  const weight   = parseFloat(document.getElementById('cal-weight').value);
  const height   = parseFloat(document.getElementById('cal-height').value);
  const activity = parseFloat(document.getElementById('cal-activity').value);
  const goal     = document.getElementById('cal-goal').value;

  if (!age || !weight || !height) { alert('Veuillez remplir tous les champs.'); return; }

  const bmr = sex === 'homme'
    ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);

  const tdee = bmr * activity;
  let target = tdee, goalLabel = 'Maintien';
  if (goal === 'perte') { target = tdee - 500; goalLabel = 'Perte de poids'; }
  if (goal === 'prise') { target = tdee + 300; goalLabel = 'Prise de masse'; }

  document.getElementById('calResult').innerHTML = `
    <div class="result-content">
      <div class="result-main">
        <div class="big-num">${Math.round(target)}</div>
        <div class="big-unit">kcal / jour</div>
        <div class="result-label">${goalLabel}</div>
      </div>
      <div class="result-breakdown">
        <div class="result-breakdown-item"><span class="breakdown-label">🔥 Métabolisme de base (BMR)</span><span class="breakdown-value">${Math.round(bmr)} kcal</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">⚡ Dépense totale (TDEE)</span><span class="breakdown-value">${Math.round(tdee)} kcal</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">🎯 Objectif ${goalLabel}</span><span class="breakdown-value" style="color:var(--terracotta)">${Math.round(target)} kcal</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">🍽️ Par repas (3 repas)</span><span class="breakdown-value">${Math.round(target/3)} kcal</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">🥗 Déjeuner conseillé (40%)</span><span class="breakdown-value">${Math.round(target*0.4)} kcal</span></div>
      </div>
    </div>`;
}

// ── MACROS ───────────────────────────────────────────────────────────────
function calculateMacros() {
  const kcal = parseFloat(document.getElementById('macro-kcal').value);
  const goal = document.getElementById('macro-goal').value;
  if (!kcal) { alert('Entrez vos calories cibles.'); return; }

  const ratios = {
    equilibre: {p:0.25,g:0.50,l:0.25,label:'Équilibré'},
    sport:     {p:0.30,g:0.40,l:0.30,label:'Sportif — riche en protéines'},
    keto:      {p:0.30,g:0.10,l:0.60,label:'Low-carb végétarien'},
    endurance: {p:0.15,g:0.60,l:0.25,label:'Endurance'}
  };
  const r = ratios[goal];
  const proteins = Math.round((kcal * r.p) / 4);
  const carbs    = Math.round((kcal * r.g) / 4);
  const fats     = Math.round((kcal * r.l) / 9);

  document.getElementById('macroResult').innerHTML = `
    <div class="result-content">
      <div class="result-main">
        <div class="big-num">${kcal}</div>
        <div class="big-unit">kcal</div>
        <div class="result-label">${r.label}</div>
      </div>
      <div class="macro-bars">
        <div class="macro-bar-item">
          <div class="macro-bar-label"><span>🥩 Protéines (${Math.round(r.p*100)}%)</span><span>${proteins}g — ${Math.round(kcal*r.p)} kcal</span></div>
          <div class="bar-bg"><div class="bar-fill bar-p" style="width:${r.p*100}%"></div></div>
        </div>
        <div class="macro-bar-item">
          <div class="macro-bar-label"><span>🌾 Glucides (${Math.round(r.g*100)}%)</span><span>${carbs}g — ${Math.round(kcal*r.g)} kcal</span></div>
          <div class="bar-bg"><div class="bar-fill bar-g" style="width:${r.g*100}%"></div></div>
        </div>
        <div class="macro-bar-item">
          <div class="macro-bar-label"><span>🫒 Lipides (${Math.round(r.l*100)}%)</span><span>${fats}g — ${Math.round(kcal*r.l)} kcal</span></div>
          <div class="bar-bg"><div class="bar-fill bar-l" style="width:${r.l*100}%"></div></div>
        </div>
      </div>
      <div class="result-breakdown" style="margin-top:16px">
        <div class="result-breakdown-item"><span class="breakdown-label">🌱 Sources protéines végé</span><span class="breakdown-value" style="font-size:0.78rem">Tofu, tempeh, lentilles, pois chiches, quinoa</span></div>
      </div>
    </div>`;
}

// ── PORTIONS ─────────────────────────────────────────────────────────────
function changePortion(delta) {
  currentPortions = Math.max(1, Math.min(20, currentPortions + delta));
  document.getElementById('portionCount').textContent = currentPortions;
  renderPortions();
}

function renderPortions() {
  document.getElementById('quantitesGrid').innerHTML = PORTIONS_BASE.map(item => {
    const qty = item.base * currentPortions;
    let display;
    if (item.unit === 'g') {
      display = qty >= 1000 ? `${+(qty/1000).toFixed(2)} kg` : `${qty} g`;
    } else if (item.unit === 'ml') {
      display = qty >= 1000 ? `${+(qty/1000).toFixed(2)} L` : `${qty} ml`;
    } else {
      display = `${qty} ${item.unit}`;
    }
    return `<div class="portion-row">
      <div class="portion-name">${item.emoji} ${item.name}</div>
      <div class="portion-qty">${display}</div>
      <div class="portion-visual">${item.visual}</div>
    </div>`;
  }).join('');
}

// ── CUISSON ──────────────────────────────────────────────────────────────
function renderCuisson(tab, search = '') {
  const data     = COOKING_TIMES[tab];
  const filtered = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  if (!filtered.length) {
    document.getElementById('cuissonTable').innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:40px">Aucun résultat pour cette recherche.</p>';
    return;
  }

  let html = '<div class="cuisson-table"><table>';
  if (tab === 'legumes') {
    html += `<thead><tr><th>Légume</th><th>Vapeur</th><th>Eau bouillante</th><th>Four</th><th>Poêle</th><th>Note</th></tr></thead><tbody>
    ${filtered.map(d=>`<tr><td><strong>${d.name}</strong></td><td>${tb(d.vapeur)}</td><td>${tb(d.eau)}</td><td>${tb(d.four)}</td><td>${tb(d.poele)}</td><td class="note-cell">${d.note}</td></tr>`).join('')}</tbody>`;
  } else if (tab === 'cereales') {
    html += `<thead><tr><th>Céréale</th><th>Eau pour 100g</th><th>Temps</th><th>Note</th></tr></thead><tbody>
    ${filtered.map(d=>`<tr><td><strong>${d.name}</strong></td><td>${d.eau}</td><td>${tb(d.temps)}</td><td class="note-cell">${d.note}</td></tr>`).join('')}</tbody>`;
  } else if (tab === 'legumineuses') {
    html += `<thead><tr><th>Légumineuse</th><th>Trempage</th><th>Cuisson</th><th>Note</th></tr></thead><tbody>
    ${filtered.map(d=>`<tr><td><strong>${d.name}</strong></td><td>${d.trempage}</td><td>${tb(d.cuisson)}</td><td class="note-cell">${d.note}</td></tr>`).join('')}</tbody>`;
  } else if (tab === 'oeufs') {
    html += `<thead><tr><th>Type</th><th>Méthode</th><th>Temps</th><th>Texture obtenue</th></tr></thead><tbody>
    ${filtered.map(d=>`<tr><td><strong>${d.name}</strong></td><td style="font-size:0.8rem">${d.methode}</td><td>${tb(d.temps)}</td><td class="note-cell">${d.texture}</td></tr>`).join('')}</tbody>`;
  }
  html += '</table></div>';
  document.getElementById('cuissonTable').innerHTML = html;
}

function tb(time) {
  if (!time || time === '—') return '<span style="color:#ccc">—</span>';
  const n = parseInt(time);
  const cls = n > 40 ? 'time-long' : n > 15 ? 'time-medium' : 'time-quick';
  return `<span class="time-badge ${cls}">${time}</span>`;
}

function showCuissonTab(tab, el) {
  currentCuissonTab = tab;
  document.querySelectorAll('.ctab').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('cuissonSearch').value = '';
  renderCuisson(tab);
}
function filterCuisson() {
  renderCuisson(currentCuissonTab, document.getElementById('cuissonSearch').value);
}

// ── CONVERTERS ───────────────────────────────────────────────────────────
function convertWeight() {
  const val  = parseFloat(document.getElementById('conv-weight-val').value);
  const from = document.getElementById('conv-weight-from').value;
  const el   = document.getElementById('weightResult');
  if (isNaN(val)) { el.innerHTML = '—'; return; }
  const toG = {g:1,kg:1000,oz:28.3495,lb:453.592};
  const g   = val * toG[from];
  const lines = [];
  if (from!=='g')  lines.push(`<strong>${+g.toFixed(2)} g</strong>`);
  if (from!=='kg') lines.push(`<strong>${+(g/1000).toFixed(4)} kg</strong>`);
  if (from!=='oz') lines.push(`<strong>${+(g/28.3495).toFixed(2)} oz</strong>`);
  if (from!=='lb') lines.push(`<strong>${+(g/453.592).toFixed(3)} lb</strong>`);
  el.innerHTML = lines.join('<br>');
}

function convertVolume() {
  const val  = parseFloat(document.getElementById('conv-vol-val').value);
  const from = document.getElementById('conv-vol-from').value;
  const el   = document.getElementById('volResult');
  if (isNaN(val)) { el.innerHTML = '—'; return; }
  const toMl = {ml:1,l:1000,cl:10,cup:236.588,tbsp:14.7868,tsp:4.92892,floz:29.5735,pt:473.176,qt:946.353,gal:3785.41};
  const ml   = val * toMl[from];
  const lines = [];
  if (from!=='ml')   lines.push(`<strong>${+ml.toFixed(1)} ml</strong>`);
  if (from!=='cl')   lines.push(`<strong>${+(ml/10).toFixed(2)} cl</strong>`);
  if (from!=='l')    lines.push(`<strong>${+(ml/1000).toFixed(4)} L</strong>`);
  if (from!=='cup')  lines.push(`<strong>${+(ml/236.588).toFixed(2)} tasse(s)</strong>`);
  if (from!=='tbsp') lines.push(`<strong>${+(ml/14.7868).toFixed(1)} c.à.s</strong>`);
  if (from!=='tsp')  lines.push(`<strong>${+(ml/4.92892).toFixed(1)} c.à.c</strong>`);
  if (from!=='floz') lines.push(`<strong>${+(ml/29.5735).toFixed(2)} fl oz</strong>`);
  if (from!=='pt')   lines.push(`<strong>${+(ml/473.176).toFixed(3)} pinte US</strong>`);
  if (from!=='qt')   lines.push(`<strong>${+(ml/946.353).toFixed(3)} quart US</strong>`);
  if (from!=='gal')  lines.push(`<strong>${+(ml/3785.41).toFixed(5)} gallon US</strong>`);
  el.innerHTML = lines.join('<br>');
}

function convertTemp() {
  const val  = parseFloat(document.getElementById('conv-temp-val').value);
  const from = document.getElementById('conv-temp-from').value;
  const el   = document.getElementById('tempResult');
  if (isNaN(val)) { el.innerHTML = '—'; return; }
  let celsius;
  if (from==='c')  celsius = val;
  if (from==='f')  celsius = (val-32)*5/9;
  if (from==='th') celsius = val*30+30;
  const f  = celsius*9/5+32;
  const th = Math.max(1, Math.round((celsius-30)/30));
  const lines = [];
  if (from!=='c')  lines.push(`<strong>${Math.round(celsius)} °C</strong>`);
  if (from!=='f')  lines.push(`<strong>${Math.round(f)} °F</strong>`);
  if (from!=='th') lines.push(`<strong>Thermostat ${th}</strong>`);
  el.innerHTML = lines.join('<br>');
}

// ── HYDRATION ────────────────────────────────────────────────────────────
function calculateHydration() {
  const weight   = parseFloat(document.getElementById('hydra-weight').value);
  const activity = document.getElementById('hydra-activity').value;
  const climat   = document.getElementById('hydra-climat').value;
  if (!weight) { alert('Entrez votre poids.'); return; }

  const actMul = {sedentaire:30,leger:33,modere:35,actif:40};
  let base = (weight * actMul[activity]) / 1000;
  if (climat==='chaud') base += 0.5;
  if (climat==='sport') base += 1;

  const glasses = Math.round(base/0.25);
  const drops   = Array.from({length:Math.min(glasses,14)},()=>'💧').join('');

  document.getElementById('hydraResult').innerHTML = `
    <div class="result-content">
      <div class="result-main">
        <div class="big-num">${base.toFixed(1)}</div>
        <div class="big-unit">litres / jour</div>
        <div class="result-label">≈ ${glasses} verres de 25cl</div>
      </div>
      <div style="text-align:center;margin:16px 0;font-size:1.6rem;letter-spacing:3px;line-height:2">${drops}</div>
      <div class="result-breakdown">
        <div class="result-breakdown-item"><span class="breakdown-label">☀️ Au réveil (à jeun)</span><span class="breakdown-value">2 verres (500ml)</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">🍽️ Avec les repas</span><span class="breakdown-value">3 × 250ml</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">💧 Dans la journée</span><span class="breakdown-value">${Math.max(0,base-0.5-0.75).toFixed(1)}L à répartir</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">🥦 Astuce végé</span><span class="breakdown-value" style="font-size:0.78rem">Les fruits & légumes ≈ 20% de l'hydratation</span></div>
      </div>
    </div>`;
}

// ── IMC ──────────────────────────────────────────────────────────────────
function calculateIMC() {
  const weight = parseFloat(document.getElementById('imc-weight').value);
  const height = parseFloat(document.getElementById('imc-height').value) / 100;
  if (!weight || !height) { alert('Entrez votre poids et taille.'); return; }

  const imc = weight / (height*height);
  let cat, color, advice;
  if (imc < 18.5)      { cat='Insuffisance pondérale'; color='#4fc3f7'; advice='Augmentez les apports avec des aliments riches : avocat, noix, légumineuses, huiles végétales.'; }
  else if (imc < 25)   { cat='Poids normal ✓';        color='var(--sage)'; advice='Excellent ! Maintenez une alimentation végétarienne équilibrée et une activité physique régulière.'; }
  else if (imc < 30)   { cat='Surpoids';              color='var(--gold)'; advice='Privilégiez légumes et protéines végétales, réduisez les sucres raffinés.'; }
  else                  { cat='Obésité';              color='var(--terracotta)'; advice='Consultez un professionnel de santé pour un accompagnement personnalisé.'; }

  const minW = Math.round(18.5*height*height);
  const maxW = Math.round(24.9*height*height);

  document.getElementById('imcResult').innerHTML = `
    <div class="result-content">
      <div class="result-main">
        <div class="big-num" style="color:${color}">${imc.toFixed(1)}</div>
        <div class="big-unit">IMC</div>
        <div class="result-label" style="color:${color}">${cat}</div>
      </div>
      <div style="margin:20px 0">
        <div class="imc-scale">
          <div class="imc-seg" style="background:#4fc3f7;opacity:.7"></div>
          <div class="imc-seg" style="background:var(--sage);opacity:.7"></div>
          <div class="imc-seg" style="background:var(--gold);opacity:.7"></div>
          <div class="imc-seg" style="background:var(--terracotta);opacity:.7"></div>
        </div>
        <div class="imc-labels"><span>&lt;18.5<br>Insuf.</span><span>18.5–25<br>Normal</span><span>25–30<br>Surpoids</span><span>&gt;30<br>Obésité</span></div>
      </div>
      <div class="result-breakdown">
        <div class="result-breakdown-item"><span class="breakdown-label">📏 Poids idéal pour votre taille</span><span class="breakdown-value">${minW}–${maxW} kg</span></div>
        <div class="result-breakdown-item"><span class="breakdown-label">💡 Conseil</span><span class="breakdown-value" style="font-size:0.78rem;text-align:right;max-width:200px">${advice}</span></div>
      </div>
    </div>`;
}

// ── ASTUCES ──────────────────────────────────────────────────────────────
function showAstucesTab(tab, el) {
  document.querySelectorAll('.atab').forEach(b => b.classList.remove('active'));
  if (el) el.classList.add('active');
  const data = ASTUCES[tab];
  const introHtml = data.intro
    ? `<div class="fast-intro"><p>${data.intro}</p></div>`
    : '';
  document.getElementById('astucesContent').innerHTML = `
    <div class="astuces-content">
      ${introHtml}
      <div class="astuces-cards">
        ${data.items.map((item,i)=>`
        <div class="astuce-card" style="animation-delay:${i*0.06}s">
          <div class="astuce-icon">${item.icon}</div>
          <div class="astuce-body">
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>`;
}

// ── SEASON ───────────────────────────────────────────────────────────────
function showMonth(monthIndex) {
  const idx  = parseInt(monthIndex);
  const data = SEASONAL_PRODUCE[idx];
  document.getElementById('monthSelect').value = idx;
  document.getElementById('seasonGrid').innerHTML = `
    <p style="text-align:center;font-family:'Cormorant Garamond',serif;font-size:1.3rem;color:var(--green-deep);margin-bottom:24px">
      🗓️ ${MONTH_NAMES[idx]}
    </p>
    <div class="season-grid-inner">
      <div class="season-cat">
        <h3>🍎 Fruits (${data.fruits.length})</h3>
        <div class="season-items">${data.fruits.map(f=>`<span class="season-tag tag-fruit">${f}</span>`).join('')}</div>
      </div>
      <div class="season-cat">
        <h3>🥦 Légumes (${data.legumes.length})</h3>
        <div class="season-items">${data.legumes.map(l=>`<span class="season-tag tag-legume">${l}</span>`).join('')}</div>
      </div>
    </div>`;
}

// ── INIT ─────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes();
  renderCuisson('legumes');
  renderPortions();
  showAstucesTab('temps', document.querySelector('.atab'));
  showMonth(new Date().getMonth());

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
