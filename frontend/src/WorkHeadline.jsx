import { Link } from 'react-router'
import data from './assets/sample_data.json'

function WorkHeadlines() {
  const articlesByRow = Object.values(
    Object.groupBy(data.articles, (x, i) => Math.floor(i/3))
  )
  return (
    <main className="container">
      {articlesByRow.map((x, i) =>
        <div key={i} className="grid">
          {x.map((y, j) =>
            <WorkHeadline {...y} key={j} />
          )}
        </div>
      )}
    </main>
  )
}

function WorkHeadline({work_title, published, tags}) {
  return (
    <article>
      <header>
        <span className="tag"> {tags} </span>
        <time> {published} </time>
      </header>
      <Link to={published}>
        <h2>{work_title}</h2>
      </Link>
    </article>
  )
}

export default WorkHeadlines