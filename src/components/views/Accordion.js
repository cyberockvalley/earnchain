import { AccordionIcon } from "@chakra-ui/accordion"
import { IconButton } from "@chakra-ui/button"
import { ListIcon } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { useState } from "react"


const Accordion = ({className, maxShown, items, ...props}) => {
    const [shownId, setShownId] = useState(-1)

    return (
        <Box className={`${className || ""}`} {...props}>
            {
                (items || []).map((item, index) => {
                    return (
                        <Item key={`acc-${index}`} title={item.title} content={item.content} d={maxShown && index >= maxShown? "none !important" : "block !important"} 
                        contentShown={index == shownId} 
                        toggleHandler={() => {
                            if(index == shownId) {
                                setShownId(-1)

                            } else {
                                setShownId(index)
                            }
                        }}  />
                    )
                })
            }
        </Box>
    )
}

const Item = ({title, content, contentShown, toggleHandler, className, ...props}) => {
    return (
        <Box className={`accordion-wrap ${className || ""}`} {...props}>
            <Box className={`accordion revealator-slideright revealator-once revealator-within ${contentShown? "active" : ""}`}>
                <Box className="accordion-heading" onClick={toggleHandler}>
                    {title}
                    <span className="accordion-heading__arrow">
                        <i className="fa fa-chevron-right"></i>
                    </span>
                </Box>
                <Box className={`accordion-content`} display={!contentShown? "none !important" : "block !important"}>
                    {content}
                </Box>
            </Box>
        </Box>
    )
}

export default Accordion