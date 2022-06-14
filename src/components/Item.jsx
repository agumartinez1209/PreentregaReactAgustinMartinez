import React from 'react'
import { Button, Card } from 'react-bootstrap'



const Item = ({productos}) => {

  const {precio, texto, imagen} = productos
  return (
    <Card className='text-center  mx-auto ' style={{ width: '15rem', margin: 20 }}>
  <Card.Img variant="top"  src={imagen}  />
  <Card.Body>
    <Card.Title> {texto} </Card.Title>
    <Card.Text>
      $ {precio}
      
    </Card.Text>
    <Button variant="primary" >Ver Detalle</Button>
    
  </Card.Body>
</Card>   
  )
}

export default Item
