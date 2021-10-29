import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1C0C5B',
    },
    secondary: {
      main: '#3D2C8D',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
