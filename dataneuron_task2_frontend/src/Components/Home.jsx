import React, { useEffect, useState } from "react";
import { Resizable, ResizableBox } from "react-resizable";
import "./Style.css";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Table,
  Tbody,
  Tr,
  Thead,
  Th,
} from "@chakra-ui/react";
import { BASE_URL, addData, getCount } from "../API Service/apiService";
import DataItems from "./DataItems";
import CountDisplay from "./CountDisplay";

const Home = () => {
  const [state, setState] = useState([
    { width: 100, height: 100 },
    { width: 500, height: 300 },
    { width: 500, height: 300 },
  ]);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const [countData, setCountData] = useState({ addCount: 0, updateCount: 0 });

  const onClickBtn = () => {
    setState(state.map(() => ({ width: 500, height: 300 })));
    setTask("");
    setDescription("");
  };

  const onResizeBtn =
    (index) =>
    (event, { size }) => {
      setState(
        state.map((s, idx) =>
          idx === index ? { width: size.width, height: size.height } : s
        )
      );
    };

  const handleAddTodo = async () => {
    try {
      await addData({ task, description });
      setTask("");
      setDescription("");
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/task`);
      const data = await response.json();
      setData(data);
      getCountData(); // Fetch the updated count data
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const getCountData = async () => {
    try {
      const countData = await getCount();
      console.log("countData:", countData);
      setCountData(countData);
    } catch (error) {
      console.error("Error getting count:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box fontFamily={"cursive"} bgColor={"white"}>
      <Heading fontFamily={"cursive"} color={"black"} textAlign={"center"}>
        Resizable Component
      </Heading>
      <Button
        bgColor={"black"}
        color={"white"}
        onClick={onClickBtn}
        m={"1rem"}
        _hover={{
          bgColor: "grey",
          color: "black",
        }}
      >
        Reset first element's width/height
      </Button>

      <Box className="layoutRoot">
        <Resizable
          className="box"
          height={state[0].height}
          width={state[0].width}
          onResize={onResizeBtn(0)}
        >
          <Box
            className="box"
            style={{
              width: state[0].width + "%",
              height: state[0].height + "%",
            }}
          >
            <Heading color={"black"} fontFamily={"cursive"}>
              ADD TASK
            </Heading>
            <Flex
              //   w={"100%"}
              mt={"1rem"}
              flexDirection={["column", "row", "row", "row"]}
              gap={"1rem"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FormControl>
                <FormLabel color={"black"} fontWeight={"bold"}>
                  Enter Task
                </FormLabel>
                <Input
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Add new todo"
                  size="sm"
                  border={"1px solid grey"}
                  color={"black"}
                  _placeholder={{ color: "black" }}
                />
              </FormControl>

              <FormControl>
                <FormLabel color={"black"} fontWeight={"bold"}>
                  Enter Description
                </FormLabel>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add Description"
                  size="sm"
                  border={"1px solid grey"}
                  color={"black"}
                  _placeholder={{ color: "black" }}
                />
              </FormControl>
            </Flex>
            <Button
              w={"50%"}
              bgColor={"black"}
              color={"white"}
              mt={"1.5rem"}
              _hover={{
                bgColor: "grey",
                color: "black",
              }}
              onClick={handleAddTodo}
            >
              ADD
            </Button>
          </Box>
        </Resizable>

        <ResizableBox
          height={state[1].height}
          width={state[1].width}
          onResize={onResizeBtn(1)}
          className="box"
        >
          <Box>
            <Text color={"black"} fontWeight={"bold"} fontSize={"large"}>
              Data List
            </Text>
            <Box>
              <Table
                variant="striped"
                colorScheme="blackAlpha"
                size="sm"
                textAlign="center"
              >
                <Thead>
                  <Tr>
                    <Th color={"black"}>Task</Th>
                    <Th color={"black"}>Description</Th>
                    <Th color={"black"}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.map((dataItems) => (
                    <DataItems
                      key={dataItems._id}
                      task={dataItems.task}
                      description={dataItems.description}
                      id={dataItems._id}
                      reloadData={fetchData}
                    />
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </ResizableBox>

        <ResizableBox
           height={state[2].height}
           width={state[2].width}
           onResize={onResizeBtn(2)}
           className="box"
        >
          <CountDisplay countData={countData} />
        </ResizableBox>
      </Box>
    </Box>
  );
};

export default Home;
