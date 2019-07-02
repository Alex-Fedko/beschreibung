import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from './../../lib/components/uielements/textfield';

import { MenuItem } from '../../lib/components/uielements/menus';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    formControl: {
        minWidth: '100%',
    },
    content: {
        margin: theme.spacing(1),
        width: '97%'
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

class UnloadingPointForm extends React.Component {
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
        if (data.up_bell_name=== '' ||
            data.up_house_number === '' ||
            data.up_postcode === '' ||
            data.up_city === '' ||
            data.up_level_nums === '' ||
            data.up_total_removal_path === '' 
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
                    Unloading Point
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="id-savedaddr">Use saved address</InputLabel>
                            <Select
                                value={this.state.data.up_saved_addr}
                                onChange={this.onChange('up_saved_addr')}
                                //inputProps={{
                                //    name: 'saved_addr',
                                //    id: 'id-savedaddr',
                                //}}
                                //<MenuItem value={data.cia_company}>{data.cia_company}</MenuItem>
                            >
                                <MenuItem value="" />
                                <MenuItem value="Test">Test</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="up_bell_name"
                            name="up_bell_name"
                            label="What is the name on the bell?"
                            value={this.state.data.up_bell_name}
                            onChange={this.onChange('up_bell_name')}
                            fullWidth
                            autoComplete="fname"
                        />
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="up_house_number"
                            name="up_house_number"
                            label="streetname, housenumber"
                            value={this.state.data.up_house_number}
                            onChange={this.onChange('up_house_number')}
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="up_postcode"
                            name="up_postcode"
                            label="Postcode"
                            value={this.state.data.up_postcode}
                            onChange={this.onChange('up_postcode')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="up_city"
                            name="up_city"
                            label="City"
                            value={this.state.data.up_city}
                            onChange={this.onChange('up_city')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>How many more levels are there?(House entrance, staircase, removal path,...)</Typography>
                        <TextField
                            id="up_level_nums"
                            name="up_level_nums"
                            value={this.state.data.up_level_nums}
                            onChange={this.onChange('up_level_nums')}
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography style={{color: '#777', fontSize: 15}}>How long is the total removal path? (In the building and from the buliding to the truck parking a lot.[m]</Typography>
                        <TextField
                            id="up_total_removal_path"
                            name="up_total_removal_path"
                            value={this.state.data.up_total_removal_path}
                            onChange={this.onChange('up_total_removal_path')}
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

UnloadingPointForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnloadingPointForm);