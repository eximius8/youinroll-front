import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props){

    const [ user, setUser ] = useState(localStorage.getItem('loggeduser') || "");
  
    useEffect(() => {
        localStorage.setItem('loggeduser', user);        
    }, [user])
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}