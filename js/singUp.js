function init()
{
    var seleccion = document.getElementById("flag-selected");
    //var codigoPais = document.getElementById("codigo");
    
    var miRuta = localStorage.getItem("imgRuta");
    //var miCodigo = localStorage.getItem("imgCodigo");
    
    seleccion.src=miRuta;
    //codigoPais.textContent=miCodigo;
    
}