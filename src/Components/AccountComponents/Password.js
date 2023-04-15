import Input from "./AccountSettingComponents/Input";

const Password = () => {
  return (
    <div>
      <h1 className="text-3xl">Password Setting</h1>
      <h1 className="pb-10">Manage your Account Details</h1>
      <h1 className="font-bold">Account information</h1>
      <h4 className="font-bold mb-5">
        id : <span className="font-light">6566565656566</span>
      </h4>
      <div className="flex flex-row justify-between items-center px-40">
        <Input
          label={"Old Password"}
          // placeholder={"rofaalfons"}
          type={"password"}
          content={"Username"}
        />
        <Input
          label={"New Password"}
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
