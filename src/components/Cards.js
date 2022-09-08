import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {

  const url = props.link;

  const handleClick = () => {
    window.location.href= url
  }

  return (
    <Card style={{ width: '15rem' }} className='card'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary" onClick={handleClick}>Click for Details</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards