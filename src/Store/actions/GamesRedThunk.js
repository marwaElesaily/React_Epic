// import React from 'react';
import axiosInstance from '../../axiosConfig/instanc';

const GamesRedThunk = () => {

    return (dispatch)=>{
        
        axiosInstance.get(`/games`,{

        }).then((res) => {

            console.log(res.data.results);
            console.log(res.status);
            dispatch({type:'SET_GAME',payload:res.data.results})

        }).catch((err) => {
            console.log(err);
        })
    }
}

export default GamesRedThunk;
