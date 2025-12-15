import {Link} from "react-router";
import useAuth from "../useAuth"
import {useContext} from "react";
import {AuthContext} from "../contexts.jsx";

const TAGS = [
    'OS', 'AU', 'HS', 'H-C', 'ABO', 'AN', 'NCC'
]

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
        <nav>
            <ul>
                <Link to="/"><h1>Wattpad</h1></Link>
                {TAGS.map((x, i) =>
                    <li key={i}>
                        <Link to={`/${x}`}>
                        {x}
                        </Link>
                    </li>
                )}
            </ul>
            <ul>
                <Link type="button"  className="navBarButton" to={"/author/"+author_id}>Profil</Link>
                {!logged && <button type="button" className="navBarButton" onClick={handleLogin}>Log in</button>}
                {logged && <button type="button" className="navBarButton" onClick={handleLogout}>Logout</button>}
            </ul>
        </nav>
    )
}

export default Header;