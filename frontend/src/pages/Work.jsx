import {Link, useParams} from 'react-router'
import Metadata from "../fragments/Metadata.jsx";
import sendRequest from "../MockApiServer.js";

function Work() {
    const {work_id} = useParams();
    const work = sendRequest("api/work/"+work_id);
    console.log(work);
    /* TODO: plus tard,
     ** - ajouter le composant headline chapter (ajout plus facilement publier ou non et séparer la logique des composant pour l'appel work)
     ** - séparer dans les ressources les chapitres des ouvrages
     ** - avoir dans la ressource work seulement les headlines des chapitres
     ** - avoir dans la nouvelle ressource chapitre tout le chapitre et ses metadata
    */
    return (
        <main className="container">
            <article>
                <Metadata work={work} ></Metadata>
                <p>{work.summary}</p>
                <section>
                    {work.chapters.map(x => x["chapter_title"]).map((x,i) =>
                        <Link key={i} to={"/work/" + work_id + "/chapter/" + i}>
                            <h3>
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