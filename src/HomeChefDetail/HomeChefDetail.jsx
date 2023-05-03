import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Card.Img variant="top" src={chef.chief_photo} />
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeChefDetail;
