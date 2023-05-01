import { CheckCircleFill, PencilFill } from "react-bootstrap-icons";
import Button from "./Button";
import { useState } from "react";

const Input = (props) => {
  const [inputEnabled, setInputEnabled] = useState(false);
  function inputEnableHandler() {
    setInputEnabled(!inputEnabled);
  }
  return (
    <div className="flex flex-row justify-start items-end">
      <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            {props.label}
          </span>
          <input
            type={props.type}
            placeholder={props.placeholder}
            disabled={!inputEnabled && true}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
          />
        </label>
      </form>
      <Button
        inputEnableHandler={inputEnableHandler}
        icon={inputEnabled ? <CheckCircleFill /> : <PencilFill />}
        class={inputEnabled ? "bg-green-600" : "bg-primary"}
        id={props.id}
      />
    </div>
  );
};

export default Input;
