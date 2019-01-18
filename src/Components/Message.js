import React from 'react';

const Message = (props) => {
    return (
        <div
            style={{ width: '70vw', height: "150px", margin: "25px auto", background: 'lightblue', }}
        >
            <h1>Author: {props.message.author}</h1>
            <h3>{props.message.body}</h3>

        </div>
    )
}

export default Message