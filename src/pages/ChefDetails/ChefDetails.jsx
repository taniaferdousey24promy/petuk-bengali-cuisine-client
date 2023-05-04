import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = ({chef}) => {
    const {id}=useParams();

    const chefDetails=useLoaderData();
    console.log(chefDetails);

    // const [chefs, setChefs] = useState([]);
    // useEffect(() => {
    //   fetch("http://localhost:5000/chefs")
    //     .then((res) => res.json())
    //     .then((data) => setChefs(data))
    //     .catch((error) => console.error(error));
    // });
    // const names = [];
  
    // chefs.forEach(({ name }) => names.push(name));
    // console.log(names);
    return (
        <div>
            <h2>{chefDetails.id}</h2>
        </div>
    );
};

export default ChefDetails;