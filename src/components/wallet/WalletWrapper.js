import { Box } from "@chakra-ui/layout";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import WalletModal from ".";
import { READ_ONLY_WALLET } from "../../utils/c";
import { connectorsByName } from "../../web3/connectors";


export default function WalletWrapper({as, isOpen, onClose, children, onConnected, ref, ...props}) {

    return (
        <Box as={as || "div"} {...props}>
            {children}
            <WalletModal isOpen={isOpen} onClose={onClose} onConnected={ onConnected} ref={ref} />
        </Box>
    )
}