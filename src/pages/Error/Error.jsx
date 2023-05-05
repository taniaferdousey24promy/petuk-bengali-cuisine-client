import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Error = () => {
  return (
    <div>

        <Container >
        <Wrapper className="text-center" >
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
          alt="error"

          style={{height:'700px',width: '700px'}}
        />
      </Wrapper>
        </Container>
      
    </div>
  );
};
const Wrapper = styled.section``;

export default Error;
