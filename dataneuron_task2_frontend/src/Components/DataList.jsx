import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, getData } from "../API Service/apiService";
import DataItems from "./DataItems";
import { Box, Th, Thead } from "@chakra-ui/react";

import {
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const DataList = (data,reloadData) => {
  console.log('data:', data)

  return (
    <Box>
      <Table
        variant="striped"
        colorScheme="blackAlpha"
        size="sm"
        textAlign="center"
      >
        <Thead>
          <Tr>
            <Th color={"black"}>Title</Th>
            <Th color={"black"}>Description</Th>
            <Th color={"black"}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.data.map((dataItems) => (
            <DataItems
              key={dataItems._id}
              title={dataItems.task}
              description={dataItems.description}
              id={dataItems._id}
              reloadData={reloadData}
            />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataList;
