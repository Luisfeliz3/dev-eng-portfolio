import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className={classes.root}>
 
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Luis Feliz
          </Typography>
          {auth && (
            <div>
             <LinkedIn  target="_blank" onClick={event =>  window.location.href='https://www.linkedin.com/in/luis-feliz-465b14192/'}/>
             <GitHub onClick={event =>  window.location.href='https://github.com/Luisfeliz3'}/>
             <LocationOnIcon onClick={event =>  window.location.href='https://tinyurl.com/3cdt6mt5'}/>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
