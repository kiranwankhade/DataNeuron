// // import { FaPen, FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// // function DataItems(props) {
// //   const { id, title, description, handleToggle } = props;

// //   const IconStyle = { color: "#5e00b8" };
// //   const BtnIconStyle = { color: "#757575" };

// //   return (
// //     <div key={id} className="main">
// //       <div className="firstDiv">
// //         <div>{title}</div>
// //         <div>{description}</div>
// //       </div>
// //       <div className="icon">
// //         <button onClick={() => handleToggle(id)}>
// //           {" "}
// //           <FaPen style={BtnIconStyle} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DataItems;

// import { useState } from "react";
// import { FaPen } from "react-icons/fa";
// import { Table, Tbody, Tr, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input, Thead } from "@chakra-ui/react";
// import { BASE_URL, updateData } from "../API Service/apiService";

// function DataItems(props) {
//   const { id, title, description } = props;

//   const [editData, setEditData] = useState({ title: title, description: description });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = (rowData) => {
//     setEditData(rowData);
//     setIsEditing(true);
//   };

//   const handleClose = () => {
//     setIsEditing(false);
//   };

// //   const updateData = async (id, newData) => {
// //     console.log('newData:', newData)
// //     try {
// //       await fetch(`${BASE_URL}/task/update/${id}`, {
// //         method: 'PATCH',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify(newData)
// //       });
// //     } catch (error) {
// //       console.error('Error updating data:', error);
// //     }
// //   };

//   const handleSave = async() => {
//     console.log('editData:', editData)
//     await updateData(id,editData)
//     setIsEditing(false);
//   };

//   return (
//     <>
//       <Table variant="simple">

//         <Tbody >
//           <Tr key={id}>
//             <Td>{title}</Td>
//             <Td>{description}</Td>
//             <Td>
//               <Button onClick={() => handleEdit({title, description })}>
//                 <FaPen />
//               </Button>
//             </Td>
//           </Tr>
//         </Tbody>
//       </Table>

//       <Modal isOpen={isEditing} onClose={handleClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Data</ModalHeader>
//           <ModalBody>
//             <FormControl>
//               <FormLabel>Title</FormLabel>
//               <Input value={editData.title} onChange={(e) => setEditData({ ...editData, title: e.target.value })} />
//             </FormControl>
//             <FormControl mt={4}>
//               <FormLabel>Description</FormLabel>
//               <Input value={editData.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} />
//             </FormControl>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={handleSave}>
//               Save
//             </Button>
//             <Button onClick={handleClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default DataItems;

import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { Table, Tbody, Tr, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { updateData } from "../API Service/apiService";

function DataItems(props) {
  const { id, title: initialTitle, description: initialDescription, reloadData } = props;

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = async () => {
    try {
      const newData = { title: initialTitle, description: initialDescription };
      await updateData(id, newData);
      setIsEditing(false);
      reloadData(); // Reload data after successful update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleSave = async () => {
    try {
      const newData = { title, description };
      await updateData(id, newData);
      setIsEditing(false);
      reloadData(); // Reload data after successful update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
      {/* <Table variant="simple">
        <Tbody> */}
          <Tr key={id}>
            <Td color={'black'}>{title}</Td>
            <Td color={'black'}>{description}</Td>
            <Td >
              <Button color={'black'} onClick={handleEdit}>
                <FaPen />
              </Button>
            </Td>
          </Tr>
        {/* </Tbody>
      </Table> */}

      <Modal isOpen={isEditing} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Data</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSave}>
              Save
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DataItems;
