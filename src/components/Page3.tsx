import React from 'react'
import {SuccessContainer, SuccessText, ButtonContainer, Button} from '../styles/StylesComponent'
import {Home} from '../redirects/Redirects'

export default function Page3(){
    
    return (
        <div>
            <SuccessContainer>
                <SuccessText>Success!</SuccessText>
            </SuccessContainer>
            <ButtonContainer>
                <Button onClick={(event) => Home(event)}> Home </Button>
            </ButtonContainer>
        </div>
    )
}
