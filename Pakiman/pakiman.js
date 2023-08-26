class Pakiman //se usa para definir clases
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n; //se refuera a las variables dentro de la clase
    this.vida = v;
    this.ataque = a;
    this.tipo = "tierra";

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen); //sirve para insertar imagenes
    document.write("<br /><strong>" + this.nombre + "</strong><br />");
    document.write("Vida: " + this.vida + "<br />");
    document.write("Ataque: " + this.ataque + "<hr />");
  }
}
