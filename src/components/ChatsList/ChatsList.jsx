import React, { useEffect, useState } from "react";
import { ListGroup, Button } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';

export const ChatsList = ({ deleteChat }) => {
    const { chatId } = useParams();

    const [list, setList] = useState([
        {name: 'Husband', id: 'husband'},
        {name: 'Cat', id: 'cat'},
        {name: 'Mom', id: 'mom'},
        {name: 'Dad', id: 'dad'}
    ]);

    const handleDelete = (e) => {
        e.preventDefault();
        deleteChat();
        const delEl = list.find(item => item.id === chatId);
        const delIndex = list.indexOf(delEl);
        const newList = list.slice();
        newList.splice(delIndex, 1);
        console.log('newlist', newList);
        setList(newList);
    };

    return (
        <div>
            <h3>List of chats</h3>
            <ListGroup>
                { list.map((el) => (
                    <ListGroup.Item key={el.id}>
                        <NavLink 
                            style={({ isActive}) => ({ color: isActive ? "red" : "blue"})}
                            to={`/chats/${el.id}`}
                        >
                            {el.name}
                        </NavLink>
                        <Button type="submit" variant="primary" onClick={handleDelete}><i className="fas fa-trash"></i></Button>
                    </ListGroup.Item>
                )) }
            </ListGroup>
        </div>
    )
}
