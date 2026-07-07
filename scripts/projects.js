document.querySelectorAll(".project-tab").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".project-tab")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".project-panel")
      .forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  }),
);
