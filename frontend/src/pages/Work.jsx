import { useParams } from 'react-router'
import data from '../assets/sample_data.json'

function Work() {
    const {id} = useParams()
    const {work_title, author, published, chapters} =
        data.works.find(x => id === x.published)
    return (
        <main className="container">
            <article>
                <header>
                    <h2>{work_title}</h2>
                    <address> {author} </address>
                    <time> {published} </time>
                </header>
                {chapters[0].content.split('\n\n').map((x,i) =>
                    <p key={i}>
                        {x}
                    </p>
                )}
            </article>
        </main>
    )
}

export default Work