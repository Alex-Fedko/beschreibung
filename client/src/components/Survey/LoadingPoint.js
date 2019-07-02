import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './../../lib/components/uielements/textfield';
// import Checkbox from '@material-ui/core/Checkbox';

import { MenuItem } from '../../lib/components/uielements/menus';


const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    content: {
        margin: theme.spacing(1),
        width: '97%'
    },
    formControl: {
        minWidth: '100%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
  });

class LoadingPointForm extends React.Component {
    state = {
        labelWidth: 0,
        data: this.props.data
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
    onChange = name => ev => {
        var tmp = this.state.data;
        tmp[name] = ev.target.value;
        
        this.setState({ tmp });
        this.props.onChangeData(tmp);
    }
    
    //this function is to check that cango right or not
    checkFormValidation = () => {
        var data = this.state.data;
        var cango = 0;
        if (data.lp_bell_name=== '' ||
            data.lp_streetname === '' ||
            data.lp_postcode === '' ||
            data.lp_city === ''
            )
            cango = 1;
        else
            cango = 2;
        
        this.props.onChangeData(data,cango);
    }

    render() {
      //const { classes, data } = this.props;
      const { classes } = this.props;
      this.checkFormValidation();
      
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Loading Point
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="id-savedaddr">Use saved address</InputLabel>
                            <Select
                                value={this.state.data.lp_addr}
                                onChange={this.onChange('lp_addr')}
                                //inputProps={{
                                //   name: 'saved_addr',
                                //    id: 'id-savedaddr',
                                //}}
                            >
                                <MenuItem value="" />
                                <MenuItem value="1">1</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lp_bell_name"
                            name="lp_bell_name"
                            label="What is the name on the bell?"
                            value={this.state.data.lp_bell_name}
                            onChange = {this.onChange('lp_bell_name')}
                            fullWidth
                            autoComplete="fname"
                        />
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lp_streetname"
                            name="lp_streetname"
                            label="streetname, housenumber"
                            value={this.state.data.lp_streetname}
                            onChange={this.onChange('lp_streetname')}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="lp_postcode"
                            name="lp_postcode"
                            label="Postcode"
                            value={this.state.data.lp_postcode}
                            onChange={this.onChange('lp_postcode')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="lp_city"
                            name="lp_city"
                            label="City"
                            value={this.state.data.lp_city}
                            onChange={this.onChange('lp_city')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                </Grid>
            </div>
        </React.Fragment>
        
      );
    }
}

LoadingPointForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPointForm);