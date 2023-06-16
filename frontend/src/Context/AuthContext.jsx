import { createContext,useState } from "react";

export const authContext = createContext();

function AuthContextProvider(prop) {
const [isAuth,setIsAuth] = useState(false);
const [token,setToken] = useState("");
const login = ()=>{
    setIsAuth(true);
}

const logout = ()=>{
    setIsAuth(false);
};

return (
    <authContext.Provider value={{isAuth,login,logout,token,setToken}}>
        {prop.children}
    </authContext.Provider>
)

}

export default AuthContextProvider;