// import React, { useState, useEffect } from 'react';
// import { Text } from '@chakra-ui/react';
// import * as apiService from '../API Service/apiService';

// const CountDisplay = () => {
//   const [addCount, setAddCount] = useState(0);
//   const [updateCount, setUpdateCount] = useState(0);

//   useEffect(() => {
//     const fetchCount = async () => {
//       const { addCount, updateCount } = await apiService.getCount();
//       setAddCount(addCount);
//       setUpdateCount(updateCount);
//     };

//     fetchCount();
//   }, []);

//   return (
//     <div>
//       <Text>Add Count: {addCount}</Text>
//       <Text>Update Count: {updateCount}</Text>
//     </div>
//   );
// };

// export default CountDisplay;

import React from 'react'

const CountDisplay = () => {
  return (
    <div>CountDisplay</div>
  )
}

export default CountDisplay