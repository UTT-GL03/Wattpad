import WorkHeadline from "../fragments/WorkHeadline.jsx";
import sendRequest from "../MockApiServer.js";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts.jsx";
function Library() {
    let [works, setWorks] = useState([]);
    let [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("/sample_data.json").then(r=> r.json()).then(r => {
            setWorks(r.works);
            setAuthors(r.authors);
        })
    }, []);

    return (
        <main className="container">
            {works && works.map((x, i) =>
                <WorkHeadline work={x} author={authors.find(a => x.author_id === a.author_id)} key={i} />
            )}
            {!works && <h2>No works found</h2>}
        </main>

    )
}

export default Library;