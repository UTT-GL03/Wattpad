import {Link} from "react-router";

function Metadata({work_title, work_id, author_id, author, published, tags}) {
    return (
        <header className="container-fluid">
            <Link to={"/work/" + work_id}>
                <h2>{work_title}</h2>
            </Link>
            {tags && <span className="tag"> {tags} </span>}
            <Link to={author_id}>
                <address> {author} </address>
            </Link>
            <time> {published} </time>
        </header>
   )
}

export default Metadata;