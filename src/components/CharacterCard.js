import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default function CharacterCard(props) {
  return (<Card className="character-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.char.image} />
              <Card.Body>
                <Card.Title>{props.char.name}</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Origin: {props.char.origin.name}</ListGroupItem>
                <ListGroupItem>Gender: {props.char.gender}</ListGroupItem>
                <ListGroupItem>Species: {props.char.species}</ListGroupItem>
                <ListGroupItem>Status: {props.char.status}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href={props.char.location.url} target="_blank">Current Location</Card.Link>
              </Card.Body>
          </Card>
  );
}
