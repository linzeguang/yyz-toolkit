import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { GameboxProps } from "./types";

const GameboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Gamebox: React.FC<GameboxProps> = ({ color }) => {
  return (
    <GameboxWrapper>
      <Text bold fontSize="26px" color={color}>
        GAME
      </Text>
      <Text fontSize="26px" color={color}>
        BOX
      </Text>
    </GameboxWrapper>
  );
};

export default Gamebox;

Gamebox.defaultProps = {
  color: "#fff",
};
