import { Component } from "react";

const styles={
    logo:{
        fontWeight:"700",
        fontSize:"30px",
        display:"flex",        
        alignItems:"center",
        heigth:"100px",      
        boxShadow:"0 2px 3px rgb(0,0,0,0.1)",
        padding:"5px",
        border:"solid 1px #F8C471"
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={styles.logo}>
             Shop
            </div>
        )
    }    
}
 export default Logo