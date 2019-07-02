import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './../../lib/components/uielements/textfield';
//import Checkbox from '@material-ui/core/Checkbox';
import { MenuItem } from '../../lib/components/uielements/menus';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
        minWidth: '100%',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    content: {
        margin: theme.spacing(1),
        width: '97%'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
  });

class ContactPersonForm extends React.Component {
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
        if (data.cpp_first_name === '' ||
            data.cpp_sur_name=== '' ||
            data.cpp_telno === '' ||
            data.cpp_email === ''
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
                        Contact person by the place
                    </Typography>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={12}>
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="id-contact-person-sal">Salutation</InputLabel>
                                <Select
                                    value={this.state.data.cpp_salutation ? this.state.data.cpp_salutation : ''}
                                    onChange={this.onChange('cpp_salutation')}
                                    inputProps={{
                                        name: 'contact_person_sal',
                                        id: 'id-contact-person-sal',
                                    }}
                                >
                                    <MenuItem value="" />
                                    <MenuItem value={10}>Mr.</MenuItem>
                                    <MenuItem value={20}>Mrs.</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cpp_firstName"
                                name="firstName"
                                label="First Name"
                                value={this.state.data.cpp_first_name ? this.state.data.cpp_first_name : ''}
                                onChange={this.onChange('cpp_first_name')}
                                fullWidth
                                autoComplete="fname"
                            />
                            </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="cpp_lastName"
                                name="lastName"
                                label="Surname"
                                value={this.state.data.cpp_sur_name ? this.state.data.cpp_sur_name : ''}
                                onChange={this.onChange('cpp_sur_name')}
                                fullWidth
                                autoComplete="lname"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cpp_telephone"
                                name="telephone"
                                label="Telephone No"
                                value={this.state.data.cpp_telno ? this.state.data.cpp_telno : ''}
                                onChange={this.onChange('cpp_telno')}
                                fullWidth
                                autoComplete="billing address-line2"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="cpp_email"
                                name="email"
                                label="E-Mail"
                                value={this.state.data.cpp_email ? this.state.data.cpp_email : ''}
                                onChange={this.onChange('cpp_email')}
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

ContactPersonForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPersonForm);