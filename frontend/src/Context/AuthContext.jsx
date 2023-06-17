import { createContext,useState } from "react";

export const authContext = createContext();

function AuthContextProvider(prop) {
const [isAuth,setIsAuth] = useState(false);
const [token,setToken] = useState("");
const [email,setEmail] = useState("");
const [refToken,setRefToken] = useState("");
const [role,setRole]= useState("");
const login = ()=>{
    console.log("inside iogin");
    setIsAuth(true);
    console.log(isAuth);
}
const setTokenTo = (prop)=>{
    setToken(prop)
}
const setRefTokenTo = (prop)=>{
    setRefToken(prop)
}
const setEmailTo = (prop)=>{
    setEmail(prop)
}
const setRoleTo = (prop)=>{
    setRole(prop)
}
const logout = ()=>{
    setIsAuth(false);
};


return (
    <authContext.Provider value={{isAuth,login,logout,token,setTokenTo,email,setEmailTo,refToken,setRefTokenTo,role,setRoleTo}}>
        {prop.children}
    </authContext.Provider>
)

}

export default AuthContextProvider;