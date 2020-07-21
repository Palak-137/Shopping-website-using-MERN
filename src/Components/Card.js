import React , { Component } from "react"
import "../App.css"

const Card =({foods})=>{
    const recipe = foods.map(recipe=>{
        return(
            <div class="container recipe">
            <div className="card" fey={recipe.id}>
                <h2 className="heading">{recipe.name}</h2>
                <img src={require (`../img/${recipe.img}.jpg`)}></img>
                <h5>{recipe.recipe}</h5>
            </div>
            </div>
        )
    })
    return(
    <div>{recipe}</div>
    )
}
export default Card 