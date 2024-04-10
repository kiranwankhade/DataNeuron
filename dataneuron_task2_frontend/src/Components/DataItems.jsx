import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { Tr, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, FormControl, FormLabel, Input } from "@chakra-ui/react";
import {  updateData } from "../API Service/apiService";

function DataItems(props) {
  const { id, task, description, reloadData } = props;

  const [taskEdit, setTaskEdit] = useState(task);
  const [descriptionEdit, setDescriptionEdit] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = async () => {
    try {
      setIsEditing(false);
      reloadData(); // Reload data after successful update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleSave = async () => {
    try {
      const newData = { task:taskEdit, description:descriptionEdit };
      await updateData(id, newData);
      setIsEditing(false);
      reloadData(); // Reload data after successful update
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
          <Tr key={id}>
            <Td color={'black'}>{task}</Td>
            <Td color={'black'}>{description}</Td>
            <Td >
              <Button color={'black'} onClick={handleEdit}>
                <FaPen />
              </Button>
            </Td>
          </Tr>

      <Modal isOpen={isEditing} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Data</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input value={taskEdit} onChange={(e) => setTaskEdit(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input value={descriptionEdit} onChange={(e) => setDescriptionEdit(e.target.value)} />
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
