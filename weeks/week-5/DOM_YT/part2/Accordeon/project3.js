const accordion = document.getElementsByClassName("content-container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

/* bij klikken zou 1 stuk moeten opengaan maar ze openen alle drie, geen idee waarom */
