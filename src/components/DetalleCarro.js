import { Component } from "react";

const styles = {
    detCarro: {
        display: "flex",
        flexDirection: "column",
        justifyCcontent: "center",
        width: "300px",
        marginTop: 30,
        backgroundColor: "white",
        position: "absolute",
        boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
        borderRadius: "5px",
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0

    },
    producto: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alingItems: "center",
        padding: "25px 20px",
        borderBottom: "solid 1px #aaa"

    },
    total:{
        display: "flex",
        justifyContent:"flex-end",
        alingItems: "center",
        padding: "2px 20px",

    }
}
class DetalleCarro extends Component {
    render() {
        const { carro } = this.props
        const totalPrecio = carro.reduce((total, x) => total + x.price * (x.cantidad), 0);
        
        return (
            <div style={styles.detCarro}>
                <ul style={styles.ul}>
                    {carro.map(x =>
                        <li style={styles.producto} key={x.name}>
                            <img alt={x.name} src={x.img} width="35px" height="32px" />
                            {x.name}
                            <span>{x.cantidad}</span>
                            <span>${x.price}</span>
                        </li>)}                     
                </ul>

      
                <div style={styles.total}>
                    
                    <p>Total: ${totalPrecio}</p>
                </div>
                
            </div>
        )
    }
}
export default DetalleCarro