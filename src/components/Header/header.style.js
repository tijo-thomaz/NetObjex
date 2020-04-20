import styled from "styled-components";
import logo from "../../assets/logo.png";
import propic from "../../assets/profilepic2.png";
export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  .nav {
    /* display: flex;
    min-width: 600px;
    padding-left: 318px;
    padding-right:270px; */
  }
  .userpic {
    display: flex;
    width: 47px;
    height: 47px;
    left: 1225px;
    top: 16px;
  }
`;
export const Logo = styled.div`
  width: 84px;
  height: 75px;
  background: url(${logo});
`;
export const ProPic = styled.div`
  width: 47px;
  height: 47px;
 margin-top:-9px;
  margin-right: 10px;
  background: url(${propic}) no-repeat;
`;
export const UserNameText =styled.div`
height: 24px;
font-family: SF Text !important;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`