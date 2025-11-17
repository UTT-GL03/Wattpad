import WorkHeadline from "../fragments/WorkHeadline.jsx";
import sendRequest from "../MockApiServer.js";
import {useEffect, useState} from "react";
function Library() {
    let [works, setWorks] = useState(null);
    useEffect(() => {
        sendRequest("api/work?tri=published").then(r => setWorks(r));
    }, works);
    return (
        <main className="container">
            {works && works.map((x, i) =>
                <WorkHeadline work={x} key={i} />
            )}
        </main>
    )
}

export default Library;