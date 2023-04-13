
import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'


const Catalog = () => {


    return (
        <div className="flex flex-col rounded-lg shadow-lg md:flex-row" id='catalogCD' >
            <img
                className="h-auto object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="download.avif"
                alt="catalog img" 
                id='catalogIMG'
                />

            <div className="flex flex-col justify-start p-6 w-3/12" id='catalogDIV'>
                <h5
                className="mb-4 text-base font-medium text-neutral-800 dark:text-neutral-50">
                Explore Our Catalog
                </h5>
                <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-300">
                    Browse by genre, features, price, and more to find your next favorite game.
                </p>
                <Link className="bg-white w-max p-4 text-black rounded-r-md rounded-l-md " to='/browse' >BROWSE ALL</Link>
            </div>
        </div>
            
    );
}

export default Catalog;

