// import React from 'react';
import { useState } from "react";
import axiosInstance from "../../axiosConfig/instanc";

const GamesRedThunk = () => {
  // async

  return (dispatch) => {
    axiosInstance
      .get(`/Games`, {})
      .then((res) => {
        dispatch({ type: "SET_GAME", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //////////////////////////////////////////////
  // return ()=>{
  //     // https://localhost:5555/Games
  //     // var [MyGames,setMyGames] = useState({});
  //     let MyGames;
  //     // https://localhost:5555/Games
  //     const gamesFunc = async () => {
  //         var result = await fetch(`https://localhost:5555/Games`,{
  //             method: 'get', // GET
  //             // body: JSON.stringify({gameName}),
  //             headers: {
  //                 'content-type': 'application/json'
  //             }
  //         });
  //         result = await result.json();
  //         console.log(result);
  //         await dispatch({type:'SET_GAME',payload:result[0]})
  //         // setMyGames(result[0]);
  //         MyGames = await result;
  //         console.log("Hellooooo!");
  //     }
  // // gamesFunc()
  // // console.log(MyGames);

  // }
};

export default GamesRedThunk;
