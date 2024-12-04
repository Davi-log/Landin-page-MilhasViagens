const menuBtn = document.querySelector('#btn-mobile');
const navLinks = document.querySelector('#nav-links');
const menuIcon = menuBtn.querySelector('i');
 
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("ativo");

    const isOpen = navLinks.classList.contains("ativo");
    menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("ativo");

    menuIcon.setAttribute("class", "ri-menu-line");
})