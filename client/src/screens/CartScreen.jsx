import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {FaPlusCircle,FaMinusCircle,FaTrash} from 'react-icons/fa'
import {addtocart,deleteFromCart} from '../actions/cartAction'

export const CartScreen = () => {
    const cartState=useSelector(state=>state.cartReducer)
    const cartItems=cartState.cartItems
    const dispatch=useDispatch()
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
        <Container  style={{marginTop:'50px'}}>
        <h1 className='bg-danger text-center text-white'>My Cart</h1>

            <Row style={{marginTop:'20px'}}>
                <Col md={6}>
                    <Row>
                    {
                        cartItems.map((item)=>(
                            <>
                            <Col md={5}>   <img alt={item.name} src={item.image} style={{ width: "100px", height: "80px",borderRadius:"1rem" }}/>
                            </Col>
                            <Col md={7}>
                            <h6>{item.name} [{item.varient}]</h6>
                            <h6>{" "} Price : {item.quantity} X {item.prices[0][item.varient]} ={" "}{item.price}</h6>
                            <h6>
                      Quantity :&nbsp;
                      <FaMinusCircle
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addtocart(item, item.quantity - 1, item.varient)
                          );
                        }}
                      />{" "}
                      &nbsp;
                      {item.quantity} &nbsp;
                      <FaPlusCircle
                        className="text-success"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(
                            addtocart(item, item.quantity+1, item.varient)
                          );
                        }}
                      />
                    </h6>
                    <FaTrash
                      className="text-danger"
                      style={{ cursor: "pointer", marginLeft: "20px" }}
                      onClick={() => {
                        dispatch(deleteFromCart(item));
                      }}
                    />
                            </Col>
                            <hr/>
                            </>
                        ))
                    }
                    </Row>
                </Col>
                <Col md={4} className='text-center'>
                <h1 className='text-center'>Payment Info</h1>
                <h4>Sub Total </h4>
                <h4>RS : {subTotal} /-</h4>
                </Col>
            </Row>
        </Container>
    </>
  )
}
