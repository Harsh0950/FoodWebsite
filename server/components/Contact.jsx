import React from 'react'
import {Container,Row,Col,Table} from 'react-bootstrap';
import {RiPhoneFill} from 'react-icons/ri';
import {ImMobile} from 'react-icons/im';
import {GrMail} from 'react-icons/gr';
import {FaHome} from 'react-icons/fa';
export const Contact = () => {
  return (
    <>
    <Container style={{marginTop:'50px'}}>
    <h1 className='bg-danger text-center text-white'>Contact Details</h1>
    <Table striped bordered hover variant="dark" style={{marginTop:'20px'}}>
  <tbody>
    <tr>
      <td><RiPhoneFill/></td>
      <td>Telephone</td>
      <td>0171-2352123</td>
    </tr>
    <tr>
      <td><ImMobile/></td>
      <td>Mobile</td>
      <td>687253872</td>
    </tr>
    <tr>
      <td><GrMail/></td>
      <td>Mail</td>
      <td>tastyfood@gmail.com</td>
    </tr>
    <tr>
      <td><FaHome/></td>
      <td>Address</td>
      <td>Chitkara University, Punjab</td>
    </tr>

  </tbody>
</Table>
    </Container>
    </>
  )
}
