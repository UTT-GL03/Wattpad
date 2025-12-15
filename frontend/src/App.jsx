import {BrowserRouter, Route, Routes} from 'react-router'
import Work from './pages/Work.jsx'
import './App.css'
import Library from "./pages/Library.jsx";
import Chapter from "./pages/Chapter.jsx";
import Author from "./pages/Author.jsx";
import Header from "./fragments/Header.jsx";
import {AuthContext} from "./contexts.jsx";
import {useState} from "react";

function App() {
    const [currentAuth, setAuth] = useState({author_id: null, logged: false});

    return (
        <BrowserRouter>
            <AuthContext value={currentAuth}>
                <Header setAuth={setAuth}></Header>
                <Routes>
                    <Route path="/" element={<Library/>}/>
                    <Route path="/library" element={<Library/>}/>
                    <Route path="work/:work_id" element={<Work/>}/>
                    <Route path="work/:work_id/chapter/:chapter_id" element={<Chapter/>}/>
                    <Route path="author/:author_id" element={<Author/>}/>
                    <Route path="/:tags" element={<Library/>} />
                </Routes>
            </AuthContext>
        </BrowserRouter>
    )
}

export default App
