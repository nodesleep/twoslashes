function toggleNav() {
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (btn) {
    btn.addEventListener("click", () => {
      if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
      } else {
        nav.classList.add("hidden");
      }
    });
  } else {
    if (!btn) console.log("Hamburger button not found");
  }
}

document.addEventListener("astro:page-load", () => {
  toggleNav();
});
