import React from "react";
import * as ReactDOM from "react-dom";
import { Metamask } from "../src";

describe("Metamask", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Metamask />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
