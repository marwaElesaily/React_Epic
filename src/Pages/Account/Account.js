import { CurrencyDollar, Pass, PersonFill } from "react-bootstrap-icons";
import classes from "./Account.module.css";
import AccountCard from "../../Components/AccountComponents/AccountCard";
import Transactions from "../../Components/AccountComponents/Transactions";
import Password from "../../Components/AccountComponents/Password";
import AccountSetting from "../../Components/AccountComponents/AccountSetting";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Account = () => {

  const { t, i18n } = useTranslation();

  return (
    <div className={classes.accountWrapper}>
      <div className={classes.leftCol}>
        <AccountCard
          icon={<PersonFill />}
          class={classes.card}
          title={t("AccountSetting")}
          to={"/account/setting"}
        />
        <AccountCard
          icon={<Pass />}
          class={classes.card}
          title={t("Password&Security")}
          to={"/account/password"}
        />
        <AccountCard
          icon={<CurrencyDollar />}
          class={classes.card}
          title={t("Transactions")}
          to={"/account/transactions"}
        />
      </div>
      <div className={classes.rightCol}>
        <Outlet />
      </div>
    </div>
  );
};

export default Account;
