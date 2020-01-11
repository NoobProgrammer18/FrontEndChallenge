import React, { useContext } from 'react'
import {StepperContainer, HexColor} from '../styles/StylesComponent'
import Stepper from 'react-stepper-horizontal'
import StepperContext from '../context/StepperContext'

export default function StepperComp() {
    const step = useContext(StepperContext);
    return (
        <StepperContainer>
            <Stepper steps={ [{}, {}, {}] } size={ 70 } circleFontSize={ 35 } activeStep={ step } activeColor={HexColor.primary} completeColor={HexColor.primary} defaultColor={HexColor.default} completeBarColor={HexColor.primary} defaultBarColor={HexColor.default} />
        </StepperContainer>
    )
}
