import {Link, useParams} from 'react-router'
import Metadata from "../fragments/Metadata.jsx";
import sendRequest from "../MockApiServer.js";
import {useEffect, useState} from "react";

function Work() {
    const {work_id} = useParams();
    let [work, setWork] = useState();
    let [author, setAuthor] = useState();

    useEffect(() => {
        fetch(`http://localhost:5984/wattpad/${work_id}`)
            .then(r=> r.json())
            .then(r => {
                setWork(r);
                return fetch(`http://localhost:5984/wattpad/${r.author_id}`)
            })
            .then(r=> r.json())
            .then(r => {
                setAuthor(r);
            })
    
    }, []);


    /* TODO: plus tard,
     ** - ajouter le composant headline chapter (ajout plus facilement publier ou non et séparer la logique des composant pour l'appel work)
     ** - séparer dans les ressources les chapitres des ouvrages
     ** - avoir dans la ressource work seulement les headlines des chapitres
     ** - avoir dans la nouvelle ressource chapitre tout le chapitre et ses metadata
    */
    return (
        <main className="container">
            {work &&
            <article className="work-page">
                <Metadata work={work} author={author} ></Metadata>
                <p>{work.summary}</p>
                <section>
                    {work.chapters.map(x => x["chapter_title"]).map((x,i) =>
                        <Link className="link-chapter" key={i} to={"/work/" + work_id + "/chapter/" + i}>
                            <h3>
                                {x}
                            </h3>
                        </Link>
                    )}
                </section>
            </article>}
            {!work && <h2>This work was not found</h2>}
        </main>
    )
}

export default Work