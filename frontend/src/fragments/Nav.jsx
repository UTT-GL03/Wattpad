import {Link} from "react-router";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/author">Profil</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;