import { createContext } from 'react';

export const AuthContext = createContext({author_id: null, logged: false});