import {Link} from "react-router";

function Metadata({work_title, work_id, author_id, author, published, tags, canModify}) {
    return (
        <header className="container-fluid">
            <Link to={"/work/" + work_id}>
                <h2>{work_title}</h2>
                {canModify && <Link to={"/work/" + work_id+"#modify"}>
                    <small>Modify</small>
                </Link>}
            </Link>
            {tags && <span className="tag"> {tags} </span>}
            <Link to={"/author/"+author_id}>
                {author && <address> {author.author_name} </address>}
            </Link>
            <time> {published} </time>
        </header>
   )
}

export default Metadata;