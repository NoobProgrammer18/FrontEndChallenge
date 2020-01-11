import React,{useContext} from 'react'
import {handleInputChange} from '../utilities/Utilities'
import {InputContainer, Label, Input} from '../styles/StylesComponent'
import PartsContext from '../context/PartsContext'


const Page2 = (params: any) =>
{
    const parts = useContext(PartsContext)

    return (
        <form>
            {RenderPartsInput(parseInt(parts), params)}
        </form>
    )
}

const RenderPartsInput = (parts: number, params: any) => 
{

    let inputs = [] as any;
    for(let input = 1; input <= parts; input ++)
    {
        let value = params.parts_inputs['part'+input];
        value = (value) ? value : "";

        inputs.push(<InputContainer key={'part'+input}>
                        <Label>Part {input} %</Label>
                        <Input type="text" name={'part' + input} onChange={(event) => handleInputChange(params, event)} value={ value }/>
                    </InputContainer>);
    }

    return inputs;
}

export default Page2;
