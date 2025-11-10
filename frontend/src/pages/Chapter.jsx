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
                <Link to={"/work/"}></Link>
            </section>
        </main>
    )
}

export default Chapter