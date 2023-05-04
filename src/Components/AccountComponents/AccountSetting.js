import { ArrowLeft } from "react-bootstrap-icons";
import Input from "./AccountSettingComponents/Input";
import { useTranslation } from "react-i18next";

import style from "./AccountCard.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUserDisplayName, updateUserEmail } from "../../Store/store";

const AccountSetting = () => {
  const id = useSelector((state) => state.epic.id);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [typedEmail, setTypedEmail] = useState("");

  const { t, i18n } = useTranslation();
  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setTypedEmail(e.target.value);
  };
  const changeDisplayNameHandler = () => {
    dispatch(updateUserDisplayName({ id, displayName: userName }));
  };
  const changeEmailHandler = () => {
    dispatch(updateUserEmail({ id, email: typedEmail }));
  };

  const userId = useSelector((state) => state.epic.id);
  const displayName = useSelector((state) => state.epic.displayName);
  const email = useSelector((state) => state.epic.email);

  return (
    <div>
      <h1 className="text-3xl">{t("AccountSetting")}</h1>
      <h1 className="pb-10">{t("ManageAccountDetails")}</h1>
      <h1 className="font-bold">{t("AccountInformation")}</h1>
      <h4 className="font-bold mb-5">
        {t("id")} : <span className="font-light">{userId}</span>
      </h4>
      <div className="flex flex-row justify-between items-center w-3/4">
        <div>
          <Input
            changeHandler={userNameChangeHandler}
            value={userName}
            label={t("Username")}
            placeholder={displayName}
            type={"text"}
            content={"Username"}
          />
          <button
            onClick={changeDisplayNameHandler}
            className="active:bg-gray-900"
          >
            Change Username
          </button>
        </div>
        <div>
          <Input
            changeHandler={emailChangeHandler}
            value={typedEmail}
            label={t("Email")}
            placeholder={email}
            type={"email"}
            id={"email"}
            content={"Email"}
          />
          <button onClick={changeEmailHandler}>Change Email</button>
        </div>
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default AccountSetting;
