
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Commoneventcard = ({ event }) => {
  const navigate = useNavigate();
  const BackEndURL = import.meta.env.VITE_BACKEND_URL;

  const ViewHallsHandle = async()=> {

    console.log("i have bee called here View halls")
    navigate('/halls/all')
  }

  return (
    <div>
      {' '}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${BackEndURL}/${event.images[0]}`} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Button variant="primary" onClick={()=>ViewHallsHandle()}>View Halls</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Commoneventcard;
