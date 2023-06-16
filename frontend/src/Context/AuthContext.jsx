import { createContext,useState } from "react";

export const authContext = createContext();

function AuthContextProvider(prop) {
const [isAuth,setIsAuth] = useState(false);
const [token,setToken] = useState("");
const [email,setEmail] = useState("");
const [refToken,setRefToken] = useState("");
const [role,setRole]= useState("");
const login = ()=>{
    setIsAuth(true);
}

const logout = ()=>{
    setIsAuth(false);
};


return (
    <authContext.Provider value={{isAuth,login,logout,token,setToken,email,setEmail,refToken,setRefToken,role,setRole}}>
        {prop.children}
    </authContext.Provider>
)

}

export default AuthContextProvider;