// navLinkEls = document.querySelector('.linksContainer').querySelectorAll('a');
// console.log(navLinkEls);

// navLinkEls.forEach(element => {
//     element.addEventListener('click', () => {
//         navLinkEls.forEach(nav => nav.classList.remove('.active'))

//         this.classList.add('.active');
//     })
// });

const navLinkEls = document.querySelectorAll(".navLinks");

navLinkEls.forEach((navLinkEl) => {
  navLinkEl.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove(".active");
    navLinkEl.classList.add(".active");
  });
});
