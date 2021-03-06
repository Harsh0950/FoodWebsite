import React,{useState} from 'react'
import {Card,Button,Row,Col,Modal} from 'react-bootstrap';
export const Pizza = ({pizza}) => {
    const[varient,setVarient]=useState("small");
    const[quantity,setQuantity]=useState(1);
    // modals
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
  return (
    <>
    <Card border="danger" style={{ width: '18rem'}} className="mx-auto my-2">
  <Card.Img variant="top" src={pizza.image} style={{height:'150px',cursor:'pointer'}} onClick={handleShow}/>
  <Card.Body>
    <Card.Title>{pizza.name}</Card.Title>
    <Card.Text>
      <Row>
          <Col md={6}>
              <h6>Varients</h6>
              <select value={varient} onChange={e=>setVarient(e.target.value)}>
                  {pizza.varients.map(varient=>(
                      <option>{varient}</option>
                  ))}
              </select>
          </Col>
          <Col md={6}>
              <h6>Quantity</h6>
              <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                  {[...Array(10).keys()].map((v,i)=>(
                      <option>{i+1}</option>
                  ))
                  }
              </select>
          </Col>
      </Row>
    </Card.Text>
    <Row>
        <Col md={6}>
            Price:{pizza.prices[0][varient]*quantity}
        </Col>
        <Col>
        <Button variant="danger">Add to Cart</Button>
        </Col>
    </Row>
  </Card.Body>
</Card>
    {/* modals */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Card.Img variant="top" src={pizza.image} style={{height:'150px',cursor:'pointer'}} />      
        </div>
        <div>{pizza.description}</div>
        </Modal.Body>
      </Modal>

    </>
  )
}
