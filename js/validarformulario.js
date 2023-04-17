$(document).ready(function() {
    $('#formulario').validate({
    rules: {
    nombre: {
    required: true,
    minlength: 3
        },
    email: {
    required: true,
    email: true
        },
    edad: {
    required: true,
    number: true,
    min: 18
        },
        motivo: {
          required: true
        },
        mensaje: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        nombre: {
          required: 'Por favor, ingrese su nombre y apellido',
          minlength: 'El nombre y apellido debe contener al menos 3 caracteres'
        },
        email: {
          required: 'Por favor, ingrese su dirección de correo electrónico',
          email: 'Por favor, ingrese una dirección de correo electrónico válida'
        },
        edad: {
          required: 'Por favor, ingrese su edad',
          number: 'Por favor, ingrese un número válido para la edad',
          min: 'Debe ser mayor de 18 años'
        },
        motivo: {
          required: 'Por favor, seleccione una opción'
        },
        mensaje: {
          required: 'Por favor, ingrese un mensaje',
          minlength: 'El mensaje debe contener al menos 10 caracteres'
        }
      },
      errorElement: 'span',
      errorPlacement: function(error, element) {
        error.addClass('invalid-feedback');
        element.closest('.grupo').append(error);
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
    });
  });
  $('#boton_enviar').click(function() {
    if ($('#formulario').valid()) {
      // Código para enviar el formulario
    }
  });
  