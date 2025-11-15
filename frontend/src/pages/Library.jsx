import WorkHeadlines from "../fragments/WorkHeadline.jsx";
import data from "../assets/sample_data.json";
import WorkHeadline from "../fragments/WorkHeadline.jsx";
import Header from "../fragments/Header.jsx";
function Library() {
    return (
        <main className="container">
            {data.works.map((x, i) =>
                <WorkHeadline {...x} author={data.authors.find(s => s.author_id === x.author_id)} key={i} />
            )}
        </main>
    )
}

export default Library;