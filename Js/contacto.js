function contactMail() {
  var link = "mailto:viveroarizonacacto@gmail.com"
           + "?cc=viveroarizonacacto@gmail.com"
           + "&subject=" + encodeURIComponent("Consulta via web")
           + "&body=" + encodeURIComponent(document.getElementById('Mensaje').value)
           + "%0a" + "&body=" + encodeURIComponent(document.getElementById('Nombre').value)
  ;
  
  window.location.href = link;
}