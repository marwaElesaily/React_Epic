import Input from "./AccountSettingComponents/Input";
import { useTranslation } from 'react-i18next';

const Password = () => {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl">{t('PasswordSetting')}</h1>
      <h1 className="pb-10">{t('ManageAccountDetails')}</h1>
      <h1 className="font-bold">{t('AccountInformation')}</h1>
      <h4 className="font-bold mb-5">
      {t('id')} : <span className="font-light">6566565656566</span>
      </h4>
      <div className="flex flex-row justify-between items-center px-40">
        <Input
          label={t("OldPassword")}
          // placeholder={"rofaalfons"}
          type={"password"}
          content={"Username"}
        />
        <Input
          label={t("NewPassword")}
          // placeholder={"rofaalfons"}
          type={"password"}
          content={"Username"}
        />
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default Password;
