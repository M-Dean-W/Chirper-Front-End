import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CardBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const App = () => {

    const firstChirps = [
        {
            key: uuidv4(),
            username: 'Aragorn',
            content: `Who won the killing competition at helms deep?`,
        },
        {
            key: uuidv4(),
            username: 'Legolas',
            content: `It was a tie at 43`,

        },
        {
            key: uuidv4(),
            username: 'Gimli',
            content: `I told you, your last one didn't count because he was already dead! Proof: https://www.youtube.com/watch?v=QMJXjuhDsL8`,
        }
    ]


    const [username, setUsername] = useState('')
    const [content, setContent] = useState('');
    const [chirps, setChirps] = useState(firstChirps);


    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handleContentChange = e => {
        setContent(e.target.value);
    }

    const handleClick = () => {
        if (username && content !== '') {

            setChirps(chirps => [
                ...chirps,
                {
                    key: uuidv4(),
                    username: username,
                    content: content,

                }
            ])
            setContent('');
            setUsername('');
        }
    };

    const refinedChirps = chirps.map(val => {
        return (
            <Card key={val.key} className="rounded-3 mb-3">
                <Card.Body>
                    <Card.Title >@{val.username.toLowerCase()}</Card.Title>
                    <Card.Text >
                        {val.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    });

    return (
        <>
            <Container>
                <div className="row justify-content-around p-3">
                    <div className='col-sm-3'>
                        <Card id='chirp-box'>

                            <CardBody>
                                <Card.Title className='p-2'>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="blank-content">@</InputGroup.Text>
                                        <Form.Control
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-user"
                                            value={username}
                                            onChange={handleUsernameChange}
                                        />
                                    </InputGroup>
                                </Card.Title>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label style={{ fontSize: '1.5em' }}>What's on your mind?</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            value={content}
                                            onChange={handleContentChange}
                                            rows={3} />
                                    </Form.Group>
                                </Form>
                                <Button onClick={handleClick} variant='secondary'>Chirp it!</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm-3">
                        {refinedChirps}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default App;


