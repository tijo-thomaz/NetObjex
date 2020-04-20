import React, { useState } from "react";
import { connect } from "react-redux"
import { MobileWrapper } from "../Wrapper/mobileWrapper.style";
import Footer from "../Footer";
import NAV from "../NavBar";
import { Logo, UserNameText, ProPic } from "../Header/header.style";
import Card from '../Card'
import store from "../../store";
const MobileView = (props) => {
  const [activeItem, setActiveItem] = useState("home");
  const [activeItemClass, setActiveItemClass] = useState("home");
  const [tableData, setTableData] = React.useState([]);
  React.useEffect(() => {
    setTableData(props.userData);
  }, [props.userData]);
  React.useEffect(() => {
    setTableData([])
    store.dispatch.usermodel.getRandomData(0);
    return () => {
      setTableData([])
    }
  }, []);

  console.log(tableData)
  return (
    <React.Fragment>
    <div className="container box" >
      <MobileWrapper style={{ border: "1px solid black" ,height: window.innerHeight,}}>
        <section className="m-section">
          <header>
            <div className="m-header">
              <div>
                <Logo />
              </div>
              <div className="m-userprof">
                <UserNameText>Dignity Health</UserNameText>
              </div>

              <div className="m-propic">
                <ProPic />
              </div>
            </div>
          </header>
          <div className="m-nav">
            <NAV
              activeItem={activeItem}
              activeItemClass={activeItemClass}
              setActiveItem={setActiveItem}
              setActiveItemClass={setActiveItemClass}
            />
          </div>
          <span className="title">Healthcare Provider Documents</span>
            <div className="subtitle-content">
              <span className="sub-title">
                Documents Shared By Healthcare Providers
              </span>
            </div>
            <div className="add-doc">
                <span className="button-text">Add Documents</span>
              </div>
        </section>
        
        <div className="add-doc-card"><Card tableData={tableData}/></div>
      
        <Footer />
      </MobileWrapper>
     
    </div>
   
    </React.Fragment>
  );
};
function mapStateToProps(state) {
  return {
    userData: state.usermodel.userData,
  };
}

export default connect(mapStateToProps, null)(MobileView);

