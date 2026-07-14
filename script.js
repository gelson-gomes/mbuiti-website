const modal = document.getElementById("modal");
const btn = document.getElementById("btnMatricula");
const fechar = document.querySelector(".fechar");
const formulario = document.getElementById("formulario");

btn.onclick = function () {
    modal.style.display = "block";
}

fechar.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Matrícula enviada com sucesso!");

    formulario.reset();

    modal.style.display = "none";
});