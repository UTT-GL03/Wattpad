import Metadata from "./Metadata.jsx";
function WorkHeadline(props) {
    const {work, author, ...rest} = props;
  return (
    <article className="work-headline">
        <Metadata work={work} author={author} {...rest} ></Metadata>
      <p>{work.summary}</p>
    </article>
  )
}

export default WorkHeadline