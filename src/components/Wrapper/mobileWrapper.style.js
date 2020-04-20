import styled from "styled-components";

export const MobileWrapper = styled.div`
  nav {
    list-style: none;
  }
  display: flex;
  flex-direction: column;
  .m-section {
    background: #351ca4;
    height: 300px;
  }
  .m-header {
    display: flex;
    justify-content: space-between;
  }
  .m-nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-left: 85px;
  }
  .m-propic {
    margin-top: 10px;
  }
  .m-userprof {
    margin-top: 18px;
  }

  .title {
    display: flex;
    text-align: center;
    height: 49px;
    left: 7.57%;
    right: 67.15%;
    padding: 9px 0px 0px 38px;
    font-family: SF Text;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 60px;

    letter-spacing: -0.5px;

    color: #ffffff;
  }
  .subtitle-content {
    display: flex;
    justify-content: space-between;
  }
  .sub-title {
    padding-left: 25px;

    height: 60px;
    left: 7.57%;
    right: 74.1%;
    font-family: SF Text;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 50px;
    color: #6ccaa9;
  }
  .add-doc {
    margin: 0px 18px 17px  14px;

    height: 40px;
  
    top: 19.8%;
    bottom: 75.18%;

    background: #6ccaa9;
    border-radius: 4px;
  }
  .add-doc-card {
      height:400px;
      overflow:hidden;
      overflow-y:scroll;

    margin: 0px 18px 0px 14px;
    top: 19.8%;
    bottom: 75.18%;

    border-radius: 4px;
  }
  .button-text {
    padding: 10px;
    display: flex;
    justify-content: center;


    font-family: SF UI Display;
    font-style: normal;
    font-weight: 500;

    text-align: center;
    letter-spacing: -0.5px;

    color: #ffffff;
  }
`;
