(() => {
  const qs = new URLSearchParams(location.search);
  let role = ['trader','researcher','developer'].includes(qs.get('role')) ? qs.get('role') : 'trader';
  const $ = id => document.getElementById(id);
  const map = $('curriculum-map');

  function countRole(r){ return (window.PROBLEM_BANK||[]).filter(q => q.roleCategories && Array.isArray(q.roleCategories[r]) && q.roleCategories[r].length).length; }
  function practiceUrl(category='',topic=''){
    const p = new URLSearchParams({role});
    if(category) p.set('category',category);
    if(topic) p.set('topic',topic);
    return `practice.html?${p}`;
  }
  function render(){
    const c = window.CURRICULA[role];
    $('role-select').value = role;
    $('role-title').textContent = c.title;
    $('role-short').textContent = c.short;
    $('role-intro').textContent = c.intro;
    $('bank-stat').textContent = `${countRole(role)} questions currently available in this path`;
    $('practice-link').href = practiceUrl();
    map.innerHTML = '';
    c.categories.forEach((cat,i) => {
      const section = document.createElement('section');
      section.className = 'curriculum-category';
      section.innerHTML = `<button class="category-header" type="button" aria-expanded="false"><span class="category-identity"><span class="category-icon">${cat.icon}</span><span><h2>${cat.name}</h2><p>${cat.topics.length} subtopics</p></span></span><span class="category-status"><span>${String(i+1).padStart(2,'0')}</span><span class="category-chevron">⌄</span></span></button><div class="category-open-area" hidden><button class="category-shuffle" type="button">Shuffle ${cat.name} questions ↗</button><div class="subtopic-grid"></div></div>`;
      const open = section.querySelector('.category-open-area');
      const grid = section.querySelector('.subtopic-grid');
      cat.topics.forEach((topic,j) => {
        const b = document.createElement('button');
        b.className = 'subtopic-card'; b.type='button';
        b.innerHTML = `<span class="subtopic-kicker">${String(j+1).padStart(2,'0')}</span><strong>${topic}</strong><span class="subtopic-action">Practise →</span>`;
        b.onclick = () => location.href = practiceUrl(cat.name,topic);
        grid.appendChild(b);
      });
      section.querySelector('.category-shuffle').onclick = () => location.href = practiceUrl(cat.name);
      section.querySelector('.category-header').onclick = e => {
        const isOpen = !open.hidden; open.hidden = isOpen;
        e.currentTarget.setAttribute('aria-expanded',String(!isOpen));
        section.querySelector('.category-chevron').textContent = isOpen ? '⌄' : '⌃';
      };
      map.appendChild(section);
    });
  }

  document.querySelectorAll('[data-home]').forEach(x => x.onclick = () => location.href='index.html');
  $('role-select').onchange = e => { role=e.target.value; history.replaceState(null,'',`role.html?role=${role}`); render(); };
  $('shuffle-all').onclick = () => location.href = practiceUrl();
  $('start-first').onclick = () => document.getElementById('curriculum').scrollIntoView({behavior:'smooth'});
  render();
})();
