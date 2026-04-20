const searchItems = [
  // الأقسام
  { ar: "الرئيسية", en: "Home", url: "index.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "الحياة البرية", en: "Wildlife", url: "index.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "الحيوانات", en: "Animals", url: "animals.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "النباتات", en: "Plants", url: "plants.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "العادات", en: "Traditions", url: "traditions.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "المكتبة", en: "Library", url: "books.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "الأمن والسلامة", en: "Safety", url: "safety.html", typeAr: "قسم", typeEn: "Section" },
  { ar: "المتجر", en: "Store", url: "https://barrari-abudhabi.vercel.app/shop", external: true, typeAr: "قسم", typeEn: "Section" },

  // الحيوانات
  { ar: "المها العربي", en: "Arabian Oryx", url: "pdfs/Arabian-Oryx.pdf", typeAr: "حيوان", typeEn: "Animal" },
  { ar: "الفلامنقو", en: "Flamingo", url: "pdfs/Flamingo.pdf", typeAr: "حيوان", typeEn: "Animal" },
  { ar: "الفهد الصياد", en: "Cheetah", url: "pdfs/Cheetah.pdf", typeAr: "حيوان", typeEn: "Animal" },
  { ar: "السحلية شوكية الذيل", en: "Spiny-tailed Lizard", url: "pdfs/Spiny-tailed Lizard.pdf", typeAr: "حيوان", typeEn: "Animal" },
  { ar: "الثعلب الرملي", en: "Sand Fox", url: "pdfs/Sand-Fox.pdf", typeAr: "حيوان", typeEn: "Animal" },
  { ar: "الأرنب البري العربي", en: "Arabian Hare", url: "pdfs/Arabian-Hare.pdf", typeAr: "حيوان", typeEn: "Animal" },
  { ar: "غزال الجبل", en: "Mountain Gazelle", url: "pdfs/Mountain-Gazelle.pdf", typeAr: "حيوان", typeEn: "Animal" },

  // النباتات
  { ar: "القرم", en: "Mangrove", url: "pdfs/Mangrove.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "الغاف", en: "Ghaf", url: "pdfs/Ghaf-Tree.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "الهندباء", en: "Wild Chicory", url: "pdfs/Wild-Chicory.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "النخيل", en: "Palm Tree", url: "pdfs/Palm-Tree.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "الأراك", en: "Arak Tree", url: "pdfs/Arak-Tree.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "السدر", en: "Sidr Tree", url: "pdfs/Sidr-Tree.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "السمر", en: "Samar Tree", url: "pdfs/Samar-Tree.pdf", typeAr: "نبات", typeEn: "Plant" },
  { ar: "الغضا", en: "Ghada Tree", url: "pdfs/Ghada-Tree.pdf", typeAr: "نبات", typeEn: "Plant" },

  // الكتب
  { ar: "الأطلس البيئي لإمارة أبوظبي", en: "Environmental Atlas of Abu Dhabi Emirate", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "أبوظبي: الطبيعة المحمية", en: "Abu Dhabi: Nature Preserved", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "على خطى زايد", en: "Years of Preserving", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "التاريخ الطبيعي للإمارات", en: "A Natural History of the Emirates", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "دليل الأزهار البرية في الإمارات", en: "The Comprehensive Guide to the Wild Flowers of the United Arab Emirates", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "بيئة أبوظبي الصحراوية", en: "Desert Ecology of Abu Dhabi: A Review and Recent Studies", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "جولات طبيعية في الحياة البرية بالإمارات", en: "Nature Walks: Wildlife Encounters in the UAE", url: "books.html", typeAr: "كتاب", typeEn: "Book" },
  { ar: "النباتات البرية المزهرة في دولة الإمارات العربية المتحدة", en: "Wild Flowering Plants in the United Arab Emirates", url: "books.html", typeAr: "كتاب", typeEn: "Book" },

  // العادات والتقاليد
  { ar: "الغوص على اللؤلؤ", en: "Pearl Diving", url: "traditions.html", typeAr: "عادة", typeEn: "Tradition" },
  { ar: "صناعة سعف النخيل", en: "Palm Frond Weaving", url: "traditions.html", typeAr: "عادة", typeEn: "Tradition" },
  { ar: "رقصة اليولة", en: "Al Yola Dance", url: "traditions.html", typeAr: "عادة", typeEn: "Tradition" },
  { ar: "القهوة العربية", en: "Arabic Coffee", url: "traditions.html", typeAr: "عادة", typeEn: "Tradition" }
];
const navbarCode = `
<nav style="background-color: rgba(44, 30, 22, 0.6); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);">
  <div class="nav-left">
 <div class="top-icons">
<button class="mobile-icon-btn" onclick="toggleLanguage()" aria-label="Change language">
  <span class="icon-text" id="mobile-lang-text">EN</span>
</button>

  <button class="mobile-icon-btn" onclick="toggleMobileSearch()" aria-label="Open search">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="nav-icon">
      <circle cx="11" cy="11" r="6.5"></circle>
      <line x1="16" y1="16" x2="21" y2="21"></line>
    </svg>
  </button>
</div>
<div class="mobile-search-panel" id="mobile-search-box">
  <div class="mobile-search-header">
    <input type="text" id="navbar-search-mobile" placeholder="ابحث..." autocomplete="off">
    <button class="close-search" onclick="toggleMobileSearch()">✕</button>
  </div>

  <div id="search-results-mobile" class="search-results mobile-results"></div>
</div>
    <div class="logo-container">
      <a href="index.html" style="text-decoration:none;">
        <img src="https://i.imgur.com/EFpsR4T.png" alt="شعار براري أبوظبي" class="lang-ar">
        <img src="https://i.imgur.com/bUlCJpZ.png" alt="Barari Abu Dhabi Logo" class="lang-en">
      </a>
    </div>
  </div>

  <div class="nav-right">
    <a href="index.html">
      <span class="lang-ar">الرئيسية</span>
      <span class="lang-en">Home</span>
    </a>

    <a onclick="handleWildlifeClick()" style="cursor:pointer;">
      <span class="lang-ar">الحياة البرية</span>
      <span class="lang-en">Wildlife</span>
    </a>

    <a href="traditions.html">
      <span class="lang-ar">العادات</span>
      <span class="lang-en">Traditions</span>
    </a>

    <a href="books.html">
      <span class="lang-ar">المكتبة</span>
      <span class="lang-en">Library</span>
    </a>

    <a href="safety.html">
      <span class="lang-ar">الأمن والسلامة</span>
      <span class="lang-en">Safety</span>
    </a>

    <a href="https://barrari-abudhabi.vercel.app/shop" target="_blank">
      <span class="lang-ar">المتجر</span>
      <span class="lang-en">Store</span>
    </a>

    <div class="desktop-tools">
      <div class="search-box-wrapper">
        <input type="text" id="navbar-search" placeholder="ابحث..." autocomplete="off">
        <div id="search-results" class="search-results"></div>
      </div>
      <button class="lang-toggle-btn" onclick="toggleLanguage()">EN</button>
    </div>
  </div>
</nav>

<style>
  .nav-left {
    position: relative;
  }

  .logo-container {
    text-align: center;
  }

.logo-container img {
  height: auto;
  display: none;
  margin: 0 auto;
}

html[lang="ar"] .logo-container .lang-ar {
  display: inline-block;
  max-width: 60px;
}

html[lang="en"] .logo-container .lang-en {
  display: inline-block;
  max-width: 118px;
}

  .search-box-wrapper {
    position: relative;
    min-width: 220px;
  }

  #navbar-search {
    width: 100%;
    padding: 10px 14px;
    border-radius: 20px;
    border: 1px solid rgba(240, 229, 216, 0.25);
    background: rgba(255,255,255,0.06);
    color: #f0e5d8;
    outline: none;
    font-family: 'Tajawal', sans-serif;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  #navbar-search::placeholder {
    color: #c8b49c;
  }

  .search-results {
    position: absolute;
    top: 48px;
    right: 0;
    width: 100%;
    background: rgba(44, 30, 22, 0.92);
    border: 1px solid rgba(240, 229, 216, 0.08);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    display: none;
    z-index: 9999;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  [dir="ltr"] .search-results {
    right: auto;
    left: 0;
  }

  .search-result-item {
    padding: 12px 14px;
    cursor: pointer;
    border-bottom: 1px solid rgba(240, 229, 216, 0.05);
    color: #f0e5d8;
    transition: background 0.2s ease;
  }

  .search-result-item:hover {
    background: rgba(255,255,255,0.08);
  }

  .search-result-item small {
    display: block;
    color: #c8b49c;
    margin-top: 3px;
    font-size: 12px;
  }

  .desktop-tools {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .top-icons {
    position: absolute;
    top: 10px;
    left: 15px;
    right: 15px;
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  .top-icons button {
    pointer-events: all;
  }

 .mobile-icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(244, 236, 224, 0.22);
  background: rgba(255, 248, 240, 0.07);
  color: rgba(255, 248, 240, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.25s ease;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  padding: 0;
}

.mobile-icon-btn:hover {
  background: rgba(255, 248, 240, 0.14);
  border-color: rgba(244, 236, 224, 0.34);
}

.mobile-icon-btn:active {
  transform: scale(0.96);
}

.nav-icon {
  width: 18px;
  height: 18px;
  stroke: rgba(255, 248, 240, 0.92);
  stroke-width: 1.8;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.icon-text {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: rgba(255, 248, 240, 0.95);
  font-family: 'Tajawal', sans-serif;
}

  @media (min-width: 769px) {
    .top-icons {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .desktop-tools {
      display: none;
    }

    .nav-right {
      display: flex !important;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px 14px;
      width: 100%;
    }

    .nav-right a {
      display: inline-flex !important;
    }
  }
    .mobile-search-dropdown {
  display: none;
}

.mobile-search-dropdown.active {
  display: block;
}

.mobile-search-wrapper {
  width: calc(100% - 30px);
  min-width: unset;
  margin: 58px auto 10px;
}

#navbar-search-mobile {
  width: 100%;
  padding: 10px 14px;
  border-radius: 20px;
  border: 1px solid rgba(240, 229, 216, 0.25);
  background: rgba(255,255,255,0.06);
  color: #f0e5d8;
  outline: none;
  font-family: 'Tajawal', sans-serif;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

#navbar-search-mobile::placeholder {
  color: #c8b49c;
}

@media (min-width: 769px) {
  .mobile-search-dropdown {
    display: none !important;
  }
}
  .mobile-search-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 20, 15, 0.96);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  z-index: 99999;
  display: none;
  flex-direction: column;
  padding: 20px 16px;
}

.mobile-search-panel.active {
  display: flex;
}

/* الهيدر */
.mobile-search-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* input */
#navbar-search-mobile {
  flex: 1;
  padding: 12px 16px;
  border-radius: 20px;
  border: 1px solid rgba(240, 229, 216, 0.25);
  background: rgba(255,255,255,0.06);
  color: #f0e5d8;
  outline: none;
  font-family: 'Tajawal', sans-serif;
}

/* زر الإغلاق */
.close-search {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

/* نتائج البحث */
.mobile-results {
  margin-top: 15px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  border-radius: 12px;
}
</style>
`;
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("navbar-container");
  if (container) {
    container.innerHTML = navbarCode;
  }

  const savedLang = localStorage.getItem("lang");
  const mobileLangText = document.getElementById("mobile-lang-text");

  if (savedLang === "en") {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");

    setTimeout(() => {
      const btn = document.querySelector(".lang-toggle-btn");
      if (btn) btn.textContent = "AR";
      if (mobileLangText) mobileLangText.textContent = "AR";

      const inputDesktop = document.getElementById("navbar-search");
      const inputMobile = document.getElementById("navbar-search-mobile");

      if (inputDesktop) inputDesktop.placeholder = "Search...";
      if (inputMobile) inputMobile.placeholder = "Search...";
    }, 50);
  } else {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");

    setTimeout(() => {
      const btn = document.querySelector(".lang-toggle-btn");
      if (btn) btn.textContent = "EN";
      if (mobileLangText) mobileLangText.textContent = "EN";
    }, 50);
  }

  setupNavbarSearch("navbar-search", "search-results");
  setupNavbarSearch("navbar-search-mobile", "search-results-mobile");
});
function toggleLanguage() {
  const htmlTag = document.documentElement;
  const btn = document.querySelector(".lang-toggle-btn");
  const mobileLangText = document.getElementById("mobile-lang-text");
  const inputDesktop = document.getElementById("navbar-search");
  const inputMobile = document.getElementById("navbar-search-mobile");

  if (htmlTag.getAttribute("lang") === "ar") {
    htmlTag.setAttribute("lang", "en");
    htmlTag.setAttribute("dir", "ltr");

    if (btn) btn.textContent = "AR";
    if (mobileLangText) mobileLangText.textContent = "AR";

    if (inputDesktop) inputDesktop.placeholder = "Search...";
    if (inputMobile) inputMobile.placeholder = "Search...";

    localStorage.setItem("lang", "en");
  } else {
    htmlTag.setAttribute("lang", "ar");
    htmlTag.setAttribute("dir", "rtl");

    if (btn) btn.textContent = "EN";
    if (mobileLangText) mobileLangText.textContent = "EN";

    if (inputDesktop) inputDesktop.placeholder = "ابحث...";
    if (inputMobile) inputMobile.placeholder = "ابحث...";

    localStorage.setItem("lang", "ar");
  }
}
function toggleMobileSearch() {
  const box = document.getElementById("mobile-search-box");
  const input = document.getElementById("navbar-search-mobile");

  if (!box) return;

  box.classList.toggle("active");

  if (box.classList.contains("active") && input) {
    setTimeout(() => input.focus(), 100);
  }
}


function handleWildlifeClick() {
  if (typeof openOverlay === "function") {
    openOverlay();
  } else {
    window.location.href = "index.html";
  }
}

function setupNavbarSearch(inputId, resultsId) {
  const input = document.getElementById(inputId);
  const resultsBox = document.getElementById(resultsId);
  if (!input || !resultsBox) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    const currentLang = document.documentElement.getAttribute("lang") || "ar";

    if (!query) {
      resultsBox.style.display = "none";
      resultsBox.innerHTML = "";
      return;
    }

    const results = searchItems.filter(item =>
      item.ar.toLowerCase().includes(query) ||
      item.en.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      resultsBox.innerHTML = `
        <div class="search-result-item">
          ${currentLang === "ar" ? "لا توجد نتائج" : "No results found"}
        </div>
      `;
      resultsBox.style.display = "block";
      return;
    }

    resultsBox.innerHTML = results.map(item => `
      <div class="search-result-item" data-url="${item.url}" data-external="${item.external ? "true" : "false"}">
        ${currentLang === "ar" ? item.ar : item.en}
        <small>
          ${currentLang === "ar" ? item.typeAr : item.typeEn} — ${currentLang === "ar" ? item.en : item.ar}
        </small>
      </div>
    `).join("");

    resultsBox.style.display = "block";

    resultsBox.querySelectorAll(".search-result-item[data-url]").forEach(result => {
      result.addEventListener("click", () => {
        const url = result.getAttribute("data-url");
        const external = result.getAttribute("data-external") === "true";

        if (external) {
          window.open(url, "_blank");
        } else {
          window.location.href = url;
        }
      });
    });
  });

  input.addEventListener("keydown", (e) => {
    const firstResult = resultsBox.querySelector(".search-result-item[data-url]");
    if (e.key === "Enter" && firstResult) {
      firstResult.click();
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box-wrapper")) {
      resultsBox.style.display = "none";
    }

    const mobileBox = document.getElementById("mobile-search-box");
    const searchBtn = e.target.closest('button[aria-label="Open search"]');

    if (
      mobileBox &&
      !mobileBox.contains(e.target) &&
      !searchBtn
    ) {
      mobileBox.classList.remove("active");
    }
  });
}