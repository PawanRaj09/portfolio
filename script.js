const menuIcon = document.querySelector(".bx-menu");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
});



// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll("nav a").forEach(anchor => {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop - 50, // Header height adjust करने के लिए
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const numButterflies = 10; 
    const body = document.body;

    let butterflyContainer = document.createElement("div");
    butterflyContainer.classList.add("butterfly-container");
    body.appendChild(butterflyContainer);

    for (let i = 0; i < numButterflies; i++) {
        let butterfly = document.createElement("div");
        butterfly.classList.add("butterfly");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        butterfly.style.left = `${x}px`;
        butterfly.style.top = `${y}px`;

        butterflyContainer.appendChild(butterfly);
    }
});
