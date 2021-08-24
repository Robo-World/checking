import React from 'react'
import './c.css'
function BuyProduct(props) {

    const buy=()=>{
        let A = document.getElementsByClassName(props.sel)
        console.log(A.length)
        for (let i = 0; i < A.length; i++) {
          A[i].classList.add('clicked')
        }
      
    }

    const remove=()=>{
      let A = document.getElementsByClassName(props.sel)
      console.log(A.length)
      for (let i = 0; i < A.length; i++) {
        A[i].classList.remove('clicked')
      }
    }
    return(
     <div class="wrapper">
        <div class="container">
          <div class="top"><img src={props.pic} height={props.pich} alt=""/></div>
          <div class={props.class}>
            <div class="leftbc">
              <div class="details">
                <h1>{props.name}</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>{props.mrp}</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>{props.sellp}</h4>
              </div>
              <div class="buy" onClick={buy}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={remove}><i class="fas fa-times"></i></div>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon"><i class="fas fa-info"></i></div>
          <div class="contents">
            <table>
              <tr>
                <th>Width</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>{props.width}</td>
                <td>{props.height}</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>{props.weight}</td>
                <td>{props.color}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
}

export default BuyProduct;