import React from 'react'
import Styled from 'styled-components'

const SuccessContainer = Styled.div`
    margin-top: 5px;
    text-align: center;
`;



const Label = Styled.label`
    font-size: 80px;
    padding: 0.5em;
    margin: 1em 0.5em;
    color: #3742fa;
`

const ButtonContainer = Styled.div`
    margin-top: 80px;
    text-align: center;
`;

const Link = Styled.a`
    color: white;
    text-decoration:none;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #3742fa;
`;


export default function Page3(){
    
    return (
        <div>
            <SuccessContainer>
                <Label>Success!</Label>
            </SuccessContainer>
            <ButtonContainer>
                <Link href="/"> Home </Link>
            </ButtonContainer>
        </div>
    )
}
