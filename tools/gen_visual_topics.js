/**
 * Append Grade 2–6 special visual topics (4×20 each) to question banks.
 * Run: node tools/gen_visual_topics.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function qAdd(a, b, noun, unit, story) {
  return {
    type: 'visual',
    q: story.replace('{A}', `[${noun}:${a}]`).replace('{B}', `[${noun}:${b}]`),
    operation: 'add',
    answer: String(a + b)
  };
}

function qSub1(total, take, noun, unit, story) {
  return {
    type: 'visual',
    q: story.replace('{A}', `[${noun}:${total}]`).replace('{N}', String(take)),
    operation: 'subtract',
    answer: String(total - take)
  };
}

function qAdd2(a, b, n1, n2, story) {
  return {
    type: 'visual',
    q: story.replace('{A}', `[${n1}:${a}]`).replace('{B}', `[${n2}:${b}]`),
    operation: 'add',
    answer: String(a + b)
  };
}

function qSub2(a, b, n1, n2, story) {
  // a is larger noun count (items), b is people/receivers
  return {
    type: 'visual',
    q: story.replace('{A}', `[${n1}:${a}]`).replace('{B}', `[${n2}:${b}]`),
    operation: 'subtract',
    answer: String(a - b)
  };
}

function makeBank(grade) {
  // Stampable ranges by grade (still small enough to place by hand)
  const ranges = {
    2: { lo: 3, hi: 12 },
    3: { lo: 4, hi: 13 },
    4: { lo: 5, hi: 14 },
    5: { lo: 5, hi: 15 },
    6: { lo: 6, hi: 15 }
  };
  const { lo, hi } = ranges[grade];
  const nouns = ['蘋果', '橘子', '糖果', '餅乾', '鉛筆', '書', '貼紙', '積木', '氣球', '花朵'];
  const pairs = [
    ['男生', '女生'], ['蘋果', '橘子'], ['貓', '狗'], ['紅球', '藍球'],
    ['書', '鉛筆'], ['玫瑰', '百合'], ['小雞', '小鴨'], ['杯子', '盤子']
  ];
  const givePairs = [
    ['餅乾', '小朋友'], ['糖果', '同學'], ['蘋果', '朋友'], ['書', '同學'],
    ['貼紙', '小孩'], ['積木', '朋友'], ['橘子', '鄰居'], ['鉛筆', '同學']
  ];

  const addQs = [];
  const subQs = [];
  const add2Qs = [];
  const sub2Qs = [];

  // Deterministic pairs
  let n = 0;
  for (let i = 0; i < 20; i++) {
    const a = lo + (i % (hi - lo + 1));
    let b = lo + ((i * 3) % (hi - lo + 1));
    if (a + b > 18) b = Math.max(lo, 18 - a);
    const noun = nouns[i % nouns.length];
    addQs.push(qAdd(a, b, noun, '個',
      `桌上有{A}個，又放了{B}個，共有幾個${noun}？`));

    const total = Math.min(hi + 2, Math.max(a + 2, b + 3));
    const take = Math.min(b, total - 2);
    subQs.push(qSub1(total, take, noun, '個',
      `盒子裡有{A}個，拿走了{N}個，還剩幾個？`));

    const [n1, n2] = pairs[i % pairs.length];
    let x = lo + (i % 6);
    let y = lo + ((i + 2) % 6);
    if (x + y > 18) y = Math.max(2, 18 - x);
    add2Qs.push(qAdd2(x, y, n1, n2,
      `這裡有{A}個和{B}個，一共有幾個？`));

    const [g1, g2] = givePairs[i % givePairs.length];
    let big = Math.min(hi + 1, lo + 6 + (i % 5));
    let small = Math.min(big - 2, lo + (i % 5));
    if (small < 2) small = 2;
    sub2Qs.push(qSub2(big, small, g1, g2,
      `老師有{A}個，分給了{B}個，還剩幾個${g1}？`));
    n++;
  }

  const key = 'g' + grade;
  return [
    { id: key + '-sunstar', name: '視覺加法', questions: addQs },
    { id: key + '-butterfly', name: '視覺減法', questions: subQs },
    { id: key + '-rainbow', name: '雙名詞加法', questions: add2Qs },
    { id: key + '-starlight', name: '雙名詞減法', questions: sub2Qs }
  ];
}

function appendTopics(fileRel, grade) {
  const file = path.join(ROOT, fileRel);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const topics = makeBank(grade);
  const ids = new Set(topics.map(t => t.id));
  data.topics = data.topics.filter(t => !ids.has(t.id));
  data.topics.push(...topics);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  const counts = topics.map(t => `${t.id}:${t.questions.length}`).join(', ');
  console.log(fileRel, counts);
}

appendTopics('data/questions_g2.json', 2);
appendTopics('data/questions_g3.json', 3);
appendTopics('data/questions_g4.json', 4);
appendTopics('data/questions_g5.json', 5);
appendTopics('data/questions_g6.json', 6);
console.log('done');
