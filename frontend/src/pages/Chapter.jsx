import {Link, useParams} from 'react-router'
import data from '../assets/sample_data.json'
import Metadata from "../fragments/Metadata.jsx";

function Chapter({num}) {
    const {id} = useParams()
    const {chapters, ...props} =
        data.works.find(x => id === x.published)
    return (
        <main className="container">
            <section>
                <Metadata {...props}></Metadata>
                {chapters[num].content.split('\n\n').map((x,i) =>
                    <p key={i}>
                        {x}
                    </p>
                )}
            </section>
            <section>
                <Link to={"/work/"}></Link>
            </section>
        </main>
    )
}

export default Chapter