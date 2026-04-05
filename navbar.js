// كود الـ HTML الخاص بالنافبار مع إضافة الشفافية والزجاج المطفى (Glassmorphism)
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
            <span class="lang-ar">كتب</span>
            <span class="lang-en">Books</span>
        </a>
        <a href="safety.html">
            <span class="lang-ar">الأمن والسلامة</span>
            <span class="lang-en">Safety</span>
        </a>
        <a href="https://barrari-abudhabi.vercel.app/shop" target="_blank">
            <span class="lang-ar">المتجر</span>
            <span class="lang-en">Store</span>
        </a>
        <button class="lang-toggle-btn" onclick="toggleLanguage()">EN</button>
    </div>
</nav>
`;

// عندما تحمل الصفحة، قم بطباعة النافبار داخل المربع المخصص له
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("navbar-container");
    if (container) {
        container.innerHTML = navbarCode;
    }

    // تفعيل اللغة المحفوظة تلقائياً
    const savedLang = localStorage.getItem('lang');
    if(savedLang === 'en') {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        // ننتظر قليلاً حتى يتم رسم الزر ثم نغير نصه
        setTimeout(() => {
            const btn = document.querySelector('.lang-toggle-btn');
            if(btn) btn.textContent = 'AR';
        }, 50);
    }
});

// دالة تغيير اللغة وحفظها
function toggleLanguage() {
    const htmlTag = document.documentElement; 
    const btn = document.querySelector('.lang-toggle-btn');
    if (htmlTag.getAttribute('lang') === 'ar') {
        htmlTag.setAttribute('lang', 'en'); 
        htmlTag.setAttribute('dir', 'ltr'); 
        if(btn) btn.textContent = 'AR';
        localStorage.setItem('lang', 'en');
    } else {
        htmlTag.setAttribute('lang', 'ar'); 
        htmlTag.setAttribute('dir', 'rtl'); 
        if(btn) btn.textContent = 'EN';
        localStorage.setItem('lang', 'ar');
    }
}

// دالة ذكية للزر: إذا كنت في الرئيسية يفتح القائمة الفاخرة، وإذا كنت في صفحة الحيوانات يرجعك للرئيسية ويفتحها
function handleWildlifeClick() {
    if (typeof openOverlay === 'function') {
        openOverlay();
    } else {
        window.location.href = 'index.html';
    }
}