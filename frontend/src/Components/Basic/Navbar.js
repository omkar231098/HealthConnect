
import "../Basic/Navbar.css"
import Logo from "../../Images/Logo.jpeg"
import { useNavigate } from "react-router-dom";

function Navbar (){
    const navigate = useNavigate();
   

return (



<div className="navbar" >


<div className="logobox">
<img src={ Logo } alt="logo" className='logo-navbar' onClick={()=>{
    navigate("/")
}}/>
</div>


<div className="ButtonBox">
<div><button  className="loginbtn" onClick={()=>{
    navigate("/login")
}}>Login</button></div>
<div><button  className="signinbtn" onClick={()=>{
    navigate("/register")
}}>SignUp</button></div>
</div>





</div>



);



}


export default Navbar;