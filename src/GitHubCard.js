import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function GitHubCard() {
    return (
        <div style={{padding: '2em', backgroundColor: 'lightcoral'}}>
            <Card border='secondary' bg="light" style={{ width: '20rem' }}>
                <Card.Img variant="top" src='GitHubAvatar.png' />
                <Card.Body>
                    <Card.Title>Lisa Brown</Card.Title>
                    <Card.Text className='primary'>
                    Full Stack Software Engineer 
                    </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroupItem>React-Redux</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>REST Applications</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/librown360">GitHub</Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/lisa-a-brown-testing123/">LinkedIn</Card.Link>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default GitHubCard