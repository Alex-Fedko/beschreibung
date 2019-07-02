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

class LoadingPointSecondForm extends React.Component {
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
        if (data.lp2_total_area_object=== '' ||
            data.lp2_total_number_of_rooms === '' ||
            data.lp2_ceiling_height === '' ||
            data.lp2_level_nums === '' ||
            data.lp2_ceiling_height2 === '' ||
            data.lp2_total_removal_path === ''
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
                    Loading Point
                </Typography>
                <Grid container spacing={3}>
                    
                    <Grid item xs={12}>
                        <TextField
                            id="lp2_total_area_object"
                            name="lp2_total_area_object"
                            label="Total area of the object [m©÷]"
                            value={this.state.data.lp2_total_area_object}
                            onChange={this.onChange('lp2_total_area_object')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>Total number of rooms in the object including kitchen, hall etc. (without further storage space like basement etc.)</Typography>
                        <TextField
                            id="lp2_total_number_of_rooms"
                            name="lp2_total_number_of_rooms"
                            value={this.state.data.lp2_total_number_of_rooms}
                            onChange={this.onChange('lp2_total_number_of_rooms')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="lp2_ceiling_height"
                            name="lp2_ceiling_height"
                            label="Ceiling height [m]"
                            value={this.state.data.lp2_ceiling_height}
                            onChange={this.onChange('lp2_ceiling_height')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    
                    <Grid item xs={12}>
                    <Typography style={{color: '#777', fontSize: 15}}>How many levels are there?(House entrance, staircase, removal path,...)</Typography>
                        <TextField
                            id="lp2_level_nums"
                            name="lp2_level_nums"
                            value={this.state.data.lp2_level_nums}
                            onChange={this.onChange('lp2_level_nums')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="lp2_ceiling_height2"
                            name="lp2_ceiling_height2"
                            label="Ceiling height [m]"
                            value={this.state.data.lp2_ceiling_height2}
                            onChange={this.onChange('lp2_ceiling_height2')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>How long is the total removal path? (In the building and from the buliding to the truck parking a lot.[m]</Typography>
                        <TextField
                            id="lp2_total_removal_path"
                            name="lp2_total_removal_path"
                            value={this.state.data.lp2_total_removal_path}
                            onChange={this.onChange('lp2_total_removal_path')}
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

LoadingPointSecondForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoadingPointSecondForm);