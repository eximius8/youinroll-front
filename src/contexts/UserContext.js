import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserContextProvider(props){

    const [ userid, setUser ] = useState(localStorage.getItem('loggeduserid') || "");
    const [ userdata, setUserData ] = useState("");    
  
    useEffect(() => {       
        if (userid){
            localStorage.setItem('loggeduserid', userid)        
            axios.get(`https://youinroll.com/profile/${userid}/info?api=v1.1`)
            .then((resp) => {
                let uData = resp.data.response;
                let avaurl = "";
                if (uData.avatar.startsWith('https')){
                    avaurl = uData.avatar;
                }else if (uData.avatar.startsWith('uploads')){
                    avaurl = 'https://react.semantic-ui.com/images/wireframe/square-image.png';
                }
                else{
                    avaurl = "https://youinroll.com/" + uData.avatar;
                };
                uData.avatar = avaurl;                
                setUserData(uData);                
            })
            .catch((err) => console.log(err))
        }
    }, [userid])
    
    return(
        <UserContext.Provider value={{user: userid, userdata, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}