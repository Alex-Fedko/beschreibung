import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from './../../lib/components/uielements/select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './../../lib/components/uielements/textfield';
import Checkbox from '@material-ui/core/Checkbox';

import { MenuItem } from '../../lib/components/uielements/menus';
//import TextValidator from './../../components/uielements/textfield';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    content: {
        margin: theme.spacing(1),
        width: '97%'
    },
    formControl: {
        width: '100%',
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
    
    cssLabel: {
        "&$cssFocused": {
          color: "#2196f3"
        }
    },
    
    cssFocused: {},
});

class ClientInvoiceAddressForm extends React.Component {
    state = {
        labelWidth: 0,
        data: this.props.data,
    };
  
    componentDidMount() {
        this.setState({
            labelWidth: 100,
        });
        this.props.setMyFunction(this.alertme);
        console.log('didmount');
    }

    alertme = () => {
        //alert('1');
        
    }
    
    componentDidUpdate(){
        // var focus = this.getFocusNeed();
        // $('#'+focus).focus();
        console.log('didmount');
    }

    //this function is to check that cango right or not
    checkFormValidation = () => {
        var data = this.state.data;
        var cango = 0;
        if ((data.company_name === '' && this.props.typeofclient === 'Company') ||
            data.first_name === '' ||
            data.sur_name === '' ||
            data.postcode === '' ||
            data.street === '' ||
            data.telno === '' ||
            data.email === '' ||
            data.city === '')
            cango = 1;
        else
            cango = 2;
        
        this.props.onChangeData(data,cango);
    }

    onChange = name => ev => {
        var tmp = this.state.data;
        tmp[name] = ev.target.value;
        this.setState({ tmp });
    }

    onChangedCheckBox = name => ev => {
        var dt = this.state.data;
        dt[name] = ev.target.checked;
        
        this.setState({ dt });
    }

    getFocusNeed = () => {
        if (this.state.data.company_name === '')
            return 'company_name';
        if (this.state.data.first_name === '')
            return 'first_name';
        if (this.state.data.sur_name === '')
            return 'sur_name';
        if (this.state.data.street === '')
            return 'street';
        if (this.state.data.postcode === '')
            return 'postcode';
        if (this.state.data.city === '')
            return 'city';
        if (this.state.data.telno === '')
            return 'telno';
        if (this.state.data.email === '')
            return 'email';
    }

    setFocusHandle = input => {
        var focus = this.getFocusNeed();
        if (input === null)
            return;
        if (input.name === focus)
            input.select();
    }

    render() {
        const { classes } = this.props;
        this.checkFormValidation();
        
        return (
            <React.Fragment>
                <div className={classes.content}>
                    <Typography variant="h6" gutterBottom>
                        Client Invoice Address
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="cia_company_name"
                                name="company_name"
                                label="Company, Facility, Organization"
                                value={this.state.data.company_name}
                                onChange={this.onChange('company_name')}
                                fullWidth
                                autoComplete="fname"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>
                        
                        <Grid item xs={12} sm={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel classes={
                                    {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused
                                    }
                                } htmlFor="id-salutation">Salutation</InputLabel>
                                <Select
                                    value={this.state.data.salutation ? this.state.data.salutation : ''}
                                    onChange={this.onChange('salutation')}
                                    inputProps={{
                                        name: 'salutation',
                                        id: 'id-salutation',
                                    }}
                                >
                                    <MenuItem value="" />
                                    <MenuItem value={10}>MR.</MenuItem>
                                    <MenuItem value={20}>MRS.</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cia_first_name"
                                name="first_name"
                                label="First Name"
                                value={this.state.data.first_name}
                                onChange={this.onChange('first_name')}
                                fullWidth
                                autoComplete="fname"
                                inputRef = {this.setFocusHandle}
                            />
                            </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cia_sur_name"
                                name="sur_name"
                                label="Surname"
                                value={this.state.data.sur_name}
                                onChange={this.onChange('sur_name')}
                                fullWidth
                                autoComplete="lname"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>
                            
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cia_street"
                                name="street"
                                label="Street"
                                value={this.state.data.street}
                                onChange={this.onChange('street')}
                                fullWidth
                                autoComplete="billing address-line1"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cia_postcode"
                                name="postcode"
                                label="PostCode"
                                value={this.state.data.postcode}
                                onChange={this.onChange('postcode')}
                                fullWidth
                                autoComplete="billing address-line2"
                                key="postcode"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cia_city"
                                name="city"
                                label="City"
                                value={this.state.data.city}
                                onChange={this.onChange('city')}
                                fullWidth
                                autoComplete="billing address-line2"
                                key="city"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cia_telephone"
                                name="telno"
                                label="Telephone No"
                                value={this.state.data.telno}
                                onChange={this.onChange('telno')}
                                fullWidth
                                autoComplete="billing address-line2"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cia_email"
                                name="email"
                                label="E-Mail"
                                value={this.state.data.email}
                                onChange={this.onChange('email')}
                                fullWidth
                                autoComplete="billing address-line2"
                                inputRef = {this.setFocusHandle}
                            />
                        </Grid>
                    </Grid>
                    <FormControlLabel
                        style={{marginTop: 20}}
                        control={
                            <Checkbox
                                checked={this.state.data.checkbox_flag}
                                onChange={this.onChangedCheckBox('checkbox_flag')}
                                color="primary"
                            />
                        }
                        label="Use this information at Contact person by the place"
                    />
                </div>
                </React.Fragment>
            
        );
    }
}

ClientInvoiceAddressForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClientInvoiceAddressForm);