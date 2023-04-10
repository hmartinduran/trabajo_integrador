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

    let mensaje=document.getElementById('campo_mensaje').value;
    doc.text(10,50,"Mensaje: " + mensaje);

    //doc.addPage();
   // doc.text(20,20,'Contacto');
    doc.save('Datos_Contacto.pdf');
});
