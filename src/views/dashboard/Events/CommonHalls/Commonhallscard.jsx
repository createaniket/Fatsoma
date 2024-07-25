import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pdfjs } from 'react-pdf';
import { useNavigate } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Commonhallscard = ({hall}) => {
  const navigate = useNavigate();
  const BackEndURL = import.meta.env.VITE_BACKEND_URL;
  const FileUrl = `${import.meta.env.VITE_BACKEND_URL}/${hall.layoutFile}`;

  console.log('dcjbev bdkfj bkdjf bkjd b', FileUrl);
  const isImage = (file) => {
    const extension = file.split('.').pop().toLowerCase();
    return ['jpg', 'jpeg', 'png', 'gif'].includes(extension);
  };

  const HanldeViewStall = ()=> {


  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        {isImage(hall.layoutFile) ? (
          <Card.Img variant="top" src={`${BackEndURL}/${hall.layoutFile}`} />
        ) : (
          <iframe src={`${BackEndURL}/${hall.layoutFile}`} style={{ width: '100%', height: '18rem' }} frameBorder="0" />
        )}
        <Card.Body>
          <Card.Title>{hall.name}</Card.Title>
          <Card.Text> Total Stalls : {hall.totalStalls} </Card.Text>
          {/* <Card.Text> Stalls Booked :{hall.totalStalls} </Card.Text>
          <Card.Text> Stalls vacant: {hall.totalStalls} </Card.Text> */}

          <Button variant="primary" onClick={()=>navigate('/stalls/all')}>View Stalls</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Commonhallscard;
