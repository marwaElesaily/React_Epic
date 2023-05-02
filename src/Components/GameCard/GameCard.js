import { Apple, Windows } from "react-bootstrap-icons";
import classes from "./GameCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../Store/store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const GameCard = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const loader = useSelector((state) => state.epic.loader);
  const removeFromCartorWishListHandler = props.removeFromCartorWishListHandler;
  return (
    <div className={classes.gameCard}>
      <Link to={`/gameDetails/${props.id}`}>
        <div className={classes.leftCol}>
          <img className={classes.gamePoster} src={props.imgURL} alt="" />
          <div className={classes.info}>
            <h6 className={classes.baseGame}>
              {lang === "en" ? "BASE GAME" : "اللعبة الاساسية"}
            </h6>
            <h3 className={classes.gameName}>{props.gameName}</h3>
            <h4 className={classes.refundType}>{t("Self-Refundable")}</h4>
            {props.platform === "windows" ? <Windows /> : <Apple />}
          </div>
        </div>
      </Link>
      <div className={classes.rightCol}>
        <h4 className={classes.price}>
          {lang === "en"
            ? `$${props.price}`
            : `${new Intl.NumberFormat("ar-EG").format(props.price)} US$`}
        </h4>

        <div className={classes.buttons}>
          <h6 className="hover:font-bold">
            {t("Moveto")} {props.moveTo}
          </h6>
          <h6
            onClick={removeFromCartorWishListHandler}
            className="hover:font-bold"
          >
            {loader ? loader : t("Remove")}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
