import { Component } from "react";
const styles ={
    layout:{
      background:"#000",
        display:"flex",
        flexDirection: "column",
        alignItems:"center",        
        padding:"10px 10px 10px 10px",
        
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
                </div>                
            </div>
        )
    }

}

export default Layaout