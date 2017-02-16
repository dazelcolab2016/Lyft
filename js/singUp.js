function init()
{
    var seleccion = document.getElementById("flag-selected");
    var codigoPais = document.getElementById("codigo");
    
    var mostrarCod =document.getElementById("mostrar");
    
    var miRuta = localStorage.getItem("imgRuta");
    var miCodigo = localStorage.getItem("imgCodigo");
  
    
    seleccion.src=miRuta;
    mostrarCod.value=miCodigo;
   
    mostrarCod.focus();
    
    
}