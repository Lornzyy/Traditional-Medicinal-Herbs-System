import React from "react";
import { UserAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";


const Protected = ({children}) => {

    const { user } = UserAuth();

    if (!user){
        return(
        <>
            <Navigate to="/login" />
        </>
        )
    } 

    return children;
}


export default Protected;