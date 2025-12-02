import {Link, useParams} from 'react-router'
import Metadata from "../fragments/Metadata.jsx";
import sendRequest from "../MockApiServer.js";
import {useEffect, useState} from "react";

function Chapter() {
    const {work_id, chapter_id} = useParams()
    let [chapter, setChapter] = useState();
    let [author, setAuthor] = useState();
    let [work, setWork] = useState();
    useEffect(() => {
        fetch("/sample_data.json").then(r=> r.json()).then(r => {
            const work = r.docs.find(w => (w.type === "work" && w._id === work_id))
            setWork(work);
            setAuthor(r.docs.find(a => (a.type === "author" && a._id === work.author_id)));
            console.log(work)
            setChapter(work.chapters.find(c => c.chapter_id === +chapter_id));
        })
    }, [work_id, chapter_id]);
    return (
        <main className="container">
            {chapter && <>
            <article className="chapter-page">
                <Metadata work={work} author={author}></Metadata>
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
                {chapter_id > 0 && <Link className="link-prev" to={"/work/"+work_id +"/chapter/"+(+chapter_id-1)}><button>Previous</button></Link>}
                {chapter_id < work.chapters.length - 1 && <Link className="link-next" to={"/work/"+work_id +"/chapter/"+(+chapter_id+1)}><button>Next</button></Link>}
            </section>
            </>}
            {!chapter && <h2>This chapter was not found</h2>}
        </main>
    )
}

export default Chapter