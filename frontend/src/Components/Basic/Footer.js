


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
<div className="contactname">

<div><img src={ Address} alt="Address" className='Address'/></div>
<div><h4 className="white-text">   Contact Us</h4></div>
</div>


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

<div className="contactname">

   <div><img src={ Socialmedia} alt=" Socialmedia" className='Socialmedia'/></div>
   <div><h4 className="white-text">   Social Media</h4></div>
</div>
<div className="contactname">

<div><img src={ Facebook} alt="facebook" className='Facebook'/></div>
<div><Link to="#!"className="grey-text"> Facebook</Link></div>
</div>
<div className="contactname">

<div><img src={ Instagram } alt="insta" className='Instagram'/></div>
<div> <Link to="#!"className="grey-text"> Instagram</Link></div>
</div>
<div className="contactname">

<div><img src={ Tweeter} alt="Tweeter" className='Tweeter'/></div>
<div><Link to="#!"className="grey-text"> Twitter</Link></div>
</div>
<div className="contactname">

<div><img src={ GitHub} alt="GitHub" className='GitHub'/></div>
<div><Link to="https://github.com/omkar231098/rough-support-2269"className="grey-text"> GitHub</Link></div>
</div>


                    



</div>



</div>


)


}




export default Footer;