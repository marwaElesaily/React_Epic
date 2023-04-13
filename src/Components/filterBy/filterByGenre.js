export default function FilterByGenres({ filterItemGenre, setFilterItemGenre }) {
  const onClickHandler = (evt) => {
    setFilterItemGenre(evt.target.id)
  }
  return (
    <>
      <div className="px-5 py-4">
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400' id='action' onClick={onClickHandler}>
            action</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400' id='shooter' onClick={onClickHandler}>
            shooter</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Open World' onClick={onClickHandler}>
          Open World</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='RPG' onClick={onClickHandler}>
          RPG</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Horror' onClick={onClickHandler}>
          Horror</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Adventure' onClick={onClickHandler}>
          Adventure</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Survival' onClick={onClickHandler}>
          Survival</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Casual' onClick={onClickHandler}>
          Casual</a>
        </div>
        <div className='h-10 flex items-center'>
          <a href='#' className='w-full h-full block text-base text-zinc-400'id='Simulation' onClick={onClickHandler}>
          Simulation</a>
        </div>

      </div>


    </>
  )
}
