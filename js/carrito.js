document.addEventListener("DOMContentLoaded", () => {
    const botonescomprar = document.querySelectorAll(".btncomprar");
    const carrito = document.getElementById("carrito");
    const contador = document.getElementById("contador")

    let cantidad = 0;

    botonescomprar.forEach(boton => {
        boton.addEventListener("click",() => {
            cantidad++;
            contador.textContent = cantidad;

            carrito.classList.add("mostrar");

        });
    });
})