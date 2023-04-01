
import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import axiosInstance from '../../axiosConfig/instanc';
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import changeFavA from '../../store/actions/addFav';
// import changeFavR from './../../store/actions/removeFav';
// import MoviesRedThunk from '../../store/actions/MoviesRedThunk';
// import changeMovies from './../../store/reducers/Movies';
import './TopSeller.css'
import { useDispatch, useSelector } from 'react-redux';
import GamesRedThunk from '../../Store/actions/GamesRedThunk';
import changeGames from '../../Store/reducers/Games';

const TopSeller = () => {

    let MyGames = useSelector((state)=>state.changeGames); 
    MyGames = MyGames.Games;

    const dispatch = useDispatch(); 

    useEffect(() => {
        
        console.log(MyGames);
        
        // use Redux Thunk
        dispatch(GamesRedThunk());

    }, [])

    const show=(idx)=>{
        // var p = document.getElementById(`plus${idx}`);
        // p.className="plus visible font-bold"
    }

    const hide=(idx)=>{
        // var p = document.getElementById(`plus${idx}`);
        // p.className="plus invisible font-bold"
    }

    return (
        
        <div  className=''>
        {/* <p>{this.props}</p> */}
        
                <div  onMouseOver={ (idx)=>{ show(idx) } }  onMouseOut={ (idx)=>{ hide(idx) } }>
                {MyGames.slice(0, 5).map((game, idx) => (
                    <div className='w-72 cont'>
                        <a href="#" className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-gray-700">
                        <img className="bg-transparent object-cover rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-4" src={`${game.background_image}`} alt="Game Image" style={{ width:'100px', height:'100px', borderRadius:'20px'}}/>
                        <p id={`plus${idx}`} className='plus visible font-bold text-xs'>+</p>
                        <div className="flex flex-col justify-between p-4 leading-normal bg-transparent">
                        <h5 className="text-sm mb-2 tracking-tight text-gray-900 dark:text-white text-left bg-transparent">{game.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left bg-transparent">Rating: {game.rating} <i className="bi bi-star-fill bg-transparent"></i></p>
                        </div>
                        </a>
                    </div>
                    ))}
                </div>
            
            </div>
    );
}

export default TopSeller;

