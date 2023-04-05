import { CurrencyDollar, Pass, PersonFill } from "react-bootstrap-icons";
import classes from "./Account.module.css";
import AccountCard from "../../Components/AccountComponents/AccountCard";
import Transactions from "../../Components/AccountComponents/Transactions";
const Account = () => {
  return (
    <div className={classes.accountWrapper}>
      <div className={classes.leftCol}>
        <AccountCard
          icon={<PersonFill />}
          class={classes.card}
          title={"Account Setting"}
          // to={"/account/:comp"}
        />
        <AccountCard
          icon={<Pass />}
          class={classes.card}
          title={"Password & Security"}
          // to={"/account/:comp"}
        />
        <AccountCard
          icon={<CurrencyDollar />}
          class={classes.card}
          title={"Transactions"}
        />
      </div>
      <div className={classes.rightCol}></div>
      {/* <Details class={classes.rightCol} /> */}
    </div>
  );
};

export default Account;
