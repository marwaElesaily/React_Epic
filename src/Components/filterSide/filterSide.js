import './filterSide.css'

import Accordion from '../accordion/accordion'

export default function FilterSide({ filterItem, setFilterItem, filterItemGenre, setFilterItemGenre, filterItemPlatform, setFilterItemPlatform }) {

  const handleReset = () => {
    setFilterItem('all')
    setFilterItemGenre('all')
    setFilterItemPlatform('all')
  }
  return (
    <>
      <div className='filter-reset'>
        <p className='filter'>Filters</p>
        <p onClick={handleReset} className='reset filter'>RESET</p>
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

