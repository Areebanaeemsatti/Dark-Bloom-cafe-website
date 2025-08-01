// Simple filter for menu buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".call-to-actions button");
  const items = document.querySelectorAll("#menu-items .card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");
      items.forEach((card) => {
        if (filter === "all" || card.dataset.type === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
      // Highlight active
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
