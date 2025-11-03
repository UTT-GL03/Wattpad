import WorkHeadlines from "../fragments/WorkHeadlines.jsx";
import data from "../assets/sample_data.json";
import WorkHeadline from "../fragments/WorkHeadlines.jsx";
import Header from "../fragments/Header.jsx";
function Library() {
    return (
        <main className="container">
            {data.works.map((x, i) =>
                <WorkHeadline {...x} key={i} />
            )}
        </main>
    )
}

export default Library;