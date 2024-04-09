import React, { useState } from "react";
import { Resizable, ResizableBox } from "react-resizable";
import "./Style.css";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

const Dashboard = () => {
    const [state, setState] = useState([
        { width: 300, height: 200 },
        { width: 300, height: 200 },
        { width: 300, height: 200 },
      ]);
    
      const [value, setValue] = useState('');  //Value of Box 2
    
      const onClickBtn = () => {
        setState([
          { width: 300, height: 200 },
          { width: 300, height: 200 },
          { width: 300, height: 200 },
        ]);
        setValue('')
      };
    
      const onResizeBtn = (index) => (event, { size }) => {
        const newState = [...state];
        newState[index] = { width: size.width, height: size.height };
        setState(newState);
      };

  return (
    <Box>
      <Heading textAlign={'center'}>Resizable Component</Heading>
      <Button onClick={onClickBtn} mt={'10px'} mb={"10px"}>
        Reset first element's width/height
      </Button>

      <Box className="layoutRoot">
        <Resizable
          className="box"
          height={state[0].width}
          width={state[0].width}
          onResize={onResizeBtn(0)}
        >
          <Box
            className="box"
            style={{
              width: state[0].width + "px",
              height: state[0].height + "px",
            }}
          >
            <img
              className="text"
              src="https://dataneuron.ai/logo2.png"
              alt="A placeholder"
              style={{
                width: "80%",
                height: "30%"}}
            />
          </Box>
        </Resizable>

        <ResizableBox className="box"  height={state[1].width}
          width={state[1].width} onResize={onResizeBtn(1)}>
          <Box >
            <Text>Add Anything </Text>
            <input
              style={{
                color: "black",
                backgroundColor: "transparent",
                border: "1px solid gray",
                borderRadius: "5px",
                width: "50%", // Make the input width responsive
                padding: "5px",
              }}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <p>{value}</p>
          </Box>
        </ResizableBox>

        <ResizableBox className="box"  height={state[2].width}
          width={state[2].width} onResize={onResizeBtn(2)}>
          <Box>
            <Text>HTML </Text>
            <Text padding={5}>HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</Text>
          </Box>
        </ResizableBox>
      </Box>
    </Box>
  );
};

export default Dashboard;
