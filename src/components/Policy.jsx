import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
export const Policy = () => {
  return (
    <>
        <Container style={{marginTop:'50px',marginBottom:'20px'}}>
            <h1 className='bg-danger text-center text-white'>Terms and Conditions</h1>
            <Row>
            <h3 style={{marginTop:'20px'}}>These terms must be accepted by you when you use TastyFood website or Application:</h3>
                <Col md={10}>
                1) You must not accept these terms if:
You are not lawfully entitled to use TastyFood website or App in the country in which you are located or reside
If you are not of legal age to bind agreement with us
                </Col>
                <Col md={10}> 2) If any change made to Terms & Conditions:
TastyFood team can modify Terms & conditions at any time, in sole discretion. If TastyFood team will be modifying any content, team will let you know either by site or through app. It's a major factor that you do agree to modified Terms & conditions. If you don't agree to be bound by the modified Terms, then you can't use the services any more. Over Srvices are evolving over time we can change or close any services at any time without any notice, at our sole discretion.
                </Col>
                <Col md={10}>
                3) Privacy :
Your privacy is very important to us. We will assure you that your any private data will not be disclosed anywhere at any cost. If you have any questions or concerns about terms and conditions, please contact us at
                </Col>
            </Row>

            <Row>
            <h3 style={{marginTop:'20px'}}>Refund Policy</h3>
                <Col md={10}>
                1) For Restaurant Owner:

IN case of payment did by mistake or in case of any payment related issues from Google Play Store or App Store, we are not entitled to refund any amount. If it’s very crucial and any genuine problem is seen in our system than we can look into it and resolve the issue or issue refund.
                </Col>
                <Col md={10}>
                2) For Customer of Restaurant:

IN case of payment did by mistake or in case of any payment related issues for food ordered with TastyFood, we are not entitled to refund any amount. Restaurant Owner will be responsible for issue refund to customer for placed order in any case.
                </Col>
                </Row>

                <Row>
                <h3 style={{marginTop:'20px'}}>Order Approval</h3>
                    <Col md={10}>
                    TastyFood is not responsible for any kind of order cancelation or approval. Delivery time, Taxes, Delivery Charges and Delivery times are decided by the restaurant owner. Restaurant owners are only responsible for any kind of updates and changes of extra charges. TastyFood is not taking any kind of taxes or extra charges from the customers.
                    </Col>
                </Row>

                <Row>
                    <h3 style={{marginTop:'20px'}}>Communication Problems between Customer and Restaurant:</h3>
                    <Col md={10}>
                    In case of misbehaviour, miscommunication or any illegal activities done by customer and restaurant registered here, we will not be responsible for any such activities as we are not taking any proof of their identity.
                    </Col>
                </Row>

                <Row>
                <h3 style={{marginTop:'20px'}}>Blocking or Deleting your Account</h3>
                    <Col md={10}>  If we notice any illegal activity then we have all rights to permanently Block your account without any notice and reasons. 
                    </Col>
                </Row>
        </Container>
    </>
  )
}
