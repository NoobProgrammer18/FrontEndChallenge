import React, { useContext } from 'react'
import Stepper from 'react-stepper-horizontal'
import Styled from 'styled-components'
import StepperContext from '../context/StepperContext'
//styles
const Container = Styled.div`
    width: 500px;
    margin-bottom: 70px;
`;

const hex_color = {
    primary : "#3742fa",
    default : "#70a1ff"
}

export default function StepperComp() {
    const step = useContext(StepperContext);
    return (
        <Container>
            <Stepper steps={ [{}, {}, {}] } size={ 70 } circleFontSize={ 35 } activeStep={ step } activeColor={hex_color.primary} completeColor={hex_color.primary} defaultColor={hex_color.default} completeBarColor={hex_color.primary} defaultBarColor={hex_color.default} />
        </Container>
    )
}
