import { CurrencyDollar, Pass, PersonFill } from "react-bootstrap-icons";
import classes from "./Account.module.css";
import AccountCard from "../../Components/AccountComponents/AccountCard";
import Transactions from "../../Components/AccountComponents/Transactions";
import Password from "../../Components/AccountComponents/Password";
import AccountSetting from "../../Components/AccountComponents/AccountSetting";
import { Outlet } from "react-router-dom";
const Account = () => {
  return (
    <div className={classes.accountWrapper}>
      <div className={classes.leftCol}>
        <AccountCard
          icon={<PersonFill />}
          class={classes.card}
          title={"Account Setting"}
          to={"/account/setting"}
        />
        <AccountCard
          icon={<Pass />}
          class={classes.card}
          title={"Password & Security"}
          to={"/account/password"}
        />
        <AccountCard
          icon={<CurrencyDollar />}
          class={classes.card}
          title={"Transactions"}
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
