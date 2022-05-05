//Contacto whatsapp
// function contactwhatsapp() {
    
//     var name = document.getElementById("Name").value;
//     var mail = document.getElementById("Email").value;
  
//     var url = "https://wa.me/+541158120441?text=" 
//     + "Hola! Quiero sumarme su boletin de noticias!" + "%0a"
//     + "%0a" + "Nombre: " + name + "%0a"
//     + "Email: " + mail;
//     window.open(url, '_blank').focus();
//   }

function newsletter() {
  var link = "mailto:viveroarizonacacto@gmail.com"
           + "?cc=viveroarizonacacto@gmail.com"
           + "&subject=" + encodeURIComponent("Newsletter")
           + "&body=" + encodeURIComponent("Hola! Quiero sumarme a su boletin de noticias!")
           + "%0a" + "&body=" + encodeURIComponent(document.getElementById('Name').value)
  ;
  
  window.location.href = link;
}