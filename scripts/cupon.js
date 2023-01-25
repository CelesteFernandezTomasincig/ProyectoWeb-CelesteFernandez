let btnSuccess = document.getElementById("cupon");
btnSuccess.addEventListener("click", () => {
	Swal.fire({
        title: 'El codigo del descuento es: celesByCoder. Solo valido en tiendas físicas',
        width: 600,
        padding: '3em',
        color: '#716add',
      })
	});