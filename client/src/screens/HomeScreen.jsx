import React, { useEffect, useState } from 'react'
import AllPizza from '../pizza-data';
import {Container,Row,Col} from 'react-bootstrap';
import { Pizza } from '../components/Pizza';
//displaying on screen from json data
// export const HomeScreen = () => {
//   return (
//     <>
//     <Container style={{marginTop:'50px'}}>
//         <Row>
//         {
//             AllPizza.map(pizza=>(
//                 <Col md={4}>
//                     <Pizza pizza={pizza}/>
//                 </Col>
//             ))
//         }
//         </Row>
//     </Container>
//     </>
//   )
// }

import axios from 'axios';
const URL="http://localhost:5000/foods";
const fetchHandler=async ()=>{
return await axios.get(URL).then((res)=>res.data)
}
export const HomeScreen = () => {
  const[foods,setfoods]=useState([])
  useEffect(() => {
   fetchHandler().then((data)=>setfoods(data.foods)) 
  },[])
  console.log(foods)
  return (
    <>
    
        <Container style={{marginTop:'50px'}}>
         <Row>
         {
            foods.map(pizza=>(
                 <Col md={4}>
                     <Pizza pizza={pizza}/>
                 </Col>
              ))
         }  
         </Row>
   </Container>
  
    </>
  )
}
