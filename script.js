// Add a simple hover click animation
const services = document.querySelectorAll(".service-row");

services.forEach(service => {
  service.addEventListener("click", () => {
    service.classList.add("clicked");
    setTimeout(() => service.classList.remove("clicked"), 400);
  });
});
