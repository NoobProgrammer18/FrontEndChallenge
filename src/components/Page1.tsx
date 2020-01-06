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

const InputContainer = Styled.div`
    margin-top: 5px;
`;

const Input = Styled.input`
    padding: 0.2em;
    margin: 0.5em;
    height: 25px;
    width:250px;
    border: solid black 2px;
`;

const Label = Styled.label`
    font-size: 25px;
    padding: 0.5em;
    margin: 1em 0.5em;
`

const ButtonContainer = Styled.div`
    margin-top: 80px;
    text-align: right;
`;

const Link = Styled.a`
    color: white;
    text-decoration:none;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #3742fa;
`;

export default function Page1(){
    return (
        <Container>
            <div>
                <Stepper/>
                <InputContainer>
                    <Label>Number of parts:</Label>
                    <Input type="text" />
                </InputContainer>
                <ButtonContainer>
                    <Link href="/"> Previous </Link>
                    <Link href="page2"> Next </Link>
                </ButtonContainer>
            </div>
        </Container>
    )
}
