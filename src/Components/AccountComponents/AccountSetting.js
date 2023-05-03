import { ArrowLeft } from "react-bootstrap-icons";
import Input from "./AccountSettingComponents/Input";
import { useTranslation } from "react-i18next";

import style from "./AccountCard.module.css";

import { useSelector } from "react-redux";

const AccountSetting = () => {
  const { t, i18n } = useTranslation();

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
      <div className="flex flex-row justify-between items-center ">
        <Input
          label={t("Username")}
          placeholder={displayName}
          type={"text"}
          content={"Username"}
        />
        <Input
          label={t("Email")}
          placeholder={email}
          type={"email"}
          id={"email"}
          content={"Email"}
        />
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default AccountSetting;
