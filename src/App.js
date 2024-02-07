import { Component } from "react";
import Productos from "./components/Productos";
import Layaout from "./components/Layaout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component{
  state = {
    productos: [
      {name:"Banana", price: 1600, img:"/productos/banana.png"},
      {name:"Papas", price: 1700, img:"/productos/potato.png"},
      {name:"Zanahoria", price: 1800, img:"/productos/carrot.png"},
      {name:"Pepino", price: 1900, img:"/productos/cucumber.png"},
     {name:"Cebolla", price: 1500, img:"/productos/onion.png"},
     {name:"Tomate", price: 1500, img:"/productos/tomato.png"},
    ],
  carro:[],
  esCarroVisible:false
}

agregarCarro = (producto) => {
const {carro} =this.state
if(carro.find(x => x.name === producto.name)){
  const newCarro = carro.map(x => x.name === producto.name
    ?({...x,
      cantidad: x.cantidad +1
    }): x)
    return  this.setState({carro:newCarro})
}
  return this.setState({
    carro: this.state.carro.concat({
    ...producto,
    cantidad:1,
  })
})

}

mostrarCarro = () =>{
  if(!this.state.carro.length){
    return
  }
this.setState({esCarroVisible: !this.state.esCarroVisible })

}
  render(){
    const {esCarroVisible} = this.state
    return(
    <div>
      <Navbar 
      carro={this.state.carro}
      esCarroVisible={esCarroVisible}
      mostrarCarro={this.mostrarCarro} />
      <Layaout>
      <Title/>
      <Productos
      agregarCarro={this.agregarCarro}
      productos={this.state.productos}
      />
      </Layaout>
    </div>
    

  )}
}
export default App;