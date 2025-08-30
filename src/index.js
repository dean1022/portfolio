function updateNav() {
  const nav = document.getElementById("navbarNav");

  if (window.matchMedia("(min-width: 577px)").matches) {
    // remove classes when bigger than 576px
    nav.classList.remove("collapse", "navbar-collapse");
  } else {
    // add them back for small screens if needed
    if (!nav.classList.contains("collapse")) {
      nav.classList.add("collapse", "navbar-collapse");
    }
  }
}

// run on load
document.addEventListener("DOMContentLoaded", updateNav);
// run on resize
window.addEventListener("resize", updateNav);
