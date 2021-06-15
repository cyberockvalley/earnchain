import { Box } from "@chakra-ui/layout";
import { PRIMARY_COLOR } from "../../utils/c";
import Loading from "../widgets/Loading";


export default function LoadingOrView ({as, isLoading, loadingType, loadingW, loadingH, loadingColor, children, ...props}) {
    return (
        <Box as={as || "div"} {...props}>
            {
                isLoading?
                <Loading
                style={{display: "inline !important"}}
                width={loadingW || "30px"}
                height={loadingH || "30px"}
                color={loadingColor || PRIMARY_COLOR}
                type={loadingType || Loading.TYPES.threeDots} />
                :
                <>{children}</>
            }
        </Box>
    )
}