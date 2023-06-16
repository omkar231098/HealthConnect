
import "../Basic/Navbar.css"
import Logo from "../../Images/Logo.jpeg"

function Navbar (){


return (



<div className="navbar" >


<div className="logobox">
<img src={ Logo } alt="logo" className='logo-navbar'/>
</div>


<div className="ButtonBox">
<div><button className="loginbtn">Login</button></div>
<div><button  className="signinbtn">SignUp</button></div>
</div>





</div>



);



}


export default Navbar;