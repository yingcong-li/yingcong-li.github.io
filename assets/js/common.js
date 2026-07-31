document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.abstract").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".links").parentElement.querySelector(".abstract.hidden").classList.toggle("open");
    });
  });

  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.getElementById("navbarNav");

  if (toggler && navbar) {
    toggler.addEventListener("click", () => {
      const expanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", String(!expanded));
      toggler.classList.toggle("collapsed", expanded);
      navbar.classList.toggle("show", !expanded);
    });
  }
});
