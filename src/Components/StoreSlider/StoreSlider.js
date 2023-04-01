import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styles from './StoreSlider.module.css'
// import PropTypes from 'prop-types'
import changeGames from '../../Store/reducers/Games';
import GamesRedThunk from '../../Store/actions/GamesRedThunk';
// import PropTypes from 'prop-types'

const StoreSlider = ({MGames}) => {

    var [counter, setCounter] = useState(0);

    // let MyGames = useSelector((state)=>state.changeGames); 
    let MyGames = MGames; 

    console.log(MGames);
    // console.log(MyGames);
    // MyGames = MyGames.Games;

    MyGames = MyGames.slice(0, 6);
    console.log(MyGames);

    const dispatch = useDispatch();   

    useEffect(() => {
        // console.log(MyGames);

        dispatch(GamesRedThunk());
    }, [])


    useEffect(() => {

        const interval = setInterval(() => {
            console.log(counter);        //  0 1 2 3 4 5

            if (counter === MyGames.length - 1) return setCounter(0);  
            counter++;
            setCounter(counter);
            // console.log(counter);
        }, 3000);

        return () =>clearInterval(interval);    

    }, [MyGames.length, counter]);


    // Change current slide
    const onClick = (e) => {
        let value = parseInt(e.target.closest('div').id);
        if (value !== counter) setCounter(value);
    }


    return (
        <div className={styles.sliderWrapper}>

            {/* this section can cause errors 0_0 */}
            {/* <div className={`${styles.featured} w-fit`} onLoad={()=>{}} style={{ backgroundImage: `url(${MyGames[0].background_image})`, width:'1100px', height:'500px', padding:'20px', marginRight:'40px'}}>   
                <div className={styles.itemText}>
                    <h3 className='text-left text-white text-xl'>{MyGames[0].name}</h3>
                    <div className={styles.buttons}>
                        <a href="#!" className={`${styles.btn} ${styles.btnDownload}`}>DOWNLOAD NOW</a>
                        <a href="#!" className={`${styles.btn} ${styles.btnWishlist}`}>+</a>
                    </div>
                </div>
            </div> */}
            {/* section end */}

            <ul className={styles.MyGames} style={{ display:'felx'}}>
                {MyGames.map((game, index) => (

                    <li key={game.id} onClick={onClick} 
                    style={{ display: 'flex', width:'210px', height:'80px', marginBottom:'10px'}}
                     className=''>
                        <div id={index} className={`${styles.game} ${index === counter ? styles.current : ''} rounded-lg pb-4 text-white text-xs flex flex-col items-center border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700`} style={{ width: '100%', height: '100%' }}>
                            <img src={game.background_image } alt="game" style={{ width: '70px',height:'60px', marginRight:'20px', marginTop:'15px', marginLeft:'15px' }} className='rounded-lg'/>   
                            <p className='text-sm w-fit bg-transparent'>{game.name}</p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* { game.name.split(' ').slice(0, 4).join(' ') }... */}
            {/* rounded-lg pb-4 text-white text-xs flex flex-col items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 */}
        </div>
    )
}

// StoreSlider.propTypes = {
//     MGames: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => ({
    MGames: state.changeGames.Games
});

export default connect(mapStateToProps)(StoreSlider)


// export default StoreSlider
