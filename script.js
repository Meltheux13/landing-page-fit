var seta2 = document.getElementById("seta2")
var Bruno = document.getElementById("Bruno")
var Felipe = document.getElementById("Felipe")
var Gustavo = document.getElementById("Gustavo")
var Victor = document.getElementById("Victor")
var Lucas = document.getElementById("Lucas")
var seta1 = document.getElementById("seta1")

function RolarDireita() {
    Bruno.style.display = "none"
    Victor.style.display = "flex"
    seta2.style.display = "none"
    seta1.style.display = "flex"
}

function RolarEsquerda() {
    Bruno.style.display = "flex"
    Victor.style.display = "none"
    seta2.style.display = "flex"
    seta1.style.display = "none"
}
