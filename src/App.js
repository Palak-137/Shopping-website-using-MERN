import React ,{Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Card from "./Components/Card"
import AddRecipe from "./Components/AddRecipe"


class App extends Component{
  state={
    food:[
      {id:1 ,img: 1, name:"Aloo Paratha" ,recipe: "Boil Aloo, Mash it bla bla bla"},
      {id:2 ,img: 2, name:"Pizza" , recipe: "Make a dough, Bake add topping bla bla bla"},
      {id:3 ,img: 3, name:"burger", recipe:"take bun, boil allo tkii and some vegetables bla bla bla bla"}
    ]
  }
  render(){
  return (
    <div className="App">
      <Header></Header>
      <Card foods={this.state.food}></Card>
      <AddRecipe></AddRecipe>
    </div>
  );
}
}

export default App;
