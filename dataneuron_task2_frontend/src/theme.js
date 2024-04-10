import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'white', 
      },
    },
  },
});

export default customTheme;