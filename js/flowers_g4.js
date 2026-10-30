/* ============================================
   花圃數學園 - Grade 4 Flower Definitions
   ============================================ */

const FLOWERS_G4 = [

  /* 1. 鬱金香 Tulip ─ 萬位數 */
  {
    id: 'tulip', name: '萬位數', chineseName: '鬱金香', icon: '🌷',
    difficulty: 4, color: '#f44336',
    svgs: [
      /* stage 0 – seed */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      /* stage 1 – sprout */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#f44336"/></svg>`,
      /* stage 2 – leaves */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      /* stage 3 – bud */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${leafPair(28,38,1)}${leafPair(28,30,-1)}
        <path d="M21 20 Q21 10 28 8 Q35 10 35 20 Q32 24 28 24 Q24 24 21 20Z" fill="#f44336"/>
        <path d="M24 20 Q24 12 28 10 Q32 12 32 20 Q30 23 28 23 Q26 23 24 20Z" fill="#ef9a9a"/></svg>`,
      /* stage 4 – bloom */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+36)*Math.PI/180)*7)},${Math.round(-Math.cos((a+36)*Math.PI/180)*7)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*7)},${Math.round(-Math.cos((a-36)*Math.PI/180)*7)} 0,-11Z" fill="#f44336" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#ffcdd2"/>
          <circle cx="0" cy="0" r="2" fill="#b71c1c"/>
        </g></svg>`
    ]
  },

  /* 2. 蒲公英 Dandelion ─ 多位數加減法 */
  {
    id: 'dandelion', name: '多位數加減法', chineseName: '蒲公英', icon: '🌬️',
    difficulty: 4, color: '#fdd835',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#fdd835"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20,'fl-stem-thin')}
        <ellipse cx="18" cy="36" rx="9" ry="4" fill="#aed581" transform="rotate(-30,18,36)"/>
        <ellipse cx="38" cy="33" rx="9" ry="4" fill="#aed581" transform="rotate(30,38,33)"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18,'fl-stem-thin')}
        <ellipse cx="18" cy="36" rx="9" ry="4" fill="#aed581" transform="rotate(-30,18,36)"/>
        <ellipse cx="38" cy="33" rx="9" ry="4" fill="#aed581" transform="rotate(30,38,33)"/>
        <circle cx="28" cy="14" r="9" fill="#f5f5f5" stroke="#e0e0e0" stroke-width="1"/>
        <circle cx="28" cy="14" r="3" fill="#fdd835"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24,'fl-stem-thin')}
        <ellipse cx="18" cy="38" rx="9" ry="4" fill="#aed581" transform="rotate(-30,18,38)"/>
        <ellipse cx="38" cy="36" rx="9" ry="4" fill="#aed581" transform="rotate(30,38,36)"/>
        <g transform="translate(28,16)">
          ${[0,36,72,108,144,180,216,252,288,324].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*12)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*12)}" stroke="#bdbdbd" stroke-width=".8"/>
            <circle cx="${Math.round(Math.sin(a*Math.PI/180)*12)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*12)}" r="2" fill="white" stroke="#bdbdbd" stroke-width=".5"/>`).join('')}
          <circle cx="0" cy="0" r="3" fill="#fdd835"/>
        </g></svg>`
    ]
  },

  /* 3. 報春花 Primrose ─ 三位數乘法 */
  {
    id: 'primrose', name: '三位數乘法', chineseName: '報春花', icon: '🌸',
    difficulty: 4, color: '#ec407a',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#ec407a"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <ellipse cx="28" cy="12" rx="8" ry="9" fill="#ec407a" opacity=".85"/>
        <ellipse cx="28" cy="10" rx="5" ry="6" fill="#f8bbd9"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,60,120,180,240,300].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+30)*Math.PI/180)*7)},${Math.round(-Math.cos((a+30)*Math.PI/180)*7)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-30)*Math.PI/180)*7)},${Math.round(-Math.cos((a-30)*Math.PI/180)*7)} 0,-11Z" fill="#ec407a" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="2" fill="#ad1457"/>
        </g></svg>`
    ]
  },

  /* 4. 杜鵑花 Azalea ─ 除法 */
  {
    id: 'azalea', name: '除法', chineseName: '杜鵑花', icon: '🌺',
    difficulty: 4, color: '#e91e63',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#e91e63"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <path d="M20 14 Q20 4 28 4 Q36 4 36 14 Q36 22 28 22 Q20 22 20 14Z" fill="#e91e63" opacity=".85"/>
        <path d="M23 14 Q23 7 28 7 Q33 7 33 14 Q33 20 28 20 Q23 20 23 14Z" fill="#f48fb1"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+36)*Math.PI/180)*8)},${Math.round(-Math.cos((a+36)*Math.PI/180)*8)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*8)},${Math.round(-Math.cos((a-36)*Math.PI/180)*8)} 0,-11Z" fill="#e91e63" transform="rotate(${a})"/>`).join('')}
          ${[36,108,180,252,324].map(a=>`<path d="M0,-7 Q${Math.round(Math.sin((a+36)*Math.PI/180)*5)},${Math.round(-Math.cos((a+36)*Math.PI/180)*5)} ${Math.round(Math.sin(a*Math.PI/180)*7)},${Math.round(-Math.cos(a*Math.PI/180)*7)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*5)},${Math.round(-Math.cos((a-36)*Math.PI/180)*5)} 0,-7Z" fill="#f48fb1" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="2" fill="#e91e63"/>
        </g></svg>`
    ]
  },

  /* 5. 仙客來 Cyclamen ─ 因數與倍數 */
  {
    id: 'cyclamen', name: '因數與倍數', chineseName: '仙客來', icon: '🌷',
    difficulty: 4, color: '#f06292',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#f06292"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="17" cy="34" rx="10" ry="5" fill="#66bb6a" transform="rotate(-15,17,34)"/>
        <ellipse cx="39" cy="34" rx="10" ry="5" fill="#66bb6a" transform="rotate(15,39,34)"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="17" cy="36" rx="10" ry="5" fill="#66bb6a" transform="rotate(-15,17,36)"/>
        <ellipse cx="39" cy="36" rx="10" ry="5" fill="#66bb6a" transform="rotate(15,39,36)"/>
        <path d="M22 12 Q22 4 28 4 Q34 4 34 12 Q30 18 28 18 Q26 18 22 12Z" fill="#f06292"/>
        <path d="M22 12 Q24 6 28 6 Q32 6 34 12" fill="none" stroke="#f8bbd9" stroke-width="1.5"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="17" cy="38" rx="10" ry="5" fill="#66bb6a" transform="rotate(-15,17,38)"/>
        <ellipse cx="39" cy="38" rx="10" ry="5" fill="#66bb6a" transform="rotate(15,39,38)"/>
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+36)*Math.PI/180)*6)},${Math.round(-Math.cos((a+36)*Math.PI/180)*6)} ${Math.round(Math.sin(a*Math.PI/180)*9)},${Math.round(-Math.cos(a*Math.PI/180)*9)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*6)},${Math.round(-Math.cos((a-36)*Math.PI/180)*6)} 0,-11Z" fill="#f06292" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="2.5" fill="#f06292"/>
        </g></svg>`
    ]
  },

  /* 6. 風信子 Hyacinth ─ 分數加減（同分母） */
  {
    id: 'hyacinth', name: '分數加減', chineseName: '風信子', icon: '💙',
    difficulty: 4, color: '#7986cb',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#7986cb"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="20" cy="38" rx="3" ry="10" fill="#388e3c" transform="rotate(-8,20,38)"/>
        <ellipse cx="36" cy="36" rx="3" ry="10" fill="#388e3c" transform="rotate(8,36,36)"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="20" cy="36" rx="3" ry="10" fill="#388e3c" transform="rotate(-8,20,36)"/>
        <ellipse cx="36" cy="34" rx="3" ry="10" fill="#388e3c" transform="rotate(8,36,34)"/>
        <rect x="23" y="6" width="10" height="14" rx="5" fill="#7986cb" opacity=".8"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="20" cy="36" rx="3" ry="10" fill="#388e3c" transform="rotate(-8,20,36)"/>
        <ellipse cx="36" cy="34" rx="3" ry="10" fill="#388e3c" transform="rotate(8,36,34)"/>
        <g transform="translate(28,18)">
          ${[-4,-2,0,2,4].map((x,i)=>[...Array(5-Math.abs(x))].map((_,j)=>`<ellipse cx="${x*3}" cy="${-j*4+(2-Math.abs(x))*2}" rx="3.5" ry="2.5" fill="${['#3949ab','#5c6bc0','#7986cb','#9fa8da','#c5cae9'][j]}" opacity=".9"/>`).join('')).join('')}
        </g></svg>`
    ]
  },

  /* 7. 勿忘草 Forget-me-not ─ 小數概念與加減 */
  {
    id: 'forget-me-not', name: '小數加減', chineseName: '勿忘草', icon: '🔵',
    difficulty: 4, color: '#42a5f5',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#42a5f5"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,-1)}${leafPair(28,28,1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,36,-1)}${leafPair(28,26,1)}
        <circle cx="28" cy="12" r="8" fill="#42a5f5" opacity=".8"/>
        <circle cx="28" cy="12" r="4" fill="#e3f2fd"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,-1)}${leafPair(28,30,1)}
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*9)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*9)}" rx="4" ry="3" fill="#42a5f5" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fff9c4"/>
          <circle cx="0" cy="0" r="2" fill="#f9a825"/>
        </g></svg>`
    ]
  },

  /* 8. 石竹 Carnation ─ 角度測量 */
  {
    id: 'carnation', name: '角度測量', chineseName: '石竹', icon: '🌸',
    difficulty: 4, color: '#ef5350',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#ef5350"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <path d="M22 14 Q22 8 28 6 Q34 8 34 14 Q34 20 28 20 Q22 20 22 14Z" fill="#ef5350" opacity=".85"/>
        <path d="M22 14 Q24 10 28 8 Q32 10 34 14" fill="none" stroke="#ffcdd2" stroke-width="1.2"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,18)">
          ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>`<path d="M0,-10 Q${Math.round(Math.sin((a+15)*Math.PI/180)*4)},${Math.round(-Math.cos((a+15)*Math.PI/180)*4)} ${Math.round(Math.sin(a*Math.PI/180)*8)},${Math.round(-Math.cos(a*Math.PI/180)*8)} Q${Math.round(Math.sin((a-15)*Math.PI/180)*4)},${Math.round(-Math.cos((a-15)*Math.PI/180)*4)} 0,-10Z" fill="${a%60===0?'#ef5350':'#e57373'}" transform="rotate(${a})" opacity=".85"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="2" fill="#c62828"/>
        </g></svg>`
    ]
  },

  /* 9. 桃花 Peach Blossom ─ 長方形正方形面積 */
  {
    id: 'peach-blossom', name: '長方形面積', chineseName: '桃花', icon: '🌸',
    difficulty: 4, color: '#f48fb1',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#f48fb1"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="20" cy="36" rx="9" ry="4" fill="#66bb6a" transform="rotate(-20,20,36)"/>
        <ellipse cx="36" cy="36" rx="9" ry="4" fill="#66bb6a" transform="rotate(20,36,36)"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="20" cy="36" rx="9" ry="4" fill="#66bb6a" transform="rotate(-20,20,36)"/>
        <ellipse cx="36" cy="36" rx="9" ry="4" fill="#66bb6a" transform="rotate(20,36,36)"/>
        <circle cx="28" cy="14" r="9" fill="#f48fb1" opacity=".8"/>
        <circle cx="28" cy="14" r="5" fill="#fce4ec"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        <ellipse cx="20" cy="38" rx="9" ry="4" fill="#66bb6a" transform="rotate(-20,20,38)"/>
        <ellipse cx="36" cy="38" rx="9" ry="4" fill="#66bb6a" transform="rotate(20,36,38)"/>
        <g transform="translate(28,18)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-10 Q${Math.round(Math.sin((a+36)*Math.PI/180)*7)},${Math.round(-Math.cos((a+36)*Math.PI/180)*7)} ${Math.round(Math.sin(a*Math.PI/180)*9)},${Math.round(-Math.cos(a*Math.PI/180)*9)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*7)},${Math.round(-Math.cos((a-36)*Math.PI/180)*7)} 0,-10Z" fill="#f48fb1" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="3.5" fill="#e91e63"/>
          ${[0,72,144,216,288].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*5)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*5)}" stroke="#f8bbd9" stroke-width=".8"/>`).join('')}
        </g></svg>`
    ]
  },

  /* 10. 柳蘭 Fireweed ─ 周長計算 */
  {
    id: 'fireweed', name: '周長計算', chineseName: '柳蘭', icon: '💜',
    difficulty: 4, color: '#ab47bc',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#ab47bc"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="8" stroke="#52b788" stroke-width="2.5"/>
        <ellipse cx="18" cy="34" rx="9" ry="3.5" fill="#66bb6a" transform="rotate(-20,18,34)"/>
        <ellipse cx="38" cy="28" rx="9" ry="3.5" fill="#66bb6a" transform="rotate(20,38,28)"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="6" stroke="#52b788" stroke-width="2.5"/>
        <ellipse cx="18" cy="34" rx="9" ry="3.5" fill="#66bb6a" transform="rotate(-20,18,34)"/>
        <ellipse cx="38" cy="26" rx="9" ry="3.5" fill="#66bb6a" transform="rotate(20,38,26)"/>
        ${[0,5,10,15,20].map(y=>`<ellipse cx="${28+Math.round(Math.sin(y)*2)}" cy="${y+4}" rx="4" ry="3" fill="#ab47bc" opacity=".85"/>`).join('')}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        <line x1="28" y1="48" x2="28" y2="4" stroke="#52b788" stroke-width="2.5"/>
        <ellipse cx="18" cy="36" rx="9" ry="3.5" fill="#66bb6a" transform="rotate(-20,18,36)"/>
        <ellipse cx="38" cy="28" rx="9" ry="3.5" fill="#66bb6a" transform="rotate(20,38,28)"/>
        ${[0,4,8,12,16,20,24].map((y,i)=>`<ellipse cx="${28+Math.round(Math.sin(i*0.8)*3)}" cy="${y+2}" rx="4.5" ry="3.5" fill="${['#ce93d8','#ba68c8','#ab47bc','#9c27b0','#8e24aa','#7b1fa2','#6a1b9a'][i]}" opacity=".9"/>`).join('')}</svg>`
    ]
  },

  /* 11. 紫薇 Crape Myrtle ─ 統計圖表 */
  {
    id: 'crape-myrtle', name: '統計圖表', chineseName: '紫薇', icon: '🌸',
    difficulty: 4, color: '#ce93d8',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#ce93d8"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="13" r="9" fill="#ce93d8" opacity=".7"/>
        <circle cx="28" cy="13" r="5" fill="#9c27b0" opacity=".6"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,17)">
          ${[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((a,i)=>`<path d="M0,-11 Q${Math.round(Math.sin((a+11)*Math.PI/180)*8)},${Math.round(-Math.cos((a+11)*Math.PI/180)*8)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-11)*Math.PI/180)*8)},${Math.round(-Math.cos((a-11)*Math.PI/180)*8)} 0,-11Z" fill="${i%2===0?'#ce93d8':'#ab47bc'}" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fce4ec"/>
          <circle cx="0" cy="0" r="2" fill="#7b1fa2"/>
        </g></svg>`
    ]
  },

  /* 12. 海棠 Begonia ─ 時間計算 */
  {
    id: 'begonia', name: '時間計算', chineseName: '海棠', icon: '🌸',
    difficulty: 4, color: '#ff7043',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#ff7043"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="12" r="9" fill="#ff7043" opacity=".85"/>
        <circle cx="28" cy="12" r="5" fill="#ffccbc"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+36)*Math.PI/180)*7)},${Math.round(-Math.cos((a+36)*Math.PI/180)*7)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*7)},${Math.round(-Math.cos((a-36)*Math.PI/180)*7)} 0,-11Z" fill="#ff7043" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fff3e0"/>
          <circle cx="0" cy="0" r="2" fill="#e64a19"/>
        </g></svg>`
    ]
  },

  /* 13. 薔薇 Wild Rose ─ 整數四則混合運算 */
  {
    id: 'wild-rose', name: '四則混合運算', chineseName: '薔薇', icon: '🌹',
    difficulty: 4, color: '#d32f2f',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#d32f2f"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="18" cy="35" rx="10" ry="5" fill="#388e3c" transform="rotate(-25,18,35)"/>
        <path d="M22 28 Q20 22 24 18 Q28 16 30 20 Q28 26 22 28Z" fill="#388e3c"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="18" cy="36" rx="10" ry="5" fill="#388e3c" transform="rotate(-25,18,36)"/>
        <path d="M22 28 Q20 22 24 18 Q28 16 30 20 Q28 26 22 28Z" fill="#388e3c"/>
        <path d="M28 10 Q32 14 30 20 Q26 22 22 18 Q24 12 28 10Z" fill="#d32f2f"/>
        <path d="M28 10 Q24 14 26 20 Q30 22 34 18 Q32 12 28 10Z" fill="#b71c1c" opacity=".8"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,26)}
        <ellipse cx="18" cy="38" rx="10" ry="5" fill="#388e3c" transform="rotate(-25,18,38)"/>
        <path d="M22 32 Q20 24 26 20 Q30 18 32 22 Q30 30 22 32Z" fill="#388e3c"/>
        <g transform="translate(28,18)">
          <ellipse cx="0" cy="-5" rx="7" ry="5" fill="#d32f2f"/>
          <ellipse cx="5" cy="2" rx="6" ry="5" fill="#d32f2f" transform="rotate(120)"/>
          <ellipse cx="-5" cy="2" rx="6" ry="5" fill="#d32f2f" transform="rotate(-120)"/>
          <ellipse cx="0" cy="-3" rx="5" ry="4" fill="#c62828"/>
          <ellipse cx="0" cy="-1" rx="3" ry="2.5" fill="#b71c1c"/>
          <circle cx="0" cy="0" r="2" fill="#fce4ec"/>
        </g></svg>`
    ]
  },

  /* 14. 山茶花 Camellia ─ 平行與垂直 */
  {
    id: 'camellia', name: '平行與垂直', chineseName: '山茶花', icon: '🌹',
    difficulty: 4, color: '#b0bec5',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#b0bec5"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <path d="M22 36 Q16 30 20 24 Q24 20 28 24" stroke="#388e3c" stroke-width="2.5" fill="none"/>
        <path d="M34 36 Q40 30 36 24 Q32 20 28 24" stroke="#388e3c" stroke-width="2.5" fill="none"/>
        <ellipse cx="20" cy="32" rx="7" ry="3" fill="#4caf50" transform="rotate(-30,20,32)"/>
        <ellipse cx="36" cy="32" rx="7" ry="3" fill="#4caf50" transform="rotate(30,36,32)"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="18" cy="34" rx="10" ry="4" fill="#388e3c" transform="rotate(-20,18,34)"/>
        <ellipse cx="38" cy="34" rx="10" ry="4" fill="#388e3c" transform="rotate(20,38,34)"/>
        <circle cx="28" cy="13" r="10" fill="#b0bec5" opacity=".8"/>
        <circle cx="28" cy="13" r="6" fill="#90a4ae"/>
        <circle cx="28" cy="13" r="3" fill="#eceff1" opacity=".6"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        <ellipse cx="18" cy="36" rx="10" ry="4" fill="#388e3c" transform="rotate(-20,18,36)"/>
        <ellipse cx="38" cy="36" rx="10" ry="4" fill="#388e3c" transform="rotate(20,38,36)"/>
        <g transform="translate(28,17)">
          <circle cx="0" cy="0" r="12" fill="#b0bec5" opacity=".25"/>
          ${[0,45,90,135,180,225,270,315].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+22)*Math.PI/180)*8)},${Math.round(-Math.cos((a+22)*Math.PI/180)*8)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-22)*Math.PI/180)*8)},${Math.round(-Math.cos((a-22)*Math.PI/180)*8)} 0,-11Z" fill="#b0bec5" transform="rotate(${a})"/>`).join('')}
          ${[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map(a=>`<path d="M0,-7 Q${Math.round(Math.sin((a+15)*Math.PI/180)*5)},${Math.round(-Math.cos((a+15)*Math.PI/180)*5)} ${Math.round(Math.sin(a*Math.PI/180)*7)},${Math.round(-Math.cos(a*Math.PI/180)*7)} Q${Math.round(Math.sin((a-15)*Math.PI/180)*5)},${Math.round(-Math.cos((a-15)*Math.PI/180)*5)} 0,-7Z" fill="#90a4ae" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#eceff1"/>
          <circle cx="0" cy="0" r="2" fill="#607d8b"/>
        </g></svg>`
    ]
  },

  /* 15. 扶桑花 Hibiscus Rosa ─ 圓的認識 */
  {
    id: 'hibiscus-rosa', name: '圓的認識', chineseName: '扶桑花', icon: '🌺',
    difficulty: 4, color: '#ff5722',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#ff5722"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="12" r="9" fill="#ff5722" opacity=".85"/>
        <circle cx="28" cy="12" r="5" fill="#ffccbc"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<path d="M0,-11 Q${Math.round(Math.sin((a+36)*Math.PI/180)*7)},${Math.round(-Math.cos((a+36)*Math.PI/180)*7)} ${Math.round(Math.sin(a*Math.PI/180)*10)},${Math.round(-Math.cos(a*Math.PI/180)*10)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*7)},${Math.round(-Math.cos((a-36)*Math.PI/180)*7)} 0,-11Z" fill="#ff5722" transform="rotate(${a})"/>`).join('')}
          ${[36,108,180,252,324].map(a=>`<path d="M0,-7 Q${Math.round(Math.sin((a+36)*Math.PI/180)*5)},${Math.round(-Math.cos((a+36)*Math.PI/180)*5)} ${Math.round(Math.sin(a*Math.PI/180)*7)},${Math.round(-Math.cos(a*Math.PI/180)*7)} Q${Math.round(Math.sin((a-36)*Math.PI/180)*5)},${Math.round(-Math.cos((a-36)*Math.PI/180)*5)} 0,-7Z" fill="#ffccbc" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#fff9c4"/>
          <circle cx="0" cy="0" r="2" fill="#bf360c"/>
        </g></svg>`
    ]
  },

  /* 16. 棉花 Cotton Flower ─ 整數數線 */
  {
    id: 'cotton-flower', name: '整數數線', chineseName: '棉花', icon: '🤍',
    difficulty: 4, color: '#eceff1',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}<circle cx="28" cy="32" r="5" fill="#cfd8dc"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="12" r="9" fill="#eceff1" stroke="#b0bec5" stroke-width="1"/>
        <circle cx="28" cy="12" r="6" fill="#fff"/></svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[[-5,-7],[3,-8],[9,-2],[8,6],[1,10],[-6,8],[-10,1],[-9,-5]].map(([cx,cy])=>`
            <g transform="translate(${cx},${cy})">
              ${[0,90,180,270].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*3.5)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*3.5)}" rx="2.5" ry="1.5" fill="#eceff1" stroke="#b0bec5" stroke-width=".5" transform="rotate(${a})"/>`).join('')}
              <circle cx="0" cy="0" r="1.5" fill="#fff"/>
            </g>`).join('')}
        </g></svg>`
    ]
  }
];

if (typeof makeSpecialVisualFlowers === 'function') {
  FLOWERS_G4.push(...makeSpecialVisualFlowers('g4'));
}
