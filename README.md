# 浜名湖うなぎ (Lake Hamana Unagi) 公式紹介Webサイト 🍱

浜名湖うなぎの100年を超える歴史と伝統、関東風と関西風の焼き方の違い、名物料理（うな重・白焼き・ひつまぶし）、名店ガイド、インタラクティブなうなぎ診断を搭載したモダンでラグジュアリーな紹介Webサイトです。

GitHub Pages での公開に対応した静的Webアプリケーション構成となっています。

---

## 🌟 主な機能・特徴

1. **洗練された和風ラグジュアリーデザイン**:
   - 漆黒（すみ黒）・深朱（漆赤）・金箔色を基調とした伝統と高級感の融合
   - Shippori Mincho & Noto Sans JP のフォント連携
   - スマホ・タブレット・PC完全対応のレスポンシブデザイン

2. **インタラクティブなコンテンツ**:
   - **関東風 vs 関西風 比較機能**: 背開き/腹開き、蒸し/地焼きの違いを一目で比較切り替え
   - **ひつまぶし 3-Step ガイド**: 一の膳（そのまま）〜四の膳までの作法をリアルタイム表示
   - **浜名湖周辺 名店ガイド**: 浜松駅・舘山寺温泉・弁天島・三ヶ日などのエリア別フィルタリング機能
   - **あなたにピッタリの「うなぎ診断」**: 3つの選択肢で最適なお料理とおすすめ店を提案

3. **GitHub Pages 即時公開対応**:
   - リモートリポジトリにプッシュするだけで自動デプロイされる GitHub Actions ワークフロー (`.github/workflows/deploy.yml`) 同封

---

## 📁 ディレクトリ構成

```text
kklab-agv-samples/
├── index.html                  # メインHTMLファイル
├── css/
│   └── style.css               # 高級デザインシステム & CSSスタイル
├── js/
│   └── app.js                  # インタラクティブ機能・フィルタ・診断ロジック
├── assets/
│   └── images/                 # AI生成の高画質画像アセット
│       ├── hero_unagi.jpg      # うな重ヒーロー画像
│       ├── lake_hamana.jpg     # 浜名湖・弁天島夕景
│       ├── hitsumabushi.jpg    # ひつまぶし膳
│       └── shirayaki.jpg       # 白焼き画像
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自動デプロイアクション
└── README.md                   # 本ドキュメント
```

---

## 🚀 GitHub Pages 公開手順

GitHub リポジトリを作成し、以下のコマンドを実行するだけで簡単に公開できます。

### 手順 1: ローカルリポジトリの初期化とコミット
```bash
git init
git add .
git commit -m "Initial commit: 浜名湖うなぎ紹介サイト"
```

### 手順 2: GitHubリポジトリへのプッシュ
```bash
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/リポジトリ名.git
git push -u origin main
```

### 手順 3: GitHub Pages の有効化
1. GitHubの該当リポジトリページで **Settings** タブを開きます。
2. 左メニューの **Pages** を選択します。
3. **Build and deployment** の **Source** で `GitHub Actions` を選択（または `Deploy from a branch` で `main` ブランチの `/ (root)` を選択）します。
4. 数分後、`https://あなたのユーザー名.github.io/リポジトリ名/` にてサイトが世界中に公開されます！✨

---

## 💻 ローカルでの確認方法

ブラウザで `index.html` を直接開くか、またはローカル開発サーバーを起動して確認できます。

```bash
# Python を使用する場合
python3 -m http.server 8000

# npx http-server を使用する場合
npx http-server -p 8000
```
ブラウザで `http://localhost:8000` にアクセスしてください。
