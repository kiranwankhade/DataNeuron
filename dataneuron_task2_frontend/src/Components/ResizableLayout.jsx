import React from 'react';
import Resizable from 'react-resizable-layout';

const ResizableLayout = ({ children }) => {
  return (
    <Resizable>
      {children}
    </Resizable>
  );
};

export default ResizableLayout;
