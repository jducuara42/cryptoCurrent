import React from "react";
import { render } from "@testing-library/react-native";
import App from "../../App";

let componentTest;

describe("<App />", => {
    beforeEach(() => {
        componentTest = render(<App />);
    });

    it("OK: Render init", () => {
        expect(componentTest).toBeDefined();
        expect(componentTest.getByTestId("flatListCoins")).toBeDefined();
        expect(componentTest.getByTestId("txtSearchCoin")).toBeDefined();
        //expect(componentTest.getAllByTestId("flatListCoins").lenght).toEqual(0);
    });

    it("OK: Render data API", () => {
        
    });
});