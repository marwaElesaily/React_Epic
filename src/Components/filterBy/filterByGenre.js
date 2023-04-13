export default function FilterByGenres({filterItemGenre,setFilterItemGenre}) {
  const onClickHandler=(evt) => {
    setFilterItemGenre(evt.target.id)
  }
return (
  <>
  <div className="px-5 py-4">
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='action' onClick={onClickHandler}>
          action</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='shooter' onClick={onClickHandler}>
          shooter</a>
        </div>
        
      </div>
  {/* <div className="flex justify-center">
        <div>
          <div className="relative" data-te-dropdown-ref>
            <button
              className="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
              type="button"
              id="dropdownMenuButton1"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light">
              GENRE
              <span className="ml-2 w-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref>
              <li>
                <a id='action' onClick={onClickHandler}
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >action</a
                >
              </li>
              <li>
                <a id='shooter' onClick={onClickHandler}
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >shooter</a
                >
              </li>
              
            </ul>
          </div>
        </div>
      </div> */}
  
</>
)
}
