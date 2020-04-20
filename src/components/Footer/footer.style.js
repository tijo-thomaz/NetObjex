import styled from "styled-components";

export const FooterWrapper = styled.section`
    display: flex;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  box-shadow: -2px -4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .project-name {
    left: 3.47%;
    right: 90.83%;
    top: 32.31%;
    bottom: 32.31%;
    font-family: Poppins  !important;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #949494;
    padding-left: 50px;
    padding-top: 21px;
    padding-bottom: 21px;
  }
  .copy-rights {
    left: 83.68%;
    right: 3.47%;
    top: 3.08%;
    bottom: 4.62%;
    padding-right: 50px;
    font-family: Circular Std !important;
    font-style: normal;
    font-weight: 450;
    font-size: 15px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #8a8a8a;
  }
`;
