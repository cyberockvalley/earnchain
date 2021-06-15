import { Text } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import useTranslation from "next-translate/useTranslation";
import { PRIMARY_COLOR } from "../../utils/c";
import SlotPage from "../SlotPage";
import Loading from "../widgets/Loading";
import SlotListItemN3 from "./SlotListItemN3";
import SlotListItemN4 from "./SlotListItemN4";
import SlotListItemNInfinity from "./SlotListItemNInfinity";

const SlotList = ({type, name, data, buyLevel, latestActiveSlotNumber}) => {
  const {t, lang} = useTranslation("dash")

    return (
        <div className="row">
            <div className="col">
              <div className="border-gradient">
                <div className="border-gradient_content">
                  <div id="x3main" className="logotypeX3">
                    <p className="matrix-name cap-case">{name}</p>
                  </div>
                  {
                    !data?
                    <HStack w="100%" minH="200px" justifyContent="center" alignItems="center">
                      <Loading width="5rem" height="5rem" color={PRIMARY_COLOR} 
                      type={Loading.TYPES.threeDots} />
                    </HStack> :
                    data.notActive?
                    <HStack w="100%" minH="200px" justifyContent="center" alignItems="center">
                      <Text fontSize="2.5rem" color={PRIMARY_COLOR} opacity="0.7">
                        {t("comming-soon")}
                      </Text>
                    </HStack>
                    :
                    <div className="ternary-wrapper">
                      {
                          data.list.map((value, index) => {
                              return type == SlotPage.TYPES.nInfinity? 
                              <SlotListItemNInfinity key={`slot-list-item-${index}`} latestActiveSlotNumber={latestActiveSlotNumber} 
                              buyLevel={buyLevel} number={index + 1} data={value} /> : type == SlotPage.TYPES.n4? 
                              <SlotListItemN4 key={`slot-list-item-${index}`} latestActiveSlotNumber={latestActiveSlotNumber} 
                              buyLevel={buyLevel} number={index + 1} data={value} /> : 
                              <SlotListItemN3 key={`slot-list-item-${index}`} latestActiveSlotNumber={latestActiveSlotNumber} 
                              buyLevel={buyLevel} number={index + 1} data={value} />
                          })
                      }
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
    )
}

SlotList.FUNCTIONS = {
  getNodeClass: nodeType => {
    switch (nodeType) {
      case SlotPage.NODE_TYPES.INVITED_NODE:
        return "matrix-children__active"
      case SlotPage.NODE_TYPES.FROM_BOTTOM_NODE:
        return "matrix-children__overflow_partner"
      case SlotPage.NODE_TYPES.FROM_TOP_NODE:
        return "matrix-children__overflow"
      case SlotPage.NODE_TYPES.FROM_SLOW_INVITER_NODE:
        return "matrix-children__advance"
      default:
        return ""
    }
  }
}

export default SlotList