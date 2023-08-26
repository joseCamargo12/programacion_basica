var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d")
var lineas = 30;
var l = 0;
var yi, xf;
var yf, xi;
var colorcito = "yellow"

for (var l = 0; l < lineas; l++)

{
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarlinea(colorcito, 0, yi, xf, 300);
  dibujarlinea(colorcito, 300, yi, xf, 0);
  dibujarlinea(colorcito, yi, 300, 300, 300-xf);
  dibujarlinea(colorcito, xi, 300, 300, xf);
  console.log("linea " + l);
}


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
