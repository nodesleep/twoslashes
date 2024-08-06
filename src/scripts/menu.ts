// @ts-nocheck
const btn = document.getElementById("hamburger");
if (btn) {
  document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("hidden");
  });
}
