import { useTranslation } from "react-i18next";
import FilterByPrice from "../filterBy/filterByPrice";
import FilterByPlatform from "../filterBy/filterByPlatform";
import FilterByGenres from "../filterBy/filterByGenre";

export default function Accordion({
  filterItem,
  setFilterItem,
  filterItemGenre,
  setFilterItemGenre,
  filterItemPlatform,
  setFilterItemPlatform,
}) {
  const { t, i18n } = useTranslation();
  const lang=i18n.language
  return (
    <>
      <div id="accordionExample">
        <div className=" ">
          <h2 className="mb-0" id="headingOne">
            <button
              className="group relative flex w-full items-center  px-5 py-4 text-left text-xs text-zinc-400 "
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {t("accordion-price")}
              <span className={`${lang === 'en' ? '' : 'mr-80 md:mr-44 lg:mr-24 xl:mr-40 2xl:mr-96'}ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="!visible"
            data-te-collapse-item
            data-te-collapse-show
            aria-labelledby="headingOne"
            data-te-parent="#accordionExample"
          >
            <FilterByPrice
              filterItem={filterItem}
              setFilterItem={setFilterItem}
            />
          </div>
        </div>
        <div className="w-full h-px bg-zinc-400"></div>
        <div className="">
          <h2 className="mb-0" id="headingTwo">
            <button
              className="group relative flex w-full items-center  px-5 py-4 text-left text-xs text-zinc-400 focus:outline-none"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {t("accordion-genre")}
              <span className={`${lang === 'en' ? '' : 'mr-80 md:mr-44 lg:mr-24 xl:mr-40 2xl:mr-96'}ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingTwo"
            data-te-parent="#accordionExample"
          >
            <FilterByGenres
              filterItemGenre={filterItemGenre}
              setFilterItemGenre={setFilterItemGenre}
            />
          </div>
        </div>
        <div className="w-full h-px bg-zinc-400"></div>
        <div className="">
          <h2 className="accordion-header mb-0" id="headingThree">
            <button
              className="group relative flex w-full items-center px-5 py-4 text-left text-xs text-zinc-400"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {t("accordion-platform")}
              <span className={`${lang === 'en' ? '' : 'mr-80 md:mr-44 lg:mr-24 xl:mr-40 2xl:mr-96'}ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="!visible hidden"
            data-te-collapse-item
            aria-labelledby="headingThree"
            data-te-parent="#accordionExample"
          >
            <FilterByPlatform
              filterItemPlatform={filterItemPlatform}
              setFilterItemPlatform={setFilterItemPlatform}
            />
          </div>
        </div>
      </div>
    </>
  );
}
