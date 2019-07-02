import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {RouteComponentProps} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        'text-transform' : 'none',
    },
    input: {
        display: 'none',
    },
}));

const Menu = (loginstatus) => { // deconstruct the porp as {classes}
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    const classes = useStyles();
    
    const updateMenu = (lgnStatus) => {
        SetIsLoggedIn(lgnStatus);
    }
    
    return (
        <div style={{textAlign:'right'}}>
            <NavLink exact to="/" style={isLoggedIn ? {textDecoration : 'none'} : {display:'none'}}>
                <Button size="small" className={classes.button}>Home</Button>
            </NavLink>
            <NavLink exact to="/signin" style={!isLoggedIn ? {textDecoration : 'none'} : {display:'none'}}>
                <Button size="small" color="primary" variant="contained" className={classes.button}>Sign In</Button>
            </NavLink>
            <NavLink exact to="/signout" style={isLoggedIn ? {textDecoration : 'none'} : {display:'none'}}>
                <Button size="small" color="primary" variant="contained" className={classes.button}>Sign In</Button>
            </NavLink>
        </div>
    );
}
export default Menu;

