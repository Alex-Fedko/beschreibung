import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './../../lib/components/uielements/textfield';
// import Checkbox from '@material-ui/core/Checkbox';

// import { MenuItem } from '../../components/uielements/menus';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    content: {
        margin: theme.spacing(1),
        width: '97%'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 600,
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

class LoadingPointAdditionalForm extends React.Component {
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

    checkFormValidation = () => {
        var data = this.state.data;
        var cango = 0;
        if (data.asa_additional_storage_space=== '' ||
            data.asa_total_additional_storage_space === ''
            )
            cango = 1;
        else
            cango = 2;
        
        this.props.onChangeData(data,cango);
    }

    render() {
      const { classes } = this.props;
      this.checkFormValidation();
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    Additional storage areas (loading point)
                </Typography>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                        <TextField
                            id="asa_additional_storage_space"
                            name="asa_additional_storage_space"
                            label="Ceiling height additional storage space [m]"
                            value={this.state.data.asa_additional_storage_space}
                            onChange={this.onChange('asa_additional_storage_space')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="asa_total_additional_storage_space"
                            name="asa_total_additional_storage_space"
                            label="Total area of ??additional storage space [m©÷]"
                            value={this.state.data.asa_total_additional_storage_space}
                            onChange={this.onChange('asa_total_additional_storage_space')}
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

LoadingPointAdditionalForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPointAdditionalForm);