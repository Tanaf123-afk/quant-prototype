(() => {
  const all = window.PROBLEM_BANK || [];
  const curricula = window.CURRICULA;
  const params = new URLSearchParams(location.search);
  let role = ['trader','researcher','developer'].includes(params.get('role')) ? params.get('role') : 'trader';
  let active = {category:params.get('category')||'',topic:params.get('topic')||''};
  let deck=[], pointer=-1, fallback=false;
  const $=id=>document.getElementById(id);

  const rolePool=()=>all.filter(q=>q.roleCategories&&Array.isArray(q.roleCategories[role])&&q.roleCategories[role].length);
  const catPool=cat=>!cat?rolePool():rolePool().filter(q=>q.roleCategories[role].includes(cat));
  const exactPool=(cat,topic)=>{
    if(!topic)return catPool(cat);
    return catPool(cat).filter(q=>{const tags=q.topicTags&&q.topicTags[role]&&q.topicTags[role][cat];return Array.isArray(tags)&&tags.includes(topic)});
  };
  function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  function title(){return curricula[role].title}
  function shortSource(s){return s==='quant. starter bank'?'QUANT. BANK':String(s||'QUESTION BANK').toUpperCase()}

  function fillFilters(){
    const c=curricula[role]; $('category-filter').innerHTML='<option value="">All categories</option>';
    c.categories.forEach(x=>$('category-filter').add(new Option(x.name,x.name)));
    $('category-filter').value=c.categories.some(x=>x.name===active.category)?active.category:'';
    fillTopics();
  }
  function fillTopics(){
    const cat=curricula[role].categories.find(x=>x.name===$('category-filter').value);
    $('topic-filter').innerHTML='<option value="">All subtopics</option>';
    if(cat)cat.topics.forEach(t=>$('topic-filter').add(new Option(t,t)));
    $('topic-filter').disabled=!cat;
    $('topic-filter').value=cat&&cat.topics.includes(active.topic)?active.topic:'';
  }
  function build({category=$('category-filter').value,topic=$('topic-filter').value}={}){
    active={category,topic}; let pool=exactPool(category,topic); fallback=false;
    if(topic&&!pool.length){pool=catPool(category);fallback=true}
    if(!pool.length){pool=rolePool();fallback=true}
    deck=shuffle(pool);pointer=-1;
    $('bank-number').textContent=all.length;
    $('filter-note').textContent=fallback?'No exact tagged match yet, so this deck uses the nearest available category questions.':'Questions will not repeat until this shuffled deck is exhausted.';
    const q=new URLSearchParams({role});if(category)q.set('category',category);if(topic)q.set('topic',topic);history.replaceState(null,'',`practice.html?${q}`);
    $('curriculum-link').href=`role.html?role=${role}`;
    next();
  }
  function next(){
    if(!deck.length)return;
    pointer++;if(pointer>=deck.length){deck=shuffle(deck);pointer=0}
    const q=deck[pointer];
    $('problem-source').textContent=shortSource(q.source);$('problem-chapter').textContent=q.chapter?` · ${q.chapter}`:'';
    $('problem-id').textContent=q.id;$('problem-title').textContent=q.title;$('problem-text').textContent=q.problem;
    $('solution-text').textContent=q.solution;$('source-meta').textContent=q.meta||'';$('deck-progress').textContent=`${pointer+1} / ${deck.length}`;
    $('solution-panel').hidden=true;$('reveal-solution').innerHTML='Reveal solution <span>↓</span>';
    window.scrollTo({top:0,behavior:'smooth'});
  }
  function setRole(r){role=r;active={category:'',topic:''};$('practice-role-select').value=r;$('practice-heading').textContent=`${title()} practice.`;fillFilters();build({category:'',topic:''})}

  $('practice-role-select').value=role;$('practice-heading').textContent=`${title()} practice.`;fillFilters();build({category:active.category,topic:active.topic});
  $('category-filter').onchange=()=>{active.topic='';fillTopics()};
  $('practice-role-select').onchange=e=>setRole(e.target.value);
  $('apply-filter').onclick=()=>build();$('shuffle-deck').onclick=()=>build({category:active.category,topic:active.topic});
  $('next-question').onclick=next;$('next-question-top').onclick=next;$('skip-question').onclick=next;
  $('reveal-solution').onclick=()=>{const p=$('solution-panel');p.hidden=!p.hidden;$('reveal-solution').innerHTML=p.hidden?'Reveal solution <span>↓</span>':'Hide solution <span>↑</span>';if(!p.hidden)p.scrollIntoView({behavior:'smooth',block:'nearest'})};
})();
