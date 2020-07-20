import React,{Component} from "react"

class AddRecipe extends Component{
    state={
        img: null,
        name: null,
        recipe: null
    }
    onImageChange=(event)=>{
        if(event.target.files &&events.target.files[0]){
            let reader = new FileReader();
            reader.onload=(e)=>{
                this.setState({img: e.target.result});
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
render(){
    return(
        <div>
            <input  type ="file"className="image" onChange={onImageChange}></input>
            <img id="target" src={this.state.img}/>
        </div>
    )
}
}
export default AddRecipe