import React from "react"
import '../App.css'

const  Header = ()=>{
  return(
      <nav>
      <div className="Header">
          <h4 className="logo">Own-the-taste</h4>
          <ul className="user-option "> 
          <li><a className="fa fa-login" href="#">SignIn</a></li>
          <li><a className="fa fa-login" href="#">LogIn</a></li>
          </ul>
      </div>
      </nav>
  )
}
export default Header