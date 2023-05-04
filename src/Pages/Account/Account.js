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

// import React, { useState } from "react";
// import { CurrencyDollar, Pass, PersonFill } from "react-bootstrap-icons";
// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList,
// } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";

// const Account = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       path: "/account/setting",
//       name: "Dashboard",
//       icon: <PersonFill />,
//     },
//     {
//       path: "/account/password",
//       name: "About",
//       icon: <Pass />,
//     },
//     {
//       path: "/account/transactions",
//       name: "Analytics",
//       icon: <CurrencyDollar />,
//     },
//   ];
//   return (
//     <div className={classes.accountWrapper}>
//       <div className="bg-white">
//         <div className="top_section">
//           <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//             Logo
//           </h1>
//           <div
//             style={{ marginLeft: isOpen ? "50px" : "0px" }}
//             className="bars text-black"
//           >
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="flex"
//             activeclassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="text-black"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{<Outlet />}</main>
//     </div>
//   );
// };

// export default Account;
