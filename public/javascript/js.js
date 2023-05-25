window.addEventListener("load", function () {
  const clipboard = new Clipboard(".btn");

  function alerta() {
    alert(
      "Se copió con exito el numero de orden, no olvide pegarlo antes del titulo de su tarjeta en trello"
    );
  }

  let formu = document.querySelector("form.formu");

  formu.addEventListener("submit", function (e) {
    e.preventDefault();

    let campo = document.querySelector("#num");

    if (campo.value <= 0) {
      alert("Ingrese un número válido");
    }else{
      formu.submit()
    }
  });
});
