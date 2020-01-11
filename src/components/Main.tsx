import React,{useState} from 'react'
import {Container, ButtonContainer, Button} from '../styles/StylesComponent'
import {Home} from '../redirects/Redirects'
import {StepperProvider} from '../context/StepperContext'
import {PartsProvider} from '../context/PartsContext'
import Stepper from './Stepper'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


const Main = () => 
{

    const [step,setStep] = useState(0);
    const [num_parts,setNumParts] = useState("");
    const [parts_inputs,setPartsInput] = useState({});



    const buttons = <ButtonContainer>
                        <Button onClick={(event) => {step > 0 ? setStep(step - 1) : Home(event) ; }}> Previous </Button>
                        <Button disabled = { NextBtnDisable(step, num_parts, parts_inputs) }  onClick={(event) => setStep(step + 1) }> Next </Button>
                    </ButtonContainer>;

    const pages = [
        <div>
            <Page1 setNumParts={setNumParts} setPartsInput={setPartsInput} step={step}/>
            {buttons}
        </div>,
        <div>
            <Page2 setPartsInput={setPartsInput} parts_inputs={parts_inputs} step={step}/>
            {buttons}
        </div>,
        <Page3/>
    ]

    return (
        <PartsProvider value={num_parts}>
            <Container>
                <div>
                    <StepperProvider value={step}>
                        <Stepper/>
                    </StepperProvider>
                    {pages[step]}
                </div>
            </Container>
        </PartsProvider>
    )

}

const NextBtnDisable = (step : number , parts : string, parts_input : object) =>
{
  
    const sum_parts_value = Object.values(parts_input).reduce((a, b) => parseInt(a) + parseInt(b), 0);

    const parts_length = Object.keys(parts_input).length;
    
    let ret = true;

    if(step === 0 && parseInt(parts))
    {
        ret = false;
    }
    else if( step === 1 && parts_length === parseInt(parts) && sum_parts_value  === 100)
    {
        ret = false;
    }

    return ret;

}

export default Main;