import cartwidgetlogo from "../assets/cartwidget.png";

const Cartwidget = () => { 
return(
<>
  <div className="cart-container">
    <img src={cartwidgetlogo} alt="cartwidget" className="cartwidget-logo" />
    <div className="burbuja">
      <p className="cantidad">7</p>
    </div>
  </div>
</>


);
}

export default Cartwidget;