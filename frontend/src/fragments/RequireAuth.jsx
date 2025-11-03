import {Navigate} from "react-router";

function RequireAuth() {

    function RequireAuth({ children }) {
        const { authed } = useAuth();

        return authed === true ? children : <Navigate to="/login" replace />;
    }
}

export default RequireAuth;