export default function FilterByPrice({ filterItem, setFilterItem}) {
    const onClickHandler = (evt) => {
        setFilterItem(evt.target.id)
    }
    return (
        <>
         <div className="px-5 py-4">
         <div className='h-10 flex items-center'>
                <a href='#' className='w-full h-full block text-base text-zinc-400' id='free' onClick={onClickHandler}>
                  Free</a>
              </div>
              <div className='h-10 flex items-center'>
                <a href='#' className='w-full h-full block text-base text-zinc-400' id='5' onClick={onClickHandler}>
                  Under $5.00</a>
              </div>
              <div className='h-10 flex items-center'>
                <a href='#' className='w-full h-full block text-base text-zinc-400' id='10' onClick={onClickHandler}>
                  Under $10.00</a>
              </div>
              <div className='h-10 flex items-center'>
                <a href='#' className='w-full h-full block text-base text-zinc-400' id='20' onClick={onClickHandler}>
                  Under $20.00</a>
              </div>
              <div className='h-10 flex items-center'>
                <a href='#' className='w-full h-full block text-base text-zinc-400' id='30' onClick={onClickHandler}>
                  Under $30.00</a>
              </div>
              <div className='h-10 flex items-center'>
                <a href='#' className='w-full h-full block text-base text-zinc-400' id='14' onClick={onClickHandler}>
                  $14.00 and above</a>
              </div>
            </div>
        </>
    )
}
