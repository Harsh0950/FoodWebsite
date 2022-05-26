import React from 'react'
import {Container,Row,Col,Table} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
export const About = () => {
  return (
    <>
    <Container style={{marginTop:'50px'}}>
        <h1 className='bg-danger text-center text-white'>About us</h1>
        <Row style={{marginTop:'20px'}}>
            <Col md={6}> <img src="images/waffle.jpg" width="100%" height="100%"/></Col>
            <Col md={6} style={{marginTop:'5px'}}>
         <p>   We may have a different name today, but there’s one thing that will never change, and that’s what you can expect from us:</p>
<h6>ALL THE RECIPES YOU’LL EVER NEED. PERIOD. </h6>
<p>
In other words, the new version of Food.com combines all of the things you loved most about the site with some helpful new features, including: 
</p>
-Over 500,000 dishes created by users like you, with fresh recipes added every day<br/>
-Easy access to your favorite saved recipes and the option to organize them into boards<br/>
-A new activity feed where you can add your reviews, tweaks, questions and photos<br/>
<p>
So if you’re hungry for good food and great conversation with fellow cooks, we’re so happy you’re here! And there’s no better place to start than our community’s 75 Top-Rated Recipes of All Time, from five-star banana bread to our most-popular mac and cheese.
</p>
Got more questions about the site? Contact our Customer Support team at tastyfood@gmail.com. 
<p>
Cheers and happy cooking,<br/>
Team TastyFood
</p>

            </Col>
        </Row>
        </Container>
    </>
  )
}
