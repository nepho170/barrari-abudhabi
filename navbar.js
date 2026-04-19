const searchItems = [
    // الأقسام
    {
        ar: "الرئيسية",
        en: "Home",
        url: "index.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "الحياة البرية",
        en: "Wildlife",
        url: "index.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "الحيوانات",
        en: "Animals",
        url: "animals.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "النباتات",
        en: "Plants",
        url: "plants.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "العادات",
        en: "Traditions",
        url: "traditions.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "المكتبة",
        en: "Library",
        url: "books.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "الأمن والسلامة",
        en: "Safety",
        url: "safety.html",
        typeAr: "قسم",
        typeEn: "Section"
    },
    {
        ar: "المتجر",
        en: "Store",
        url: "https://barrari-abudhabi.vercel.app/shop",
        external: true,
        typeAr: "قسم",
        typeEn: "Section"
    },

    // الحيوانات
    {
        ar: "المها العربي",
        en: "Arabian Oryx",
        url: "pdfs/Arabian-Oryx.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },
    {
        ar: "الفلامنقو",
        en: "Flamingo",
        url: "pdfs/Flamingo.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },
    {
        ar: "الفهد الصياد",
        en: "Cheetah",
        url: "pdfs/Cheetah.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },
    {
        ar: "السحلية شوكية الذيل",
        en: "Spiny-tailed Lizard",
        url: "pdfs/Spiny-tailed Lizard.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },
    {
        ar: "الثعلب الرملي",
        en: "Sand Fox",
        url: "pdfs/Sand-Fox.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },
    {
        ar: "الأرنب البري العربي",
        en: "Arabian Hare",
        url: "pdfs/Arabian-Hare.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },
    {
        ar: "غزال الجبل",
        en: "Mountain Gazelle",
        url: "pdfs/Mountain-Gazelle.pdf",
        typeAr: "حيوان",
        typeEn: "Animal"
    },

    // النباتات
    {
        ar: "القرم",
        en: "Mangrove",
        url: "pdfs/Mangrove.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "الغاف",
        en: "Ghaf",
        url: "pdfs/Ghaf-Tree.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "الهندباء",
        en: "Wild Chicory",
        url: "pdfs/Wild-Chicory.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "النخيل",
        en: "Palm Tree",
        url: "pdfs/Palm-Tree.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "الأراك",
        en: "Arak Tree",
        url: "pdfs/Arak-Tree.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "السدر",
        en: "Sidr Tree",
        url: "pdfs/Sidr-Tree.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "السمر",
        en: "Samar Tree",
        url: "pdfs/Samar-Tree.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },
    {
        ar: "الغضا",
        en: "Ghada Tree",
        url: "pdfs/Ghada-Tree.pdf",
        typeAr: "نبات",
        typeEn: "Plant"
    },

    // الكتب
    {
        ar: "الأطلس البيئي لإمارة أبوظبي",
        en: "Environmental Atlas of Abu Dhabi Emirate",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "أبوظبي: الطبيعة المحمية",
        en: "Abu Dhabi: Nature Preserved",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "على خطى زايد",
        en: "Years of Preserving",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "التاريخ الطبيعي للإمارات",
        en: "A Natural History of the Emirates",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "دليل الأزهار البرية في الإمارات",
        en: "The Comprehensive Guide to the Wild Flowers of the United Arab Emirates",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "بيئة أبوظبي الصحراوية",
        en: "Desert Ecology of Abu Dhabi: A Review and Recent Studies",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "جولات طبيعية في الحياة البرية بالإمارات",
        en: "Nature Walks: Wildlife Encounters in the UAE",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },
    {
        ar: "النباتات البرية المزهرة في دولة الإمارات العربية المتحدة",
        en: "Wild Flowering Plants in the United Arab Emirates",
        url: "books.html",
        typeAr: "كتاب",
        typeEn: "Book"
    },

    // العادات والتقاليد
    {
        ar: "الغوص على اللؤلؤ",
        en: "Pearl Diving",
        url: "traditions.html",
        typeAr: "عادة",
        typeEn: "Tradition"
    },
    {
        ar: "صناعة سعف النخيل",
        en: "Palm Frond Weaving",
        url: "traditions.html",
        typeAr: "عادة",
        typeEn: "Tradition"
    },
    {
        ar: "رقصة اليولة",
        en: "Al Yola Dance",
        url: "traditions.html",
        typeAr: "عادة",
        typeEn: "Tradition"
    },
    {
        ar: "القهوة العربية",
        en: "Arabic Coffee",
        url: "traditions.html",
        typeAr: "عادة",
        typeEn: "Tradition"
    }
];

// كود الـ HTML الخاص بالنافبار مع البحث
const navbarCode = `
<nav style="background-color: rgba(44, 30, 22, 0.6); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px);">
    <div class="nav-left">
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

        <div class="search-box-wrapper">
            <input type="text" id="navbar-search" placeholder="ابحث..." autocomplete="off">
            <div id="search-results" class="search-results"></div>
        </div>

        <button class="lang-toggle-btn" onclick="toggleLanguage()">EN</button>
    </div>
</nav>

<style>
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

    @media (max-width: 768px) {
        .search-box-wrapper {
            width: 100%;
            min-width: 100%;
        }

        #navbar-search {
            width: 100%;
        }

        .search-results {
            width: 100%;
        }
    }
</style>
`;

// عندما تحمل الصفحة، قم بطباعة النافبار داخل المربع المخصص له
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("navbar-container");
    if (container) {
        container.innerHTML = navbarCode;
    }

    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');

        setTimeout(() => {
            const btn = document.querySelector('.lang-toggle-btn');
            if (btn) btn.textContent = 'AR';

            const input = document.getElementById('navbar-search');
            if (input) input.placeholder = 'Search...';
        }, 50);
    }

    setupNavbarSearch();
});

// دالة تغيير اللغة وحفظها
function toggleLanguage() {
    const htmlTag = document.documentElement;
    const btn = document.querySelector('.lang-toggle-btn');
    const input = document.getElementById('navbar-search');

    if (htmlTag.getAttribute('lang') === 'ar') {
        htmlTag.setAttribute('lang', 'en');
        htmlTag.setAttribute('dir', 'ltr');
        if (btn) btn.textContent = 'AR';
        if (input) input.placeholder = 'Search...';
        localStorage.setItem('lang', 'en');
    } else {
        htmlTag.setAttribute('lang', 'ar');
        htmlTag.setAttribute('dir', 'rtl');
        if (btn) btn.textContent = 'EN';
        if (input) input.placeholder = 'ابحث...';
        localStorage.setItem('lang', 'ar');
    }
}

// دالة الحياة البرية
function handleWildlifeClick() {
    if (typeof openOverlay === 'function') {
        openOverlay();
    } else {
        window.location.href = 'index.html';
    }
}

// دالة البحث
function setupNavbarSearch() {
    const input = document.getElementById('navbar-search');
    const resultsBox = document.getElementById('search-results');

    if (!input || !resultsBox) return;

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        const currentLang = document.documentElement.getAttribute('lang') || 'ar';

        if (!query) {
            resultsBox.style.display = 'none';
            resultsBox.innerHTML = '';
            return;
        }

        const results = searchItems.filter(item =>
            item.ar.toLowerCase().includes(query) ||
            item.en.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            resultsBox.innerHTML = `
                <div class="search-result-item">
                    ${currentLang === 'ar' ? 'لا توجد نتائج' : 'No results found'}
                </div>
            `;
            resultsBox.style.display = 'block';
            return;
        }

      resultsBox.innerHTML = results.map(item => `
    <div class="search-result-item" data-url="${item.url}" data-external="${item.external ? 'true' : 'false'}">
        ${currentLang === 'ar' ? item.ar : item.en}
        <small>
            ${currentLang === 'ar' ? item.typeAr : item.typeEn}
            — 
            ${currentLang === 'ar' ? item.en : item.ar}
        </small>
    </div>
`).join('');

        resultsBox.style.display = 'block';

        document.querySelectorAll('.search-result-item[data-url]').forEach(result => {
            result.addEventListener('click', () => {
                const url = result.getAttribute('data-url');
                const external = result.getAttribute('data-external') === 'true';

                if (external) {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            });
        });
    });

    input.addEventListener('keydown', (e) => {
        const firstResult = resultsBox.querySelector('.search-result-item[data-url]');
        if (e.key === 'Enter' && firstResult) {
            firstResult.click();
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box-wrapper')) {
            resultsBox.style.display = 'none';
        }
    });
}