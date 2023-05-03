const Button = (props) => {
  const inputEnableHandler = props.inputEnableHandler;
  return (
    <div className="flex justify-center space-x-2">
      <button
        onClick={inputEnableHandler}
        type="button"
        className={`rounded ${props.class} ms-3 px-3 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}
      >
        {props.icon}
      </button>
    </div>
  );
};

export default Button;
