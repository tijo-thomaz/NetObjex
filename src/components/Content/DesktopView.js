import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { useWindowDimensions } from "../Dimensions/windowDiamensionProvider";
import { LayoutWrapper } from "../Wrapper/wrapper.style";
import vectorBackground from "../../assets/background.png";
import Prev from '../../assets/VectorPrev.png'
import Next from '../../assets/VectorNext.png'
import Footer from "../Footer";
import Header from "../Header";
import Table from "../Table";
import store from "../../store";
const DesktopView = (props) => {
  const [tableData, setTableData] = React.useState([]);
  const [page, setPage] = React.useState(0);

  const { width } = useWindowDimensions();
  React.useEffect(() => {
    setTableData([])
    store.dispatch.usermodel.getRandomData(page);
    return () => {
      setTableData([])
    }
  }, []);

  React.useEffect(() => {

    store.dispatch.usermodel.getRandomData(page);
  }, [page]);
  React.useEffect(() => {
    setTableData(props.userData);
  }, [props.userData]);
  const handlePreviousPage=()=>{
    if(page!==0){
      setPage(page - 1)
    }
 
  }
  const handleNextPage=()=>{
    if(page>=0){
      setPage(page + 1)
    }
 
  }
  return (
    <div className="section">
      <div
        className={classNames("tile is-ancestor", {
          "is-vertical": width > 414 && width < 1088,
        })}
        style={{
          height: "798px",
          backgroundImage: ` url(${vectorBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          width: "100%",
          paddingBottom: "198px",
        }}
      >
        <LayoutWrapper width={width}>
          <Header />
          <div className="bread-crumb">
            <span className="title">Healthcare Provider Documents</span>
            <div className="subtitle-content">
              <span className="sub-title">
                Documents Shared By Healthcare Providers
              </span>
              <div className="add-doc">
                <span className="button-text">Add Documents</span>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container">
              <Table tableData={tableData} />
              <div className="paginatied-content">
                <div className="paginated-info">1 0f 10</div>
              
                  <div className="paginated-buttons" onClick={handlePreviousPage}></div>
                  <div className="paginated-buttons"   onClick={()=>{
                    handleNextPage()
                  }}  ></div>
          
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
      <Footer />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userData: state.usermodel.userData,
  };
}

export default connect(mapStateToProps, null)(DesktopView);
