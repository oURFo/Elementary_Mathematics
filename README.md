# 花圃數學園 🌸

國小一年級互動數學習題網頁，採種花養成遊戲玩法。

## 功能特色

- **12 種花朵** 對應 12 個數學主題（康軒 + 翰林版合併課程）
- **5 個生長階段**：種子 → 發芽 → 長葉 → 花苞 → 開花（每答對 10/20/30/50 題升級）
- **手寫計算草稿區**：HTML5 Canvas，支援滑鼠與觸控書寫
- **數字鍵盤答題**：大按鈕設計，平板友善
- **粒子動畫**：答對時光點從題目區飛往對應花朵
- **支援 PC 與平板橫向模式**
- **localStorage 本機儲存**，重開瀏覽器進度依然保留

## 數學主題

| 花種 | 主題 | 學期 |
|------|------|------|
| 向日葵 | 數數（10/30以內） | 一上 |
| 雛菊 | 比較（大小、排序） | 一上 |
| 蒲公英 | 分與合 | 一上 |
| 牽牛花 | 圖形（平面/立體） | 一上 |
| 櫻花 | 加法（10以內） | 一上 |
| 玫瑰 | 減法（10以內） | 一上 |
| 薰衣草 | 時間（整點/時段） | 一上 |
| 鬱金香 | 大數數（50/100以內） | 一下 |
| 百合 | 進階加法（20以內） | 一下 |
| 繡球花 | 進階減法（20以內） | 一下 |
| 康乃馨 | 錢幣換算 | 一下 |
| 牡丹 | 二位數加減 | 一下 |

## 本地開發

由於需要載入 `data/questions.json`，必須透過 HTTP server 執行（不可直接開啟 `index.html`）：

```bash
# 使用 Python（需安裝 Python 3）
python -m http.server 8080

# 使用 Node.js（需安裝 Node.js）
npx serve .
```

然後在瀏覽器開啟 `http://localhost:8080`

## GitHub Pages 部署

在 `D:\測試\MTS` 資料夾內，依序執行以下指令：

```powershell
# 初始化 git
git init
git add .
git commit -m "初始版本：花圃數學園"

# 連結到 GitHub repository（先在 github.com 建立空白 repo）
git remote add origin https://github.com/你的帳號/花圃數學園.git
git branch -M main
git push -u origin main
```

GitHub Pages 設定：
1. 進入 GitHub repo → Settings → Pages
2. Source 選 `Deploy from a branch`
3. Branch 選 `main` / `(root)`
4. 儲存後約 1-2 分鐘，即可透過 `https://你的帳號.github.io/花圃數學園/` 存取

## 檔案結構

```
/
├── index.html          # 主頁面
├── css/
│   ├── main.css        # 主樣式
│   ├── flowers.css     # 花朵動畫
│   ├── particles.css   # 粒子效果
│   └── responsive.css  # RWD 平板適配
├── js/
│   ├── storage.js      # localStorage 讀寫
│   ├── flowers.js      # 花朵 SVG + 花圃管理
│   ├── particles.js    # 光點粒子動畫
│   ├── questions.js    # 題目系統 + 畫布
│   └── app.js          # 主控制器
├── data/
│   └── questions.json  # 題庫（12主題各50題）
└── README.md
```
