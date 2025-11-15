import {AuthContext} from "../contexts.jsx";
import {useContext} from "react";
import {useNavigate, useParams} from "react-router";
import data from "../assets/sample_data.json";
import WorkHeadline from "../fragments/WorkHeadline.jsx";

function Author() {
    const {author_id} = useParams();
    const auth = useContext(AuthContext);
    console.log(auth, author_id);
    const author =
        data.authors.find(x => +author_id === x.author_id);
    const works = data.works.filter(x => x.author_id !== +author_id);
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
            <h2>{is_current_author && <span>Welcome back!</span>} {author.author_name}</h2>
            <section>
                {works.map((x, i) =>
                    <WorkHeadline {...x} key={i} canModify={is_current_author} />
                )}
            </section>
        </main>
    )

}

export default Author;