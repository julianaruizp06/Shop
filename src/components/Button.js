import { Component } from "react";

const styles = {
    button: {
        borderRadius:"5px",
        border:"none",
        display: "flex",
        justifyContent: "center",
        padding:"15px 20px",
        cursor:"pointer",
        backgroundColor:"#F8C471",
        fontSize:"12px",

    }
}
class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button