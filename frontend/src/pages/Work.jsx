import {Link, useParams} from 'react-router'
import data from '../assets/sample_data.json'
import Metadata from "../fragments/Metadata.jsx";

function Work() {
    const {work_id} = useParams();
    const {work_title, author, published, chapters, summary, tags} =
        data.works.find(x => +work_id === x.work_id)
    return (
        <main className="container">
            <article>
                <Metadata tags={tags} work_id={work_id} work_title={work_title} author={author} published={published}></Metadata>
                <p>{summary}</p>
                <section>
                    {chapters.map(x => x["chapter_title"]).map((x,i) =>
                        <Link to={"/work/" + work_id + "/" + i}>
                            <h3 key={i}>
                                {x}
                            </h3>
                        </Link>
                    )}
                </section>
            </article>
        </main>
    )
}

export default Work