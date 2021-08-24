import React from 'react'
import { Link } from "react-router-dom";

// import './p.css'
function Product(props) {
    return(           
  <div class="card">
    <div class="left">
      <img src={props.pic} alt={props.alt} height={props.height}/>
      <i class="fa fa-long-arrow-alt-left"></i>
      <i class="fa fa-long-arrow-alt-right"></i>
    </div>
    <div class="right">
      <div class="product-info">
        <div class="product-name">
          <h1 className="h1">Robo World</h1>
        </div>
        <div class="details">
          <h3 className="h3">A.I. Collection</h3>
          <h2 className="h2">{props.name}</h2>
          <h4 className="h4"><span class="fa fa-rupee"></span>{props.sellp}</h4>
          <h4 class="dis h4"><span class="fa fa-rupee"></span>{props.mrp}</h4>
        </div>
        <ul className="p">
        
          <li id="cl">COLOR</li>
          <li className={props.color1}></li>
          <li className={props.color2}></li>
          <li className={props.color3}></li>
          <li className={props.color4}></li>
          <li className={props.color5}></li>
        </ul>
        <Link to="/Order-Now"><span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span></Link>
        <Link to="/Order-Now"><span class="foot"><i class="fa fa-shopping-cart"></i>Add TO Cart</span></Link>
      </div>
    </div>
  </div>


    )
}

export default Product;