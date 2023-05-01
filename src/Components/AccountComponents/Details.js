import { useParams } from "react-router-dom";

const Details = (props) => {
  let { id } = useParams();
  console.log(id);
  return <div className={props.class}>{id}</div>;
};

export default Details;
