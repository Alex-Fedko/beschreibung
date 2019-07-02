import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    FormLabel,
    FormControl,
    FormControlLabel,
    FormHelperText,
  } from '../../lib/components/uielements/form';
import { RadioGroup } from '../../lib/components/uielements/radio';
import Radio from '../../lib/components/uielements/radio';
import { Typography, Hidden } from '@material-ui/core';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
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

class BasicDataForm extends React.Component {
    state = {
        value: this.props.data.value
    };
    
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
    }
    
    handleChange = (ev) => {
        var dt = this.props.data;
        dt.value = ev.target.value;
        dt.cango = 2; //set to flag to ok(2:means that can go next page)
        this.props.callbackHandling(dt);
        this.setState({ value: dt.value });
    };

    render() {
        const { classes, data} = this.props;
        const value  = this.state.value;
        
        return (
            <FormControl
                component="fieldset"
                required
                className={classes.formControl}
            >
                <Typography style={{fontSize: '20px', fontWeight: 500, marginBottom: '12px'}}>{data.question}</Typography>
                <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    className={classes.group}
                    value={value}
                    onChange={this.handleChange}
                    style = {data.cango===1 ? {background: '#fce8e6'} :{background: '#ffffff'}}
                >
                {data.plans && data.plans.map((plan) => (
                    <FormControlLabel
                        value={plan}
                        control={<Radio style={value === plan ? {color: '#2196f3'} : {}} />}
                        label={plan}
                        key={plan}
                    />
                ))}
                </RadioGroup>
                <FormHelperText 
                    style={data.cango === 1 ? {display: 'block',color:'#ff0000'} :{display: 'none'} }>
                        You must choose one of these.
                </FormHelperText>
            </FormControl>
            
        );
    }
}

BasicDataForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicDataForm);