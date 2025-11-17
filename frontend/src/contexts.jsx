import {createContext, useContext} from 'react';

export const AuthContext = createContext({author_id: null, logged: false});

export function isCurrentAuthor(author_id) {
    const auth = useContext(AuthContext);
    return auth.author_id === +author_id && auth.logged;
}