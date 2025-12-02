import {Link} from "react-router";

function Metadata({work, author, canModify}) {
    return (
        <header className="container-fluid">
            <div className="sub-container">
            {work && <>
                <Link className="link-work" to={"/work/" + work._id}>
                    <h2>{work.work_title}</h2>
                </Link>
                {canModify && <Link to={"/work/" + work._id+"#modify"}>
                        <small>Modify</small>
                    </Link>}
            </>}
            </div>
            <div className="sub-container">
                {work && work.tags && <span className="tag"> {work.tags} </span>}
                {author &&
                    <Link className="link-author" to={"/author/"+author._id}>
                        {author && <address> {author.author_name} </address>}
                    </Link>
                }
                {work &&
                    <time> {work.published} </time>
                }
            </div>
        </header>
   )
}

export default Metadata;