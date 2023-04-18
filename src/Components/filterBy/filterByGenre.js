
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


export default function FilterByGenres({ filterItemGenre, setFilterItemGenre }) {
  
  const categories = useSelector((state) => state.categories.categories)
  const { t, i18n } = useTranslation();
  
  const onClickHandler = (evt) => {
    setFilterItemGenre(evt.target.id)
  }
const lang=i18n.language
  return (
    <>
      <div className="px-5 py-4">
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400' id='action' onClick={onClickHandler}>
          </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400' id='shooter' onClick={onClickHandler}>
         </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Open World' onClick={onClickHandler}>
          </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='RPG' onClick={onClickHandler}>
        </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Horror' onClick={onClickHandler}>
          </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Adventure' onClick={onClickHandler}>
          </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Survival' onClick={onClickHandler}>
          </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Casual' onClick={onClickHandler}>
          </a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Simulation' onClick={onClickHandler}>
         </a>
        </div>

      </div>


    </>
  )
}
