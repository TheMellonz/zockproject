document.addEventListener("DOMContentLoaded", function() {
    var usoBasico = document.getElementById("uso-basico-link");
    var usoBasicoLi = usoBasico.parentElement;
    usoBasico.addEventListener("click", function(e) {
        e.preventDefault();
        usoBasicoLi.classList.toggle("open");
    });
});