import { Link } from "react-router-dom";

const AccountCard = (props) => {
  return (
    <Link
      onClick={(e) => {
        console.log(e.target.outerText);
      }}
      to={props.to}
      className={props.class}
    >
      {props.icon}
      <h1>{props.title}</h1>
    </Link>
  );
};

export default AccountCard;
