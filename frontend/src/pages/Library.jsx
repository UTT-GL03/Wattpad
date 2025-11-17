import WorkHeadline from "../fragments/WorkHeadline.jsx";
import sendRequest from "../MockApiServer.js";
function Library() {
    const works = sendRequest("api/work?tri=published");
    return (
        <main className="container">
            {works && works.map((x, i) =>
                <WorkHeadline work={x} key={i} />
            )}
        </main>
    )
}

export default Library;