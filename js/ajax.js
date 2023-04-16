// Seleccionamos el formulario y el botón de envío
const formulario = document.querySelector('#formulario');
const botonEnviar = formulario.querySelector('button[type="submit"]');

// Función que se ejecuta cuando se envía el formulario
const enviarFormulario = (event) => {
  // Evita que se recargue la página al enviar el formulario
  event.preventDefault();

  // Crea un objeto FormData con los datos del formulario
  const formData = new FormData(formulario);

  // Envia los datos a través de una petición POST usando Ajax
  const request = new XMLHttpRequest();
  request.open('POST', 'url-del-servidor');
  request.send(formData);

  // Función que se ejecuta cuando se recibe la respuesta del servidor
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      // petición fue exitosa
      if (request.status === 200) {
        console.log(request.responseText);
      } else {
        console.error('Error al enviar el formulario');
      }
    }
  }
}

// Función enviarFormulario al botón 
botonEnviar.addEventListener('click', enviarFormulario);
