import {Link, useParams} from 'react-router'
import data from '../assets/sample_data.json'
import Metadata from "../fragments/Metadata.jsx";

function Chapter() {
    const {work_id, chapter_id} = useParams()
    const {chapters, ...props} =
        data.works.find(x => +work_id === x.work_id)
    return (
        <main className="container">
            <article>
                <Metadata {...props}></Metadata>
                <h2>{chapters[chapter_id].chapter_title}</h2>
                <section>
                    {chapters[chapter_id].content.split('\n\n').map((x,i) =>
                        <p key={i}>
                            {x}
                        </p>
                    )}
                </section>
            </article>
            <section>
                {chapter_id > 0 && <Link to={"/work/"+work_id +"/"+(+chapter_id-1)}><button>Previous</button></Link>}
                {chapter_id < chapters.length - 1 && <Link to={"/work/"+work_id +"/"+(+chapter_id+1)}><button>Next</button></Link>}
            </section>
        </main>
    )
}

export default Chapter