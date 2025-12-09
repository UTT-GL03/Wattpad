import {AuthContext} from "../contexts.jsx";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import WorkHeadline from "../fragments/WorkHeadline.jsx";
import sendRequest from "../MockApiServer.js";

function Author() {
    const {author_id} = useParams();
    const auth = useContext(AuthContext);
    let [author, setAuthor] = useState();
    let [works, setWorks] = useState();
    useEffect(() => {
        fetch('http://localhost:5984/wattpad/_find', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selector: { type: "work", author_id: parseInt(author_id) },
          fields: ["_id","type","author_name","tags","published","author_id","work_title","summary"],
          limit:500
        })
        }).then(r=> r.json()).then(r => {
            setWorks(r.docs);
        })
        fetch(`http://localhost:5984/wattpad/${author_id}`)
            .then(r=> r.json())
            .then(r => {
                setAuthor(r);
            })
    }, []);


    const is_current_author = auth.author_id === +author_id && auth.logged;

    return (
        author === undefined && author_id === "null" &&
        <main className="container">
            <h2>Your profile can't be accessed, you need to login</h2>
        </main>
    ) || (
        author === undefined &&
        <main className="container">
            <h2>No authors have been found</h2>
        </main>
    ) || (
        <main className="container">
            <h2>{is_current_author ? <span>Welcome back!</span> : <span>Profil of</span>} {author.author_name}</h2>
            <section className="author-page">
                {works && works.map((x) =>
                    <WorkHeadline work={x} author={author} key={x._id} canModify={is_current_author} />
                )}
            </section>
        </main>
    )

}

export default Author;