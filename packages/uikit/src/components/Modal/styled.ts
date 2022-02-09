import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  .rc-dialog {
    margin: 10vh auto;
    box-shadow: 1.1px 3.8px 5px 0 rgba(0, 0, 0, 0.02);
  }
  .rc-dialog-close {
    font-size: 28px;
    transition: 300ms;
  }
  .rc-dialog-body {
    padding: 42px 35px 35px;
  }

  @media screen and (max-width: 768px) {
    .rc-dialog {
      width: calc(100vw - 30px);
      .rc-dialog-body {
        padding: 42px 15px 20px;
      }
    }
  }
`;

export const ModalTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 24px;
  }
`;
