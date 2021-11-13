import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';

export const MessageForm = ({ sendMessage }) => {
    const [userMessage, setUserMessage] = useState('');
    const userName = 'user';
    const inputRef = useRef();

    useEffect(() => {
        console.log('focus');
        inputRef.current?.focus();
    }, [])

    const handleChange = (e) => {
        setUserMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(userMessage)
        sendMessage(userName, userMessage);

        inputRef.current?.focus();

        setUserMessage('');
    }

    return (
        // <Form>
        //     <Row>
        //         <Col>
        //             <Form.Group>
        //                 <Form.Control type='text' placeholder='Enter your message' value={userMessage} onChange={handleChange} inputRef={inputRef} />
        //             </Form.Group>  
        //         </Col>
        //         <Col>
        //             <Button type='submit' variant="primary" onClick={handleSubmit}>Send!</Button>
        //         </Col>
        //     </Row>
        // </Form>
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Enter your message"
                value={userMessage}
                onChange={handleChange}
                ref={inputRef}
            />
            <Button type='submit' variant="primary" onClick={handleSubmit}>
                Button
            </Button>
        </InputGroup>
    )
}
