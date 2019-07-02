import React,{useEffect} from 'react';
import MyAppbar from '../Appbar';
import {useDispatch} from 'react-redux';
import {userActions} from '../../redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Request from './Requests';

const Main = (props) =>{
    useEffect(()=>{
        props.dispatch(userActions.getAll());
    },[]);
    
    return (
        <div>
            <MyAppbar />
            <div id="DariaRequestDIV" style={{width: '80%',marginLeft: '150px', marginTop:'60px'}}>
                <Request />
            </div>
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
