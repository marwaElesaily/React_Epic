import { useEffect } from "react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getPurchase } from "../../Store/store";

const Transactions = () => {
  const { t, i18n } = useTranslation();
  const id = useSelector((state) => state.epic.id);
  const purchaseHistory = useSelector((state) => state.epic.purchaseHistory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchase({ userId: id }));
  }, []);

  let gamesList = purchaseHistory.map((game) => {
    return (
      <tr className="text-center bg-white ">
        <td>{game.gameName}</td>
        <td>${game.Price}</td>
        <td>Purchased</td>
      </tr>
    );
  });

  return (
    <Fragment>
      <div className="text-3xl">{t("Transactions")} </div>
      <h1 className="pb-10">{t("View your Transactions")}</h1>
      <table className="w-full bg-gray-200">
        <tr>
          <th>Description</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
        {gamesList}
      </table>
    </Fragment>
  );
};

export default Transactions;
