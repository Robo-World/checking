import React from 'react'
import Product from './productcard.js'
import Pic from './1.png'
import Pi from './Picture2.png'
import Pic2 from './RC.png'
import Pic3 from './VA.png'
function OurProducts() {
    return(
        <div id="ourproducts">
            <p id="heading">Our Products</p>
          <Product alt="Robot" pic={Pic} height="300px" name="JAKE THE AI ROBOT 1 GEN." sellp="1,62,599" mrp="2,00,000" color1="yellow mr" color2="pink mr" color3="blue mr" color4="white mr" color5="green mr" />
          <Product alt="Robot" pic={Pi} height="400px" name="JAKE THE AI ROBOT 2 GEN." sellp="2,52,899" mrp="3,00,000" color1="yellow mr" color2="pink mr" color3="blue mr" color4="white mr" color5="green mr" />
          <Product alt="Robot Car" pic={Pic2} height="180px" name="ROBO CAR 1 GEN." sellp="7,82,499" mrp="10,00,000" color1="white mr"  />
          <Product alt="Voice Assistant" pic={Pic3} height="200px" name="VOICE ASSISTANT" sellp="7,499" mrp="8,000" color1="black mr"/>
          






















         








        </div>
    )
}

export default OurProducts;