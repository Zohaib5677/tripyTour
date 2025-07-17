import { Component } from "react";
import "./Navbarstyle.css";
import { MenuItems } from "./MenuItems";
import { Link,NavLink } from "react-router-dom";    

class Navbar extends Component {
  state={
     clicked:false
  }
  handleClick=()=>
  {
    this.setState({clicked:!this.state.clicked})
  }
  // Make Handleclick Function
  render() {
    
    return (
    
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons">
            <i className={this.state.clicked
                 ? "fas fa-times" : "fas fa-bars"} onClick={this.handleClick}></i>
          
        </div>
        <ul className={this.state.clicked 
        ? "nav-menu active" : "nav-menu"} >
            {MenuItems.map((items,index)=>
            {
                return(  <li key={index}>
                    <Link to={items.url} className={items.cName} onClick={() => this.setState({clicked: false})}>
                    <i class={items.icon}></i>
                       {items.title}
                    </Link>
    
                </li>)
            })}
            <button>Sign Up</button>
          
        </ul>
      </nav>
    );
  }
}

export default Navbar;