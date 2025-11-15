import {Link} from "react-router";
import useAuth from "../useAuth"
import {useContext} from "react";
import {AuthContext} from "../contexts.jsx";

function Header({setAuth}) {

    const handleLogin = () => {
        setAuth({author_id: 2, logged: true});
        console.log("Connected")
    };

    const handleLogout = () => {
        setAuth({author_id: null, logged: false});
        console.log("disconnected")
    };

    const {author_id, logged} = useContext(AuthContext)

    return (
        <header className="grid">
            <Link to="/"><h1>Wattpad</h1></Link>
            <Link type="button" to={"/author/"+author_id}>Profil</Link>
            {!logged && <button type="button" onClick={handleLogin}>Log in</button>}
            {logged && <button type="button" onClick={handleLogout}>Logout</button>}
        </header>

    )
}

export default Header;