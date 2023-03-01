const botonesCompra = document.querySelectorAll('.boton-compra');

// Agregar un EventListener a cada botón
botonesCompra.forEach((botonCompra) => {
  botonCompra.addEventListener('click', () => {
    // Cambiar el texto del botón a "Agregado al carrito"
    botonCompra.textContent = 'Agregado al carrito';
    // Cambiar la clase del botón para cambiar su estilo
    botonCompra.classList.add('agregado');

    // Resaltar la tarjeta seleccionada
    const tarjeta = botonCompra.closest('.tarjeta');
    tarjeta.classList.add('resaltado');
  });
});