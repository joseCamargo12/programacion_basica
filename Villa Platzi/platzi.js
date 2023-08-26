var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false
}
var vaca = {
  url: "vaca.png",
  cargoOk: false
}
var pollo = {
  url: "pollo.png",
  cargoOk: false
}
var cerdo = {
  url: "cerdo.png",
  cargoOk: false
};

var cantidad = aleatorio(0, 5);
var pcantidad = aleatorio(5, 10);
var marrano = aleatorio(1, 3);

fondo.Imagen = new Image();
fondo.Imagen.src = fondo.url;
fondo.Imagen.addEventListener("load", cargarFondo);

vaca.Imagen = new Image();
vaca.Imagen.src = vaca.url;
vaca.Imagen.addEventListener("load", cargarVacas);

pollo.Imagen = new Image();
pollo.Imagen.src = pollo.url;
pollo.Imagen.addEventListener("load", cargarPollo);

cerdo.Imagen = new Image();
cerdo.Imagen.src = cerdo.url;
cerdo.Imagen.addEventListener("load", cargarCerdo);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarPollo()
{
  pollo.cargaOk = true;
  dibujar();
}
function cargarCerdo()
{
  cerdo.cargaOk = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk)
 {
  papel.drawImage(fondo.Imagen, 0, 0)
 }
 if(cerdo.cargaOk)
{
  for(var c = 0; c < marrano; c++)
  {
    console.log(cantidad);
    var x = aleatorio(0, 7);
    var y = aleatorio(0, 7);
    var x = x * 60;
    var x = y * 60;
    papel.drawImage(cerdo.Imagen, x, y)
  }
}
 if(vaca.cargaOk)
 {
   console.log(cantidad);
   for (var v = 0; v < cantidad; v++)
   {
     var x = aleatorio(0, 7);
     var y = aleatorio(0, 7);
     var x = x * 60;
     var y = y * 60;
     papel.drawImage(vaca.Imagen, x, y)
   }
   if(pollo.cargaOk)
  {
    console.log(cantidad);
    for (var p = 0; p < pcantidad; p++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(pollo.Imagen, x, y)
    }
  }
 }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
