
import TextField from '@material-ui/core/TextField';

export default TextField;

/*
import React from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core'

const styles = {
    cssLabel: {
        "&$cssFocused": {
          color: "#2196f3"
        }
      },
      cssFocused: {
        borderColor: "#2196f3",
        "&$cssFocused $notchedOutline": {
          borderColor: "#2196f3"
        }
      },
      cssUnderline: {
        "&:hover": {
            borderColor: "#2196f3"
          },
        "&:after": {
          borderColor: "#2196f3"
        }
      },
      cssOutlinedInput: {
        borderColor: "#2196f3",
        "&$cssFocused $notchedOutline": {
          borderColor: "#2196f3"
        }
      },
      notchedOutline: {
        borderColor: "#2196f3",
        "&$cssFocused $notchedOutline": {
          borderColor: "#2196f3"
        }
      },
}
const TextFieldNew = (props) => 
{
    let classes = props.classes;
    console.log("osodod");
    console.log(props);
    return (
        <TextField 
            {...props}
            InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  underline: classes.cssUnderline,
                  notchedOutline: classes.notchedOutline
                }
              }}
        >
        </TextField>
    )
}

export default withStyles(styles)(TextFieldNew);
*/