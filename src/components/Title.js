import { Component } from "react";
const styles = {
    title: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: "10px 10px 30px 10px"
    }
}
class Title extends Component {
    render() {
        return (
            <h1 style={styles.title}>Tienda</h1>
        )
    }
}
export default Title