import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": '#FFBA08'
    },
    gray: {
      "50": '#F5F8FA',
      "200": '#DADADA',
      "300": '#999999',
      "400": '#47585B',
    },
    black: {
      "900": '#000000',
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.400',
      }
    }
  }
})