import React, {useState , useCallback} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { userActions } from '../redux/action';
import {useDispatch} from 'react-redux';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
    const classes = useStyles();
    
    const [password, setPassword] = useState('');
    const [passwordconfirm, setPasswordConfirm] = useState('');
    const [agreeTerm, setAgreeTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        }, []);
        return [value,handler];
    }

    const [firstname, onChangeFirstName] = useInput('');
    const [lastname, onChangeLastName] = useInput('');
    const [email, onChangeEmail] = useInput('');

    const dispatch = useDispatch();

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordconfirm){
            setPasswordError(true);
            return;
        }
        if (!agreeTerm){
            setTermError(true);
            return;
        }

        dispatch(userActions.register({firstname,lastname,email,password}));
/*
        dispatch(signUpAction({
            firstname,
            lastname,
            email,
            password,
            agreeTerm
        }));
        
        console.log({
            firstname,
            lastname,
            email,
            password,
            passwordconfirm,
            agreeTerm
        });
        */
        
    }, [agreeTerm, dispatch, email, firstname, lastname, password, passwordconfirm]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangePasswordConfirm = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordConfirm(e.target.value);
    },[password]);

    const onAgreeTerm = useCallback((e) => {
        setTermError(false);
        setAgreeTerm(e.target.checked);
    },[]);
    
    return (
        <React.Fragment>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            
            <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus 
                        onChange={onChangeFirstName}
                        value={firstname}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={onChangeLastName}
                        value={lastname}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={onChangeEmail}
                        value={email}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onChangePassword}
                        value={password}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password_confirm"
                        label="Confirm Password"
                        type="password"
                        id="password_confirm"
                        autoComplete="current-password"
                        onChange={onChangePasswordConfirm}
                        value={passwordconfirm}
                    />
                    {passwordError && <div style={{color: 'red'}}>Password must be matched</div>}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={ <Checkbox color="primary" onChange = {onAgreeTerm}  value={agreeTerm}/> }
                            label="I agree with your term."
                        />
                        {termError && <div style={{color: 'red'}}>You must agree with terms</div>}
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onSubmit}
                    key="signup"
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link to="/signin">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
        </Container>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps)(SignUp);