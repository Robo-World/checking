import React from 'react'
import emailjs from 'emailjs-com';
function ContactUs() {


    return(
        <div id="contactpage">
          
          <h1>  OH! YOU WANA CONTACT US JUST MAIL US<br/>
            OR FILL THIS FORM</h1>
            <div id="form">
                <form id="messageform" onSubmit={send} ><label htmlFor="name">NAME:</label><br/>
                    <input type="text" id="name" name="to_name" className="formdetail" autoComplete="off" placeholder="ENTER YOUR NAME"/><br/>
                    <label htmlFor="email">
                        EMAIL:</label><br/>
                    <input type="email" id="email" name="to_email" className="formdetail" autoComplete="off" placeholder="ENTER YOUR EMAIL"/><br/>
                    <label htmlFor="message">MESSAGE:</label><br/>
                    <textarea id="message" name="query" className="formdetail message" autoComplete="off" placeholder="ENTER YOUR MESSAGE"/><br/>
                    <input type="hidden" defaultValue="Our experts team will contact you as soon as possible" name="message"/>
                    <input type="hidden" defaultValue="Hello Sir/Ma'am we have recived your query" name="sub"/>
                    <input type="submit" value="SUBMIT" className="formsubmitbutton click" /> 
                </form>
            </div>
        </div>
    )

    
}

export default ContactUs;

const send=(e)=>{
e.preventDefault()  
emailjs.sendForm('service_k1j64ai', 'template_khrnuue', e.target, 'user_smHN79dSl960qeY3cfoH3')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});

document.getElementById('message').value=" "
document.getElementById('mail').value=" "
document.getElementById('name').value=" "
alert('YOUR QUERY HAS REACHED US')
// emailjs.send("service_k1j64ai","template_khrnuue",'user_smHN79dSl960qeY3cfoH3',{
//     to_name: name,
//     message: "WE HAVE RECIVED YOUR QUERY",
//     to_email: email,
//     });

}