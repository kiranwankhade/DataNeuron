import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const CountDisplay = ({countData}) => {
  return (
    <>
      <Box fontFamily={'cursive'}>
            <Text color={'black'}>Count For Data Added And Updated </Text>
            <Text padding={5} color={'black'}>AddCount : {countData.addCount}</Text>
            <Text padding={5} color={'black'}>UpdateCount: {countData.updateCount}</Text>
          </Box>
    </>
  )
}

export default CountDisplay