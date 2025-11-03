import { useParams } from 'react-router'
import data from '../assets/sample_data.json'
import Metadata from "../fragments/Metadata.jsx";

function Work() {
    const {id} = useParams()
    const {work_id, work_title, author, published, chapters} =
        data.works.find(x => id === x.published)
    return (
        <main className="container">
            <article>
                <Metadata work_title={work_title} author={author} published={published}></Metadata>
                {chapters[0].content.split('\n\n').map((x,i) =>
                    {
                        const hasArg = i === "chapter_title";
                        return (hasArg && <p key={i}>
                            {x}
                        </p>)
                    }
                )}
            </article>
        </main>
    )
}

export default Work