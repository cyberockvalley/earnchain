import DashHeader from "./dashboard/DashHeader";
import DashSideBar from "./dashboard/DashSideBar";
import CommonCSS from "./jsx-styles/CommonCSS";
import DashCSS from "./jsx-styles/DashCSS";
import SlotN3 from "./dashboard/single-slot/SlotN3";
import SlotN4 from "./dashboard/single-slot/SlotN4";
import Transactions from "./dashboard/single-slot/Transactions";

const SlotPage = ({type}) => {

  return (
    <div id="slot-page">
      <div className="container">
        <DashHeader></DashHeader>
        <div className="row">
          <div className="col-lg-3 mb-4">
            <DashSideBar></DashSideBar>
          </div>
          <div className="col-lg-9" dataN={type}>
            {
              type == SlotPage.TYPES.n4?
              <SlotN4></SlotN4>
              :
              <SlotN3></SlotN3>
            }
            <Transactions></Transactions>
          </div>
        </div>
      </div>
      <div className="text-center mb-3">
        <div className="button-con"></div>
      </div>
      <DashCSS isGlobal />
      <CommonCSS isGlobal />
    </div>
  )
}

SlotPage.TYPES = {
  n3: 1,
  n4: 2,
  nInfinity: 3
}
SlotPage.ACTIVE_TYPES = [SlotPage.TYPES.n3, SlotPage.TYPES.n4]

SlotPage.NODE_TYPES = {
  INVITED_NODE: 1,
  FROM_BOTTOM_NODE: 2,
  FROM_TOP_NODE: 3,
  FROM_SLOW_INVITER_NODE: 4,
}
export default SlotPage;
