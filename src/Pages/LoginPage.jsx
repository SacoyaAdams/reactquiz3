import React from "react";
import { SignIn } from "../Components/SignIn";

export const LoginPage = async (credentials ) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'Post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    return (
        <>
            {/* Dashboard goes here: */}
            <SignIn />
        </>
    )
}