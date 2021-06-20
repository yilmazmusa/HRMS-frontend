import { Button, Menu } from "semantic-ui-react";
import React from 'react'
import { NavLink } from "react-router-dom";

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button as={NavLink} to="/signUp" color="red">Sign Up</Button> 
            <Button onClick={signIn} color="blue" style={{marginLeft:"0.5em"}}>Sign In</Button>
            </Menu.Item>
        </div>
    )
}