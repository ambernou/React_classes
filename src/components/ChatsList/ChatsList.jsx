import React from "react";
import { ListGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export const ChatsList = () => {
    const list = [
        {name: 'Husband', id: uuidv4()},
        {name: 'Cat', id: uuidv4()},
        {name: 'Mom', id: uuidv4()},
        {name: 'Dad', id: uuidv4()}
    ]

    return (
        <div>
            <h3>List of chats</h3>
            <ListGroup>
                { list.map((el) => (
                    <ListGroup.Item key={el.id}>{el.name}</ListGroup.Item>
                )) }
            </ListGroup>
        </div>
    )
}
