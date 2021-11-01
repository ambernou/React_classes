import React from "react";
import './Message.css'

// export const Message = ({ message, onMessageClick }) => {
//     return (
//         <React.Fragment>
//             <h3>Hello world!</h3>
//             <h3>{message}</h3>
//             <h3 onClick={onMessageClick} className='clickHeader'>Click me</h3>
//         </React.Fragment>
//     )
// }

export const Message = ({ messageList }) => {
    return (
        messageList.map((mes) => (
            <div>{mes.author} : {mes.message}</div>
          ))
    )
}