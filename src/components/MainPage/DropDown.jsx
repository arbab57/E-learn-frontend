import React, { useState } from "react";


export default function DropDown({setShowDetails, setShowDropDown}) {

    return (
        <div onMouseLeave={()=> setShowDropDown(false)} className="bg-white mt-4 shadow-lg rounded-md w-52 absolute right-0">
            <div className="flex flex-col gap-3 items-start p-4">
            <button  onClick={()=> setShowDetails(true)} className="">Settings</button>
            <button className="">Changes Password</button>
               <button className="">SignOut</button>
            </div>
           
        </div>
    );
}


