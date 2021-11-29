import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteMessage } from "../../store/messages/actions";
import './RenderMessageList.css'

export const RenderMessageList = ({ messageList }) => {
    const dispatch = useDispatch();
    const {chatId } = useParams();
    
    const handleDeleteClick = (idToDelete) => {
        dispatch(deleteMessage(idToDelete, chatId));
    };

    return (
        messageList.map((mes) => (
            <div key={mes.id}>
                <Button type="submit" variant="primery" onClick={() => handleDeleteClick(mes.id)}><i className="fas fa-trash"></i></Button>
                {mes.author}: {mes.message}</div>
        ))
    )
}
