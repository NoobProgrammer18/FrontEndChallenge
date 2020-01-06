import React from 'react'
import Styled from 'styled-components'
import Stepper from './Stepper'

//styles
const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SuccessContainer = Styled.div`
    margin-top: 5px;
    text-align: center;
`;

const Input = Styled.input`
    padding: 0.2em;
    margin: 0.5em;
    height: 25px;
    width:250px;
    border: solid black 2px;
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
        <Container>
            <div>
                <Stepper/>
                <SuccessContainer>
                    <Label>Success!</Label>
                </SuccessContainer>
                <ButtonContainer>
                    <Link href="/"> Home </Link>
                </ButtonContainer>
            </div>
        </Container>
    )
}
