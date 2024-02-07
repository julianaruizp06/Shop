import { Component } from "react";
import Producto from "./Producto"

const styles = {
  productos: {
    fontSize:"10px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyContent: "space-around",
    gap: "50px",
    margin: "auto", // Centrar horizontalmente
    alignItems: "center", // Centrar verticalmente
    alignContent:"center",
    maxWidth: "1200px", // Opcional: establece un ancho máximo para el contenedor
  },
 
};

class Productos extends Component{
  render(){
    const { productos, agregarCarro} = this.props
    return (



      <div style={styles.productos}>
        {productos.map(producto =>
          <Producto
          agregarCarro={agregarCarro}
          key={producto.name}
          producto={producto}
          />)}
      </div>
    

    )
  }
}
export default Productos