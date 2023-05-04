import { useDispatch, useSelector } from "react-redux";
import Input from "./AccountSettingComponents/Input";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { updatePassword } from "../../Store/store";
import { Eye, EyeFill } from "react-bootstrap-icons";

const Password = () => {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const userId = useSelector((state) => state.epic.id);
  const { t, i18n } = useTranslation();
  const oldPasswordChangeHandler = (e) => {
    setOldPassword(e.target.value);
  };
  const newPasswordChangeHandler = (e) => {
    setNewPassword(e.target.value);
  };
  const changePasswordHandler = () => {
    dispatch(updatePassword({ id: userId, oldPassword, newPassword }));
  };
  return (
    <div>
      <h1 className="text-3xl">{t("PasswordSetting")}</h1>
      <h1 className="pb-10">{t("ManageAccountDetails")}</h1>
      <h1 className="font-bold">{t("AccountInformation")}</h1>
      <h4 className="font-bold mb-5">
        {t("id")} : <span className="font-light">{userId}</span>
      </h4>
      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-between w-1/2">
          <Input
            changeHandler={oldPasswordChangeHandler}
            value={oldPassword}
            label={t("OldPassword")}
            // placeholder={"rofaalfons"}
            type={"password"}
            content={"Username"}
          />
          <Input
            changeHandler={newPasswordChangeHandler}
            value={newPassword}
            label={t("NewPassword")}
            // placeholder={"rofaalfons"}
            type={"password"}
            content={"Username"}
          />
        </div>
        <button
          onClick={changePasswordHandler}
          // onClick={changeDisplayNameHandler}
          className="active:bg-gray-900 w-1/2"
        >
          Change Password
        </button>
      </div>
      <hr className="my-10" />
    </div>
  );
};

export default Password;
