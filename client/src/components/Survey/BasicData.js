/*
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {
    DatePicker,
} from '../../lib/components/uielements/materialUiPicker';
  
import {FormControls } from '../../lib/containers/UiElements/Select/select.style';
//import moment from 'moment/moment.js';

const styles = theme => ({
    selectEmpty: {
      marginTop: theme.spacing(1) * 2,
    },
    content: {
        margin: theme.spacing(1),
        width: '97%'
    },
    formControl: {
        minWidth: 400,
        width: '100%'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
  });


class BasicDataForm extends React.Component {
    state = {
        earliest: this.props.data.earliest,
        latest: this.props.data.latest,
    };
  
    componentDidMount() {
        this.props.callbackUpdate(this.state.earliest, this.state.latest);
        this.setState({
            labelWidth: 100,
        });
    }
    
    componentWillUnmount() {
        //this.props.callbackUpdate(this.state.earliest, this.state.latest);
    }

    handleChange = name => date => {
        var currentState = this.state;
        name === 'earliest' ? currentState.earliest = date : currentState.latest = date;
        this.setState(currentState);
        this.props.callbackUpdate(this.state.earliest, this.state.latest);
    };
  
    render() {
      const { classes } = this.props;
      return (
        <React.Fragment>
            <div className={classes.content}>
                <Typography variant="h6" gutterBottom>
                    You can enter your basic data here.
                </Typography>

                <Grid container spacing={0} style={{marginLeft: -8, width: '100%'}}>
                    <Grid>
                        <FormControls className={classes.formControl}>
                            <Typography style={{color: '#777'}} gutterBottom>When is the order to be carried out at the earliest?</Typography>
                            <DatePicker
                                format="DD.MM.YYYY"
                                value={this.state.earliest}
                                onChange={this.handleChange('earliest')}
                                animateYearScrolling={false}
                                fullWidth
                            />
                        </FormControls>
                    </Grid>
                    <Grid>
                        <FormControls className={classes.formControl}>
                            <Typography style={{color: '#777'}} gutterBottom>When is the order executable at the latest?</Typography>
                            <DatePicker
                                format="DD.MM.YYYY"
                                value={this.state.latest}
                                onChange={this.handleChange('latest')}
                                animateYearScrolling={false}
                                fullWidth
                            />
                        </FormControls>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
        
      );
    }
}

BasicDataForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicDataForm);
*/