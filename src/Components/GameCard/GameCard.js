import { Apple, Windows } from "react-bootstrap-icons";
import classes from "./GameCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Store/Store";

const GameCard = (props) => {
  const removeFromCartHandler = props.removeFromCartHandler(props.id);
  return (
    <div className={classes.gameCard}>
      <div className={classes.leftCol}>
        <img className={classes.gamePoster} src={props.imgURL} alt="" />
        <div className={classes.info}>
          <h6 className={classes.baseGame}>BASE GAME</h6>
          <h3 className={classes.gameName}>{props.gameName}</h3>
          <h4 className={classes.refundType}>Self-Refundable</h4>
          {props.platform === "windows" ? <Windows /> : <Apple />}
        </div>
      </div>
      <div className={classes.rightCol}>
        <h4 className={classes.price}>${props.price}</h4>
        <div className={classes.buttons}>
          <h6>Move to {props.moveTo}</h6>
          <h6 onClick={removeFromCartHandler}>Remove</h6>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
