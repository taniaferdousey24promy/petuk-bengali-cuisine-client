import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';


const Blogs = () => {
    return (

        <div>
            <Container >
            <CardGroup className='mt-3' >
      <Card  className='border-primary '>
        <Card.Img variant="top" className='border-bottom' src="https://i.morioh.com/210520/b0b93e2f.webp" />
        <Card.Body>
          <Card.Title className='mx-3 my-3'>The differences between uncontrolled and controlled components in React are:
</Card.Title>
          <Card.Text className='mx-3 my-3'>

            <p>
            Uncontrolled components manage their own state internally, using traditional DOM methods for data retrieval, while controlled components rely on React's state management and update their state through props and event handlers.

            </p>
            
                

                
                
                
          </Card.Text>
        </Card.Body>
         
      </Card>
      <Card className='ms-3 border-start border-success'>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AkLZAaPReSfywgUveRwzpEiqGvm4ExwDzRZAKfJFxU2ud_VsyuIm0RVxYa-nWmXi--E&usqp=CAU" />
        <Card.Body>
          <Card.Title className='mx-3 my-3'>How to validate React props using PropTypes
</Card.Title>
          <Card.Text className='mx-3 my-3'>

          </Card.Text>

          <Card.Text className='mx-3 my-3'>

          To validate React props using PropTypes, import the PropTypes library, define prop types within a static propTypes object in the component, and use the defined prop types to validate props passed to the component. Warnings will be displayed in the console if the props don't match the defined types.
          </Card.Text>
        </Card.Body>
         
      </Card>
      <Card className='ms-3 border-start border-warning'>
        <Card.Img variant="top"  src="https://www.milesweb.in/blog/wp-content/uploads/2020/09/node-js-vs-express-js-min.jpg" />
        <Card.Body>
          <Card.Title className='mx-3 my-3'> Tell us the difference between nodejs and express js.

</Card.Title>
          <Card.Text className='mx-3 my-3'>
<p>
          Node.js is a runtime environment that allows running JavaScript on the server-side, while Express.js is a web application framework built on top of Node.js. Node.js provides the platform, whereas Express.js simplifies building web applications by providing abstractions and utilities like routing and middleware.



            </p>
            
                

                
                
                
          </Card.Text>
        </Card.Body>
         
      </Card>
      <Card className='ms-3 border-start border-danger'>
        <Card.Img variant="top"  src="https://blogger.googleusercontent.com/img/a/AVvXsEjgP817ovsevWAazSkRQeVOkL1jDnc6zWFEHGKDWwPWnT_0qT-UcbxvujbDF9kpvIoozw4e5g7eTWxt8vla12hsSbX_pZdW98OYKoWfLPlRoMhlevrD_zhYvCsGd94gWB0dOl-bvcoQjBjqoZxwP2C8tFXrbuJ8LG9UDv7WM-4XCKgqgrUh15uKlDJf=w463-h254" />
        <Card.Body>
          <Card.Title className='mx-3 my-3'> What is a custom hook, and why will you create a custom hook?


</Card.Title>
          <Card.Text className='mx-3 my-3'>

            <p>
            A custom hook in React is a reusable JavaScript function prefixed with "use" that allows you to extract and share stateful logic or side effects across multiple components. Custom hooks promote code reuse, abstraction, and better organization by encapsulating related logic and making it easier to test and maintain.





            </p>
            
                

                
                
                
          </Card.Text>
        </Card.Body>
         
      </Card>
      
      
    </CardGroup>
      </Container>

        </div>
        


        
            


            
    );
};

export default Blogs;