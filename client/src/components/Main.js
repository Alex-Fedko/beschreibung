import React,{useEffect} from 'react';
import MyMain from './Survey/MyMain';
import MyAppbar from './Appbar';
import {useDispatch} from 'react-redux';
import {userActions} from '../redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Main = (props) =>{
    useEffect(()=>{
        props.dispatch(userActions.getAll());
    },[]);
    
    return (
        <div>
            <MyAppbar />
            <MyMain />
        </div>
    );
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

export default connect(mapStateToProps)(Main);
