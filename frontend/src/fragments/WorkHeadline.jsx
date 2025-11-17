import Metadata from "./Metadata.jsx";
function WorkHeadline(props) {
    const {work, ...rest} = props;
  return (
    <article>
        <Metadata work={work} {...rest} ></Metadata>
      <p>{work.summary}</p>
    </article>
  )
}

export default WorkHeadline