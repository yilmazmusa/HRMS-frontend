import React from 'react'
import { NavLink, useHistory } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = React.useState(true);
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }



    return (
        <div>
            <Menu inverted fixed="top">

                <Container>
                    <Menu.Item><Image size="tiny" src="../assets/logo.png" /></Menu.Item>

                    <Menu.Item as={NavLink} to="/" name="home" />
                    <Menu.Item name="messages" />

                    <Menu.Menu position="right">
                        <Dropdown item text="Language">
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item></Dropdown.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>
            </Menu>


        </div>
    )
}
