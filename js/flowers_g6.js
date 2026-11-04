/* ============================================
   花圃數學園 - Grade 6 Flower Definitions
   ============================================ */

const FLOWERS_G6 = [

  /* 1. 牡丹 Peony ─ 分數除法 */
  {
    id: 'peony', name: '分數除法', chineseName: '牡丹', icon: '🌸',
    difficulty: 5, color: '#e91e63',
    svgs: [
      /* stage 0 – seed */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      /* stage 1 – sprout */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,32)}
        <ellipse cx="28" cy="28" rx="6" ry="4" fill="#f8bbd9" opacity=".7"/>
      </svg>`,
      /* stage 2 – leaves */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      /* stage 3 – bud */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <ellipse cx="28" cy="12" rx="8" ry="10" fill="#e91e63" opacity=".85"/>
        <ellipse cx="28" cy="10" rx="5" ry="7" fill="#f48fb1" opacity=".7"/>
      </svg>`,
      /* stage 4 – bloom */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,26)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,18)">
          <circle cx="0" cy="0" r="12" fill="#e91e63" opacity=".2"/>
          ${[0,45,90,135,180,225,270,315].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+22)*Math.PI/180)*8)},${Math.round(-Math.cos((a+22)*Math.PI/180)*8)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-22)*Math.PI/180)*8)},${Math.round(-Math.cos((a-22)*Math.PI/180)*8)} 0,-11Z" fill="#e91e63" transform="rotate(${a})"/>`).join('')}
          ${[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map(a=>`<path d="M0,-7 Q${Math.round(Math.sin((a+15)*Math.PI/180)*5)},${Math.round(-Math.cos((a+15)*Math.PI/180)*5)} ${Math.round(Math.sin(a*Math.PI/180)*7)},${Math.round(-Math.cos(a*Math.PI/180)*7)} Q${Math.round(Math.sin((a-15)*Math.PI/180)*5)},${Math.round(-Math.cos((a-15)*Math.PI/180)*5)} 0,-7Z" fill="#ad1457" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="2" fill="#e91e63" opacity=".6"/>
        </g>
      </svg>`
    ]
  },

  /* 2. 芍藥 Chinese Peony ─ 比與比值 */
  {
    id: 'chinese-peony', name: '比與比值', chineseName: '芍藥', icon: '🌸',
    difficulty: 5, color: '#f48fb1',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="6" ry="4" fill="#fce4ec" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="12" r="9" fill="#f48fb1" opacity=".85"/>
        <circle cx="28" cy="12" r="5" fill="#fce4ec" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,17)">
          ${[0,60,120,180,240,300].map(a=>`<path d="M0,-12 Q${Math.round(Math.sin((a+30)*Math.PI/180)*8)},${Math.round(-Math.cos((a+30)*Math.PI/180)*8)} ${Math.round(Math.sin(a*Math.PI/180)*11)},${Math.round(-Math.cos(a*Math.PI/180)*11)} Q${Math.round(Math.sin((a-30)*Math.PI/180)*8)},${Math.round(-Math.cos((a-30)*Math.PI/180)*8)} 0,-12Z" fill="#f48fb1" transform="rotate(${a})" opacity=".9"/>`).join('')}
          ${[30,90,150,210,270,330].map(a=>`<path d="M0,-8 Q${Math.round(Math.sin((a+25)*Math.PI/180)*5)},${Math.round(-Math.cos((a+25)*Math.PI/180)*5)} ${Math.round(Math.sin(a*Math.PI/180)*8)},${Math.round(-Math.cos(a*Math.PI/180)*8)} Q${Math.round(Math.sin((a-25)*Math.PI/180)*5)},${Math.round(-Math.cos((a-25)*Math.PI/180)*5)} 0,-8Z" fill="#e91e63" transform="rotate(${a})" opacity=".75"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fce4ec"/>
          ${[0,60,120,180,240,300].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*3)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*3)}" stroke="#f48fb1" stroke-width="1"/>`).join('')}
        </g>
      </svg>`
    ]
  },

  /* 3. 菊花 Chrysanthemum ─ 小數四則運算 */
  {
    id: 'chrysanthemum', name: '小數四則運算', chineseName: '菊花', icon: '🌼',
    difficulty: 5, color: '#ffd600',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="5" ry="4" fill="#fff9c4" opacity=".8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="9" fill="#ffd600" opacity=".8"/>
        <circle cx="28" cy="13" r="5" fill="#ff8f00" opacity=".6"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,17)">
          ${[0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*10)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*10)}" rx="2" ry="5" fill="#ffd600" transform="rotate(${a})" opacity=".9"/>`).join('')}
          ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*6)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*6)}" rx="1.5" ry="3" fill="#ffca28" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#e65100"/>
          <circle cx="0" cy="0" r="2.5" fill="#ff8f00"/>
        </g>
      </svg>`
    ]
  },

  /* 4. 臘梅 Wintersweet ─ 百分比應用 */
  {
    id: 'wintersweet', name: '百分比應用', chineseName: '臘梅', icon: '🌼',
    difficulty: 5, color: '#ffcc02',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,32)}
        <ellipse cx="28" cy="28" rx="5" ry="4" fill="#fff9c4" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="10" stroke="#6d4c41" stroke-width="2.5"/>
        <line x1="28" y1="28" x2="16" y2="20" stroke="#6d4c41" stroke-width="2"/>
        <line x1="28" y1="20" x2="40" y2="14" stroke="#6d4c41" stroke-width="1.5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="8" stroke="#6d4c41" stroke-width="2.5"/>
        <line x1="28" y1="26" x2="14" y2="18" stroke="#6d4c41" stroke-width="2"/>
        <line x1="28" y1="18" x2="40" y2="12" stroke="#6d4c41" stroke-width="1.5"/>
        <circle cx="14" cy="14" r="5" fill="#ffcc02" opacity=".8"/>
        <circle cx="28" cy="8" r="4" fill="#ffcc02" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="6" stroke="#6d4c41" stroke-width="2.5"/>
        <line x1="28" y1="24" x2="12" y2="16" stroke="#6d4c41" stroke-width="2"/>
        <line x1="28" y1="16" x2="42" y2="10" stroke="#6d4c41" stroke-width="1.5"/>
        <line x1="28" y1="32" x2="40" y2="26" stroke="#6d4c41" stroke-width="1.5"/>
        <g transform="translate(12,12)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-6 Q${Math.round(Math.sin((a+36)*Math.PI/180)*4)},${Math.round(-Math.cos((a+36)*Math.PI/180)*4)} ${Math.round(Math.sin(a*Math.PI/180)*5)},${Math.round(-Math.cos(a*Math.PI/180)*5)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*4)},${Math.round(-Math.cos((a-36)*Math.PI/180)*4)} 0,-6Z" fill="#ffcc02" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="2" fill="#ff8f00"/>
        </g>
        <g transform="translate(28,4)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-5 Q${Math.round(Math.sin((a+36)*Math.PI/180)*3)},${Math.round(-Math.cos((a+36)*Math.PI/180)*3)} ${Math.round(Math.sin(a*Math.PI/180)*4)},${Math.round(-Math.cos(a*Math.PI/180)*4)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*3)},${Math.round(-Math.cos((a-36)*Math.PI/180)*3)} 0,-5Z" fill="#ffcc02" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="2" fill="#ff8f00"/>
        </g>
        <g transform="translate(40,8)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-5 Q${Math.round(Math.sin((a+36)*Math.PI/180)*3)},${Math.round(-Math.cos((a+36)*Math.PI/180)*3)} ${Math.round(Math.sin(a*Math.PI/180)*4)},${Math.round(-Math.cos(a*Math.PI/180)*4)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*3)},${Math.round(-Math.cos((a-36)*Math.PI/180)*3)} 0,-5Z" fill="#ffe57f" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="1.5" fill="#ff8f00"/>
        </g>
        <g transform="translate(40,24)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-5 Q${Math.round(Math.sin((a+36)*Math.PI/180)*3)},${Math.round(-Math.cos((a+36)*Math.PI/180)*3)} ${Math.round(Math.sin(a*Math.PI/180)*4)},${Math.round(-Math.cos(a*Math.PI/180)*4)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*3)},${Math.round(-Math.cos((a-36)*Math.PI/180)*3)} 0,-5Z" fill="#ffcc02" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="1.5" fill="#ff8f00"/>
        </g>
      </svg>`
    ]
  },

  /* 5. 黃水仙 Daffodil ─ 圓面積 */
  {
    id: 'daffodil', name: '圓面積', chineseName: '黃水仙', icon: '🌼',
    difficulty: 5, color: '#fff176',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="4" ry="3" fill="#fff176" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="20" cy="38" rx="3" ry="10" fill="#66bb6a" transform="rotate(-10,20,38)"/>
        <ellipse cx="36" cy="36" rx="3" ry="10" fill="#66bb6a" transform="rotate(10,36,36)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="20" cy="36" rx="3" ry="10" fill="#66bb6a" transform="rotate(-10,20,36)"/>
        <ellipse cx="36" cy="34" rx="3" ry="10" fill="#66bb6a" transform="rotate(10,36,34)"/>
        <ellipse cx="28" cy="12" rx="5" ry="8" fill="#fff176"/>
        <ellipse cx="28" cy="14" rx="3" ry="5" fill="#ffd600" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="20" cy="38" rx="3" ry="10" fill="#66bb6a" transform="rotate(-10,20,38)"/>
        <ellipse cx="36" cy="36" rx="3" ry="10" fill="#66bb6a" transform="rotate(10,36,36)"/>
        <g transform="translate(28,16)">
          ${[0,60,120,180,240,300].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*10)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*10)}" rx="4.5" ry="7" fill="#fff176" transform="rotate(${a})" opacity=".95"/>`).join('')}
          <circle cx="0" cy="0" r="6" fill="#ffd600"/>
          <circle cx="0" cy="0" r="4" fill="#ff8f00"/>
          <circle cx="0" cy="0" r="2" fill="#ffe57f"/>
        </g>
      </svg>`
    ]
  },

  /* 6. 蝴蝶蘭 Phalaenopsis ─ 圓周長 */
  {
    id: 'phalaenopsis', name: '圓周長', chineseName: '蝴蝶蘭', icon: '🌸',
    difficulty: 5, color: '#ba68c8',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" fill="#e1bee7" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="16" cy="34" rx="12" ry="5" fill="#388e3c" transform="rotate(-15,16,34)"/>
        <ellipse cx="40" cy="30" rx="12" ry="5" fill="#388e3c" transform="rotate(15,40,30)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="16" cy="34" rx="12" ry="5" fill="#388e3c" transform="rotate(-15,16,34)"/>
        <ellipse cx="40" cy="30" rx="12" ry="5" fill="#388e3c" transform="rotate(15,40,30)"/>
        <ellipse cx="28" cy="12" rx="6" ry="9" fill="#ba68c8" opacity=".85"/>
        <ellipse cx="28" cy="10" rx="3" ry="5" fill="#e1bee7" opacity=".6"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        <ellipse cx="16" cy="36" rx="12" ry="5" fill="#388e3c" transform="rotate(-15,16,36)"/>
        <ellipse cx="40" cy="32" rx="12" ry="5" fill="#388e3c" transform="rotate(15,40,32)"/>
        <g transform="translate(28,18)">
          <ellipse cx="-7" cy="-6" rx="7" ry="10" fill="#ba68c8" transform="rotate(-25,-7,-6)" opacity=".9"/>
          <ellipse cx="7" cy="-6" rx="7" ry="10" fill="#ba68c8" transform="rotate(25,7,-6)" opacity=".9"/>
          <ellipse cx="-4" cy="5" rx="5" ry="7" fill="#9c27b0" transform="rotate(20,-4,5)" opacity=".85"/>
          <ellipse cx="4" cy="5" rx="5" ry="7" fill="#9c27b0" transform="rotate(-20,4,5)" opacity=".85"/>
          <ellipse cx="0" cy="-1" rx="3" ry="5" fill="#ba68c8"/>
          <circle cx="0" cy="0" r="3" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="1.5" fill="#e91e63"/>
        </g>
      </svg>`
    ]
  },

  /* 7. 大麗菊 Dahlia ─ 立體體積 */
  {
    id: 'dahlia', name: '立體體積', chineseName: '大麗菊', icon: '🌸',
    difficulty: 5, color: '#f44336',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="6" ry="4" fill="#ffcdd2" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="10" fill="#f44336" opacity=".8"/>
        <circle cx="28" cy="13" r="6" fill="#b71c1c" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,17)">
          ${[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((a,i)=>`<path d="M0,-11 Q${Math.round(Math.sin((a+11)*Math.PI/180)*8)},${Math.round(-Math.cos((a+11)*Math.PI/180)*8)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-11)*Math.PI/180)*8)},${Math.round(-Math.cos((a-11)*Math.PI/180)*8)} 0,-11Z" fill="${i%2===0?'#f44336':'#e53935'}" transform="rotate(${a})"/>`).join('')}
          ${[0,30,60,90,120,150,180,210,240,270,300,330].map((a,i)=>`<path d="M0,-6 Q${Math.round(Math.sin((a+15)*Math.PI/180)*4)},${Math.round(-Math.cos((a+15)*Math.PI/180)*4)} ${Math.round(Math.sin(a*Math.PI/180)*6)},${Math.round(-Math.cos(a*Math.PI/180)*6)} Q${Math.round(Math.sin((a-15)*Math.PI/180)*4)},${Math.round(-Math.cos((a-15)*Math.PI/180)*4)} 0,-6Z" fill="${i%2===0?'#c62828':'#ef5350'}" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="3" fill="#ffcdd2"/>
          <circle cx="0" cy="0" r="1.5" fill="#f44336"/>
        </g>
      </svg>`
    ]
  },

  /* 8. 波斯菊 Cosmos ─ 速度計算 */
  {
    id: 'cosmos', name: '速度計算', chineseName: '波斯菊', icon: '🌸',
    difficulty: 5, color: '#e91e63',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34,'fl-stem-thin')}
        <ellipse cx="28" cy="30" rx="4" ry="3" fill="#f8bbd9"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20,'fl-stem-thin')}
        <ellipse cx="18" cy="36" rx="8" ry="3" fill="#66bb6a" transform="rotate(-25,18,36)"/>
        <ellipse cx="38" cy="33" rx="8" ry="3" fill="#66bb6a" transform="rotate(25,38,33)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18,'fl-stem-thin')}
        <ellipse cx="18" cy="36" rx="8" ry="3" fill="#66bb6a" transform="rotate(-25,18,36)"/>
        <ellipse cx="38" cy="33" rx="8" ry="3" fill="#66bb6a" transform="rotate(25,38,33)"/>
        <circle cx="28" cy="12" r="9" fill="#f48fb1" opacity=".7"/>
        <circle cx="28" cy="12" r="4" fill="#e91e63" opacity=".8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22,'fl-stem-thin')}
        <ellipse cx="18" cy="38" rx="8" ry="3" fill="#66bb6a" transform="rotate(-25,18,38)"/>
        <ellipse cx="38" cy="36" rx="8" ry="3" fill="#66bb6a" transform="rotate(25,38,36)"/>
        <g transform="translate(28,16)">
          ${[0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*10)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*10)}" rx="3.5" ry="8" fill="#f48fb1" transform="rotate(${a})" opacity=".9"/>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#e91e63"/>
          <circle cx="0" cy="0" r="3" fill="#fce4ec"/>
        </g>
      </svg>`
    ]
  },

  /* 9. 繡球花 Hydrangea ─ 比例尺縮圖 */
  {
    id: 'hydrangea', name: '比例尺縮圖', chineseName: '繡球花', icon: '💜',
    difficulty: 5, color: '#7e57c2',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" fill="#ede7f6" opacity=".8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="10" fill="#7e57c2" opacity=".6"/>
        <circle cx="28" cy="13" r="6" fill="#b39ddb" opacity=".5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,26)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,18)">
          ${[[-5,-7],[3,-8],[9,-2],[8,6],[1,10],[-6,8],[-10,1],[-9,-5]].map(([cx,cy])=>`
            <g transform="translate(${cx},${cy})">
              ${[0,90,180,270].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*3.5)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*3.5)}" rx="2.5" ry="1.5" fill="#7e57c2" transform="rotate(${a})"/>`).join('')}
              <circle cx="0" cy="0" r="1.5" fill="#fff"/>
            </g>`).join('')}
        </g>
      </svg>`
    ]
  },

  /* 10. 金蓮花 Nasturtium ─ 統計（平均、中位數、眾數） */
  {
    id: 'nasturtium', name: '統計（平均、中位數、眾數）', chineseName: '金蓮花', icon: '🌼',
    difficulty: 5, color: '#ff7043',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="6" ry="4" fill="#ffccbc" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,30,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="9" fill="#ff7043" opacity=".8"/>
        <circle cx="28" cy="13" r="5" fill="#bf360c" opacity=".5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,17)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-12 Q${Math.round(Math.sin((a+36)*Math.PI/180)*9)},${Math.round(-Math.cos((a+36)*Math.PI/180)*9)} ${Math.round(Math.sin(a*Math.PI/180)*11)},${Math.round(-Math.cos(a*Math.PI/180)*11)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*9)},${Math.round(-Math.cos((a-36)*Math.PI/180)*9)} 0,-12Z" fill="#ff7043" transform="rotate(${a})" opacity=".9"/>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#bf360c"/>
          <circle cx="0" cy="0" r="3" fill="#ffccbc"/>
          ${[0,72,144,216,288].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*4)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*4)}" stroke="#ff8a65" stroke-width="1"/>`).join('')}
        </g>
      </svg>`
    ]
  },

  /* 11. 紫藤 Wisteria ─ 代數方程式 */
  {
    id: 'wisteria', name: '代數方程式', chineseName: '紫藤', icon: '💜',
    difficulty: 5, color: '#7b1fa2',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="10" stroke="#52b788" stroke-width="2.5"/>
        <line x1="28" y1="14" x2="14" y2="14" stroke="#52b788" stroke-width="2"/>
        <ellipse cx="14" cy="18" rx="4" ry="6" fill="#ce93d8" opacity=".6"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="8" stroke="#52b788" stroke-width="2.5"/>
        <line x1="28" y1="12" x2="10" y2="12" stroke="#52b788" stroke-width="2"/>
        <line x1="28" y1="18" x2="10" y2="18" stroke="#52b788" stroke-width="1.5"/>
        <ellipse cx="10" cy="16" rx="3" ry="8" fill="#81c784" transform="rotate(-5,10,16)"/>
        <ellipse cx="28" cy="32" rx="14" ry="4" fill="#81c784" opacity=".5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="6" stroke="#52b788" stroke-width="2.5"/>
        <line x1="28" y1="10" x2="8" y2="10" stroke="#52b788" stroke-width="2"/>
        <line x1="28" y1="16" x2="8" y2="16" stroke="#52b788" stroke-width="1.5"/>
        <ellipse cx="8" cy="14" rx="3" ry="9" fill="#81c784" transform="rotate(-5,8,14)"/>
        ${[0,4,8,12,16].map(y=>`<ellipse cx="${12+Math.round(Math.sin(y)*2)}" cy="${y+4}" rx="4" ry="3" fill="#9c27b0" opacity=".7"/>`).join('')}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="4" stroke="#52b788" stroke-width="2.5"/>
        <line x1="28" y1="8" x2="6" y2="8" stroke="#52b788" stroke-width="2"/>
        <line x1="28" y1="14" x2="6" y2="14" stroke="#52b788" stroke-width="1.5"/>
        <line x1="28" y1="20" x2="10" y2="20" stroke="#52b788" stroke-width="1.5"/>
        <ellipse cx="6" cy="12" rx="3" ry="10" fill="#81c784" transform="rotate(-5,6,12)"/>
        ${[0,4,8,12,16,20,24,28].map((y,i)=>`<ellipse cx="${10+Math.round(Math.sin(i*0.8)*4)}" cy="${y+2}" rx="4.5" ry="3.5" fill="${['#ab47bc','#9c27b0','#8e24aa','#7b1fa2','#6a1b9a','#4a148c','#9c27b0','#ab47bc'][i]}" opacity=".9"/>`).join('')}
        ${[0,5,10,15,20,25].map((y,i)=>`<ellipse cx="${38+Math.round(Math.sin(i)*3)}" cy="${y+8}" rx="4" ry="3" fill="${['#ce93d8','#ba68c8','#ab47bc','#9c27b0','#8e24aa','#7b1fa2'][i]}" opacity=".8"/>`).join('')}
      </svg>`
    ]
  },

  /* 12. 石蒜 Lycoris ─ 負數 */
  {
    id: 'lycoris', name: '負數', chineseName: '石蒜', icon: '🌺',
    difficulty: 5, color: '#e53935',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="5" ry="3" fill="#ffcdd2" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="20" cy="36" rx="3" ry="11" fill="#66bb6a" transform="rotate(-10,20,36)"/>
        <ellipse cx="36" cy="34" rx="3" ry="11" fill="#66bb6a" transform="rotate(10,36,34)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="20" cy="34" rx="3" ry="10" fill="#66bb6a" transform="rotate(-10,20,34)"/>
        <ellipse cx="36" cy="32" rx="3" ry="10" fill="#66bb6a" transform="rotate(10,36,32)"/>
        <ellipse cx="28" cy="12" rx="6" ry="9" fill="#e53935" opacity=".85"/>
        <ellipse cx="28" cy="10" rx="3" ry="5" fill="#ffcdd2" opacity=".5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="20" cy="38" rx="3" ry="10" fill="#66bb6a" transform="rotate(-10,20,38)"/>
        <ellipse cx="36" cy="36" rx="3" ry="10" fill="#66bb6a" transform="rotate(10,36,36)"/>
        <g transform="translate(28,16)">
          ${[0,60,120,180,240,300].map(a=>`<path d="M0,-4 Q${Math.round(Math.sin((a+30)*Math.PI/180)*4)},${Math.round(-Math.cos((a+30)*Math.PI/180)*4)} ${Math.round(Math.sin(a*Math.PI/180)*11)},${Math.round(-Math.cos(a*Math.PI/180)*11)} Q${Math.round(Math.sin((a-30)*Math.PI/180)*4)},${Math.round(-Math.cos((a-30)*Math.PI/180)*4)} 0,-4Z" fill="#e53935" transform="rotate(${a})" opacity=".9"/>`).join('')}
          ${[0,60,120,180,240,300].map(a=>`<path d="M${Math.round(Math.sin(a*Math.PI/180)*9)},${Math.round(-Math.cos(a*Math.PI/180)*9)} Q${Math.round(Math.sin(a*Math.PI/180)*12)},${Math.round(-Math.cos(a*Math.PI/180)*12+2)} ${Math.round(Math.sin(a*Math.PI/180)*13)},${Math.round(-Math.cos(a*Math.PI/180)*11)}" stroke="#ffcdd2" stroke-width="1" fill="none"/>`).join('')}
          <circle cx="0" cy="0" r="3" fill="#b71c1c"/>
          <circle cx="0" cy="0" r="1.5" fill="#ffcdd2"/>
        </g>
      </svg>`
    ]
  },

  /* 13. 松蟲草 Scabiosa ─ 整數四則應用題 */
  {
    id: 'scabiosa', name: '整數四則應用題', chineseName: '松蟲草', icon: '💙',
    difficulty: 5, color: '#90caf9',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34,'fl-stem-thin')}
        <circle cx="28" cy="30" r="4" fill="#bbdefb" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20,'fl-stem-thin')}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18,'fl-stem-thin')}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="9" fill="#90caf9" opacity=".75"/>
        <circle cx="28" cy="13" r="5" fill="#1565c0" opacity=".5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22,'fl-stem-thin')}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <g transform="translate(28,16)">
          ${[0,40,80,120,160,200,240,280,320].map(a=>`<g transform="rotate(${a})">
            <ellipse cx="0" cy="-10" rx="3.5" ry="5" fill="#90caf9" opacity=".9"/>
            <circle cx="0" cy="-10" r="1.5" fill="#1565c0" opacity=".7"/>
          </g>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#1565c0"/>
          <circle cx="0" cy="0" r="3" fill="#bbdefb"/>
          ${[0,60,120,180,240,300].map(a=>`<circle cx="${Math.round(Math.sin(a*Math.PI/180)*2)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*2)}" r="0.8" fill="#90caf9"/>`).join('')}
        </g>
      </svg>`
    ]
  },

  /* 14. 銀蓮花 Anemone ─ 容量與體積換算 */
  {
    id: 'anemone', name: '容量與體積換算', chineseName: '銀蓮花', icon: '💙',
    difficulty: 5, color: '#5c6bc0',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="5" ry="4" fill="#c5cae9" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,30,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="9" fill="#5c6bc0" opacity=".8"/>
        <circle cx="28" cy="13" r="5" fill="#9fa8da" opacity=".6"/>
        <circle cx="28" cy="13" r="2.5" fill="#1a237e" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,17)">
          ${[0,60,120,180,240,300].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+30)*Math.PI/180)*7)},${Math.round(-Math.cos((a+30)*Math.PI/180)*7)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-30)*Math.PI/180)*7)},${Math.round(-Math.cos((a-30)*Math.PI/180)*7)} 0,-11Z" fill="#5c6bc0" transform="rotate(${a})" opacity=".9"/>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#1a237e"/>
          <circle cx="0" cy="0" r="3.5" fill="#3949ab"/>
          ${[0,45,90,135,180,225,270,315].map(a=>`<circle cx="${Math.round(Math.sin(a*Math.PI/180)*2.5)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*2.5)}" r="0.8" fill="#c5cae9"/>`).join('')}
          <circle cx="0" cy="0" r="1" fill="#e8eaf6"/>
        </g>
      </svg>`
    ]
  },

  /* 15. 向日葵 Sunflower-G6 ─ 複合圖形面積 */
  {
    id: 'sunflower-g6', name: '複合圖形面積', chineseName: '向日葵', icon: '🌻',
    difficulty: 5, color: '#fdd835',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,32)}
        <ellipse cx="28" cy="28" rx="7" ry="5" fill="#fff9c4" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,30,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="12" r="8" fill="#5d4037"/>
        <circle cx="28" cy="12" r="6" fill="#795548"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,34,-1)}
        <g transform="translate(28,18)">
          ${[0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*11)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*11)}" rx="5" ry="3" fill="#fdd835" transform="rotate(${a})"/>`).join('')}
          ${[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*9)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*9)}" rx="4" ry="2.5" fill="#f9a825" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="7" fill="#5d4037"/>
          <circle cx="0" cy="0" r="5" fill="#795548"/>
          <circle cx="-1" cy="-1" r="2" fill="#4e342e" opacity=".6"/>
        </g>
      </svg>`
    ]
  },

  /* 16. 微型玫瑰 Mini Rose ─ 機率初步 */
  {
    id: 'minirose', name: '機率初步', chineseName: '微型玫瑰', icon: '🌹',
    difficulty: 5, color: '#e91e63',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,33)}
        <ellipse cx="28" cy="29" rx="5" ry="4" fill="#fce4ec" opacity=".7"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="18" cy="35" rx="10" ry="5" fill="#388e3c" transform="rotate(-25,18,35)"/>
        <path d="M22 28 Q20 22 24 18 Q28 16 30 20 Q28 26 22 28Z" fill="#388e3c"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="18" cy="36" rx="10" ry="5" fill="#388e3c" transform="rotate(-25,18,36)"/>
        <path d="M22 28 Q20 22 24 18 Q28 16 30 20 Q28 26 22 28Z" fill="#388e3c"/>
        <path d="M28 10 Q32 14 30 20 Q26 22 22 18 Q24 12 28 10Z" fill="#e91e63"/>
        <path d="M28 10 Q24 14 26 20 Q30 22 34 18 Q32 12 28 10Z" fill="#c62828" opacity=".8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,26)}
        <ellipse cx="18" cy="38" rx="10" ry="5" fill="#388e3c" transform="rotate(-25,18,38)"/>
        <path d="M22 32 Q20 24 26 20 Q30 18 32 22 Q30 30 22 32Z" fill="#388e3c"/>
        <g transform="translate(28,18)">
          <ellipse cx="0" cy="-5" rx="7" ry="5" fill="#e91e63"/>
          <ellipse cx="5" cy="2" rx="6" ry="5" fill="#e91e63" transform="rotate(120)"/>
          <ellipse cx="-5" cy="2" rx="6" ry="5" fill="#e91e63" transform="rotate(-120)"/>
          <ellipse cx="0" cy="-3" rx="5" ry="4" fill="#c62828"/>
          <ellipse cx="0" cy="-1" rx="3" ry="2.5" fill="#b71c1c"/>
          <circle cx="0" cy="0" r="2" fill="#fce4ec"/>
        </g>
      </svg>`
    ]
  }
];

if (typeof makeSpecialVisualFlowers === 'function') {
  FLOWERS_G6.push(...makeSpecialVisualFlowers('g6'));
}
