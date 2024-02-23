var typed = new Typed(".multiple", {
  strings: [
    " Conception UX | UI",
    " Développement logiciel",
    "Développement Web et applications mobiles",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".header-text,.sub-title", { origin: "top" });
ScrollReveal().reveal(".about-col-1", { origin: "left" });
ScrollReveal().reveal(".services-list, .work-list", { origin: "bottom" });

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function openTab(tabname) {
  for (let tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (let tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

function closeMenuOnClick() {
  // Sélectionnez tous les liens dans votre menu latéral
  var links = document.querySelectorAll("#sidemenu a");

  // Parcourez tous les liens pour ajouter un gestionnaire d'événements de clic
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      // Appel de la fonction closemenu pour fermer le menu latéral
      closemenu();
    });
  });
}

function closeMenuOnScroll() {
  window.addEventListener("scroll", function () {
    // Vérifie si la position verticale du défilement est supérieure à zéro
    if (window.scrollY > 0) {
      closemenu();
    }
  });
}

// Appel de la fonction closeMenuOnClick pour qu'elle soit exécutée au chargement de la page
window.onload = function () {
  closeMenuOnClick();
  closeMenuOnScroll();
};
