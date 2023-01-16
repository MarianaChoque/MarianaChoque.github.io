let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarDerecha,mostrarIzquierda");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

function boton() {
    alert("Tu mensaje se envió con éxito");
  }