//Contacto whatsapp
function contactwhatsapp() {
    
    var name = document.getElementById("Name").value;
    var mail = document.getElementById("Email").value;
  
    var url = "https://wa.me/+541158120441?text=" 
    + "Hola! Quiero sumarme su boletin de noticias!" + "%0a"
    + "%0a" + "Nombre: " + name + "%0a"
    + "Email: " + mail;
    window.open(url, '_blank').focus();
  }