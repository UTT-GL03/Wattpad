import WorkHeadline from "../fragments/WorkHeadline.jsx";
import sendRequest from "../MockApiServer.js";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts.jsx";
function Library() {
    let [works, setWorks] = useState([]);
    let [authors, setAuthors] = useState([]);
    const [nextBookmark, setNextBookmark] = useState();
    const [requestedBookmark, setRequestedBookmark] = useState();

    useEffect(() => {
        fetch('http://localhost:5984/wattpad/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { published: { "$gt": null } },
          sort: [{ published: "desc" }],
          fields: ["_id", "type", "tags", "published", "author_id", "work_title", "summary"],
          bookmark: requestedBookmark,
          limit: 5
        })
        }).then(r=> r.json()).then(r => {
            console.log("ksjd <3 ",r);
            setWorks([...works, ...r.docs]);
            setNextBookmark(r.bookmark)
        })
        fetch('http://localhost:5984/wattpad/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { type: "author" },
          fields: ["_id", "type", "author_name"],
          limit:500
        })
        }).then(r=> r.json()).then(r => {
            setAuthors(r.docs);
        })
    }, [requestedBookmark]);

    return (
        <main className="container">
            {works && works.map((x, i) =>
                <WorkHeadline work={x} author={authors.find(a => x.author_id === +a._id)} key={i} />
            )}
            {!works && <h2>No works found</h2>}
            <button type="submit" onClick={ () => setRequestedBookmark(nextBookmark) }>
                Suivant
            </button>
        </main>

    )
}

export default Library;