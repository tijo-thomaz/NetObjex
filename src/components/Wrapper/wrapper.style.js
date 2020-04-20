import styled from "styled-components";
import vectorBackground from "../../assets/background.png";
import vectorElipse from "../../assets/Ellipse.png";
import vectorPrev from "../../assets/VectorPrev.png";
export const LayoutWrapper = styled.main`
nav{
  list-style:none;
}
span{
  opacity:0.75;
}
span:hover{
  opacity:1;
}
.section{
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:100px 80px;
  width:100%;
  height:1900px
}
/* Header */

header{
  padding-right: 19px;
  display:flex;
 justify-content:space-between; 
  align-items:center;

   animation: 1s fadein 0.5s forwards;
   opacity:0;
   color: #FFFFFF;
}
@keyframes fadein {
  100%{
    opacity:1;
  }
}
header nav{
  display:flex;
  margin-right:-15px;

}
header nav li{
  margin:0 15px;
}
header .user{
  display:flex;
}

.hero{
  position:relative;
  justify-content:center;
  text-align:center;
  min-height:100vh;
}
.hero .background-image{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background-size:cover;
z-index:-1;
background-image: url(${vectorBackground});
}


.bread-crumb{
  padding-top:60px;
  display: flex;
    flex-direction: column;
    text-align: start;
    padding-left:109px;
    animation: 1s fadein 0.5s forwards;
    opacity:0;
}
.content{
  max-width: 87.5%;
  display: flex;
    flex-direction: column;
    text-align: start;
    padding-left: 109px;
    animation: 1s fadein 0.5s forwards;
    opacity:0;
}

.header-content1{
  padding-top:38px;
  justify-content: center;
    display: flex;
  width:25%
}
.header-content2{
  width:75%
}
.header-core-content{
  width: 100%;
    display: flex;
    justify-content: space-between;
}

 .title{
    height: 49px;
left: 7.57%;
right: 67.15%;

font-family: SF Text;
font-style: normal;
font-weight: 500;
font-size: 35px;
line-height: 60px;

letter-spacing: -0.5px;

color: #FFFFFF;
  }
  .subtitle-content{
    display:flex;
  justify-content:space-between;
    width: 86%;
  }
  .sub-title{
    width:75%;

    height: 60px;
left: 7.57%;
right: 74.1%;
font-family: SF Text;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 50px;
color: #6CCAA9;
  }
  .add-doc{
    padding-right:10px;
    width:20%;
    height:40px;
    left: 76.88%;
right: 7.5%;
top: 19.8%;
bottom: 75.18%;

background: #6CCAA9;
border-radius: 4px;

  }
  .button-text{
    display: flex;
    justify-content: center;
    padding-top: 10px;


font-family: SF UI Display;
font-style: normal;
font-weight: 500;



text-align: center;
letter-spacing: -0.5px;

color: #FFFFFF;
  }

  .container{
  
  
   background: #FFFFFF;

   height:379px;
box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
border-radius: 4px 4px 0px 0px;
  }
 
.paginatied-content{
  display:flex;
  justify-content:flex-end;
  padding-right: 75px;
    padding-top: 21px;
    color: #8A8A8A;
.paginated-wrapper{
  display:flex;
}
    .paginated-info{
      font-family: SF Text;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 22px;
padding-right:40px;
    }
    .paginated-buttons{
      top:0;
left:0;
width: 17px;
    height: 17px;
background-size:cover;
padding: 10px;
margin-right: 15px;
background-image: url(${vectorElipse});
cursor:pointer;
    }
}
.prev{
      top:0;
left:0;
width: 17px;
    height: 17px;
background-size:cover;
padding: 10px;
margin-right: 15px;
background-image: url(${vectorPrev});

    }



`;
