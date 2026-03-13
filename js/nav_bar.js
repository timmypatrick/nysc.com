document.addEventListener("DOMContentLoaded", function () {
  fetch("/nav_bar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    });
});
