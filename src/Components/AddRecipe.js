import React,{Component} from "react"

class AddRecipe extends Component{
    state={
        img: null,
        name: null,
        recipe: null
    }
    onImageChange=(event)=>{
        if(event.target.files &&event.target.files[0]){
            let reader = new FileReader();
            reader.onload=(e)=>{
                this.setState({img: e.target.result});
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addRecipe(this.state);
  }
render(){
    return(
        <div>
            <form>
               <input  type ="file"className="image" onChange={this.onImageChange}></input>
            </form>
        </div>
    )
}
}
export default AddRecipe