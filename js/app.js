/* 浜名湖うなぎ (Lake Hamana Unagi) - Interactive Application Script */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initStyleToggle();
  initStepGuide();
  initShopFilter();
  initUnagiQuiz();
  initModal();
});

/* 1. Header & Mobile Navigation */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('mobile-open')) {
        navMenu.classList.remove('mobile-open');
      }
    });
  });
}

/* 2. Kanto vs Kansai Style Interactive Toggle */
function initStyleToggle() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  const styleBoxes = document.querySelectorAll('.style-box');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStyle = btn.dataset.style;

      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      styleBoxes.forEach(box => {
        if (targetStyle === 'all') {
          box.classList.remove('highlight');
          box.style.opacity = '1';
        } else if (box.dataset.style === targetStyle) {
          box.classList.add('highlight');
          box.style.opacity = '1';
        } else {
          box.classList.remove('highlight');
          box.style.opacity = '0.45';
        }
      });
    });
  });
}

/* 3. Hitsumabushi 3-Step Interactive Guide */
const stepData = {
  1: {
    title: '一の膳：そのままの味を楽しむ',
    desc: 'まずはお茶碗に軽く盛り、うなぎ本来の香ばしさとタレの旨味、ご飯のハーモニーをシンプルに味わいます。浜名湖産うなぎ特有の上質な脂と秘伝ダレの深みをダイレクトに感じる最初の一杯です。',
    img: 'assets/images/hero_unagi.jpg'
  },
  2: {
    title: '二の膳：薬味を加えて香りを引きたてる',
    desc: '二杯目は、刻みネギ、刻み海苔、おろしたての本わさびなどの薬味を添えて。わさびの爽やかな風味がうなぎの脂の甘みを引き立て、さっぱりと上品な味わいの変化をお楽しみいただけます。',
    img: 'assets/images/hitsumabushi.jpg'
  },
  3: {
    title: '三の膳：温かい出汁をかけて「うな茶漬け」',
    desc: '三杯目は、薬味の上に温かい特製のお出汁（または緑茶）をたっぷり注いで、出汁茶漬け風にいただきます。さらさらとお口に運びやすく、出汁に溶け出したうなぎの出汁とうま味が極上の締めくくりを演出します。',
    img: 'assets/images/shirayaki.jpg'
  },
  4: {
    title: '四の膳：一番お気に入りのスタイルで締めくくる',
    desc: '最後のお碗は、ここまでの三度の食べ方のうち、あなたが最も気に入ったスタイルで締めくくります。薬味を贅沢に載せても良し、出汁でサラッと食べても良し。自分だけの最高の至福を堪能してください。',
    img: 'assets/images/hitsumabushi.jpg'
  }
};

function initStepGuide() {
  const stepItems = document.querySelectorAll('.step-item');
  const stepImg = document.getElementById('step-img');
  const stepTitle = document.getElementById('step-title');
  const stepDesc = document.getElementById('step-desc');

  if (!stepItems.length) return;

  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      const stepNum = item.dataset.step;
      const data = stepData[stepNum];

      stepItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      if (data) {
        stepImg.style.opacity = '0';
        setTimeout(() => {
          stepImg.src = data.img;
          stepTitle.textContent = data.title;
          stepDesc.textContent = data.desc;
          stepImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/* 4. Restaurant Filter System */
const shopDataList = [
  {
    id: 1,
    name: 'うなぎ 藤田 浜松店',
    area: 'hamamatsu',
    areaName: '浜松駅周辺',
    style: 'kanto',
    styleName: '関東風（ふっくら蒸し）',
    rating: '★ 4.7',
    hours: '11:30 - 14:00 / 17:00 - 21:00',
    address: '静岡県浜松市中区中砂町',
    price: '￥3,500〜￥5,500',
    features: '明治創業の老舗。深蒸しによるふわふわ食感とキレのあるタレが絶品。'
  },
  {
    id: 2,
    name: 'かんたろう 蜆塚店',
    area: 'hamamatsu',
    areaName: '浜松駅周辺',
    style: 'kansai',
    styleName: '関西風（パリッと地焼き）',
    rating: '★ 4.8',
    hours: '11:00 - 14:00 / 17:00 - 20:00',
    address: '静岡県浜松市中区蜆塚',
    price: '￥3,800〜￥6,000',
    features: '地焼きの香ばしい皮目と溢れる肉汁。皮パリ身ふっくらの極上関西風。'
  },
  {
    id: 3,
    name: '志ぶき（しぶき）',
    area: 'kanzanji',
    areaName: '舘山寺温泉',
    style: 'both',
    styleName: '関東風・関西風 選択可',
    rating: '★ 4.6',
    hours: '11:00 - 14:30 / 17:00 - 20:30',
    address: '静岡県浜松市西区舘山寺町',
    price: '￥3,200〜￥5,200',
    features: '舘山寺温泉街の中心。関東風と関西風の焼き方を食べ比べできる人気店。'
  },
  {
    id: 4,
    name: '山本亭',
    area: 'bentenjima',
    areaName: '弁天島',
    style: 'kanto',
    styleName: '関東風',
    rating: '★ 4.5',
    hours: '11:30 - 21:00',
    address: '静岡県浜松市西区舞阪町弁天島',
    price: '￥3,600〜￥5,800',
    features: '浜名湖の目の前に位置。舞阪港直送の新鮮なすっぽんとうなぎが自慢。'
  },
  {
    id: 5,
    name: 'うなぎ さくめ',
    area: 'mikkabi',
    areaName: '浜名湖北部・三ヶ日',
    style: 'kansai',
    styleName: '関西風（直火炭火焼き）',
    rating: '★ 4.9',
    hours: '11:00 - 14:30',
    address: '静岡県浜松市北区三ヶ日町佐久米',
    price: '￥3,000〜￥4,800',
    features: '天竜浜名湖鉄道さくめ駅前。大将の豪快な捌きと炭火地焼きの絶品うな重。'
  },
  {
    id: 6,
    name: 'あつみ',
    area: 'hamamatsu',
    areaName: '浜松駅周辺',
    style: 'kanto',
    styleName: '関東風（伝統タレ）',
    rating: '★ 4.8',
    hours: '11:30 - 13:40 / 17:15 - 19:30',
    address: '静岡県浜松市中区田町',
    price: '￥4,000〜￥6,500',
    features: '浜松駅徒歩5分。創業110余年、継ぎ足し秘伝のタレと備長炭の芳醇な香り。'
  }
];

function initShopFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const shopGrid = document.getElementById('shop-grid');

  if (!shopGrid) return;

  renderShops(shopDataList);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterArea = btn.dataset.filter;
      if (filterArea === 'all') {
        renderShops(shopDataList);
      } else {
        const filtered = shopDataList.filter(s => s.area === filterArea);
        renderShops(filtered);
      }
    });
  });
}

function renderShops(list) {
  const shopGrid = document.getElementById('shop-grid');
  shopGrid.innerHTML = '';

  list.forEach(shop => {
    const card = document.createElement('div');
    card.className = 'shop-card';
    card.innerHTML = `
      <div>
        <div class="shop-header">
          <span class="shop-area">${shop.areaName}</span>
          <span class="shop-style-tag">${shop.styleName}</span>
        </div>
        <h3 class="shop-name">${shop.name}</h3>
        <ul class="shop-info-list">
          <li class="shop-info-item"><i>🕒</i> ${shop.hours}</li>
          <li class="shop-info-item"><i>📍</i> ${shop.address}</li>
          <li class="shop-info-item"><i>💰</i> ${shop.price}</li>
        </ul>
        <p class="text-muted" style="font-size:0.86rem; margin-bottom: 1rem;">${shop.features}</p>
      </div>
      <div class="shop-footer">
        <span class="rating-stars">${shop.rating}</span>
        <button class="btn-detail" onclick="openShopModal(${shop.id})">店舗詳細を見る →</button>
      </div>
    `;
    shopGrid.appendChild(card);
  });
}

/* 5. Interactive Unagi Quiz */
const quizState = {
  texture: null, // tender or crispy
  flavor: null,  // sauce or salt
  type: null     // single or multi
};

function initUnagiQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;

  renderQuizStep(1);
}

function renderQuizStep(step) {
  const container = document.getElementById('quiz-container');

  if (step === 1) {
    container.innerHTML = `
      <h3 class="quiz-step-title">Q1. あなたの好きな鰻（うなぎ）の食感は？</h3>
      <div class="quiz-options">
        <button class="quiz-option-btn" onclick="selectQuizAnswer('texture', 'tender', 2)">
          <span class="quiz-option-icon">♨️</span>
          <span>ふわっと柔らかく<br>口でとろける蒸し（関東風）</span>
        </button>
        <button class="quiz-option-btn" onclick="selectQuizAnswer('texture', 'crispy', 2)">
          <span class="quiz-option-icon">🔥</span>
          <span>皮目がパリッと香ばしい<br>炭火直火焼き（関西風）</span>
        </button>
      </div>
    `;
  } else if (step === 2) {
    container.innerHTML = `
      <h3 class="quiz-step-title">Q2. どんな味付けで楽しみたいですか？</h3>
      <div class="quiz-options">
        <button class="quiz-option-btn" onclick="selectQuizAnswer('flavor', 'sauce', 3)">
          <span class="quiz-option-icon">🍯</span>
          <span>甘辛く芳醇な<br>伝統の秘伝タレ</span>
        </button>
        <button class="quiz-option-btn" onclick="selectQuizAnswer('flavor', 'salt', 3)">
          <span class="quiz-option-icon">🧂</span>
          <span>素材本来の旨味を<br>わさび・塩で味わう白焼き</span>
        </button>
      </div>
    `;
  } else if (step === 3) {
    container.innerHTML = `
      <h3 class="quiz-step-title">Q3. 今回の食事のスタイルは？</h3>
      <div class="quiz-options">
        <button class="quiz-option-btn" onclick="selectQuizAnswer('type', 'classic', 'result')">
          <span class="quiz-option-icon">🍱</span>
          <span>王道のうな重で<br>贅沢に一筋で楽しみたい</span>
        </button>
        <button class="quiz-option-btn" onclick="selectQuizAnswer('type', 'multi', 'result')">
          <span class="quiz-option-icon">🍵</span>
          <span>ひつまぶしのように<br>途中で味を変えて楽しみたい</span>
        </button>
      </div>
    `;
  }
}

window.selectQuizAnswer = function(category, value, nextStep) {
  quizState[category] = value;
  if (nextStep === 'result') {
    showQuizResult();
  } else {
    renderQuizStep(nextStep);
  }
};

function showQuizResult() {
  const container = document.getElementById('quiz-container');
  let resultTitle = '';
  let resultDesc = '';
  let recommendShop = '';
  let badge = '';

  if (quizState.flavor === 'salt') {
    badge = '通のおすすめ';
    resultTitle = '究極の純粋美『浜名湖産 うなぎ白焼き』';
    resultDesc = '素材への絶対の自信がなせる業。蒸しまたは焼き上げたうなぎをタレをつけずにそのまま焼き上げ、おろしたての本わさびと粗塩でいただく贅沢な逸品です。浜名湖うなぎの上質な脂の甘みが際立ちます。';
    recommendShop = '「山本亭」や「志ぶき」の白焼き御膳が特におすすめです！';
  } else if (quizState.type === 'multi') {
    badge = '人気No.1体感型';
    resultTitle = '三度の変化を堪能する『浜名湖ひつまぶし』';
    resultDesc = 'そのまま・薬味・出汁茶漬けと、一度の食事で3通りの魅力を堪能できる満足度満点の逸品。最後の一滴まで浜名湖うなぎとうま味出汁の調和を楽しみたいあなたにピッタリです。';
    recommendShop = '「かんたろう」や「あつみ」の特製ひつまぶしをお試しください！';
  } else if (quizState.texture === 'crispy') {
    badge = '香ばしさ極まる';
    resultTitle = '関西風 地焼きうな重（パリッと極上）';
    resultDesc = '蒸さずに強火の炭火で一気に焼き上げる関西風地焼き。皮はパリッとサクサク、身はジューシーで濃厚なうなぎの旨味が凝縮された圧倒的な香ばしさが特徴です。';
    recommendShop = '浜名湖名物「うなぎ さくめ」または「かんたろう」がベストチョイス！';
  } else {
    badge = '王道クラシック';
    resultTitle = '伝統のふっくら『特選 関東風うな重』';
    resultDesc = '背開きにしたうなぎを丁寧にじっくり蒸し上げ、秘伝のタレを絡めて備長炭でふんわり焼き上げます。箸を入れた瞬間にほろりと崩れる極上の柔らかさです。';
    recommendShop = '明治創業の老舗「うなぎ 藤田」や「あつみ」が間違いありません！';
  }

  container.innerHTML = `
    <div class="quiz-result active">
      <span class="result-badge">${badge}</span>
      <h3 class="result-dish-title">${resultTitle}</h3>
      <p class="result-desc">${resultDesc}</p>
      <p style="color:var(--color-gold-light); font-weight:600; margin-bottom:1.5rem;">💡 おすすめ店: ${recommendShop}</p>
      <button class="btn-primary" onclick="resetQuiz()">もう一度診断する 🔄</button>
    </div>
  `;
}

window.resetQuiz = function() {
  quizState.texture = null;
  quizState.flavor = null;
  quizState.type = null;
  renderQuizStep(1);
};

/* 6. Modal Functions */
function initModal() {
  const modal = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
}

window.openShopModal = function(shopId) {
  const shop = shopDataList.find(s => s.id === shopId);
  if (!shop) return;

  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body-content');

  modalBody.innerHTML = `
    <span class="kamon-badge" style="margin-bottom:0.75rem;">${shop.areaName}</span>
    <h2 style="font-size:1.8rem; color:var(--color-gold-light); margin-bottom:0.5rem;">${shop.name}</h2>
    <p style="color:var(--color-lacquer); font-weight:700; font-size:0.95rem; margin-bottom:1.25rem;">${shop.styleName}</p>
    
    <div style="background:rgba(0,0,0,0.3); padding:1.25rem; border-radius:12px; margin-bottom:1.5rem; border:1px solid rgba(255,255,255,0.06);">
      <p style="font-size:0.92rem; color:var(--text-muted); line-height:1.7;">${shop.features}</p>
    </div>

    <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem; font-size:0.9rem; color:var(--text-main); margin-bottom:1.5rem;">
      <li>📍 <strong>住所:</strong> ${shop.address}</li>
      <li>🕒 <strong>営業時間:</strong> ${shop.hours}</li>
      <li>💰 <strong>予算目安:</strong> ${shop.price}</li>
      <li>⭐ <strong>評価:</strong> ${shop.rating}</li>
    </ul>

    <a href="https://maps.google.com/?q=${encodeURIComponent(shop.name + ' ' + shop.address)}" target="_blank" rel="noopener" class="btn-primary" style="width:100%; justify-content:center;">
      Googleマップで場所を確認する 🗺️
    </a>
  `;

  modal.classList.add('active');
};

window.openDishModal = function(dishName, dishDesc, price) {
  const modal = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body-content');

  modalBody.innerHTML = `
    <span class="kamon-badge" style="margin-bottom:0.75rem;">浜名湖名物料理</span>
    <h2 style="font-size:1.8rem; color:var(--color-gold-light); margin-bottom:0.75rem;">${dishName}</h2>
    <p style="color:var(--color-gold); font-size:1.1rem; font-family:var(--font-mincho); font-weight:700; margin-bottom:1.25rem;">目安価格: ${price}</p>
    
    <div style="background:rgba(0,0,0,0.3); padding:1.25rem; border-radius:12px; margin-bottom:1.5rem; border:1px solid rgba(255,255,255,0.06);">
      <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.8;">${dishDesc}</p>
    </div>

    <button onclick="document.getElementById('modal-overlay').classList.remove('active'); document.getElementById('shops').scrollIntoView({behavior:'smooth'});" class="btn-primary" style="width:100%; justify-content:center;">
      この料理を味わえる名店を探す 📍
    </button>
  `;

  modal.classList.add('active');
};
