import React, { useState } from "react";
import { WebHandler } from "../../data/remote/WebHandler";
import { URLS } from "../../data/remote/URL";



export default function DropDown({setShowDetails, setShowDropDown}) {

    const signOut = async () => {
        const response = await WebHandler(URLS.SIGNOUT,'POST')        
      }
    

    return (
        <div onMouseLeave={()=> setShowDropDown(false)} className="bg-white mt-4 shadow-lg rounded-md w-52 absolute right-0">
            <div className="flex flex-col gap-3 items-start p-4">
            <button  onClick={()=> setShowDetails(true)} className="">Settings</button>
            <button className="">Changes Password</button>
               <button onClick={signOut} className="">SignOut</button>
            </div>
           
        </div>
    );
}


