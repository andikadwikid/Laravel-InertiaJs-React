import React from 'react'

export default function Home(props) {
    const username = props.username;
    return (
        <div>
            My name is {username}
        </div>
    )
}
