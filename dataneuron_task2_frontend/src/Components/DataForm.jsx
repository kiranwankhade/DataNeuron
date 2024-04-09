// import React, { useState } from 'react';
// import { VStack, Input, Button } from '@chakra-ui/react';
// import * as apiService from '../API Service/apiService';

// const DataForm = ({ handleAdd }) => {
// const [task,setTask] = useState("");
// const [description,setDescription] = useState("")
//   const [data, setData] = useState({
//     task,
//     description
//   });

// //   const handleAdd = async () => {
// //     await apiService.addData(data);
// //     setData('');
// //     reloadData();
// //   };

// //   return (
// //     <VStack>
// //       <Input placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
// //       <Input placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
// //       <Button colorScheme="blue" onClick={handleAdd}>Add</Button>
// //     </VStack>
// //   );

// // const [text, setText] = React.useState("");

// const [task,setTask] = useState("");
// const [description,setDescription] = useState("")
// const [data, setData] = useState();
    


//   const handleAddTodo = () => {
//     setData({
//         task,
//         description
//     })
//     handleAdd(data);
//     setTask("");
//     setDescription("");
//   };

//   return (
//     <div>
//       <div className="Navbar">TODO APP</div>
//       <div className="Inputbox">
//         <input
//           className="inputField"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Add new todo"
//         />

// <input
//           className="inputField"
//           value={description} 
//           onChange={(e) => setDescription(e.target.value)} 
//           placeholder="Add new todo"
//         />
//         <button className="Button" onClick={handleAddTodo}>
//           ADD
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DataForm;

import React from 'react'

const DataForm = () => {
  return (
    <div>DataForm</div>
  )
}

export default DataForm