import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import "./ChefDetails.css";
const ChefDetails = ({ chef }) => {
  const { id } = useParams();

  const chefDetails = useLoaderData();
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
      <Container>
        <div className="banner-div">
          <div className="parent">
            <div className="img-div">
              <img src={chefDetails.chief_photo} alt="" />
            </div>
            <div className="blue-box text-left">
              <div className="ms-5  p-2 inner-blue-box" >

                <h1 className=" my-5">hi, i'm wally!</h1>

                <h2>Food coach, professional chef and nutrition
                  enthusiast. </h2>

<br />
                <p> I believe that life is not all about a diet. It is
                  not about trying to fit into sample size clothing or denying
                  yourself every last carb and gram of sugar.</p>
<br />
                <p> It's about finding the individual lifestyle that gives you energy, happiness and
                  leaves you feeling great. I know how hard it can be to lose
                  weight or stick to a nutrition plan.</p>  <br />
                <p>I've been there too, and
                  that's why I'm here to share my story and help you establish a
                  healthy relationship with food. </p>

<br />
                <Button variant="warning" size="lg" >LEARN MORE ABOUT ME</Button>


                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChefDetails;
