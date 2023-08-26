var teclas = {
  UP: 38,
  DOWN: 40, // valores predeterminados
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown", dibujarTelcado); //escuchador de eventos
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d"); //tipo de dibujo
var x = 100;
var y = 100;

dibujarlinea("red", 159, 159, 148, 148, papel);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTelcado(evento)
{
 var colorcito = "red";
 var movimiento = 5;
 switch(evento.keyCode)
 {
   case teclas.UP:
    dibujarlinea(colorcito, x, y, x, y -movimiento, papel);
    y = y - movimiento;
   break;
   case teclas.DOWN:
     dibujarlinea(colorcito, x, y, x, y +movimiento, papel);
     y = y + movimiento;
   break;
   case teclas.LEFT:
    dibujarlinea(colorcito, x, y, x -movimiento, y, papel);
    x = x - movimiento;
   break;
   case teclas.RIGHT:
    dibujarlinea(colorcito, x, y, x +movimiento, y, papel);
    x = x + movimiento;
   break
 }
}
