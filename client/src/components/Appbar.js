import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BuildIcon from '@material-ui/icons/Build';
import FolderIcon from '@material-ui/icons/Folder';
import PersonIcon from '@material-ui/icons/Person';
import TimerIcon from '@material-ui/icons/Timer';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Avatar from '@material-ui/core/Avatar';
import { history } from '../redux/helpers';
import {useCallback} from 'react';
import {connect,useDispatch} from 'react-redux';
import { userActions } from '../redux/action';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    color: '#616161',
    background: '#ffffff'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  avatar: {
    width: '32px',
    height: '32px',
    fontSize: '16px'
    //paddingLeft: '8px'
  },
  IconButton: {
    padding: '8px'
  }
}));

const  MyAppBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sidebarstate, setSidebarState] = React.useState({
    left: false,
  });

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
       <List>
        {['Dashboard', 'Requests', 'Offers', 'Invoices', 'Credits', 'Customers', 'Employees', 'Users', 'Worktimes', 'Task-Manager', 'Rates', 'Settings'].map((text, index) => (
          <ListItem button key={text} onClick={handleSidebarSelected(text)}>
            <ListItemIcon>
            {
              //index % 2 === 0 ? <DashboardIcon /> : <BuildIcon />
              (()=>{
                switch(text)
                {
                  case 'Dashboard': return <DashboardIcon />
                  case 'Requests': return <FolderIcon />
                  case 'Offers': return <FolderIcon />
                  case 'Invoices': return <FolderIcon />
                  case 'Credits': return <FolderIcon />
                  case 'Customers': return <PersonIcon />
                  case 'Users': return <PersonIcon />
                  case 'Employees': return <PersonIcon />
                  case 'Worktimes': return <AccessTimeIcon />
                  case 'Task-Manager': return <TimerIcon />
                  case 'Rates': return <BuildIcon />
                  case 'Settings': return <BuildIcon />
                  default: return <BuildIcon />
                }
              })()
            }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleSignout = useCallback(()=> {
    setAnchorEl(null);
    dispatch(userActions.logout());
    history.push("/");
  },[]);
  
  const handleClose = useCallback(()=>{
    setAnchorEl(null);
  });

  const handleMyAccount = useCallback(()=> {
    setAnchorEl(null);
  },[]);
  
  const handleSidebar = () => {
    setSidebarState({...sidebarstate, 'left' : true});
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSidebarState({ ...sidebarstate, [side]: open });
  };

  const handleSidebarSelected = text => useCallback((e)=>{
    console.log(text);
    if (text === 'Requests')
      history.push("/requests");
    else if(text === 'Dashboard')
      history.push("/");
  },[]);

  return (
    <div className={classes.root} >
      <AppBar position="static" className={classes.root} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={handleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
                className={classes.IconButton}
              >
              <Avatar className={classes.avatar}>DO</Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleMyAccount}>My account</MenuItem>
                <MenuItem onClick={handleSignout}>SignOut</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer open={sidebarstate.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

export default MyAppBar;
