import { Link } from 'react-router'
import data from './assets/sample_data.json'

function WorkHeadlines() {
  return (
    <main className="container">
        {data.works.map((x, i) =>
          <WorkHeadline {...x} key={i} />
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
      <h2>{work_title}</h2>
    </article>
  )
}

/*function WorkHeadline({work_title, published, tags}) {
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
}*/

export default WorkHeadlines