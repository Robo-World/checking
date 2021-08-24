import React from 'react'
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import './App.css';
function Navbar() {
    const [OTP,setotp]= useState(0)
    const [login,changelogin]=useState(false)
    const getotp=(e)=>{
        e.preventDefault()  
        var digits = '0123456789';
        let pass = '';
        for (let i = 0; i < 4; i++ ) {
            pass += digits[Math.floor(Math.random() * 10)];
        }
        
        setTimeout(() => {
            setotp(pass)
            console.log(OTP)    
        emailjs.sendForm('service_k1j64ai', 'template_khrnuue', e.target, 'user_smHN79dSl960qeY3cfoH3')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});




document.getElementById('loginbox').style.display="none"
document.getElementById('otpbox').style.display="block"





return OTP;        }, 2000);
}


const checkotp=(e)=>{
    e.preventDefault()
let otp=document.getElementById('otp').value
if (otp===OTP) {
  document.getElementById('otpbox').style.display="none"
  document.getElementById('loggedin').style.display="block"
  changelogin(true)

}
else{
document.getElementById('error').innerText="OH! WRONG INPUT CLICK ON RESEND"
}
}



const log=()=>{
    if (login===false) {
        document.getElementById('loginbox').style.display="block"
    }
    else(
        document.getElementById('loggedin').style.display="block"
    )
}

const cbox=()=>{
    document.getElementById('loginbox').style.display="none"
    document.getElementById('loginmail').value=" "
}
const cbox2=()=>{
    document.getElementById('otpbox').style.display="none"
    document.getElementById('error').innerText=" "
    document.getElementById('otp').value=" "
}
const resend=()=>{
    document.getElementById('otpbox').style.display="none"
    document.getElementById('loginbox').style.display="block"
    document.getElementById('error').innerText=" "
}
const cbox3=()=>{
    document.getElementById('loggedin').style.display="none"

}
const hide =()=>{
    document.getElementById('banner2').style.display="none"
}
    return(
        
        <div className="Navbar">
            <nav id="nav">
                    <img src="" alt="" id="navlogo"/>
                    <ul>
                        <li><Link to="/" className="Link" onClick={hide}>Home</Link></li>
                        <li><Link to="/About-Us" className="Link" onClick={hide}>About-Us</Link></li>
                        <li><Link to="/Our-Products" className="Link" onClick={hide}>Our-Products</Link></li>
                        <li><Link to="/Contact-Us" className="Link" onClick={hide}>Contact-Us</Link></li>
                        <li><Link to="/Order-Now" className="Link" id="on" onClick={hide}>Order-Now</Link></li>
                    </ul>

                    <input type="search" className="search" name="search" placeholder="Search Product" autoComplete="off"/>
                    <ul>
                        <li className="login Link"><span onClick={log} id="logbtn">Login</span></li>
                    </ul>
            </nav>
            <div id="loginbox">
                <button className="cross" onClick={cbox}><p>x</p></button><br/><br/><hr/>
                <p>ENTER YOUR EMAIL-ID TO LOGIN WE WILL SEND OTP TO VERIFY YOU</p>
                <form onSubmit={getotp}>
                    <input type="hidden"defaultValue="Here is your otp" name="sub"/>
                    <input type="hidden"defaultValue="Sir/Ma'am" name="to_name"/>
                    <input type="hidden"defaultValue={OTP} name="message" autoComplete="off"/>
                <input type="email" required id="loginmail" name="to_email" placeholder="YOUR MAIL-ID" /><input type="submit" id="logsub" value="GO"/>
                
                </form>
            </div>
            <div id="otpbox">
                <button className="cross" onClick={cbox2}><p>x</p></button><br/><br/><hr/>
                <p>WE SEND THE OTP TO YOUR MAIL</p>
                <form onSubmit={checkotp}>
                    <p id="error"></p>
                <input id="otp" type="number" minLength="4" required maxlength="4" placeholder="OTP" /><input type="submit" id="otpsub" value="GO"/>
                </form>
                <button onClick={resend} id="resend">RESEND OTP</button>
            </div>
            <div id="loggedin">
                <button className="cross" onClick={cbox3}><p>x</p></button><br/><br/><hr/>
                <p>YOU ARE LOGGED-IN</p>
                
            </div>
        </div>



    )
}

export default Navbar;



