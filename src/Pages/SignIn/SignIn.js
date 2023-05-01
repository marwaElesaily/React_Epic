import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Store/Store";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const SignIn = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values, actions) => {
      dispatch(
        login({
          email: formik.values.email,
          password: formik.values.password,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "rejected") {
          setErr(true);
        } else {
          setErr(false);
          navigate("/");
        }
      });
    },
  });

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
          <form className="flex flex-col" onSubmit={formik.handleSubmit}>
            <input
              onChange={formik.handleChange}
              name="email"
              id="email"
              value={formik.values.email}
              type="email"
              placeholder="Email Address"
              className="bg-none border rounded border-white w-full text-white placeholder-white  p-2 bg-transparent"
            />
            {formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
            <input
              onChange={formik.handleChange}
              name="password"
              id="password"
              value={formik.values.password}
              type="password"
              placeholder="Password"
              className="bg-none my-4 border rounded border-white w-full text-white placeholder-white p-2 bg-transparent "
            />
            {formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
            <button>LOGIN</button>
          </form>
          {err && (
            <div className="my-2 text-center text-red-600">
              Please Check your email or password
            </div>
          )}
          <div className="my-2">Don't have an account ?</div>
          <Link
            to={"/signUp"}
            className="text-lg text-center underline transition-all hover:font-bold"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
