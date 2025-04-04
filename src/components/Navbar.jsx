import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Cartwidget from '../components/Cart';



const Navbar = () => {
  const [categories, setCategories] = useState([])
  useEffect(( ) => { 
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(cat => setCategories(cat));
  },[])
  return (
<nav className="nav-container">
  <NavLink to="/">
    <img src={logo} alt="Logo" className="logo" />
  </NavLink>

  <div className="nav-links">
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {categories.map(cat => (
          <Dropdown.Item to={`/categoria/${cat}`} key={cat} as={NavLink}>
            {cat}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>

    <Cartwidget />
  </div>
</nav>



  );
};

  
  export default Navbar;
  