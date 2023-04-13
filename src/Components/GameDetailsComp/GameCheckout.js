import { Apple, Windows } from "react-bootstrap-icons";
import classes from "./GameCheckout.module.css";
const GameCheckout = (props) => {
  const game = props.game;
  // const totalPrice = useSelector((state) => state.games.totalPrice);
  return (
    <div className={classes.gamesSummary}>
      <img src={game.Photos[0]} alt="" />
      <div className={classes.details}>
        <div className={classes.leftCol}>
          <h4>Refund Type</h4>
          <h4>Developer</h4>
          <h4>Publisher</h4>
          <h4>Release Date</h4>
          <h4>Platform</h4>
        </div>
        <div className={classes.rightCol}>
          <h4>Self-Refundable</h4>
          <h4>{game.Developer}</h4>
          <h4>{game.publisherName}</h4>
          <h4>{new Date(game.createdAt).toLocaleDateString()}</h4>
          <h4>{game.platForm === "windows" ? <Windows /> : <Apple />}</h4>
        </div>
      </div>
      <button>BUY NOW</button>
      <button className="bg-transparent border-solid">ADD TO CART</button>
      <button className="bg-transparent border-solid">ADD TO WISHLIST</button>
    </div>
  );
};

export default GameCheckout;
