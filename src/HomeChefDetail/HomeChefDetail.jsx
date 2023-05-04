import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChefDetails from "../pages/ChefDetails/ChefDetails";

const HomeChefDetail = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <h2>All chefs</h2>
      <Row xs={1} md={2} className="g-4">
        {chefs.map((chef) => (
          <Col key={chef.id}>
            <Card>
              <Card.Img variant="top" className="rounded-circle mx-auto mt-5" src={chef.chief_photo} style={{height:'200px',width:'200px'}} />
              <Card.Body>
                <Card.Title className="text-center fs-1" >{chef.name}</Card.Title>

                <div className=" mt-3 d-flex justify-content-center">

                <Link to={`chefDetails/${chef.id}`}>
                <Button variant="warning" 
                  

                 >View Recipe</Button></Link>


                </div>
                <Card.Text className="mt-4" >
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>

                <div className="d-flex justify-content-between text-center" >
                    <div className=" ps-5 pe-5 border-end fs-5 ">
                        <p>Likes</p>
                        <p className="fw-bold">{chef.number_of_likes}</p>
                    </div>

                    <div className=" pe-5 border-end  fs-5 ">
                        <p>Number Of Recipes</p>
                        <p className="fw-bold">{chef.number_of_recipes}</p>

                    </div>

                    <div className="ps-5 pe-5  fs-5 ">
                        <p>Experience</p>
                        <p className="fw-bold">{chef.years_of_experience} Years</p>

                    </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeChefDetail;
