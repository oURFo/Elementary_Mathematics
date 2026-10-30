/* ============================================
   花圃數學園 - Grade 5 Flower Definitions
   ============================================ */

/* ------------------------------------------------------------------ */
/*  16 Grade-5 Flower Definitions                                      */
/* ------------------------------------------------------------------ */
const FLOWERS_G5 = [

  /* 1. 滿天星 Baby's Breath ─ 整數除法（含餘數） */
  {
    id: 'babys-breath', name: '整數除法', chineseName: '滿天星', icon: '✨',
    difficulty: 5, color: '#42a5f5',
    svgs: [
      /* stage 0 – seed */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      /* stage 1 – sprout */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,36)}
        <ellipse cx="28" cy="32" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      /* stage 2 – stem + leaves */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      /* stage 3 – bud */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="10" r="6" fill="#90caf9"/>
        <circle cx="28" cy="10" r="4" fill="#42a5f5"/>
      </svg>`,
      /* stage 4 – bloom: many tiny star-like florets */
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        ${stemLine(28,22,20,14,'fl-stem')}${stemLine(28,22,36,14,'fl-stem')}${stemLine(28,22,28,12,'fl-stem')}
        ${stemLine(20,14,16,9,'fl-stem')}${stemLine(20,14,24,9,'fl-stem')}
        ${stemLine(36,14,32,9,'fl-stem')}${stemLine(36,14,40,9,'fl-stem')}
        ${stemLine(28,12,24,7,'fl-stem')}${stemLine(28,12,32,7,'fl-stem')}
        <circle cx="16" cy="8" r="2.5" fill="#42a5f5"/><circle cx="24" cy="8" r="2.5" fill="#90caf9"/>
        <circle cx="32" cy="6" r="2.5" fill="#42a5f5"/><circle cx="40" cy="8" r="2.5" fill="#90caf9"/>
        <circle cx="20" cy="13" r="2" fill="#bbdefb"/><circle cx="36" cy="13" r="2" fill="#bbdefb"/>
        <circle cx="28" cy="11" r="2" fill="#42a5f5"/>
      </svg>`
    ]
  },

  /* 2. 孤挺花 Amaryllis ─ 最大公因數 */
  {
    id: 'amaryllis', name: '最大公因數', chineseName: '孤挺花', icon: '🌺',
    difficulty: 5, color: '#c62828',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,36,1)}${leafPair(28,26,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,36,1)}${leafPair(28,26,-1)}
        <ellipse cx="28" cy="10" rx="7" ry="5" fill="#e53935"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,14)">
          ${[0,60,120,180,240,300].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*8)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*8)}" rx="4" ry="7" fill="#c62828" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="4" fill="#ffcdd2"/>
          <line x1="-3" y1="0" x2="3" y2="0" stroke="#c62828" stroke-width="0.8"/>
          <line x1="0" y1="-3" x2="0" y2="3" stroke="#c62828" stroke-width="0.8"/>
        </g>
      </svg>`
    ]
  },

  /* 3. 非洲菊 Gerbera ─ 最小公倍數 */
  {
    id: 'gerbera', name: '最小公倍數', chineseName: '非洲菊', icon: '🌸',
    difficulty: 5, color: '#ff7043',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,35)}
        <ellipse cx="28" cy="31" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,36,1)}${leafPair(28,27,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,36,1)}${leafPair(28,27,-1)}
        <circle cx="28" cy="10" r="7" fill="#ff7043"/>
        <circle cx="28" cy="10" r="4" fill="#bf360c"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*9)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*9)}" rx="2.5" ry="5" fill="#ff7043" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#bf360c"/>
          <circle cx="0" cy="0" r="3" fill="#e64a19"/>
        </g>
      </svg>`
    ]
  },

  /* 4. 文心蘭 Oncidium ─ 異分母分數加減 */
  {
    id: 'oncidium', name: '異分母分數加減', chineseName: '文心蘭', icon: '🌼',
    difficulty: 5, color: '#ffd54f',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,-1)}${leafPair(28,28,1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,38,-1)}${leafPair(28,28,1)}
        <ellipse cx="28" cy="12" rx="6" ry="5" fill="#ffd54f"/>
        <circle cx="28" cy="12" r="3" fill="#f9a825"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,26)}
        ${stemLine(28,26,20,18,'fl-stem')}${stemLine(28,26,36,18,'fl-stem')}${stemLine(28,26,28,16,'fl-stem')}
        ${leafPair(28,40,-1)}${leafPair(28,34,1)}
        <g transform="translate(20,14)">
          <ellipse cx="0" cy="-5" rx="4" ry="3" fill="#ffd54f"/>
          <ellipse cx="-4" cy="0" rx="3" ry="4" fill="#ffca28"/>
          <ellipse cx="4" cy="0" rx="3" ry="4" fill="#ffca28"/>
          <circle cx="0" cy="2" r="2.5" fill="#f57f17"/>
        </g>
        <g transform="translate(36,14)">
          <ellipse cx="0" cy="-5" rx="4" ry="3" fill="#ffd54f"/>
          <ellipse cx="-4" cy="0" rx="3" ry="4" fill="#ffca28"/>
          <ellipse cx="4" cy="0" rx="3" ry="4" fill="#ffca28"/>
          <circle cx="0" cy="2" r="2.5" fill="#f57f17"/>
        </g>
        <g transform="translate(28,12)">
          <ellipse cx="0" cy="-5" rx="4" ry="3" fill="#ffd54f"/>
          <ellipse cx="-4" cy="0" rx="3" ry="4" fill="#ffca28"/>
          <ellipse cx="4" cy="0" rx="3" ry="4" fill="#ffca28"/>
          <circle cx="0" cy="2" r="2.5" fill="#f57f17"/>
        </g>
      </svg>`
    ]
  },

  /* 5. 馬蹄蓮 Calla Lily ─ 分數乘法 */
  {
    id: 'calla-lily', name: '分數乘法', chineseName: '馬蹄蓮', icon: '🤍',
    difficulty: 5, color: '#e0e0e0',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="18" cy="34" rx="10" ry="6" class="fl-leaf" transform="rotate(-30,18,34)"/>
        <ellipse cx="38" cy="30" rx="10" ry="6" class="fl-leaf" transform="rotate(30,38,30)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="18" cy="34" rx="10" ry="6" class="fl-leaf" transform="rotate(-30,18,34)"/>
        <ellipse cx="38" cy="30" rx="10" ry="6" class="fl-leaf" transform="rotate(30,38,30)"/>
        <ellipse cx="28" cy="11" rx="6" ry="7" fill="#f5f5f5" stroke="#bdbdbd" stroke-width="0.8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        <ellipse cx="18" cy="36" rx="10" ry="6" class="fl-leaf" transform="rotate(-30,18,36)"/>
        <ellipse cx="38" cy="32" rx="10" ry="6" class="fl-leaf" transform="rotate(30,38,32)"/>
        <path d="M 20 18 Q 16 10 22 6 Q 28 2 34 6 Q 40 10 36 18 Q 32 22 28 20 Q 24 22 20 18 Z" fill="#f5f5f5" stroke="#bdbdbd" stroke-width="0.8"/>
        <line x1="28" y1="18" x2="28" y2="8" stroke="#ffd54f" stroke-width="1.5"/>
      </svg>`
    ]
  },

  /* 6. 火鶴花 Anthurium ─ 小數乘法 */
  {
    id: 'anthurium', name: '小數乘法', chineseName: '火鶴花', icon: '❤️',
    difficulty: 5, color: '#e53935',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="17" cy="32" rx="11" ry="7" class="fl-leaf" transform="rotate(-35,17,32)"/>
        <ellipse cx="39" cy="32" rx="11" ry="7" class="fl-leaf" transform="rotate(35,39,32)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="17" cy="32" rx="11" ry="7" class="fl-leaf" transform="rotate(-35,17,32)"/>
        <ellipse cx="39" cy="32" rx="11" ry="7" class="fl-leaf" transform="rotate(35,39,32)"/>
        <path d="M 22 14 Q 18 8 24 5 Q 28 3 32 5 Q 38 8 34 14 Q 30 18 28 16 Q 26 18 22 14 Z" fill="#ef9a9a"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="17" cy="36" rx="11" ry="7" class="fl-leaf" transform="rotate(-35,17,36)"/>
        <ellipse cx="39" cy="36" rx="11" ry="7" class="fl-leaf" transform="rotate(35,39,36)"/>
        <path d="M 18 16 Q 12 8 20 4 Q 28 0 36 4 Q 44 8 38 16 Q 34 22 28 20 Q 22 22 18 16 Z" fill="#e53935"/>
        <line x1="32" y1="20" x2="38" y2="12" stroke="#ffeb3b" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="39" cy="11" rx="2" ry="1.5" fill="#ffeb3b" transform="rotate(-20,39,11)"/>
      </svg>`
    ]
  },

  /* 7. 天堂鳥 Bird of Paradise ─ 小數除法 */
  {
    id: 'bird-of-paradise', name: '小數除法', chineseName: '天堂鳥', icon: '🐦',
    difficulty: 5, color: '#ff9800',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="14" cy="32" rx="13" ry="6" class="fl-leaf" transform="rotate(-20,14,32)"/>
        <ellipse cx="42" cy="28" rx="13" ry="6" class="fl-leaf" transform="rotate(20,42,28)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="14" cy="32" rx="13" ry="6" class="fl-leaf" transform="rotate(-20,14,32)"/>
        <ellipse cx="42" cy="28" rx="13" ry="6" class="fl-leaf" transform="rotate(20,42,28)"/>
        <path d="M 20 16 L 28 6 L 36 16 Z" fill="#ff9800"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        <ellipse cx="14" cy="38" rx="13" ry="6" class="fl-leaf" transform="rotate(-20,14,38)"/>
        <ellipse cx="42" cy="34" rx="13" ry="6" class="fl-leaf" transform="rotate(20,42,34)"/>
        <path d="M 20 22 L 36 22 L 36 14 L 28 8 L 20 14 Z" fill="#1565c0"/>
        <path d="M 24 14 L 28 6 L 32 14" fill="none" stroke="#ff9800" stroke-width="1.5"/>
        <path d="M 20 14 L 16 10 L 22 8" fill="#ff9800"/>
        <path d="M 36 14 L 40 10 L 34 8" fill="#ff9800"/>
        <ellipse cx="28" cy="18" rx="5" ry="3" fill="#0d47a1"/>
      </svg>`
    ]
  },

  /* 8. 劍蘭 Gladiolus ─ 百分比概念 */
  {
    id: 'gladiolus', name: '百分比概念', chineseName: '劍蘭', icon: '⚔️',
    difficulty: 5, color: '#e91e63',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="4" ry="5" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        <ellipse cx="20" cy="34" rx="9" ry="4" class="fl-leaf" transform="rotate(-40,20,34)"/>
        <ellipse cx="36" cy="26" rx="9" ry="4" class="fl-leaf" transform="rotate(40,36,26)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        <ellipse cx="20" cy="34" rx="9" ry="4" class="fl-leaf" transform="rotate(-40,20,34)"/>
        <ellipse cx="36" cy="26" rx="9" ry="4" class="fl-leaf" transform="rotate(40,36,26)"/>
        <ellipse cx="28" cy="26" rx="4" ry="6" fill="#f48fb1"/>
        <ellipse cx="28" cy="18" rx="4" ry="6" fill="#f48fb1"/>
        <ellipse cx="28" cy="10" rx="4" ry="5" fill="#e91e63"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        <ellipse cx="20" cy="36" rx="9" ry="4" class="fl-leaf" transform="rotate(-40,20,36)"/>
        <ellipse cx="36" cy="28" rx="9" ry="4" class="fl-leaf" transform="rotate(40,36,28)"/>
        <g>
          <ellipse cx="23" cy="28" rx="5" ry="7" fill="#ad1457" transform="rotate(-10,23,28)"/>
          <ellipse cx="33" cy="28" rx="5" ry="7" fill="#ad1457" transform="rotate(10,33,28)"/>
          <ellipse cx="23" cy="20" rx="5" ry="7" fill="#e91e63" transform="rotate(-10,23,20)"/>
          <ellipse cx="33" cy="20" rx="5" ry="7" fill="#e91e63" transform="rotate(10,33,20)"/>
          <ellipse cx="28" cy="10" rx="5" ry="6" fill="#f06292"/>
          <circle cx="28" cy="10" r="2" fill="#fff9c4"/>
        </g>
      </svg>`
    ]
  },

  /* 9. 千鳥草 Larkspur ─ 三角形面積 */
  {
    id: 'larkspur', name: '三角形面積', chineseName: '千鳥草', icon: '🔷',
    difficulty: 5, color: '#3f51b5',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <ellipse cx="28" cy="22" rx="4" ry="5" fill="#7986cb"/>
        <ellipse cx="28" cy="16" rx="4" ry="5" fill="#5c6bc0"/>
        <ellipse cx="28" cy="10" rx="4" ry="4" fill="#3f51b5"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,40,1)}${leafPair(28,30,-1)}
        ${[26,24,20,16,11].map((y,i)=>`
          <ellipse cx="${22+i*0.5}" cy="${y}" rx="4" ry="5" fill="#5c6bc0" transform="rotate(-15,${22+i*0.5},${y})"/>
          <ellipse cx="${34-i*0.5}" cy="${y}" rx="4" ry="5" fill="#3f51b5" transform="rotate(15,${34-i*0.5},${y})"/>
          <ellipse cx="28" cy="${y-2}" rx="3" ry="4" fill="#7986cb"/>
        `).join('')}
      </svg>`
    ]
  },

  /* 10. 蜀葵 Hollyhock ─ 平行四邊形面積 */
  {
    id: 'hollyhock', name: '平行四邊形面積', chineseName: '蜀葵', icon: '💜',
    difficulty: 5, color: '#9c27b0',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,38,1)}${leafPair(28,28,-1)}
        <circle cx="28" cy="22" r="5" fill="#ce93d8"/>
        <circle cx="28" cy="14" r="5" fill="#ab47bc"/>
        <circle cx="28" cy="8" r="4" fill="#9c27b0"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,42,1)}${leafPair(28,34,-1)}
        ${[28,22,16,10].map((y,i)=>`
          <g transform="translate(28,${y})">
            ${[0,72,144,216,288].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*6)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*6)}" rx="3" ry="5" fill="${['#9c27b0','#ab47bc','#ce93d8','#7b1fa2'][i]}" transform="rotate(${a})"/>`).join('')}
            <circle cx="0" cy="0" r="2.5" fill="#fff9c4"/>
          </g>
        `).join('')}
      </svg>`
    ]
  },

  /* 11. 含羞草 Mimosa ─ 體積（長方體、正方體） */
  {
    id: 'mimosa', name: '體積', chineseName: '含羞草', icon: '🌿',
    difficulty: 5, color: '#8bc34a',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        ${stemLine(28,36,16,28,'fl-stem')}${stemLine(28,30,40,22,'fl-stem')}
        ${[14,18,22].map(x=>`<circle cx="${x}" cy="${28-(x-14)/2}" r="2.5" class="fl-leaf"/>`).join('')}
        ${[38,42,46].map(x=>`<circle cx="${x}" cy="${22+(x-38)/2}" r="2.5" class="fl-leaf"/>`).join('')}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${stemLine(28,36,16,26,'fl-stem')}${stemLine(28,30,40,20,'fl-stem')}${stemLine(28,26,22,16,'fl-stem')}${stemLine(28,26,34,16,'fl-stem')}
        ${[14,18,22].map(x=>`<circle cx="${x}" cy="${26-(x-14)/2}" r="2.5" class="fl-leaf"/>`).join('')}
        ${[38,42,46].map(x=>`<circle cx="${x}" cy="${20+(x-38)/2}" r="2.5" class="fl-leaf"/>`).join('')}
        <circle cx="22" cy="14" r="4" fill="#f48fb1"/>
        <circle cx="34" cy="14" r="4" fill="#f48fb1"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,20)}
        ${stemLine(28,36,14,26,'fl-stem')}${stemLine(28,30,42,20,'fl-stem')}
        ${stemLine(28,28,20,16,'fl-stem')}${stemLine(28,28,36,16,'fl-stem')}
        ${[12,16,20,24].map(x=>`<circle cx="${x}" cy="${26-(x-12)*0.5}" r="2.5" class="fl-leaf"/>`).join('')}
        ${[40,44,48].map(x=>`<circle cx="${x}" cy="${20+(x-40)*0.5}" r="2.5" class="fl-leaf"/>`).join('')}
        <circle cx="20" cy="13" r="5" fill="#ce93d8"/>
        <circle cx="20" cy="13" r="3" fill="#f3e5f5"/>
        <circle cx="36" cy="13" r="5" fill="#ce93d8"/>
        <circle cx="36" cy="13" r="3" fill="#f3e5f5"/>
      </svg>`
    ]
  },

  /* 12. 山桐子 Poplar ─ 平均數 */
  {
    id: 'poplar', name: '平均數', chineseName: '山桐子', icon: '🍒',
    difficulty: 5, color: '#795548',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,32)}
        <ellipse cx="28" cy="28" rx="5" ry="5" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,36,1)}${leafPair(28,26,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        ${leafPair(28,36,1)}${leafPair(28,26,-1)}
        ${stemLine(28,14,20,8,'fl-stem')}${stemLine(28,14,36,8,'fl-stem')}${stemLine(28,14,28,6,'fl-stem')}
        <circle cx="20" cy="6" r="3" fill="#ef9a9a"/>
        <circle cx="36" cy="6" r="3" fill="#ef9a9a"/>
        <circle cx="28" cy="4" r="3" fill="#ef9a9a"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,38,1)}${leafPair(28,30,-1)}
        ${stemLine(28,18,18,10,'fl-stem')}${stemLine(28,18,38,10,'fl-stem')}
        ${stemLine(28,18,22,6,'fl-stem')}${stemLine(28,18,34,6,'fl-stem')}
        ${stemLine(28,18,28,8,'fl-stem')}
        ${[[18,8],[38,8],[22,4],[34,4],[28,6],[14,12],[42,12]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="3" fill="#c62828"/><circle cx="${x}" cy="${y}" r="1.5" fill="#e53935"/>`).join('')}
      </svg>`
    ]
  },

  /* 13. 彼岸花 Spider Lily ─ 比的概念 */
  {
    id: 'spider-lily', name: '比的概念', chineseName: '彼岸花', icon: '🕷️',
    difficulty: 5, color: '#f44336',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="16" cy="36" rx="12" ry="4" class="fl-leaf" transform="rotate(-20,16,36)"/>
        <ellipse cx="40" cy="30" rx="12" ry="4" class="fl-leaf" transform="rotate(20,40,30)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,14)}
        <ellipse cx="16" cy="36" rx="12" ry="4" class="fl-leaf" transform="rotate(-20,16,36)"/>
        <ellipse cx="40" cy="30" rx="12" ry="4" class="fl-leaf" transform="rotate(20,40,30)"/>
        <circle cx="28" cy="10" r="7" fill="#ef9a9a"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="16" cy="38" rx="12" ry="4" class="fl-leaf" transform="rotate(-20,16,38)"/>
        <ellipse cx="40" cy="32" rx="12" ry="4" class="fl-leaf" transform="rotate(20,40,32)"/>
        <g transform="translate(28,14)">
          ${[0,45,90,135,180,225,270,315].map(a=>{
            const rad = a*Math.PI/180;
            const ex = Math.round(Math.sin(rad)*11);
            const ey = Math.round(-Math.cos(rad)*11);
            return `<path d="M 0 0 Q ${Math.round(ex*0.5+Math.cos(rad)*3)} ${Math.round(ey*0.5-Math.sin(rad)*3)} ${ex} ${ey}" fill="none" stroke="#f44336" stroke-width="1.5"/>
                    <circle cx="${ex}" cy="${ey}" r="1.5" fill="#f44336"/>`;
          }).join('')}
          <circle cx="0" cy="0" r="4" fill="#ffcdd2"/>
        </g>
      </svg>`
    ]
  },

  /* 14. 白鶴芋 Peace Lily ─ 座標平面 */
  {
    id: 'peace-lily', name: '座標平面', chineseName: '白鶴芋', icon: '🕊️',
    difficulty: 5, color: '#f5f5f5',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="16" cy="32" rx="13" ry="7" class="fl-leaf" transform="rotate(-30,16,32)"/>
        <ellipse cx="40" cy="28" rx="13" ry="7" class="fl-leaf" transform="rotate(30,40,28)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="16" cy="32" rx="13" ry="7" class="fl-leaf" transform="rotate(-30,16,32)"/>
        <ellipse cx="40" cy="28" rx="13" ry="7" class="fl-leaf" transform="rotate(30,40,28)"/>
        <ellipse cx="28" cy="11" rx="7" ry="8" fill="#f5f5f5" stroke="#bdbdbd" stroke-width="0.8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="16" cy="36" rx="13" ry="7" class="fl-leaf" transform="rotate(-30,16,36)"/>
        <ellipse cx="40" cy="32" rx="13" ry="7" class="fl-leaf" transform="rotate(30,40,32)"/>
        <path d="M 18 18 Q 14 10 22 5 Q 28 2 34 5 Q 42 10 38 18 Q 34 24 28 22 Q 22 24 18 18 Z" fill="#ffffff" stroke="#e0e0e0" stroke-width="0.8"/>
        <line x1="28" y1="18" x2="28" y2="6" stroke="#ffd54f" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="28" cy="5" rx="2" ry="3" fill="#ffd54f"/>
      </svg>`
    ]
  },

  /* 15. 毛茛 Buttercup ─ 等差數列 */
  {
    id: 'buttercup', name: '等差數列', chineseName: '毛茛', icon: '🌕',
    difficulty: 5, color: '#fdd835',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        ${leafPair(28,36,1)}${leafPair(28,27,-1)}
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        ${leafPair(28,36,1)}${leafPair(28,27,-1)}
        <circle cx="28" cy="11" r="7" fill="#fff176"/>
        <circle cx="28" cy="11" r="4" fill="#fdd835"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,24)}
        ${leafPair(28,40,1)}${leafPair(28,32,-1)}
        <g transform="translate(28,16)">
          ${[0,72,144,216,288].map(a=>`<ellipse cx="${Math.round(Math.sin(a*Math.PI/180)*8)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*8)}" rx="4.5" ry="7" fill="#fdd835" transform="rotate(${a})"/>`).join('')}
          <circle cx="0" cy="0" r="5" fill="#f9a825"/>
          <circle cx="0" cy="0" r="3" fill="#f57f17"/>
          ${[0,60,120,180,240,300].map(a=>`<circle cx="${Math.round(Math.sin(a*Math.PI/180)*2)}" cy="${Math.round(-Math.cos(a*Math.PI/180)*2)}" r="0.8" fill="#fff9c4"/>`).join('')}
        </g>
      </svg>`
    ]
  },

  /* 16. 蘭花 Orchid ─ 代數初步（未知數） */
  {
    id: 'orchid', name: '代數初步', chineseName: '蘭花', icon: '🌷',
    difficulty: 5, color: '#ba68c8',
    svgs: [
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}${seedShape()}</svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,34)}
        <ellipse cx="28" cy="30" rx="5" ry="4" class="fl-sprout"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,18)}
        <ellipse cx="16" cy="32" rx="12" ry="6" class="fl-leaf" transform="rotate(-25,16,32)"/>
        <ellipse cx="40" cy="28" rx="12" ry="6" class="fl-leaf" transform="rotate(25,40,28)"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,16)}
        <ellipse cx="16" cy="32" rx="12" ry="6" class="fl-leaf" transform="rotate(-25,16,32)"/>
        <ellipse cx="40" cy="28" rx="12" ry="6" class="fl-leaf" transform="rotate(25,40,28)"/>
        <ellipse cx="28" cy="11" rx="7" ry="6" fill="#ce93d8"/>
      </svg>`,
      `<svg viewBox="0 0 56 60" xmlns="http://www.w3.org/2000/svg">${soil()}
        ${stemLine(28,48,28,22)}
        <ellipse cx="16" cy="36" rx="12" ry="6" class="fl-leaf" transform="rotate(-25,16,36)"/>
        <ellipse cx="40" cy="32" rx="12" ry="6" class="fl-leaf" transform="rotate(25,40,32)"/>
        <g transform="translate(28,14)">
          <ellipse cx="0" cy="-7" rx="5" ry="7" fill="#ba68c8"/>
          <ellipse cx="-7" cy="2" rx="5" ry="7" fill="#ab47bc" transform="rotate(-72,0,0)"/>
          <ellipse cx="-4" cy="6" rx="5" ry="7" fill="#9c27b0" transform="rotate(-144,0,0)"/>
          <ellipse cx="4" cy="6" rx="5" ry="7" fill="#ab47bc" transform="rotate(144,0,0)"/>
          <ellipse cx="7" cy="2" rx="5" ry="7" fill="#ba68c8" transform="rotate(72,0,0)"/>
          <ellipse cx="0" cy="3" rx="3" ry="4" fill="#ce93d8"/>
          <circle cx="0" cy="3" r="2" fill="#fff9c4"/>
          <circle cx="0" cy="3" r="1" fill="#f57f17"/>
        </g>
      </svg>`
    ]
  }

];

if (typeof makeSpecialVisualFlowers === 'function') {
  FLOWERS_G5.push(...makeSpecialVisualFlowers('g5'));
}
