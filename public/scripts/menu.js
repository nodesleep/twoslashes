function toggleNav() {
  const btn = document.getElementById("hamburger");
  if (btn) {
    btn.addEventListener("click", () => {
      const nav = document.getElementById("nav");
      if (nav) {
        nav.classList.toggle("hidden");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", toggleNav);
document.addEventListener("astro:page-load", toggleNav);
