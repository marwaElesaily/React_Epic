import { useTranslation } from "react-i18next";

export default function FilterByPrice({ filterItem, setFilterItem }) {
  const { t, i18n } = useTranslation();

  const onClickHandler = (evt) => {
    setFilterItem(evt.target.id);
  };
  return (
    <>
      <div className="px-5 py-4">
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="free"
            onClick={onClickHandler}
          >
            {t("price-free")}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="5"
            onClick={onClickHandler}
          >
            {t("price-5")}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="10"
            onClick={onClickHandler}
          >
            {t("price-10")}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="20"
            onClick={onClickHandler}
          >
            {t("price-20")}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="30"
            onClick={onClickHandler}
          >
            {t("price-30")}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="14"
            onClick={onClickHandler}
          >
            {t("price-14")}
          </a>
        </div>
      </div>
    </>
  );
}
