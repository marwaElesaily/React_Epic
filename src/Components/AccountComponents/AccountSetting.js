import Modal from "./AccountSettingComponents/Modal";
import Input from "./AccountSettingComponents/Input";
import { useTranslation } from 'react-i18next';

const AccountSetting = () => {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl">{t('AccountSetting')}</h1>
      <h1 className="pb-10">{t('ManageAccountDetails')}</h1>
      <h1 className="font-bold">{t('AccountInformation')}</h1>
      <h4 className="font-bold mb-5">
      {t('id')} : <span className="font-light">6566565656566</span>
      </h4>
      <div className="flex flex-row justify-between items-center px-40">
        <Input
          label={t("Username")}
          placeholder={"rofaalfons"}
          type={"text"}
          content={"Username"}
        />
        <Input
          label={t("Email")}
          placeholder={"rofa.alfons7@gmail.com"}
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
