import {Link} from "react-router";
import sendRequest from "../MockApiServer.js";
import { format } from 'fecha';
import {useEffect, useState} from "react";

function Metadata({work, work_id, author, canModify}) {
    let [current_work, setWork] = useState(work);
    let [current_author, setAuthor] = useState(author);
    if (!work && work_id) {
        current_work = sendRequest("/api/work/"+work_id).then(r => setWork(r));
    }
    if (!author && work) {
        current_author = sendRequest("/api/author/"+work.author_id).then(r => setAuthor(r));
    }
    const date = new Date(current_work.published * 1000);

    return (
        <header className="container-fluid">
            <div className="sub-container">
            {current_work && <>
                <Link to={"/work/" + current_work.work_id}>
                    <h2>{current_work.work_title}</h2>
                </Link>
                {canModify && <Link to={"/work/" + current_work.work_id+"#modify"}>
                        <small>Modify</small>
                    </Link>}
            </>}
            </div>
            <div className="sub-container">
                {current_work && current_work.tags && <span className="tag"> {current_work.tags} </span>}
                {current_author &&
                    <Link to={"/author/"+current_author.author_id}>
                        {current_author && <address> {current_author.author_name} </address>}
                    </Link>
                }
                {current_work &&
                    <time> {!isNaN(date.valueOf()) && format(date, "DD/MM/YYYY HH:mm")} </time>
                }
            </div>
        </header>
   )
}

export default Metadata;