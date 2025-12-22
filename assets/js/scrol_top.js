const scrollNav = document.querySelector('.scroll-nav');

scrollNav.addEventListener('wheel', (e) => {
    e.preventDefault(); // جلوگیری از اسکرول عمودی
    scrollNav.scrollLeft += e.deltaY; // تبدیل حرکت موس به اسکرول افقی
});
