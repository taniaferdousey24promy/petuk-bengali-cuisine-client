import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container className="bg-dark text-light mt-5 ">
        <div className="d-flex">
          <div className="mx-5 my-5">
            <p className=" fs-5 ">ABOUT US</p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>

            <p className=" my-5">
              Phone: <span className="fs-4 text-danger">+88 016 456 789</span>{" "}
            </p>
            <p className=" my-5">
              E-mail:{" "}
              <span className="fs-4 text-danger">hello@petukBangali.com</span>{" "}
            </p>

            <p className=" my-5">
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </p>
          </div>
          <div className="mx-5 my-5 ">
            <p className=" fs-4 ">LINKS</p>
            <Link className="text-decoration-none fs-5 text-danger d-block" to = "/">Home </Link>
            <Link className="text-decoration-none fs-5 d-block " to = "/blogs">Blogs </Link>
            <Link className="text-decoration-none fs-5 d-block " to = "/">Receipes </Link>
            <Link className="text-decoration-none fs-5 d-block" to = "/">About Us </Link>
            <Link className="text-decoration-none fs-5 d-block" to = "/">Contact </Link>


          </div>
          <div className="mx-5 my-5">
            <p className=" fs-4 ">SERVICES</p>
            <p className=" fs-5 ">Shipments</p>
            <p className=" fs-5 ">Chef Talks</p>
            <p className=" fs-5 ">Live Support</p>
            <p className=" fs-5 ">Privacy</p>
          </div>
          <div className="mx-5 my-5">
            <p className=" fs-4 ">FROM THE BLOG</p>

            <div className=" fs-5 ">
                
                <p>Snack Cake</p>

            </div>

            <div className=" fs-5 ">
            <p>Banana Split Ice cream cake</p>


            </div>
          </div>
        </div>

        <p className="text-danger mx-4">
          &copy; 2023 Your Website. All rights reserved.
        </p>

        {/* <Row className="d-flex justify-content-between">
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </Col>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </Col>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </Col>
          <Col xs={12} className="text-center">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Footer;
