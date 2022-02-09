import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "../src/components/Button";

const meta: Meta = {
  title: "Components/Button",
  argTypes: {},
};

export default meta;

export const DefaultButton = () => {
  return (
    <React.Fragment>
      <Button>isLoading</Button>
      <Button disabled>disabled</Button>
      <Button>MD</Button>
    </React.Fragment>
  );
};
