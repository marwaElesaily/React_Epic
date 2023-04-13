import React, { useEffect, useState } from "react";
import styles from "./StoreSlider.module.css";
import { useDispatch, useSelector } from "react-redux";
import changeGames from '../../Store/reducers/Games';
import GamesRedThunk from "../../Store/actions/GamesRedThunk";

const StoreSlider = () => {
  var [counter, setCounter] = useState(0);

  const MyGames = [
    {
      gameName: "Dead Island 2 Gold Edition",
      Photos:[
        "https://image.api.playstation.com/vulcan/ap/rnd/202208/2321/rNVDp1zmsYmtYxplFjNqzShE.jpg"
        ]
    },
    {
      gameName: "STAR WARS Jedi: Survivor™ Standard Edition",
      Photos:[
        "https://cdn2.unrealengine.com/egs-jedi-survivor-carousel-desktop-1280x702-e064efcb1338.jpg?h=720&quality=medium&resize=1&w=1280"
        ]
    },
    {
      gameName: "Redfall",
      Photos:[
        "https://cdn2.unrealengine.com/egs-redfall-carousel-desktop-1248x702-bf6c0a319751.jpg?h=720&quality=medium&resize=1&w=1280"
        ]
    },
    {
      gameName: "Dying Light 2 Stay Human",
      Photos:[
        "https://cdn2.unrealengine.com/egs-dying-light-2-carousel-desktop-1248x702-6fb8d402cc43.jpg?h=720&quality=medium&resize=1&w=1280"
        ]
    },
    {
      gameName: "Tchia",
      Photos:[
        "https://cdn2.unrealengine.com/tchia-accoladegraphic-1920x1080-v3-1920x1080-d8510b78c553.jpg?h=480&quality=medium&resize=1&w=854"
        ]
    },
    {
      gameName: "Fall Guys",
      Photos:[
        "https://cdn2.unrealengine.com/egs-fall-guys-bugsnax-breaker-1920x1080-125701f5b397.jpg?h=480&quality=medium&resize=1&w=854"
        ]
    },
  ];
  console.log(MyGames);

////////////////////////////////////////


    // let MyGames = useSelector((state)=>state.changeGames); 
    // MyGames = MyGames.Games;
    // console.log(MyGames);

    const dispatch = useDispatch(); 

    useEffect(() => {
        
        console.log(MyGames);
        
        // use Redux Thunk
        dispatch(GamesRedThunk());

    }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      console.log(counter); //  0 1 2 3 4 5

      if (counter === MyGames.length - 1) return setCounter(0);
      counter++;
      setCounter(counter);
    }, 8000);

    return () => clearInterval(interval);
  }, [MyGames.length, counter]);

  // Change current slide

  const onClick = (e) => {
    let value = parseInt(e.target.closest("div").id);
    if (value !== counter) setCounter(value);
  };

  return (
    <div className={`${styles.sliderWrapper} bg-transparent`}>
      {/* section start 0_0 */}
      <div
        className={`${styles.featured} w-fit bg-transparent`}
        style={{
          backgroundImage: `url(${MyGames[counter].Photos[0]})`,
          width: "70vw",
          height: "80vh",
          padding: "20px",
          marginRight: "40px",
          borderRadius: "30px",
        }}
      >
        <div className={styles.itemText}>
          <h3 className="bg-transparent text-left text-white text-xl ">
            {MyGames[counter].gameName}
          </h3>
          <div className={`${styles.buttons} bg-transparent`}>
            <a href="#!" className={`${styles.btn} ${styles.btnDownload}`}>
              DOWNLOAD NOW
            </a>
            <a
              href="#!"
              className={`${styles.btn} ${styles.btnWishlist}`}
              style={{ fontWeight: "700" }}
            >
              +
            </a>
          </div>
        </div>
      </div>
      {/* section end */}

      <ul
        className={styles.gamelist}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {MyGames.map((game, index) => (
          <li
            key={game.id}
            onClick={onClick}
            style={{
              display: "flex",
              height: "70px",
              marginBottom: "10px",
              justifyContent: "center",
            }}
          >
            {/* className='w-48' */}
            <div
              id={index}
              className={`${styles.game} ${
                index === counter ? styles.current : ""
              } rounded-lg pb-4 text-white text-xs flex flex-col items-center border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700`}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={game.Photos[0]}
                alt="game"
                style={{
                  width: "50px",
                  height: "55px",
                  marginRight: "10px",
                  marginLeft: "5px",
                }}
                className="rounded-lg"
              />
              <p className="text-sm w-full h-full bg-transparent ">
                {game.gameName}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreSlider;
