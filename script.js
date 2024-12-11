const toggler = document.querySelector('.navbar-toggler');
const closeIcon = document.querySelector('.bi-x');
const hamburgerIcon = document.querySelector('.bi-list');

toggler.addEventListener('click', () => {
    closeIcon.style.display = closeIcon.style.display === "none" ? "block" : "none";
    hamburgerIcon.style.display = hamburgerIcon.style.display === "none" ? "block" : "none";

    // Toggle the active class for background color
    toggler.classList.toggle('active');
});


const hamburger = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll'); // Görgetés letiltása

    // Eltávolítjuk az aktív osztályt a menü megnyitásakor
    if (navMenu.classList.contains('show')) {
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active'); // Eltávolítjuk az aktív osztályt
        });
    }
});
