import Styled from 'styled-components'

export const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = Styled.div`
    margin-top: 80px;
    text-align: right;
`;

export const Button = Styled.button`
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

export const Link = Styled.a`
    color: white;
    text-decoration:none;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #3742fa;
`;

export const InputContainer = Styled.div`
    margin-top: 5px;
`;

export const Input = Styled.input`
    padding: 0.2em;
    margin: 0.5em;
    height: 25px;
    width:250px;
    border: solid black 2px;
`;

export const Label = Styled.label`
    font-size: 25px;
    padding: 0.5em;
    margin: 1em 0.5em;
`

export const SuccessContainer = Styled.div`
    margin-top: 5px;
    text-align: center;
`;

export const SuccessText = Styled.label`
    font-size: 80px;
    padding: 0.5em;
    margin: 1em 0.5em;
    color: #3742fa;
`

export const HomeLink = Styled.a`
    color: white;
    text-decoration:none;
    font-size: 1.5em;
    margin: 1em;
    padding: 0.25em 1em;
    background-color: #3742fa;
`;


export const StepperContainer = Styled.div`
    width: 500px;
    margin-bottom: 70px;
`;

export const HexColor = {
    primary : "#3742fa",
    default : "#70a1ff"
}