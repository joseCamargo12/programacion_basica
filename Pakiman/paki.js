var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pocacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

 var coleccion = [];
 coleccion.push(new Pakiman("cauchin", 100, 30));
 coleccion.push(new Pakiman("pocacho",80, 50));
 coleccion.push(new Pakiman("tocinauro", 120, 40));

 for(var pakin of coleccion)
 {
   pakin.mostrar();
 }
