import React from 'react'
import BuyProduct from './Buy-Card';
import emailjs from 'emailjs-com';

import './c.css'
import Pic from './1.png'
import Pic1 from './Picture2.png'
import Pic2 from './Picture3.png'
import Pic3 from './Picture4.png'
import Pic4 from './Picture5.png'
import Pic5 from './RC.png'
import Pic6 from './VA.png'
function OrderNow() {

    let set =0
    let amo=0
const mail=(e)=>{
  e.preventDefault()
    emailjs.sendForm('service_k1j64ai', 'template_khrnuue', e.target, 'user_smHN79dSl960qeY3cfoH3')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    })
    document.getElementById('cartname').value=" "
    document.getElementById('cartmail').value=" "
    alert('YOUR ORDER IS PLACED')
}
    const buy=(which,mon)=>{
        console.log(which)
        let A = document.getElementsByClassName(which)
        console.log(A.length)
        for (let i = 0; i < A.length; i++) {
          A[i].classList.add('clicked')
        }
      set=  Number(set)+1
        document.getElementById('quan').innerText=set
        amo= Number(amo)+mon
        document.getElementById('amoun').innerText=amo
    }

    const remove=(which,mon)=>{
      let A = document.getElementsByClassName(which)
      console.log(A.length)
      for (let i = 0; i < A.length; i++) {
        A[i].classList.remove('clicked')
      }
      set=  Number(set)-1
        document.getElementById('quan').innerText=set
        amo= Number(amo)-mon
        document.getElementById('amoun').innerText=amo
    }
    return(
        <div id="Ordernowpage">


<div id="leftbox">

            <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic1} height="450px" alt="ROBOT"/></div>
          <div class="bottom 1GENB">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>2,00,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>1,62,599</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('1GENB',162599)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('1GENB',162599)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>blue</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      
      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic} height="400px" alt="ROBOT"/></div>
          <div class="bottom 1GENY">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>2,00,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>1,62,599</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('1GENY',162599)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('1GENY',162599)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>Green</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      
      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic2} height="450px" alt="ROBOT"/></div>
          <div class="bottom 1GENG">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>2,00,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>1,62,599</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('1GENG',162599)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('1GENG',162599)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>Yellow</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      
      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic3} height="450px" alt="ROBOT"/></div>
          <div class="bottom 1GENP">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>2,00,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>1,62,599</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('1GENP',162599)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 1 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('1GENP',162599)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>Pink</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      
      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic1} height="450px" alt="ROBOT"/></div>
          <div class="bottom 2GENB">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>3,00,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>2,52,899</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('2GENB',252899)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('2GENB',252899)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>blues</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic} height="450px" alt="ROBOT"/></div>
          <div class="bottom 2GENY">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <h4 className="h4 disprice" ><span class="fa fa-rupee"></span>3,00,000</h4>
          <h4 class="price h4 "><span class="fa fa-rupee"></span>2,52,899</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('2GENY',252899)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('2GENY',252899)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>green</td>
              </tr>
            </table>
          </div>
        </div>
      </div>


      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic2} height="450px" alt="ROBOT"/></div>
          <div class="bottom 2GENG">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <h4 className="h4 disprice" ><span class="fa fa-rupee"></span>3,00,000</h4>
          <h4 class="price h4 "><span class="fa fa-rupee"></span>2,52,899</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('2GENG',252899)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('2GENG',252899)
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>Yellow</td>
              </tr>
            </table>
          </div>
        </div>
      </div>


      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic4} height="450px" alt="ROBOT"/></div>
          <div class="bottom 2GENW">
            <div class="leftbc">
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <h4 className="h4 disprice" ><span class="fa fa-rupee"></span>3,00,000</h4>
          <h4 class="price h4 "><span class="fa fa-rupee"></span>2,52,899</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('2GENW',252899)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>JAKE 2 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('2GENW',252899 )
              }}><i class="fas fa-times"></i></div>
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
                <td>40 INCHES</td>
                <td>4.5 FEET</td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td>80 Kg.</td>
                <td>White</td>
              </tr>
            </table>
          </div>
        </div>
      </div>


      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic5} height="250px" alt="CAR"/></div>
          <div class="bottom RC">
            <div class="leftbc">
              <div class="details">
                <h1>ROBO CAR 1 GEN.</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>10,00,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>7,82,499</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('RC',782499)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>ROBO CAR 1 GEN.</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('RC',782499)
              }}><i class="fas fa-times"></i></div>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="wrapper">
        <div class="container">
          <div class="top"><img src={Pic6} height="400px" alt="ASSISTANT"/></div>
          <div class="bottom VA">
            <div class="leftbc">
              <div class="details">
                <h1>VOICE ASSISTANT</h1>
          <h4 class="disprice h4 "><span class="fa fa-rupee"></span>8,000</h4>
                <h4 className="h4 price" ><span class="fa fa-rupee"></span>7,499</h4>
              </div>
              <div class="buy" onClick={()=>{
                  buy('VA',7499)
              }}><i class="fas fa-shopping-cart"></i></div>
            </div>
            <div class="rightbc">
              <div class="done"><i class="fas fa-check"></i></div>
              <div class="details">
                <h1>VOICE ASSISTANT</h1>
                <span>Added to your cart</span>
              </div>
              <div class="remove" onClick={()=>{
                  remove('VA',7499)
              }}><i class="fas fa-times"></i></div>
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
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Weight</th>
                <th>Color</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      </div>
      <hr className="rotate"/>
      <div id="rightbox">
          <form onSubmit={mail}>
        <h1>YOUR CART</h1><br/><br/>
       <h2><span id="ab"> YOUR ITEMS:</span> <span id="quan">0</span></h2><br/><br/>
       <h2><span id="amount"> YOUR AMOUNT:</span> <span id="amoun">0</span></h2><br/><br/>
       <input type="text" name="to_name" placeholder="ENTER YOUR NAME" id="cartname" required/><br/><br/>
       <input type="hidden"defaultValue="DETAIL OF YOUR ORDER" name="sub"/>
                   
     <input type="hidden"defaultValue="WE HAVE RECIVED YOUR ORDER OUR TEAM WILL SHORTLY CONTACT YOU" name="message" autoComplete="off"/>
       <input type="email" required id="cartmail" name="to_email" placeholder="YOUR MAIL-ID" /><br/><br/><br/><input type="submit" id="cartsub" value="BUY NOW" className="click"/>
       <br/><br/><br/><br/> <p id="note">WE WILL MAIL YOU DETAILS HOW TO PAY THE MONEY</p>
       
</form>

      </div>
    </div>

    )
}


export default OrderNow;