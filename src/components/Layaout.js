import { Component } from "react";
const styles ={
    layout:{
        backgroundColor:"#FFFFF0",
        color:"#0A283E",
        display:"flex",
        flexDirection: "column",
        alignItems:"center",        
        padding:"10px 10px 10px 10px"
    },
    container:{
        width:"auto",
           }
}

class Layaout extends Component {
    render(){
        return (
            <div style={styles.layout}>{this.props.children}

                <div style={styles.container}>

                lala
                </div>

                
            </div>
        )
    }

}

export default Layaout