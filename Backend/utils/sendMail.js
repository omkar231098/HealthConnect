require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const sendEmail = async(sendEmail,Payload,Name)=>{
    console.log(sendEmail,Payload,Name);
    var isEmail = false;
    sgMail.setApiKey(process.env.SendGrid_Key);
    const msg = {
        to: sendEmail,
        from: "thiteshivaji07@gmail.com",
        subject: `Important: Resat Your Password for ${sendEmail}`,
        text: `Find Below OTP for Reseating your Password`,
        html: `<div style="text-align: center; margin: auto;">
        <img src="https://shubham-0178.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2023-06-13+at+19.55.20.jpeg"  alt="LOGO" style="height: 200px; width: 200px;">
        <h2>Hello ${Name ? Name:"There"}</h2>
        <h2>Your OTP is ${Payload}</h2>
        <h5>This is only valid for 5 min.</h5>
        <a href="http://www.google.com">Click To Resat Password</a>
    </div>`,
    };
    await sgMail.send(msg).then(() => {
            isEmail =  true;
        }).catch((err)=>{
            isEmail = false;
    }) 
    return isEmail
}

module.exports={sendEmail}