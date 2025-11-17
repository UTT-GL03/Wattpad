import {AuthContext} from "../contexts.jsx";
import {useContext} from "react";
import {useParams} from "react-router";
import WorkHeadline from "../fragments/WorkHeadline.jsx";
import sendRequest from "../MockApiServer.js";

function Author() {
    const {author_id} = useParams();
    const auth = useContext(AuthContext);
    const author = sendRequest("api/author/"+author_id);
    const works = sendRequest("api/work?filter=author_id="+author_id);
    const is_current_author = auth.author_id === +author_id && auth.logged;
    console.log(works);

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
            <section>
                {works && works.map((x) =>
                    <WorkHeadline work={x} author={author} key={x.work_id} canModify={is_current_author} />
                )}
            </section>
        </main>
    )

}

export default Author;