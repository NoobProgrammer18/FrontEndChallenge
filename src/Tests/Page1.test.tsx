import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Main from '../components/Main'


describe("only number accepted", () => {

    const { getByLabelText } = render(<Main/>);
    const inputNode =  getByLabelText('parts') as HTMLInputElement;

    test("check string", async () => {

        fireEvent.change(inputNode, { target: { value: "Some Text" } });
        expect(inputNode.value).toBe(""); 

    });

    test("check number string", async () => {
        
        fireEvent.change(inputNode, { target: { value: "5" } });
        expect(inputNode.value).toBe("5"); 

    });

    test("check number", async () => {
        
        fireEvent.change(inputNode, { target: { value: 5 } });
        expect(inputNode.value).toBe("5"); 

    });

    test("check special character", async () => {
        
        fireEvent.change(inputNode, { target: { value: "_/[]{}.," } });
        expect(inputNode.value).toBe("5"); 

    });

});