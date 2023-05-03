import React from "react";
import { Carousel, Container } from "react-bootstrap";
import './Home.css'


const Home = () => {
  return (
    <div>
        <Container className="mt-5">

        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src="https://images.unsplash.com/photo-1563886034975-bb58b39634f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide" 
            style={{  height: '600px', width: '1300px'}}
          />
          <Carousel.Caption>
           <h1 className="lh-lg" >Vegetables and Mashed Potatoes</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} >
          <img
            className="d-block "
            src="https://images.unsplash.com/photo-1652954008429-ce394eacbd7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Second slide"
            style={{  height: '600px', width: '1300px'}}
          />
          <Carousel.Caption>
            <h1 className="lh-lg">Fried Pomfret Fish</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item>
          <img
            className="d-block "
            src="https://images.unsplash.com/photo-1625772415023-66f9b62a12b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
            style={{  height: '600px', width: '1300px'}}
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
      
    </div>
  );
};

export default Home;
