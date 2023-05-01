import Input from "./AccountSettingComponents/Input";
import { useSelector } from "react-redux";

const AccountSetting = () => {
  const userId = useSelector((state) => state.epic.id);
  const displayName = useSelector((state) => state.epic.displayName);
  const email = useSelector((state) => state.epic.email);

  return (
    <div>
      <h1 className="text-3xl">Account Setting</h1>
      <h1 className="pb-10">Manage your Account Details</h1>
      <h1 className="font-bold">Account information</h1>
      <h4 className="font-bold mb-5">
        id : <span className="font-light">{userId}</span>
      </h4>
      <div className="flex flex-row justify-between items-center px-40">
        <Input
          label={"Username"}
          placeholder={displayName}
          type={"text"}
          content={"Username"}
        />
        <Input
          label={"Email"}
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
