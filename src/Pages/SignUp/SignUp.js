import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../Store/Store";

const SignUp = () => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [firstName, setFirstName] = useState("Rofael");
  const [lastName, setLastName] = useState("Alfons");
  const [email, setEmail] = useState("rofa.alfons7@gmail.com");
  const [password, setPassword] = useState("test12345");
  const [date, setDate] = useState("1998-05-09");
  const [lang, setLang] = useState("en");
  const [country, setCountry] = useState("Egypt");
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries((prevState) => prevState.concat(res.data));
    });
  }, []);
  let countriesList = countries.map((country, i) => {
    return (
      <option key={i} value={country.name.common}>
        {country.name.common}
      </option>
    );
  });

  const submitHandler = () => {
    dispatch(
      createUser({
        firstName,
        lastName,
        email,
        password,
        country,
        displayName: "RofaAlfons",
      })
    );
  };
  console.log(countries);

  return (
    <div className="p-10 flex justify-center ">
      <div className="bg-neutral-800 p-10 flex justify-center items-center flex-col rounded">
        <img
          src="epic white logo.png"
          alt=""
          className="object-scale-down h-10 w-10"
        />
        <h1 className="bold text-lg font-bold">Sign Up</h1>
        <div className="flex flex-col w-4/5	 justify-between items-center">
          <div className="flex my-4 justify-between">
            <input
              value={firstName}
              type="text"
              placeholder="First Name"
              className="bg-none border rounded border-white w-2/5 text-white placeholder-white p-2 bg-transparent"
            />
            <input
              value={lastName}
              type="text"
              placeholder="Last Name"
              className="bg-none border rounded border-white w-2/5 text-white placeholder-white p-2 bg-transparent"
            />
          </div>
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
          <input
            value={date}
            type="date"
            className="bg-none my-4 border rounded border-white w-full text-white placeholder-white p-2 bg-transparent h-full"
          />
          <select
            value={lang}
            name="lang"
            id="lang"
            className="bg-none focus:bg-black my-4 border rounded border-white w-full text-white placeholder-white p-2 bg-transparent"
          >
            {/* {countriesList} */}
            <option value="">--Your Preferred Language--</option>
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
          <select
            value={country}
            name="country"
            id="country"
            className="bg-none focus:bg-black my-4 border rounded border-white w-full text-white placeholder-white p-2 bg-transparent"
          >
            <option value="">--Select Your Country--</option>
            {countriesList}
          </select>
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
