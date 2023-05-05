import React, { useState } from 'react';
import { FaClock, FaRegStar, FaStar,FaHeart  } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const FavouriteButton = () => {
    const [favButton,setFavButton]=useState(false);
    // const handleFavButton =()=>{

    //     setFavButton(!favButton);
    //     toast("Added to fav recipes");
        
    //   }
    return (
        <div>
            <div>
            <FaHeart 
            style={{ color: favButton ? 'red' : 'black' }} 
            onClick={handleFavButton} className=" ms-4" size={40}>
            </FaHeart>
            </div>
            
            {/* <ToastContainer /> */}

        </div>
    );
};

export default FavouriteButton;