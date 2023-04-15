import './filterSide.css'
import { useTranslation } from 'react-i18next';
import Accordion from '../accordion/accordion'

export default function FilterSide({ filterItem, setFilterItem, filterItemGenre, setFilterItemGenre, filterItemPlatform, setFilterItemPlatform }) {

  const { t, i18n } = useTranslation();
  const lang = i18n.language
  const handleReset = () => {
    setFilterItem('all')
    setFilterItemGenre('all')
    setFilterItemPlatform('all')
  }
  return (
    <>
      <div className='filter-reset'>
        <p className='filter'>{t('filters-smallDivices')}</p>
        <p onClick={handleReset} className='reset filter'>{lang==='en'?'RESET':'اعادة تعيين'}</p>
      </div>
      <div className='w-full h-px bg-zinc-400'></div>
      <Accordion
                filterItem={filterItem} setFilterItem={setFilterItem}
                filterItemGenre={filterItemGenre} setFilterItemGenre={setFilterItemGenre}
                filterItemPlatform={filterItemPlatform} setFilterItemPlatform={setFilterItemPlatform}
              />
    <div className='w-full h-px bg-zinc-400'></div>
    </>
    


  )
}

