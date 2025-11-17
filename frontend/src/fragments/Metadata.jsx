import {Link} from "react-router";
import sendRequest from "../MockApiServer.js";
import { format } from 'fecha';

function Metadata({work, work_id, author, canModify}) {
    if (!work && work_id) {
        work = sendRequest("/api/work/"+work_id);
    }

    if (!author && work) {
        author = sendRequest("/api/author/"+work.author_id);
    }
    const date = new Date(work.published * 1000);

    console.log(work, author)
    return (
        <header className="container-fluid">
            <div className="sub-container">
            {work && <>
                <Link to={"/work/" + work.work_id}>
                    <h2>{work.work_title}</h2>
                </Link>
                {canModify && <Link to={"/work/" + work.work_id+"#modify"}>
                        <small>Modify</small>
                    </Link>}
            </>}
            </div>
            <div className="sub-container">
                {work && work.tags && <span className="tag"> {work.tags} </span>}
                {author &&
                    <Link to={"/author/"+author.author_id}>
                        {author && <address> {author.author_name} </address>}
                    </Link>
                }
                {work &&
                    <time> {!isNaN(date.valueOf()) && format(date, "DD/MM/YYYY HH:mm")} </time>
                }
            </div>
        </header>
   )
}

export default Metadata;