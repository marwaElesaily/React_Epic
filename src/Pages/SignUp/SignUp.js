import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../Store/store";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName =`${t('Required')}`;
    } else if (values.firstName.length > 20) {
      errors.firstName = `${t('validation')}`
    }
    if (!values.lastName) {
      errors.lastName = `${t('Required')}`
    } else if (values.lastName.length > 20) {
      errors.lastName = `${t('validation')}`
    }
    if (!values.displayName) {
      errors.displayName = `${t('Required')}`
    } else if (values.displayName.length > 20) {
      errors.displayName = `${t('validation')}`
    }
  
    if (!values.email) {
      errors.email = `${t('Required')}`;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = `${t('InvalidEmail')}`
    }
    if (!values.country) {
      errors.country = `${t('Required')}`;
    }
    if (!values.date) {
      errors.date = `${t('Required')}`;
    }
    if (!values.lang) {
      errors.lang = `${t('Required')}`;
    }
    if (!values.password) {
      errors.password = `${t('InvalidPassword')}`;
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
        values.password
      )
    ) {
      errors.password = `${t('Required')}`
    }
  
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      email: "",
      password: "",
      date: "",
      lang: "",
      country: "",
    },
    validate,
    onSubmit: (values, actions) => {
      console.log(new Date(values.date));
      dispatch(
        createUser({
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          email: formik.values.email,
          password: formik.values.password,
          country: formik.values.country,
          displayName: formik.values.displayName,
          dateOfBirth: new Date(formik.values.date),
        })
      );
      navigate("/signIn");
    },
  });
  const [countries, setCountries] = useState([]);
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

  return (
    <div className="p-10 flex justify-center ">
      <div className="bg-neutral-800 p-10 flex justify-center items-center flex-col rounded">
        <img
          src="epic white logo.png"
          alt=""
          className="object-scale-down h-10 w-10"
        />
        <h1 className="bold text-lg font-bold">{t('SignUp')}</h1>
        <div className="w-4/5 ">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-3 justify-between">
              <div className="flex justify-between">
                <input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder={t('FirstName')}
                  className={`bg-none border rounded ${
                    formik.errors.firstName ? "border-red-600" : "border-white"
                  } w-2/5 text-white placeholder-white p-2 bg-transparent`}
                />
                <input
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  type="text"
                  placeholder={t('LastName')}
                  className={`bg-none border rounded ${
                    formik.errors.lastName ? "border-red-600" : "border-white"
                  } w-2/5 text-white placeholder-white p-2 bg-transparent`}
                />
              </div>
              <div className="flex justify-between">
                {formik.errors.firstName ? (
                  <div className="text-red-600">{formik.errors.firstName}</div>
                ) : null}
                {formik.errors.lastName ? (
                  <div className="text-red-600">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <input
                id="displayName"
                name="displayName"
                value={formik.values.displayName}
                onChange={formik.handleChange}
                type="text"
                placeholder={t('DisplayName')}
                className={`bg-none border rounded ${
                  formik.errors.displayName ? "border-red-600" : "border-white"
                } w-full text-white placeholder-white p-2 bg-transparent`}
              />
              {formik.errors.displayName ? (
                <div className="text-red-600 ">{formik.errors.displayName}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                placeholder={t('EmailAddress')}
                className={`bg-none border rounded ${
                  formik.errors.email ? "border-red-600" : "border-white"
                } w-full text-white placeholder-white p-2 bg-transparent`}
              />
              {formik.errors.email ? (
                <div className="text-red-600 ">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                placeholder={t('Password')}
                className={`bg-none border rounded ${
                  formik.errors.password ? "border-red-600" : "border-white"
                } w-full text-white placeholder-white p-2 bg-transparent`}
              />
              {formik.errors.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <input
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                type="date"
                className={`bg-none border rounded ${
                  formik.errors.date ? "border-red-600" : "border-white"
                } w-full text-white placeholder-white p-2 bg-transparent`}
              />
              {formik.errors.date ? (
                <div className="text-red-600">{formik.errors.date}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <select
                id="lang"
                name="lang"
                value={formik.values.lang}
                onChange={formik.handleChange}
                className={` border rounded ${
                  formik.errors.lang ? "border-red-600" : "border-white"
                } w-full text-white placeholder-white p-2 bg-transparent`}
              >
                {/* {countriesList} */}
                <option value="">{t('PreferredLanguage')}</option>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
              {formik.errors.lang ? (
                <div className="text-red-600">{formik.errors.lang}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <select
                value={formik.values.country}
                onChange={formik.handleChange}
                name="country"
                id="country"
                className={`bg-none border rounded ${
                  formik.errors.country ? "border-red-600" : "border-white"
                } w-full text-white placeholder-white p-2 bg-transparent`}
              >
                <option value="">{t('SelectCountry')}</option>
                {countriesList}
              </select>
              {formik.errors.country ? (
                <div className="text-red-600">{formik.errors.country}</div>
              ) : null}
            </div>
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
              type="submit"
            >
              {t('Submit')}
            </button>
          </form>
        </div>
        <div className="my-2">{t('AlreadyHaveAccount')}</div>
        <Link
          to={"/signIn"}
          className="text-lg text-center underline transition-all hover:font-bold"
        >
          {t('SignInnow')}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
