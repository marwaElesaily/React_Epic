import React, { useState, useEffect } from 'react'
import './gamesOnSale.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import GamesRedThunk from './../../Store/actions/GamesRedThunk';

export function GamesOnSale() {

    let MyGames = useSelector((state)=>state.changeGames); 
    MyGames = MyGames.Games;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GamesRedThunk());
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        prevArrow: <button className="slick-prev">Previous</button>,
        nextArrow: <button className="slick-next">Next</button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="container px-4">
            <h2 className='text-white text-2xl text-left'> Games On Sale </h2>
            <Slider {...settings}>
                {MyGames.map((game, index) => {
                    return (
                    <div className='card border-0' key={index}>
                        <div className='p-3'>
                            
                            <img src={game.background_image} style={{width:'90%',height:'250px'}} />
                           <p className='base-game text-left'>BASE GAME</p> 
                        <p className='name text-left'>{game.name}</p>
                            <p className="price text-left">$19.99</p>
                            <p className='text-white text-left'>Some text about the jeans..</p>
                        </div>

                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}



