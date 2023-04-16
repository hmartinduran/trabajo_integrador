// Obtener el modal y el botón para abrirlo
var modal = document.getElementById("modal");
var abrirModal = document.getElementById("abrir-modal");

// Obtener el botón para cerrar el modal
var cerrarModal = document.getElementsByClassName("cerrar-modal")[0];

// Abrir el modal al hacer clic en el botón
abrirModal.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal al hacer clic en el botón de cerrar
cerrarModal.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Enviar el formulario al hacer clic en el botón de enviar
document.getElementById("boton_enviar").onclick = function(event) {
  event.preventDefault(); // prevenir el comportamiento por defecto del botón de enviar
  
  
  
  // cerrar el modal al enviar el formulario
  modal.style.display = "none";
}

//Generar PDF con boton de enviar datos de contacto
document.getElementById("boton_enviar").addEventListener ("click", function()
{
    var doc=new jsPDF();
    let nombre=document.getElementById('campo_nombre').value;
    doc.text(10,20,"Nombre y Apellido: " + nombre);

    let email=document.getElementById('campo_email').value;
    doc.text(10,30,"Email: " + email);

    let edad=document.getElementById('campo_edad').value;
    doc.text(10,40,"Edad: " + edad);

    let motivo=document.getElementById('campo_motivo').value;
    doc.text(10,50,"Motivo del contacto: " + motivo);

    let mensaje=document.getElementById('campo_mensaje').value;
    doc.text(10,60,"Mensaje: " + mensaje);

    //doc.addPage();
   // doc.text(20,20,'Contacto');
    doc.save('Datos_Contacto.pdf');
});