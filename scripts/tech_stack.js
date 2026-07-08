document.querySelectorAll(".tech-tab").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tech-tab")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tech-panel")
      .forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  }),
);
