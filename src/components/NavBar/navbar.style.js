import styled from "styled-components";
export const UlWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  li {
    cursor: pointer;
    font-family: SF Text;
    font-style: normal;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
  .cred {
    display: flex;
    flex-direction: column;
    height: 30px;
    left: 390px;
    top: 29px;
    padding-right: 28px;
    opacity: ${(props) =>
      props.activeItemClass === "cred" ? "1" : "0.8"};
    .bar {
      display: ${(props) =>
        props.activeItemClass === "cred" ? "block" : "none"};
      height: 3px;
      left: 318px;
      top: 55px;
      background: #70cca8;
      margin-top: 8px;
      border-radius: 4px;
    }
  }
  .home {
 
    height: 18px;
    left: 318px;
    top: 29px;
    padding-right: 29px;
    opacity: ${(props) =>
      props.activeItemClass === "home" ?  "1" : "0.8"};
    .bar {
      display: ${(props) =>
        props.activeItemClass === "home" ? "block" : "none"};
      height: 3px;
      left: 318px;
      top: 55px;
      margin-top: 8px;
      background: #70cca8;
      border-radius: 4px;
    }
  }
  .hospitals {
    width: 67px;
    height: 18px;
    left: 615px;
    top: 29px;
    padding-right: 28px;
    font-weight: ${(props) =>
      props.activeItemClass === "hospitals" ? "bold" : "normal"};
    .bar {
      display: ${(props) =>
        props.activeItemClass === "hospitals" ? "block" : "none"};
      height: 3px;
      left: 318px;
      top: 55px;
      background: #70cca8;
      margin-top: 8px;
      border-radius: 4px;
    }
  }
  .reports {
    width: 56px;
    height: 18px;
    left: 713px;
    top: 29px;
    opacity: ${(props) =>
      props.activeItemClass === "reports" ? "1" : "0.8"};
    .bar {
      display: ${(props) =>
        props.activeItemClass === "reports" ? "block" : "none"};
      height: 3px;
      left: 318px;
      top: 55px;
      margin-top: 8px;
      background: #70cca8;
      border-radius: 4px;
    }
  }
`;

export const BarSelection = styled.span``;
