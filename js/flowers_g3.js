/* ============================================
   花圃數學園 - Grade 3 Flower Definitions
   ============================================ */

const FLOWERS_G3 = [

  /* 1. 千日紅 Gomphrena ─ 四位數 */
  {
    id: 'gomphrena', name: '四位數', chineseName: '千日紅', icon: '🌸',
    difficulty: 3, color: '#e53935',
    svgs: [
      /* stage 0 – seed */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      /* stage 1 – sprout */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#e53935" opacity=".7"/>
</svg>`,
      /* stage 2 – leaves */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      /* stage 3 – bud */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#e53935" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#b71c1c" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: globe pompom */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    ${[0,60,120,180,240,300].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*5);const y=Math.round(-Math.cos(a*Math.PI/180)*5);return `<ellipse cx="${x}" cy="${y}" rx="2.5" ry="6" fill="#e53935" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    ${[30,90,150,210,270,330].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*3);const y=Math.round(-Math.cos(a*Math.PI/180)*3);return `<ellipse cx="${x}" cy="${y}" rx="2" ry="5" fill="#ef9a9a" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="2" fill="#b71c1c"/>
  </g>
</svg>`
    ]
  },

  /* 2. 矢車菊 Cornflower ─ 三位數加法 */
  {
    id: 'cornflower', name: '三位數加法', chineseName: '矢車菊', icon: '💙',
    difficulty: 3, color: '#1e88e5',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#1e88e5" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#1e88e5" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#1565c0" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 10 fringed tubular petals around dark disc */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,14)">
    ${[0,36,72,108,144,180,216,252,288,324].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*8);const y=Math.round(-Math.cos(a*Math.PI/180)*8);return `<ellipse cx="${x}" cy="${y}" rx="2" ry="6" fill="#42a5f5" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="5" fill="#1565c0"/>
    <circle cx="0" cy="0" r="2.5" fill="#e3f2fd"/>
  </g>
</svg>`
    ]
  },

  /* 3. 龍膽草 Gentian ─ 三位數減法 */
  {
    id: 'gentian', name: '三位數減法', chineseName: '龍膽草', icon: '💜',
    difficulty: 3, color: '#5e35b1',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#5e35b1" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#5e35b1" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#4527a0" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 5 large bell petals with white throat */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,16)">
    ${[0,72,144,216,288].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*6);const y=Math.round(-Math.cos(a*Math.PI/180)*6);return `<ellipse cx="${x}" cy="${y}" rx="5" ry="7" fill="#7e57c2" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="5" fill="white" opacity=".85"/>
    ${[0,72,144,216,288].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*4)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*4)}" stroke="#5e35b1" stroke-width=".7" opacity=".6"/>`).join('')}
    <circle cx="0" cy="0" r="2" fill="#5e35b1" opacity=".6"/>
  </g>
</svg>`
    ]
  },

  /* 4. 雞冠花 Cockscomb ─ 乘法（九九乘法表）*/
  {
    id: 'cockscomb', name: '乘法（九九乘法表）', chineseName: '雞冠花', icon: '🔥',
    difficulty: 3, color: '#e65100',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#e65100" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="10" ry="7" fill="#e65100" opacity=".85"/>
  <ellipse cx="28" cy="12" r="4" rx="7" ry="5" fill="#bf360c" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: wavy crest (cockscomb shape) */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,12)">
    <ellipse cx="-9" cy="7" rx="4" ry="9" fill="#e65100" opacity=".9"/>
    <ellipse cx="-5" cy="4" rx="4" ry="10" fill="#e65100" opacity=".9"/>
    <ellipse cx="0" cy="2" rx="4" ry="11" fill="#e65100" opacity=".9"/>
    <ellipse cx="5" cy="4" rx="4" ry="10" fill="#e65100" opacity=".9"/>
    <ellipse cx="9" cy="7" rx="4" ry="9" fill="#e65100" opacity=".9"/>
    <ellipse cx="-9" cy="7" rx="2" ry="7" fill="#ff8f00" opacity=".7"/>
    <ellipse cx="0" cy="2" rx="2" ry="9" fill="#ff8f00" opacity=".7"/>
    <ellipse cx="9" cy="7" rx="2" ry="7" fill="#ff8f00" opacity=".7"/>
  </g>
</svg>`
    ]
  },

  /* 5. 三色堇 Pansy ─ 除法初步 */
  {
    id: 'pansy', name: '除法初步', chineseName: '三色堇', icon: '🌷',
    difficulty: 3, color: '#8e24aa',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#8e24aa" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#8e24aa" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#6a1b9a" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: classic pansy with face pattern */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    <ellipse cx="-4" cy="-7" rx="5" ry="4" fill="#ab47bc" transform="rotate(-20,-4,-7)"/>
    <ellipse cx="4" cy="-7" rx="5" ry="4" fill="#ab47bc" transform="rotate(20,4,-7)"/>
    <ellipse cx="-7" cy="2" rx="5" ry="4" fill="#8e24aa" transform="rotate(65,-7,2)"/>
    <ellipse cx="7" cy="2" rx="5" ry="4" fill="#8e24aa" transform="rotate(-65,7,2)"/>
    <ellipse cx="0" cy="6" rx="6" ry="5" fill="#7b1fa2"/>
    <circle cx="0" cy="0" r="2.5" fill="#fdd835"/>
    <line x1="-2" y1="2" x2="-1" y2="5" stroke="#4a148c" stroke-width=".8" opacity=".7"/>
    <line x1="2" y1="2" x2="1" y2="5" stroke="#4a148c" stroke-width=".8" opacity=".7"/>
  </g>
</svg>`
    ]
  },

  /* 6. 紫羅蘭 Violet ─ 分數概念 */
  {
    id: 'violet', name: '分數概念', chineseName: '紫羅蘭', icon: '🟣',
    difficulty: 3, color: '#7b1fa2',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#7b1fa2" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#7b1fa2" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#6a1b9a" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 5 round petals + yellow center */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    ${[0,72,144,216,288].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*6);const y=Math.round(-Math.cos(a*Math.PI/180)*6);return `<circle cx="${x}" cy="${y}" r="5" fill="#ab47bc"/>`;}).join('')}
    <circle cx="0" cy="0" r="3.5" fill="white" opacity=".9"/>
    <circle cx="0" cy="0" r="2" fill="#fdd835"/>
  </g>
</svg>`
    ]
  },

  /* 7. 桔梗 Balloon Flower ─ 長度測量 */
  {
    id: 'balloon-flower', name: '長度測量', chineseName: '桔梗', icon: '🔷',
    difficulty: 3, color: '#0097a7',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#0097a7" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#0097a7" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#00695c" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 5 pointed star petals (balloon-flower shape) */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,16)">
    ${[0,72,144,216,288].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*6);const y=Math.round(-Math.cos(a*Math.PI/180)*6);return `<ellipse cx="${x}" cy="${y}" rx="3" ry="7" fill="#26c6da" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="4" fill="#0097a7"/>
    <circle cx="0" cy="0" r="2" fill="#b2ebf2"/>
    ${[0,72,144,216,288].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*3)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*3)}" stroke="#b2ebf2" stroke-width=".8"/>`).join('')}
  </g>
</svg>`
    ]
  },

  /* 8. 梔子花 Gardenia ─ 重量測量 */
  {
    id: 'gardenia', name: '重量測量', chineseName: '梔子花', icon: '🌼',
    difficulty: 3, color: '#f9a825',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#f9a825" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="8" ry="9" fill="#fff9c4" opacity=".9"/>
  <ellipse cx="28" cy="12" rx="5" ry="6" fill="#fff176" opacity=".85"/>
  <circle cx="28" cy="12" r="3" fill="#f9a825" opacity=".8"/>
</svg>`,
      /* stage 4 – bloom: layered petals like rose (3 rings) */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    ${[0,51,103,154,206,257,309].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*8);const y=Math.round(-Math.cos(a*Math.PI/180)*8);return `<ellipse cx="${x}" cy="${y}" rx="3" ry="6" fill="#fff9c4" stroke="#f9a825" stroke-width=".5" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    ${[36,108,180,252,324].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*5);const y=Math.round(-Math.cos(a*Math.PI/180)*5);return `<ellipse cx="${x}" cy="${y}" rx="3" ry="5" fill="#fff176" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    ${[0,120,240].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*2);const y=Math.round(-Math.cos(a*Math.PI/180)*2);return `<ellipse cx="${x}" cy="${y}" rx="2" ry="3" fill="#fdd835" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="2" fill="#f9a825"/>
  </g>
</svg>`
    ]
  },

  /* 9. 水仙 Narcissus ─ 時間計算 */
  {
    id: 'narcissus', name: '時間計算', chineseName: '水仙', icon: '⏰',
    difficulty: 3, color: '#fdd835',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#fdd835" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#fdd835" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#f9a825" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 6 white/cream petals + orange inner cup */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    ${[0,60,120,180,240,300].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*7);const y=Math.round(-Math.cos(a*Math.PI/180)*7);return `<ellipse cx="${x}" cy="${y}" rx="4" ry="6" fill="#fff9c4" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="6" fill="#ff8f00" opacity=".9"/>
    <circle cx="0" cy="0" r="4" fill="#ffca28"/>
    <circle cx="0" cy="0" r="2" fill="#e65100"/>
  </g>
</svg>`
    ]
  },

  /* 10. 孔雀草 Peacock Grass ─ 角度圖形 */
  {
    id: 'peacock-grass', name: '角度圖形', chineseName: '孔雀草', icon: '📐',
    difficulty: 3, color: '#fb8c00',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#fb8c00" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#fb8c00" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#e65100" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: dense double ring of petals (marigold-like) */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,14)">
    ${[0,45,90,135,180,225,270,315].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*8);const y=Math.round(-Math.cos(a*Math.PI/180)*8);return `<ellipse cx="${x}" cy="${y}" rx="3" ry="5" fill="#fb8c00" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    ${[22,67,112,157,202,247,292,337].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*5);const y=Math.round(-Math.cos(a*Math.PI/180)*5);return `<ellipse cx="${x}" cy="${y}" rx="2.5" ry="4" fill="#ffa726" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="3.5" fill="#bf360c"/>
    <circle cx="0" cy="0" r="1.5" fill="#ff8f00" opacity=".8"/>
  </g>
</svg>`
    ]
  },

  /* 11. 晚香玉 Tuberose ─ 面積初步 */
  {
    id: 'tuberose', name: '面積初步', chineseName: '晚香玉', icon: '📏',
    difficulty: 3, color: '#f48fb1',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#f48fb1" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#f48fb1" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#c2185b" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: cluster of 7 small tubular flower heads */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,14)">
    ${[0,60,120,180,240,300].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*7);const y=Math.round(-Math.cos(a*Math.PI/180)*7);return `<circle cx="${x}" cy="${y}" r="4" fill="#f48fb1" opacity=".9"/><circle cx="${x}" cy="${y}" r="2" fill="#fce4ec"/>`;}).join('')}
    <circle cx="0" cy="0" r="4" fill="#f48fb1"/>
    <circle cx="0" cy="0" r="2" fill="#fce4ec"/>
  </g>
</svg>`
    ]
  },

  /* 12. 飛燕草 Delphinium ─ 統計圖表 */
  {
    id: 'delphinium', name: '統計圖表', chineseName: '飛燕草', icon: '📊',
    difficulty: 3, color: '#1565c0',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#1565c0" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#1565c0" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#0d47a1" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: irregular 5-petal delphinium with spur */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    <ellipse cx="-5" cy="-7" rx="5" ry="6" fill="#1e88e5" transform="rotate(-20,-5,-7)"/>
    <ellipse cx="5" cy="-7" rx="5" ry="6" fill="#1e88e5" transform="rotate(20,5,-7)"/>
    <ellipse cx="-7" cy="2" rx="4" ry="6" fill="#1565c0" transform="rotate(65,-7,2)"/>
    <ellipse cx="7" cy="2" rx="4" ry="6" fill="#1565c0" transform="rotate(-65,7,2)"/>
    <ellipse cx="0" cy="5" rx="3" ry="5" fill="#1e88e5"/>
    <ellipse cx="0" cy="10" rx="1.5" ry="4" fill="#90caf9" opacity=".8"/>
    <circle cx="0" cy="0" r="3" fill="#e3f2fd"/>
    <circle cx="0" cy="0" r="1.5" fill="#1565c0" opacity=".7"/>
  </g>
</svg>`
    ]
  },

  /* 13. 荷花 Lotus ─ 乘法應用題 */
  {
    id: 'lotus', name: '乘法應用題', chineseName: '荷花', icon: '🌺',
    difficulty: 3, color: '#e91e63',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#e91e63" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="8" ry="10" fill="#f48fb1" opacity=".85"/>
  <ellipse cx="28" cy="12" rx="5" ry="7" fill="#e91e63" opacity=".8"/>
  <circle cx="28" cy="12" r="3" fill="#c2185b" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 8+8 oval petals in 2 layers (lotus flower) */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,16)">
    ${[0,45,90,135,180,225,270,315].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*8);const y=Math.round(-Math.cos(a*Math.PI/180)*8);return `<ellipse cx="${x}" cy="${y}" rx="3" ry="6" fill="#f48fb1" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    ${[22,67,112,157,202,247,292,337].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*5);const y=Math.round(-Math.cos(a*Math.PI/180)*5);return `<ellipse cx="${x}" cy="${y}" rx="2.5" ry="5" fill="#e91e63" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="3.5" fill="#fdd835"/>
    <circle cx="0" cy="0" r="1.5" fill="#f9a825"/>
  </g>
</svg>`
    ]
  },

  /* 14. 木蘭 Magnolia ─ 加減混合計算 */
  {
    id: 'magnolia', name: '加減混合計算', chineseName: '木蘭', icon: '🌿',
    difficulty: 3, color: '#a1887f',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#a1887f" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="10" fill="#d7ccc8" opacity=".9"/>
  <ellipse cx="28" cy="12" rx="4" ry="7" fill="#a1887f" opacity=".85"/>
</svg>`,
      /* stage 4 – bloom: 6 large cup-shaped petals */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,16)">
    ${[0,60,120,180,240,300].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*6);const y=Math.round(-Math.cos(a*Math.PI/180)*6);return `<ellipse cx="${x}" cy="${y}" rx="5" ry="8" fill="#d7ccc8" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <ellipse cx="0" cy="0" rx="4" ry="3" fill="#efebe9"/>
    <circle cx="0" cy="0" r="2" fill="#8d6e63"/>
    ${[0,60,120,180,240,300].map(a=>`<line x1="0" y1="0" x2="${Math.round(Math.sin(a*Math.PI/180)*3)}" y2="${Math.round(-Math.cos(a*Math.PI/180)*3)}" stroke="#a1887f" stroke-width=".6" opacity=".7"/>`).join('')}
  </g>
</svg>`
    ]
  },

  /* 15. 蘆葦花 Reed Flower ─ 四邊形三角形 */
  {
    id: 'reed-flower', name: '四邊形三角形', chineseName: '蘆葦花', icon: '📐',
    difficulty: 3, color: '#78909c',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,34,'fl-stem')}
  <ellipse cx="28" cy="30" rx="3" ry="6" fill="#78909c" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,14)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="10" rx="4" ry="10" fill="#90a4ae" opacity=".85"/>
  <ellipse cx="28" cy="10" rx="2" ry="8" fill="#b0bec5" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: fluffy reed plume */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,20)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,8)">
    <ellipse cx="0" cy="8" rx="6" ry="13" fill="#78909c" opacity=".85"/>
    <ellipse cx="0" cy="8" rx="4" ry="11" fill="#90a4ae" opacity=".75"/>
    <ellipse cx="0" cy="8" rx="2" ry="9" fill="#b0bec5" opacity=".6"/>
    <ellipse cx="0" cy="6" rx="1" ry="7" fill="#eceff1" opacity=".5"/>
    <ellipse cx="-3" cy="10" rx="2.5" ry="7" fill="#78909c" opacity=".5" transform="rotate(-10,-3,10)"/>
    <ellipse cx="3" cy="10" rx="2.5" ry="7" fill="#78909c" opacity=".5" transform="rotate(10,3,10)"/>
  </g>
</svg>`
    ]
  },

  /* 16. 睡蓮 Water Lily ─ 容量測量 */
  {
    id: 'water-lily', name: '容量測量', chineseName: '睡蓮', icon: '🫙',
    difficulty: 3, color: '#ce93d8',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,36)}
  <circle cx="28" cy="32" r="5" fill="#ce93d8" opacity=".7"/>
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,16)}${leafPair(28,36,1)}${leafPair(28,26,-1)}
  <ellipse cx="28" cy="12" rx="7" ry="9" fill="#ce93d8" opacity=".85"/>
  <circle cx="28" cy="12" r="4" fill="#9c27b0" opacity=".7"/>
</svg>`,
      /* stage 4 – bloom: 12 narrow flat petals + yellow center */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
  ${stemLine(28,48,28,22)}${leafPair(28,38,1)}${leafPair(28,30,-1)}
  <g transform="translate(28,15)">
    ${[0,30,60,90,120,150,180,210,240,270,300,330].map(a=>{const x=Math.round(Math.sin(a*Math.PI/180)*8);const y=Math.round(-Math.cos(a*Math.PI/180)*8);return `<ellipse cx="${x}" cy="${y}" rx="2.5" ry="6" fill="#ce93d8" transform="rotate(${a},${x},${y})"/>`;}).join('')}
    <circle cx="0" cy="0" r="4" fill="#fdd835"/>
    <circle cx="0" cy="0" r="2.5" fill="#f9a825"/>
    ${[0,60,120,180,240,300].map(a=>`<circle cx="${Math.round(Math.sin(a*Math.PI/180)*2.5)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*2.5)}" r="0.8" fill="#e65100"/>`).join('')}
  </g>
</svg>`
    ]
  }

];

if (typeof makeSpecialVisualFlowers === 'function') {
  FLOWERS_G3.push(...makeSpecialVisualFlowers('g3'));
}
