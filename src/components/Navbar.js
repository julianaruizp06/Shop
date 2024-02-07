
import { Component } from "react";
import Logo from "./Logo";
import Carro from "./Carro"
const styles={
    navbar:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        height:"auto",
        justifyContent:"space-between",
        position:"relative",
        padding:"2px 2px",
        boxShadow:"0 2px 3px rgb(0,0,0,0.1)",
        background:"#000"
    }
}

class Navbar extends Component{
    render(){
        const { carro , esCarroVisible, mostrarCarro}=this.props
        return(
    <nav style={styles.navbar}>
        <Logo />
        <Carro
         carro = {carro}
         esCarroVisible ={esCarroVisible}
         mostrarCarro ={mostrarCarro} />
    </nav>

        )
    }
}
export default Navbar