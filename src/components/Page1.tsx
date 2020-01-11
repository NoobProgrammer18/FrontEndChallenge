import React,{useContext} from 'react'
import PartsContext from '../context/PartsContext'
import {InputContainer, Label, Input} from '../styles/StylesComponent'
import {handleInputChange} from '../utilities/Utilities'

const Page1 = (params: any) =>{

    const parts = useContext(PartsContext);
    return (
    
        <form>
            <InputContainer>
                <Label>Number of parts:</Label>
                <Input type="text" pattern="[0-9]*" onChange={(event) => handleInputChange(params, event) } value={parts}/>
            </InputContainer>
        </form>
           
    )

}

export default Page1;