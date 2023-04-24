import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Store/Store";

const SignIn = () => {
  const displayName = useSelector((state) => state.epic.displayName);
  const emailse = useSelector((state) => state.epic.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("rofa.alfons7@gmail.com");
  const [password, setPassword] = useState("test12345");
  useEffect(() => {
    console.log(displayName);
    console.log(emailse);
  }, [displayName, emailse]);

  const submitHandler = () => {
    dispatch(
      login({
        email,
        password,
      })
    ).then((res) => {
      navigate("/");
    });
  };

  return (
    <div className="p-10 flex justify-center ">
      <div className="bg-neutral-800 p-10 flex justify-center items-center flex-col rounded">
        <img
          src="epic white logo.png"
          alt=""
          className="object-scale-down h-10 w-10"
        />
        <h1 className="bold text-lg font-bold">Sign In</h1>
        <div className="flex flex-col w-4/5	 justify-between items-center">
          <input
            value={email}
            type="email"
            placeholder="Email Address"
            className="bg-none border  rounded border-white w-full text-white placeholder-white h-full p-2 bg-transparent"
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            className="bg-none my-4 border rounded border-white w-full text-white placeholder-white p-2 bg-transparent h-full"
          />

          <button onClick={submitHandler}>LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
