import React, { createContext, useState, useEffect } from "react";


export const WindowSizeContext = createContext();

export default function WindowSizeContextProvider(props){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);
    const width = window.innerWidth;

    useEffect(() => {
      setIsMobile(window.innerWidth <= 991)    
    },[setIsMobile, width])  
    
    
    return(
        <WindowSizeContext.Provider value={{isMobile}}>
            {props.children}
        </WindowSizeContext.Provider>
    );
}