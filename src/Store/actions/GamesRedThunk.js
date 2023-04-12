// import React from 'react';
import { useState } from 'react';
import axiosInstance from '../../axiosConfig/instanc';

const GamesRedThunk = () => {  // async

    // var [gameName, setgameName] = useState("");

    return (dispatch)=>{
        
        // axiosInstance.get(`/games`,{
        axiosInstance.get(`/Games`,{
        }).then((res) => {
            // console.log(res[0]);
            // console.log(res[0].gameName);
            // console.log(res.data.results);
            console.log(res.status);
            // dispatch({type:'SET_GAME',payload:res.data.results})
            // console.log(res.data);
            dispatch({type:'SET_GAME',payload:res.data})

        }).catch((err) => {
            console.log(err);
        })
    }
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
}

export default GamesRedThunk;
