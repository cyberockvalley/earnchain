import { VStack as V } from "@chakra-ui/layout";

export default function VStack({children, ...props}) {

    return (
        <V insetInlineStart="0 !important" {...props}>{children}</V>
    )
}