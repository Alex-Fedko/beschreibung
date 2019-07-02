import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Root from './Root'
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import blue from '@material-ui/core/colors/blue';
import { Provider } from 'react-redux';
import {store} from './redux/helpers';

// setup fake backend
import { configureFakeBackend } from './redux/helpers';
configureFakeBackend();

const theme = createMuiTheme({
   palette: {
      primary: blue,
      secondary: blue,
      appbar: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
        color: '#000000',
        background: '#ffffff'
      }
   },
   typography: { 
      useNextVariants: true
   },
   /*.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline */
  overrides: {
      MuiOutlinedInput: {
         root: {
           "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
             border: "2px solid",
             borderColor: "#2196f3",
           }
         }
       },
      MuiInput: {
        underline: {
         '&:hover:not($disabled):before': {
            height: 1,
            borderBottom: "2px solid #2196f3",
          },
        },
      },
   },
 });

ReactDOM.render(<MuiThemeProvider theme = { theme }>
                  <Provider store={store}>
                    <Root />
                  </Provider>
                </MuiThemeProvider>, 
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
