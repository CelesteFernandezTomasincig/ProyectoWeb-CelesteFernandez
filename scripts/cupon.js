let btnSuccess = document.getElementById("cupon");
btnSuccess.addEventListener("click", () => {
	Swal.fire({
        title: 'El codigo del descuento es: celesByCoder. Solo valido en tiendas físicas',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
	});