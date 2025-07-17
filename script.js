
document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  const estado = JSON.parse(localStorage.getItem("malla_estado") || "{}");

  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    const prer = ramo.dataset.prerreq;
    if (!prer || prer.split(',').every(p => estado[p])) {
      ramo.classList.add("active");
    }

    if (estado[id]) {
      ramo.classList.add("completed");
    }

    ramo.addEventListener("click", () => {
      if (!ramo.classList.contains("active")) return;
      ramo.classList.toggle("completed");
      estado[id] = ramo.classList.contains("completed");
      localStorage.setItem("malla_estado", JSON.stringify(estado));
      location.reload();
    });
  });
});
