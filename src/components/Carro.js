import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetalleCarro from "./DetalleCarro";

const styles = {
    carro: {
        fontWeight:"700",
        backgroundColor: "#F8C471",
        border: "none",
        borderRadius: "15px",
        padding: "15px",
        cursor: "pointer"
    },
    bubble: {
        position:"relative",
        top:"20px",
        right:"-12px"
    }
}
class Carro extends Component {
    render() {
        const {carro, esCarroVisible, mostrarCarro}= this.props
        console.log(esCarroVisible, mostrarCarro)
        const cantidad= carro.reduce((acc,el) => acc + el.cantidad, 0)
        return(
           
            <div>     
                 <span style={styles.bubble}>
                    {cantidad !== 0
                    ? 
                    <BubbleAlert value={cantidad} />
                    :null}
                </span>         
                <button onClick={mostrarCarro} style={styles.carro}>
                    CARRO
                </button>
                {esCarroVisible ? <DetalleCarro carro={carro} /> : null}
               
            </div>
        )


    }
}
export default Carro