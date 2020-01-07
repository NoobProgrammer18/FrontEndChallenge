import React,{useState} from 'react'
import Styled from 'styled-components'

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


export default function Page1(){
    const [parts, setInput] = useState("");
    
    return (
    
        <form>
            <InputContainer>
                <Label>Number of parts:</Label>
                <Input type="text" pattern="[0-9]*" onChange={(event) => setInput(OnlyNumbers(event.target.value))} value={parts}/>
            </InputContainer>
        </form>
           
    )
}

function OnlyNumbers(parts : any){
    return parseInt(parts) ? parts : "";
}