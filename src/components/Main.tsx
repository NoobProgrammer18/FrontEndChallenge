import React,{useState} from 'react'
import Stepper from './Stepper'
import {StepperProvider} from '../context/StepperContext'
import Styled from 'styled-components'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = Styled.div`
    margin-top: 80px;
    text-align: right;
`;

const Buttons = Styled.button`
    color: white;
    text-decoration:none;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #3742fa;

    &.prev-btn{
        background-color : #2f3542;
    }

`;


export default function Main(){

    const [step,setStep] = useState(0);

    const buttons = <ButtonContainer>
                        <Buttons onClick={(event) => {step < 0 ? setStep(step - 1) : Home(event) }}> Previous </Buttons>
                        <Buttons  onClick={(event) => setStep(step + 1)}> Next </Buttons>
                    </ButtonContainer>;
    const pages = [
        <div>
            <Page1/>
            {buttons}
        </div>,
        <div>
            <Page2/>
            {buttons}
        </div>,
        <Page3/>
    ]

    return (
        <Container>
            <div>
                <StepperProvider value={step}>
                    <Stepper/>
                </StepperProvider>
                {pages[step]}
                
            </div>
        </Container>
    )

}

function Home(e : any){
    e.preventDefault();
    window.location.href = '/';
}