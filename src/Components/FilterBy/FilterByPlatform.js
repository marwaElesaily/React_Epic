import { useTranslation } from "react-i18next";

export default function FilterByPlatform({
  filterItemPlatform,
  setFilterItemPlatform,
}) {
  const onClickHandler = (evt) => {
    setFilterItemPlatform(evt.target.id);
  };
  return (
    <>
      <div className="px-5 py-4">
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="windows"
            onClick={onClickHandler}
          >
            Windows
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="mac"
            onClick={onClickHandler}
          >
            Mac OS
          </a>
        </div>
      </div>
    </>
  );
}
