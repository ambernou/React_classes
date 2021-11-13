import React from "react";
import './RenderMessageList.css'

// export const Message = ({ message, onMessageClick }) => {
//     return (
//         <React.Fragment>
//             <h3>Hello world!</h3>
//             <h3>{message}</h3>
//             <h3 onClick={onMessageClick} className='clickHeader'>Click me</h3>
//         </React.Fragment>
//     )
// }

export const RenderMessageList = ({ messageList }) => {
    return (
        messageList.map((mes) => (
            <div key={mes.id}>{mes.author} : {mes.message}</div>
          ))
    )
}
