import { Component } from "react";
import Button from "../components/Button"

const styles = {
  producto: {
    border: "solid 1px #FFFFF0",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyCcontent: "center",
    width: "50%",
    heigth: "30%",
    padding: "10px 15px", 
    borderRadius: "5px",
    background:"#fff"
    
  },
  img: {
    width: "100%"
  }

}

class Producto extends Component {
  render() {
    const { producto, agregarCarro } = this.props
    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>${producto.price}</p>
        <Button 
        onClick={() => agregarCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    )
  }
}
export default Producto