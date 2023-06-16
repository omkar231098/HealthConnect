


import "../Basic/Footer.css"

import { Link } from "react-router-dom";
import Instagram from "../../Images/instagram.png"
import Facebook from "../../Images/facebook1.png"
import Tweeter from "../../Images/twitter.png"
import GitHub from "../../Images/social.png"
import Address from "../../Images/location.png"
import Socialmedia from "../../Images/cursor.png"



function Footer(){

return (

<div className="Footer">

<div className="contactbox">
<h4 className="white-text"> <img src={ Address} alt="Address" className='Address'/>  Contact Us</h4>

                     <p className="grey-text">
                    Healthconnect+
                     </p>
                     <p className="grey-text">
                     27, near Alka Talkies, Ganjwe Wadi,<br/> Sadashiv Peth, Pune,
                     </p>
                     <p className="grey-text">
                        Postal-Code - 411030
                     </p>
                     <p className="grey-text">
                        +919307531964
                     </p>
</div>

<div className="socialmediabox">
<h4 className="white-text"> <img src={ Socialmedia} alt=" Socialmedia" className='Socialmedia'/>  Social Media</h4>

                     <ul className="unlist">
                         <li > <img src={ Facebook} alt="facebook" className='Facebook'/> <Link to="#!"className="grey-text"> Facebook</Link></li>
                         <li> <img src={ Instagram } alt="insta" className='Instagram'/> <Link to="#!"className="grey-text"> Instagram</Link></li>
                         <li> <img src={ Tweeter} alt="Tweeter" className='Tweeter'/><Link to="#!"className="grey-text"> Twitter</Link></li>
                         <li> <img src={ GitHub} alt="GitHub" className='GitHub'/><Link to="https://github.com/omkar231098/rough-support-2269"className="grey-text"> GitHub</Link></li>
                     </ul>



</div>



</div>


)


}




export default Footer;