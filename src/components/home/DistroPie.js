

import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart'
import { VStack, HStack, Text } from "@chakra-ui/layout";

const DistroPie = ({data, ...props}) => {
    const lineWidth = 60
    const [hovered, setHovered] = useState()
    const [selected, setSelected] = useState()

    const getData = data.map((entry, i) => {
        if (hovered === i) {
          return {
            ...entry,
            color: 'grey',
          };
        }
        return entry;
    })

    return (
        <PieChart
            style={{
                fontFamily:
                '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                fontSize: '8px',
            }}
            data={getData}
            radius={PieChart.defaultProps.radius - 6}
            lineWidth={60}
            segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
            segmentsShift={(index) => (index === selected ? 6 : 1)}
            animate
            label={({ dataEntry }) => dataEntry.title}
            labelPosition={100 - lineWidth / 2}
            labelStyle={{
                fill: '#fff',
                opacity: 0.75,
                pointerEvents: 'none',
            }}
            onClick={(_, index) => {
                setSelected(index === selected ? undefined : index);
            }}
            onMouseOver={(_, index) => {
                setHovered(index);
            }}
            onMouseOut={() => {
                setHovered(undefined);
            }}
        />
    )
}

DistroPie.Button = ({children}) => {
    return (
        <VStack justifyContent="center" alignItems="flex-start" 
            p="0px 15px"
            height="40px"
            borderRadius="5px"
            minW={{base: "90%", md: "300px"}} 
            maxW={{base: "90%", md: "300px"}} 
            bg="rgba(0,0,0,.5)"
            mb="15px !important" mt="0px !important"
            textTransform="capitalize" fontSize="14px">
            <Text>{children}</Text>
        </VStack>
    )
}

export default DistroPie