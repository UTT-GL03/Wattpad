import Metadata from "./Metadata.jsx";
function WorkHeadline(props) {
    const {published, summary, ..._} = props
  return (

    <article>
        <Metadata {...props}></Metadata>
      <p>{summary}</p>
    </article>
  )
}

export default WorkHeadline