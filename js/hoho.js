// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log("Halaman dimuat: JavaScript aktif.");

  // Contoh fitur tambahan: Highlight halaman aktif (opsional)
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.style.textDecoration = "underline";
    }
  });
});
