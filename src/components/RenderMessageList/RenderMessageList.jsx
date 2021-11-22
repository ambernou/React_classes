import React from "react";
import './RenderMessageList.css'

export const RenderMessageList = ({ messageList }) => {
    return (
        messageList.map((mes) => (
            <div key={mes.id}>{mes.author} : {mes.message}</div>
        ))
    )
}
