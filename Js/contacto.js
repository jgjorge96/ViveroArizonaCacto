//Contacto whatsapp
function consultwhatsapp() {
    
    var name = document.getElementById("Nombre").value;
    var mail = document.getElementById("Correo").value;
    var comment = document.getElementById("Mensaje").value;
  
    var url = "https://wa.me/+522713168219?text=" 
    + "Hola! Quiero realizar una consulta" + "%0a"
    + "%0a" + "Nombre: " + name + "%0a"
    + "Email: " + mail  + "%0a"
    + "%0a" + comment; 
  
    window.open(url, '_blank').focus();
  }