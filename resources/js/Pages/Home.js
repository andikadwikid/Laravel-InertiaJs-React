import React from 'react'

export default function Home(props) {
    const username = props.username;
    return (
        <div>
            Hello my name is {username}
        </div>
    )
}
