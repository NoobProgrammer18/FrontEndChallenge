import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from '../components/Main'


const InputChange = (expected : string, value : any) => 
{
    const { getByLabelText } = render(<Main/>);
    const inputNode =  getByLabelText('parts') as HTMLInputElement;
    fireEvent.change(inputNode, { target: { value: value } });
    expect(inputNode.value).toBe(expected); 
}

describe("only number accepted", () => {

    test("check string", async () => {
       
        InputChange("", "Some Text");

    });

    test("check number string", async () => {
        
        InputChange("5", "5");

    });

    test("check number", async () => {

        InputChange("5", 5);

    });

    test("check special character", async () => {

        InputChange("", "_/+[]{}");

    });

});