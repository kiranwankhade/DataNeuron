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
} from "@chakra-ui/react";
import { BASE_URL, addData } from "../API Service/apiService";
import DataList from "./DataList";

const Home = () => {
  const [state, setState] = useState([
    { width: 100, height: 100 },
    { width: 100, height: 100 },
    { width: 100, height: 100 },
  ]);

  const [value, setValue] = useState(""); //Value of Box 2

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const [data, setData] = useState([]);

  
  
  const onClickBtn = () => {
    setState([
      { width: 100, height: 100 },
      { width: 100, height: 100 },
      { width: 100, height: 100 },
    ]);
    setValue("");
  };

  const onResizeBtn =
    (index) =>
    (event, { size }) => {
      const newState = [...state];
      newState[index] = { width: size.width, height: size.height };
      setState(newState);
    };

  const handleAddTodo = async() => {
    try {
        await addData({ task, description });
        setTask("");
        setDescription("");
      } catch (error) {
        console.error("Error adding data:", error);
      }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/task`);
      const data = await response.json();
      console.log('data.Data:', data.Data)
      setData(data.Data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("fetchData:", data);



  return (
    <Box fontFamily={"cursive"} bgColor={'white'}>
      <Heading fontFamily={"cursive"} color={'black'} textAlign={"center"}>Resizable Component</Heading>
      <Button  bgColor={"black"}
                color={"white"} onClick={onClickBtn} m={'1rem'} _hover={{
                    bgColor:'grey', color:'black'
                }}>
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
                onClick={handleAddTodo}
              >
                ADD
              </Button>
          </Box>
        </Resizable>

        <ResizableBox
          className="box"
        //   height={state[1].width}
        //   width={state[1].width}
        style={{
            width: state[1].width + "%",
            height: state[1].height + "%",
          }}
          onResize={onResizeBtn(1)}
        >
          <Box>
            <Text color={'black'} fontWeight={'bold'} fontSize={'large'}>Data List</Text>
            <DataList data={data} reloadData={fetchData} />
          </Box>
        </ResizableBox>

        <ResizableBox
          className="box"
          height={state[2].width}
          width={state[2].width}
          onResize={onResizeBtn(2)}
        >
          <Box>
            <Text>HTML </Text>
            <Text padding={5}>
              HyperText Markup Language or HTML is the standard markup language
              for documents designed to be displayed in a web browser. It
              defines the content and structure of web content. It is often
              assisted by technologies such as Cascading Style Sheets (CSS) and
              scripting languages such as JavaScript.
            </Text>
          </Box>
        </ResizableBox>
      </Box>
    </Box>
  );
};

export default Home;
