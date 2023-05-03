import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export default function FilterByGenres({
  filterItemGenre,
  setFilterItemGenre,
}) {
  const categories = useSelector((state) => state.epic.categories);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const onClickHandler = (evt) => {
    setFilterItemGenre(evt.target.id);
  };

  return (
    <>
      <div className="px-5 py-4">
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="action"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[1].name:categories[1].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="shooter"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[0].name:categories[0].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="Open World"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[2].name:categories[2].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="RPG"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[3].name:categories[3].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="Horror"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[4].name:categories[4].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="Adventure"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[5].name:categories[5].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="Survival"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[6].name:categories[6].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="Casual"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[7].name:categories[7].name_ar} */}
          </a>
        </div>
        <div className="h-10 flex items-center">
          <a
            href="#"
            className="w-full h-full block text-base text-zinc-400"
            id="Simulation"
            onClick={onClickHandler}
          >
            {/* {lang==='en'?categories[8].name:categories[8].name_ar} */}
          </a>
        </div>
      </div>
    </>
  );
}
