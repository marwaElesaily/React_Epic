import Modal from "./AccountSettingComponents/Modal";
import Input from "./AccountSettingComponents/Input";

const AccountSetting = () => {
  return (
    <div>
      <h1 className="text-3xl">Account Setting</h1>
      <h1 className="pb-10">Manage your Account Details</h1>
      <h1 className="font-bold">Account information</h1>
      <h4 className="font-bold mb-5">
        id : <span className="font-light">6566565656566</span>
      </h4>
      <div className="flex flex-row justify-between items-center px-40">
        <Input
          label={"Username"}
          placeholder={"rofaalfons"}
          type={"text"}
          content={"Username"}
        />
        <Input
          label={"Email"}
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
