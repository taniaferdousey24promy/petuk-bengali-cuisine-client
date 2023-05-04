import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import "./ChefDetails.css";
import Rating from "react-rating";
import { FaClock, FaRegStar, FaStar,FaHeart  } from "react-icons/fa";
import FavouriteButton from "./FavouriteButton/FavouriteButton";



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
              <div className="ms-5  p-2 inner-blue-box">
                <h1 className=" my-4">hi, this is {chefDetails.name} !</h1>
                <h2>
                  Food coach, professional chef and nutrition enthusiast.{" "}
                </h2>
                <br />
                <p>
                  {" "}
                  {chefDetails.short_bio}Amazingly this cook has{" "}
                  <span className="fs-3">{chefDetails.number_of_likes}</span>{" "}
                  likes on social media and our site.
                </p>
                <br />
                <p>
                  {" "}
                  It's about finding the individual lifestyle that gives you
                  energy, happiness and leaves you feeling great. We know how
                  hard it can be to lose weight or stick to a nutrition plan. We
                  have made{" "}
                  <span className="fs-3">
                    {chefDetails.number_of_recipes}
                  </span>{" "}
                </p>{" "}
                recipes till now.
                <p>
                  We have been facing these kind of situation for the past{" "}
                  <span className="fs-3">
                    {chefDetails.years_of_experience}{" "}
                  </span>{" "}
                  years now.{" "}
                </p>
                <br />
                <Button variant="warning" size="lg">
                  LEARN MORE ABOUT ME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="text-center">
        <h1 className="my-5 text-success">Made With Love</h1>
        <h3 className="text-warning">Personalized Food Coaching Programs</h3>
        <CardGroup className="w-100 style-size ">
          <Card className="text-start">
            <Card.Img variant="top" src={chefDetails.recipes[0].recipe_photo} />
            <Card.Body>
              <span className="text-success fs-5 fw-bold  ">GLUTEN FREE</span>{" "}
              <span className="text-success fs-5 fw-bold ms-5 ">MAIN DISH</span>
              <Card.Title className=" mt-3 fs-2 fw-bold">
                {chefDetails.recipes[0].recipe_name}
              </Card.Title>
              <div className="  border-3  border-bottom border-success  pb-2 mb-4">
                <span className=" me-3 fs-3 fw-bold ">
                  {chefDetails.recipes[0].rating}
                </span>

                <Rating
                  placeholderRating={chefDetails.recipes[0].rating}
                  readonly
                  emptySymbol={<FaRegStar size={30}></FaRegStar>}
                  placeholderSymbol={
                    <FaStar size={30} className="text-danger "></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span className="ms-3 fs-3 fw-bold">
                  ({chefDetails.number_of_likes})
                </span>
              </div>
              <Card.Text className="fw-semibold"> <span><p className="fs-4">Ingredients:</p></span> <span>{chefDetails.recipes[0].ingredients[0]} </span>, <span>{chefDetails.recipes[0].ingredients[1]} </span>, <span>{chefDetails.recipes[0].ingredients[2]} </span> , <span>{chefDetails.recipes[0].ingredients[3]} </span>,<span>{chefDetails.recipes[0].ingredients[4]} </span></Card.Text>
              <Card.Text className="fw-semibold"> <span > <p className="fs-4">Cooking Method: </p> {chefDetails.recipes[0].cooking_method}</span> </Card.Text>

            </Card.Body>
            
          </Card>
          <Card className="ms-5 border-start text-start">
            <Card.Img variant="top" src={chefDetails.recipes[1].recipe_photo} />
            <Card.Body>
              <span className="text-success fs-5 fw-bold  ">GLUTEN FREE</span>
              <span className="text-success fs-5 fw-bold ms-5 ">MAIN DISH</span>
              <Card.Title className=" mt-3 fs-2 fw-bold">
                {chefDetails.recipes[1].recipe_name}
              </Card.Title>
              <div className="  border-3  border-bottom border-success  pb-2 mb-4">
                <span className=" me-3 fs-3 fw-bold">
                  {chefDetails.recipes[1].rating}
                </span>

                <Rating
                  className="mt-0"
                  placeholderRating={chefDetails.recipes[1].rating}
                  readonly
                  emptySymbol={<FaRegStar size={30}></FaRegStar>}
                  placeholderSymbol={
                    <FaStar size={30} className="text-danger "></FaStar>
                  }
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span className="ms-3 ms-1 fs-3 fw-bold">
                  ({chefDetails.number_of_likes})
                </span>
              </div>
              <Card.Text className="fw-semibold"> <span><p className="fs-4">Ingredients:</p></span> <span>{chefDetails.recipes[1].ingredients[0]} </span>, <span>{chefDetails.recipes[1].ingredients[1]} </span>, <span>{chefDetails.recipes[1].ingredients[2]} </span> , <span>{chefDetails.recipes[1].ingredients[3]} </span>,<span>{chefDetails.recipes[1].ingredients[4]} </span></Card.Text>
              <Card.Text className="fw-semibold"> <span > <p className="fs-4">Cooking Method: </p> {chefDetails.recipes[1].cooking_method}</span> </Card.Text>
            </Card.Body>
            
          </Card>
          <Card className="ms-5 border-start text-start">
            <Card.Img variant="top" src={chefDetails.recipes[2].recipe_photo} />
            <Card.Body>
              <span className="text-success fs-5 fw-bold  ">GLUTEN FREE</span>{" "}
              <span className="text-success fs-5 fw-bold ms-5 ">MAIN DISH</span>
              <Card.Title className="  mt-3 fs-2 fw-bold">
                {" "}
                {chefDetails.recipes[2].recipe_name}
              </Card.Title>
              <div className="  border-3  border-bottom border-success  pb-2 mb-4">
              <span className=" me-3 fs-3 fw-bold">
                {chefDetails.recipes[0].rating}
              </span>
              <Rating
                placeholderRating={chefDetails.recipes[0].rating}
                readonly
                emptySymbol={<FaRegStar size={30}></FaRegStar>}
                placeholderSymbol={
                  <FaStar size={30} className="text-danger"></FaStar>
                }
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span className="ms-1 fs-3 fw-bold ms-3">
                ({chefDetails.number_of_likes})
              </span>
              </div>
              
              <Card.Text className="fw-semibold" > <span><p className="fs-4">Ingredients:</p></span> <span>{chefDetails.recipes[2].ingredients[0]} </span>, <span>{chefDetails.recipes[2].ingredients[1]} </span>, <span>{chefDetails.recipes[2].ingredients[2]} </span> , <span>{chefDetails.recipes[2].ingredients[3]} </span>,<span>{chefDetails.recipes[2].ingredients[4]} </span></Card.Text>
              <Card.Text className="fw-semibold"> <span > <p className="fs-4">Cooking Method: </p> {chefDetails.recipes[2].cooking_method}</span> </Card.Text>

            </Card.Body>
            
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default ChefDetails;
