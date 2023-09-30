var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.height === "auto") {
      panel.style.height = "0";
    } else {
      panel.style.height = "auto";
    }
  });
}
