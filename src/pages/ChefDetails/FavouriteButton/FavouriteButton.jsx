import React, { useState } from 'react';
import { FaClock, FaRegStar, FaStar,FaHeart  } from "react-icons/fa";

const FavouriteButton = () => {
    const [favButton,setFavButton]=useState(false);
    const handleFavButton =()=>{

        setFavButton(!favButton);
        
      }
    return (
        <div>
            <FaHeart 
            style={{ color: favButton ? 'red' : 'black' }} 
            onClick={handleFavButton} className=" ms-4" size={40}>
            </FaHeart>
            
        </div>
    );
};

export default FavouriteButton;