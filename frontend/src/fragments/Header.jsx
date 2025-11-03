import Nav from "./Nav.jsx";
import {Link} from "react-router";
import useAuth from "../useAuth"
import {useContext} from "react";
import {AuthContext} from "../contexts.jsx";

function Header({setAuth}) {

    const handleLogin = () => {
        setAuth(true);
        console.log("Connected")
    };

    const handleLogout = () => {
        setAuth(false);
        console.log("disconnected")
    };

    const authed = useContext(AuthContext)

    return (
        <header className="grid">
            <Link to="/"><h1>Wattpad</h1></Link>
            <Nav></Nav>
            {!authed && <button onClick={handleLogin}>Log in</button>}
            {authed && <button onClick={handleLogout}>Logout</button>}
        </header>

    )
}

export default Header;