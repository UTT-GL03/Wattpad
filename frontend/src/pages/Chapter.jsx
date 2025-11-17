import {Link, useParams} from 'react-router'
import Metadata from "../fragments/Metadata.jsx";
import sendRequest from "../MockApiServer.js";

function Chapter() {
    const {work_id, chapter_id} = useParams()
    const chapter = sendRequest("api/work/"+work_id+"/chapter/"+chapter_id);
    return (
        <main className="container">
            <article>
                <Metadata {...chapter}></Metadata>
                <h2>{chapter.chapter_title}</h2>
                <section>
                    {chapter.content.split('\n\n').map((x,i) =>
                        <p key={i}>
                            {x}
                        </p>
                    )}
                </section>
            </article>
            <section className="sub-container">
                {chapter_id > 0 && <Link to={"/work/"+work_id +"/chapter/"+(+chapter_id-1)}><button>Previous</button></Link>}
                {chapter_id < chapter.metrics.chapters - 1 && <Link to={"/work/"+work_id +"/chapter/"+(+chapter_id+1)}><button>Next</button></Link>}
            </section>
        </main>
    )
}

export default Chapter