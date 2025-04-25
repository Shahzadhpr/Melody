
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const showMoreBtn = document.querySelector('.show-more');
const hiddenCards = document.querySelectorAll('.hidden');

// Mobile menu management
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Check dark mode status in `localStorage`
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    updateThemeIcon(true);
} else {
    document.documentElement.classList.remove('dark');
    updateThemeIcon(false);
}

// Toggle dark mode and save in `localStorage`
themeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon(isDarkMode);
});

// Change dark mode icon
function updateThemeIcon(isDark) {
    if (isDark) {
        themeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" 
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        `;
    } else {
        themeIcon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" 
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        `;
    }
}

// Change product card caption
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".wrapper-box").forEach((box) => {
      const caption = box.querySelector(".caption");
      const dots = box.querySelector(".dots");
  
      const fullText = caption.getAttribute("data-full");
      const shortText = fullText.substring(0, 59);
  
      let isExpanded = false;
  
      dots.addEventListener("click", function () {
        isExpanded = !isExpanded;
        caption.innerHTML = isExpanded
          ? fullText + ' <span class="dots text-blue-500 cursor-pointer">...</span>'
          : shortText + ' <span class="dots text-blue-500 cursor-pointer">...</span>';
  
        box.querySelector(".dots").addEventListener("click", arguments.callee);
      });
    });
  });
  
// Get the "Show More" button
showMoreBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.classList.toggle('hidden'));
    if (hiddenCards[0].classList.contains('hidden')) {
        showMoreBtn.textContent = "مشاهده بیشتر";
    } else {
        showMoreBtn.textContent = "مشاهده کمتر";
    }
});

