import React, { useEffect, useState } from "react";
import { Button, Card, CardGroup, Carousel, Container } from "react-bootstrap";
import { FaClock } from "react-icons/fa";

import "./Home.css";
import HomeChefDetail from "../../../HomeChefDetail/HomeChefDetail";

const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  });
  const names = [];

  chefs.forEach(({ name }) => names.push(name));
  console.log(names);

  

  const fewRecipes = [];

  chefs.forEach(({ recipes }) => fewRecipes.push(recipes[0].recipe_name));
  console.log(fewRecipes);

  const fewCookingMethod =[];

  chefs.forEach(({recipes})=> fewCookingMethod.push(recipes[0].cooking_method));
  console.log(fewCookingMethod);




  return (
    <div>
      {/* banner Carousel */}
      <Container className="mt-5">
        <Carousel variant="dark">
          <Carousel.Item interval={1000}>
            <img
              className="d-block "
              src="https://images.unsplash.com/photo-1563886034975-bb58b39634f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="First slide"
              style={{ height: "600px", width: "1300px" }}
            />
            <Carousel.Caption>
              <h1 className="lh-lg">Vegetables and Mashed Potatoes</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block "
              src="https://images.unsplash.com/photo-1652954008429-ce394eacbd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Second slide"
              style={{ height: "600px", width: "1300px" }}
            />
            <Carousel.Caption>
              <h1 className="lh-lg">Fried Pomfret Fish</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src="https://images.unsplash.com/photo-1625772415023-66f9b62a12b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Third slide"
              style={{ height: "600px", width: "1300px" }}
            />
            <Carousel.Caption>
              <h1 className="lh-lg">Bengali Thali</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* chef cards */}
      <Container>
        <HomeChefDetail></HomeChefDetail>
      </Container>

      {/* class carousel */}
      <Container className="mt-5 class-carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block "
              src="https://assets2.devourtours.com/wp-content/uploads/Devour-Madrid_Cooking-Class-A_Jun22_1200.jpg"
              alt="First slide"
              style={{ height: "600px", width: "1300px" }}
            />
            <Carousel.Caption className="caption-top ">
              <div className="mt-5" >
                <div className="event-content-class">
                  <p className=" fs-2 event-heading">CLASS OPENING</p>
                </div>

                <div className="font mt-5">
                  <h3 className="event-title fs-1">Roshogolla</h3>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-4  ">
                  <FaClock size={50}></FaClock>
                  <div className="ms-4">
                    <p>10.00 AM Friday</p>
                    <p>08.00 PM Friday</p>
                  </div>
                </div>

                <Button className="mt-3 w-25 h-50 fs-5 fw-bold" variant="warning">JOIN NOW</Button>

                <div></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block "
              src="https://file.videopolis.com/F/1/98b04ec6-5c68-45c6-8bc4-47f6f97ec4e8/100197.12065.essex.the-essex-resort-and-spa.other.cooking-academy-YuJesuC0-35335-853x480.jpeg"
              alt="First slide"
              style={{ height: "600px", width: "1300px" }}
            />
            <Carousel.Caption className="caption-top ">
              <div className="mt-5" >
                <div className="event-content-class">
                  <p className=" fs-2 event-heading">CLASS OPENING</p>
                </div>

                <div className="font mt-5">
                  <h3 className="event-title fs-1">Kosha Mangsho</h3>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-4  ">
                  <FaClock size={50}></FaClock>
                  <div className="ms-4">
                    <p>09.00 AM Monday</p>
                    <p>04.00 PM Saturday</p>
                  </div>
                </div>

                <Button className="mt-3 w-25 h-50 fs-5 fw-bold" variant="warning">JOIN NOW</Button>

                <div></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block "
              src="https://images.squarespace-cdn.com/content/v1/55ce1e48e4b06614877a8bfb/1649172763679-FR1PVZVY7P515M9URLHV/Kids+Cooking+Classes+Connecticut+.jpg"
              alt="First slide"
              style={{ height: "600px", width: "1300px" }}
            />
            <Carousel.Caption className="caption-top ">
              <div className="mt-5" >
                <div className="event-content-class">
                  <p className=" fs-2 event-heading">CLASS OPENING</p>
                </div>

                <div className="font mt-5">
                  <h3 className="event-title fs-1">Chingri Malai Curry</h3>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-4  ">
                  <FaClock size={50}></FaClock>
                  <div className="ms-4">
                    <p>08.00 AM Monday</p>
                    <p>05.00 PM Saturday</p>
                  </div>
                </div>

                <Button className="mt-3 w-25 h-50 fs-5 fw-bold" variant="warning">JOIN NOW</Button>

                <div></div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </Container>


      {/* recent recipes */}

      <h2>recent recipes</h2>

      <Container>
      <CardGroup className="w-100 style-size " >
      <Card  >
        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1618436042840-1K4D3WE91MDQNKXINABR/Pohela+Boishakh+2021+%287%29.jpg?format=2500w"  />
        <Card.Body>
          <Card.Title>{fewRecipes[0]}</Card.Title>
          <Card.Text>
          {fewCookingMethod[0]}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Updated By {names[0]} </small>
        </Card.Footer>
      </Card>
      <Card className="ms-5 border-start">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <Card.Body>
          <Card.Title>{fewRecipes[1]}</Card.Title>
          <Card.Text>
            {fewCookingMethod[1]}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Updated By {names[1]}</small>
        </Card.Footer>
      </Card>
      <Card className="ms-5 border-start">
        <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>{fewRecipes[2]}</Card.Title>
          <Card.Text>
          {fewCookingMethod[2]}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Updated By {names[2]}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      </Container>
    </div>
  );
};

export default Home;
