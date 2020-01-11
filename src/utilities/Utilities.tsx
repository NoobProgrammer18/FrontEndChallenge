export const OnlyNumbers = (input : string) =>
{
    return Number(input) ? String(input) : parseInt(input) ? String(parseInt(input)) : "";
}

export const handleInputChange = (params : any, event : any) =>
{   
    const step = params.step;
    const input_value = event.target.value;

    if(step === 0)
    {
        params.setNumParts(OnlyNumbers(input_value));
        params.setPartsInput({});
    }
    else if(step === 1)
    {
        const input_name = event.target.name;
      
        const newObject = { [input_name] : OnlyNumbers(input_value)};
        
        params.setPartsInput({ ...params.parts_inputs, ...newObject});
    }

}
