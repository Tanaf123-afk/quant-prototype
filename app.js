window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS.trader = [
  {
    id: 'T001', topic: 'Pattern probability', difficulty: 'Very hard',
    text: 'A fair coin is tossed repeatedly until either HHT or THH appears. What is the probability that HHT appears first?',
    note: 'Overlapping prefixes make a direct “each pattern is equally likely” argument wrong.',
    answers: ['1/4', '1/3', '1/2', '2/3'], correct: 0,
    hint: 'Track the longest suffix that is also a prefix of HHT or THH. Useful states are H, HH, T and TH.',
    explanation: '<p>Let p_H, p_HH, p_T and p_TH be the probabilities that HHT wins from those suffix states. Then p_HH=(p_HH+1)/2, so p_HH=1. Also p_TH=p_T/2 and p_T=(p_TH+p_T)/2, which forces p_T=0. Hence p_H=(p_HH+p_T)/2=1/2.</p><p>From the start, the first toss is H or T with equal probability, so P(HHT first)=(1/2)(1/2)+(1/2)(0)=<strong>1/4</strong>.</p>'
  },
  {
    id: 'T002', topic: 'Expected value', difficulty: 'Hard',
    text: 'You repeatedly roll a fair six-sided die. The game stops when the running total first exceeds 12. What is the expected number of rolls?',
    note: 'An exact recursive setup is more important than mental arithmetic.',
    answers: ['About 3.5', 'About 4.0', 'About 4.2', 'About 4.8'], correct: 2,
    hint: 'Let E(s) be the expected additional rolls when the current total is s, with E(s)=0 for s>12.',
    explanation: '<p>Use E(s)=1+(1/6)ΣE(s+k), k=1,...,6, for s≤12, and E(s)=0 for s>12. Work backwards from s=12 to s=0. The resulting value is approximately <strong>4.20 rolls</strong>, so “About 4.2” is the best answer.</p>'
  },
  {
    id: 'T003', topic: 'Bayes', difficulty: 'Hard',
    text: 'One of three coins is chosen uniformly. Their head probabilities are 0.2, 0.5 and 0.8. After observing H, H, T in that order, what is the posterior probability that the 0.8 coin was chosen?',
    note: 'Use likelihoods. The order matters only through the counts because tosses are conditionally independent.',
    answers: ['16/45', '8/21', '128/285', '1/2'], correct: 2,
    hint: 'Posterior weights are proportional to p²(1-p).',
    explanation: '<p>The unnormalised weights are 0.2²·0.8=0.032, 0.5²·0.5=0.125, and 0.8²·0.2=0.128. The total is 0.285, so the posterior for the 0.8 coin is 0.128/0.285 = <strong>128/285 ≈ 0.449</strong>.</p>'
  },
  {
    id: 'T004', topic: 'Market making', difficulty: 'Hard',
    text: 'A stock has fair value 100. You quote 99 / 101. A perfectly informed trader buys from you whenever true value is above 101 and sells to you whenever true value is below 99. If true value is equally likely to be 98, 100 or 102, what is your expected P&L per informed trade?',
    note: 'Condition on the fact that a trade actually occurs.',
    answers: ['−1', '−0.5', '0', '+1'], correct: 0,
    hint: 'When a trade occurs, true value cannot be 100.',
    explanation: '<p>If true value is 102, the informed trader buys from you at 101, so you lose 1. If true value is 98, they sell to you at 99, so you also lose 1. Conditional on an informed trade, those are the only two cases. Expected P&L = <strong>−1</strong>.</p>'
  },
  {
    id: 'T005', topic: 'Combinatorics', difficulty: 'Hard',
    text: 'Ten people sit uniformly at random around a circular table. What is the probability that two specified people sit next to each other?',
    note: 'Treat rotations as equivalent.',
    answers: ['1/10', '1/9', '2/9', '1/5'], correct: 2,
    hint: 'Fix one specified person. How many of the other nine seats are adjacent?',
    explanation: '<p>Fix person A. Person B is equally likely to occupy any of the other 9 seats. Exactly 2 seats are adjacent to A. Therefore the probability is <strong>2/9</strong>.</p>'
  },
  {
    id: 'T006', topic: 'Optimal stopping', difficulty: 'Very hard',
    text: 'You may roll a fair die up to twice. After the first roll you may either keep it or discard it and accept the second roll. What is the optimal expected payoff?',
    note: 'The optimal rule is a threshold rule.',
    answers: ['3.5', '4.0', '4.25', '4.5'], correct: 2,
    hint: 'The expected second roll is 3.5, so keep first-roll outcomes above that continuation value.',
    explanation: '<p>On the first roll, keep 4, 5 or 6, and reroll 1, 2 or 3. Expected payoff = (1/6)(4+5+6) + (3/6)(3.5) = 15/6 + 1.75 = <strong>4.25</strong>.</p>'
  },
  {
    id: 'T007', topic: 'Pattern matching', difficulty: 'Very hard',
    text: 'A fair coin is tossed until HHH appears. What is the expected number of tosses?',
    note: 'Overlapping patterns matter.',
    answers: ['8', '10', '12', '14'], correct: 3,
    hint: 'Use states for the longest suffix matching the beginning of HHH: 0, 1 or 2 consecutive trailing heads.',
    explanation: '<p>Let E0,E1,E2 be expected remaining tosses with 0,1,2 trailing heads. Then E0=1+(E0+E1)/2, E1=1+(E0+E2)/2, E2=1+E0/2. Solving gives <strong>E0=14</strong>.</p>'
  },
  {
    id: 'T008', topic: 'Mental maths', difficulty: 'Hard',
    text: 'Without a calculator, which is closest to 1.01^50?',
    note: 'Use a fast approximation rather than repeated multiplication.',
    answers: ['1.50', '1.64', '1.82', '2.00'], correct: 1,
    hint: 'Use ln(1+x)≈x−x²/2.',
    explanation: '<p>ln(1.01^50)=50 ln(1.01)≈50(0.01−0.00005)=0.4975. Hence 1.01^50≈e^0.4975≈<strong>1.64</strong>.</p>'
  }
];

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS.researcher = [
  {
    id: 'R001', topic: 'Statistics', difficulty: 'Hard',
    text: 'X and Y have zero means, unit variances and correlation ρ. What value of a minimises E[(Y−aX)²]?',
    note: 'This is the population least-squares coefficient.',
    answers: ['0', 'ρ', 'ρ²', '1/ρ'], correct: 1,
    hint: 'Expand the square and differentiate with respect to a.',
    explanation: '<p>E[(Y−aX)²]=1−2aρ+a². Differentiating gives −2ρ+2a=0, so the minimiser is <strong>a=ρ</strong>.</p>'
  },
  {
    id: 'R002', topic: 'Conditional Gaussian', difficulty: 'Very hard',
    text: 'If (X,Y) is jointly normal with zero means, unit variances and correlation 0.6, what is Var(Y|X)?',
    note: 'For a jointly Gaussian pair, the conditional variance does not depend on the observed value of X.',
    answers: ['0.16', '0.36', '0.40', '0.64'], correct: 3,
    hint: 'Conditional variance is σY²(1−ρ²).',
    explanation: '<p>Var(Y|X)=1·(1−0.6²)=1−0.36=<strong>0.64</strong>.</p>'
  },
  {
    id: 'R003', topic: 'Maximum likelihood', difficulty: 'Hard',
    text: 'You observe n independent samples from Uniform(0,θ). Which statistic is the MLE of θ?',
    note: 'Pay attention to the support of the likelihood.',
    answers: ['Sample mean', 'Twice the sample mean', 'Sample maximum', 'Sample maximum × n/(n−1)'], correct: 2,
    hint: 'For θ below the sample maximum, the likelihood is zero. Above it, the likelihood decreases with θ.',
    explanation: '<p>The likelihood is θ^(−n) provided θ≥max Xi. It is therefore maximised at the smallest feasible θ, namely <strong>max Xi</strong>.</p>'
  },
  {
    id: 'R004', topic: 'Covariance', difficulty: 'Hard',
    text: 'Let X and Y be independent standard normal variables. What is Cov(X+Y, X−Y)?',
    note: 'No integration is required.',
    answers: ['−2', '−1', '0', '2'], correct: 2,
    hint: 'Use bilinearity of covariance.',
    explanation: '<p>Cov(X+Y,X−Y)=Var(X)−Var(Y)+Cov(Y,X)−Cov(X,Y)=1−1+0−0=<strong>0</strong>.</p>'
  },
  {
    id: 'R005', topic: 'Probability', difficulty: 'Very hard',
    text: 'U and V are independent Uniform(0,1). What is P(UV < 1/4)?',
    note: 'Think geometrically in the unit square.',
    answers: ['1/4', '1/4 + (ln 4)/4', '1/2', '3/4'], correct: 1,
    hint: 'Integrate v < 1/(4u), splitting at u=1/4.',
    explanation: '<p>P(UV&lt;1/4)=∫₀^{1/4}1 du + ∫_{1/4}^1 (1/(4u))du = 1/4 + (1/4)ln4. So the answer is <strong>1/4 + (ln4)/4</strong>.</p>'
  },
  {
    id: 'R006', topic: 'Regression', difficulty: 'Hard',
    text: 'In ordinary least squares with an intercept, which statement about residuals is always true on the training sample?',
    note: 'Assume the design matrix has full column rank.',
    answers: ['They are independent', 'They sum to zero', 'They are normally distributed', 'They have equal absolute value'], correct: 1,
    hint: 'Use the normal equations and the column of ones.',
    explanation: '<p>OLS residuals are orthogonal to every column of the design matrix. With an intercept, one column is the vector of ones, hence the residuals satisfy <strong>Σeᵢ=0</strong>.</p>'
  },
  {
    id: 'R007', topic: 'Time series', difficulty: 'Hard',
    text: 'For the stationary AR(1) process X_t = φX_{t−1}+ε_t with Var(ε_t)=σ² and |φ|<1, what is Var(X_t)?',
    note: 'Use stationarity.',
    answers: ['σ²/(1−φ)', 'σ²/(1−φ²)', 'σ²(1−φ²)', 'σ²/φ²'], correct: 1,
    hint: 'Set Var(X_t)=Var(X_{t−1}) and solve one equation.',
    explanation: '<p>Let v=Var(X_t). Then v=φ²v+σ², so v(1−φ²)=σ². Therefore <strong>v=σ²/(1−φ²)</strong>.</p>'
  },
  {
    id: 'R008', topic: 'Estimation', difficulty: 'Very hard',
    text: 'X₁,…,Xₙ are iid Bernoulli(p). Which unbiased estimator has smaller variance than X₁ for estimating p?',
    note: 'Use all the data.',
    answers: ['max Xᵢ', 'min Xᵢ', 'sample mean', 'sample variance'], correct: 2,
    hint: 'Compare p(1−p) with the variance of an average of independent observations.',
    explanation: '<p>The sample mean is unbiased and has variance p(1−p)/n, versus p(1−p) for X₁. Thus the <strong>sample mean</strong> has strictly smaller variance for n&gt;1.</p>'
  }
];

window.QUESTION_BANKS = window.QUESTION_BANKS || {};
window.QUESTION_BANKS.developer = [
  {
    id: 'D001', topic: 'Algorithms', difficulty: 'Hard',
    text: 'You receive a stream of n numbers and need to maintain the median after each insertion. Which data structure gives O(log n) insertion and O(1) median lookup?',
    note: 'Assume standard comparison-based structures.',
    answers: ['One stack', 'Two heaps', 'One hash table', 'A FIFO queue'], correct: 1,
    hint: 'Keep the lower half and upper half separately.',
    explanation: '<p>Use a max-heap for the lower half and a min-heap for the upper half, keeping their sizes balanced. Insertion is O(log n), while the median is read from the heap roots in <strong>O(1)</strong>.</p>'
  },
  {
    id: 'D002', topic: 'Complexity', difficulty: 'Hard',
    text: 'What is the expected time complexity of looking up a key in a well-designed hash table with a constant load factor?',
    note: 'Expected, not worst-case.',
    answers: ['O(1)', 'O(log n)', 'O(√n)', 'O(n)'], correct: 0,
    hint: 'Think about expected bucket length under good hashing.',
    explanation: '<p>With a good hash function and constant load factor, the expected number of keys examined is bounded by a constant, so lookup is <strong>O(1) expected time</strong>.</p>'
  },
  {
    id: 'D003', topic: 'Concurrency', difficulty: 'Very hard',
    text: 'Two threads increment the same non-atomic integer x without synchronisation. Which statement is correct in C++?',
    note: 'This is about the language memory model, not merely “one update might be lost”.',
    answers: ['The final value is always one of two nearby integers', 'It is a data race and behaviour is undefined', 'The compiler automatically serialises writes', 'Only reads can race, not writes'], correct: 1,
    hint: 'C++ gives stronger consequences to unsynchronised conflicting accesses than many interview candidates expect.',
    explanation: '<p>Unsynchronised conflicting accesses to the same scalar object, with at least one write, create a <strong>data race</strong>. In C++, a data race results in <strong>undefined behaviour</strong>.</p>'
  },
  {
    id: 'D004', topic: 'C++', difficulty: 'Hard',
    text: 'Why would std::vector typically outperform std::list when iterating over millions of integers, despite vector insertions sometimes being more expensive?',
    note: 'Think hardware as well as asymptotic complexity.',
    answers: ['vector uses hashing', 'vector elements are contiguous and cache-friendly', 'list nodes are always stack allocated', 'list iteration is O(log n)'], correct: 1,
    hint: 'Modern CPUs fetch memory in cache lines.',
    explanation: '<p><strong>std::vector stores elements contiguously</strong>, giving strong spatial locality, fewer cache misses and effective prefetching. std::list follows pointers across separately allocated nodes, which is typically much slower for linear scans.</p>'
  },
  {
    id: 'D005', topic: 'Order books', difficulty: 'Hard',
    text: 'For a limit order book that must support adding an order, cancelling by order ID, and retrieving best bid/ask efficiently, which combination is most appropriate?',
    note: 'There can be many orders at the same price level.',
    answers: ['Only an array', 'Hash map plus ordered price-level structure', 'Only a stack', 'Only a binary heap with no auxiliary index'], correct: 1,
    hint: 'Cancellation wants direct lookup by ID, while best price wants ordering by price.',
    explanation: '<p>A <strong>hash map</strong> gives fast order-ID lookup for cancellation, while an <strong>ordered map/tree or equivalent price-level structure</strong> maintains best bid/ask efficiently. Real systems often add linked queues within each price level for FIFO priority.</p>'
  },
  {
    id: 'D006', topic: 'Systems', difficulty: 'Hard',
    text: 'Why can a lock-free queue still have poor latency under heavy contention?',
    note: 'Lock-free does not mean contention-free.',
    answers: ['Lock-free algorithms cannot use CPU caches', 'Repeated failed CAS operations can cause cache-line bouncing and retries', 'They always allocate on disk', 'They force a context switch on every operation'], correct: 1,
    hint: 'Think about many cores repeatedly writing the same cache line.',
    explanation: '<p>Under contention, many threads may repeatedly fail compare-and-swap operations on the same shared cache line. That causes retries plus cache-coherence traffic, so <strong>lock-free progress guarantees do not imply low latency</strong>.</p>'
  },
  {
    id: 'D007', topic: 'Algorithms', difficulty: 'Very hard',
    text: 'You need the k largest values from an array of n values, where k ≪ n, and the result need not be sorted. Which approach has expected O(n) time?',
    note: 'You only need to identify the top-k set.',
    answers: ['Full sort', 'Quickselect around the (n−k)th order statistic', 'Insert everything into a balanced tree', 'Bubble sort for k passes'], correct: 1,
    hint: 'Selection is cheaper than sorting when order inside the selected set is irrelevant.',
    explanation: '<p><strong>Quickselect</strong> finds the cutoff order statistic in expected O(n) time, after which the k values above the cutoff form the desired set. A full sort costs O(n log n).</p>'
  },
  {
    id: 'D008', topic: 'Networking', difficulty: 'Hard',
    text: 'A trading application sends many tiny TCP messages. Which mechanism can add latency by intentionally waiting to coalesce small writes?',
    note: 'This is a classic low-latency systems interview topic.',
    answers: ['Nagle’s algorithm', 'DNSSEC', 'Virtual memory paging', 'RAII'], correct: 0,
    hint: 'It is often disabled with TCP_NODELAY in latency-sensitive systems.',
    explanation: '<p><strong>Nagle’s algorithm</strong> reduces the number of tiny TCP packets by combining small writes, but that waiting can add latency. Low-latency applications often enable TCP_NODELAY when appropriate.</p>'
  }
];

const trackConfig = {
  trader: {
    label: 'Quant Trader',
    description: 'Probability · Logic · Strategy · Markets'
  },
  researcher: {
    label: 'Quant Researcher',
    description: 'Statistics · Maths · ML · Research'
  },
  developer: {
    label: 'Quant Developer',
    description: 'Coding · Algorithms · Systems · Performance'
  }
};

const $ = id => document.getElementById(id);
const select = $('track-select');
let currentTrack = 'trader';
let order = [];
let pointer = 0;
let selected = null;
let checked = false;

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function bank() { return window.QUESTION_BANKS[currentTrack] || []; }
function question() { return bank()[order[pointer]]; }

function setTrack(track) {
  currentTrack = track;
  select.value = track;
  $('track-description').textContent = trackConfig[track].description;
  order = shuffle(bank().map((_, i) => i));
  pointer = 0;
  renderQuestion();
}

function openTrack(track = currentTrack) {
  window.location.href = `role.html?role=${encodeURIComponent(track)}`;
}

function renderQuestion() {
  const q = question();
  if (!q) return;
  selected = null;
  checked = false;

  $('question-topic').textContent = q.topic;
  $('question-difficulty').textContent = q.difficulty;
  $('question-text').textContent = q.text;
  $('question-note').textContent = q.note || '';
  $('progress-text').textContent = `${String(pointer + 1).padStart(2, '0')} / ${String(order.length).padStart(2, '0')}`;
  $('answers').innerHTML = '';

  q.answers.forEach((answer, i) => {
    const button = document.createElement('button');
    button.className = 'answer';
    button.type = 'button';
    button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + i)}</span><span class="answer-copy"></span>`;
    button.querySelector('.answer-copy').textContent = answer;
    button.addEventListener('click', () => {
      if (checked) return;
      selected = i;
      document.querySelectorAll('.answer').forEach(el => el.classList.remove('selected'));
      button.classList.add('selected');
      $('check-button').disabled = false;
    });
    $('answers').appendChild(button);
  });

  $('check-button').disabled = true;
  $('hint').hidden = true;
  $('hint').textContent = '';
  $('hint-button').innerHTML = 'Show me a hint <span>+</span>';
  $('feedback').hidden = true;
  $('feedback-title').className = 'feedback-title';
  $('feedback-title').textContent = '';
  $('explanation').innerHTML = '';
}

select.addEventListener('change', e => setTrack(e.target.value));
$('start-button').addEventListener('click', () => openTrack());
$('header-start').addEventListener('click', () => openTrack());

document.querySelectorAll('[data-track]').forEach(button => {
  button.addEventListener('click', () => openTrack(button.dataset.track));
});

$('hint-button').addEventListener('click', () => {
  const box = $('hint');
  if (box.hidden) {
    box.textContent = question().hint;
    box.hidden = false;
    $('hint-button').innerHTML = 'Hide hint <span>−</span>';
  } else {
    box.hidden = true;
    $('hint-button').innerHTML = 'Show me a hint <span>+</span>';
  }
});

$('check-button').addEventListener('click', () => {
  if (selected === null || checked) return;
  checked = true;
  const q = question();
  const buttons = [...document.querySelectorAll('.answer')];
  buttons[q.correct].classList.add('correct');
  if (selected !== q.correct) buttons[selected].classList.add('wrong');

  const good = selected === q.correct;
  $('feedback-title').textContent = good ? 'Correct.' : 'Not quite.';
  $('feedback-title').classList.add(good ? 'correct' : 'wrong');
  $('explanation').innerHTML = q.explanation;
  $('feedback').hidden = false;
});

$('next-button').addEventListener('click', () => {
  pointer += 1;
  if (pointer >= order.length) {
    order = shuffle(bank().map((_, i) => i));
    pointer = 0;
  }
  renderQuestion();
});

setTrack('trader');
