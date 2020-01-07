import React from 'react'
import Styled from 'styled-components'

//styles
const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Link = Styled.a`
    color: white;
    text-decoration:none;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #3742fa;
`;

export default function Home() {

    return (
        <Container>
            <div>
                <Link href="main"> New Request </Link>
            </div>
        </Container>
    )

}
