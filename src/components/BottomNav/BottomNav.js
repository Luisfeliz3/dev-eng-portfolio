import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Facebook from '@material-ui/icons/Facebook';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="LinkedIn" value="favorites" icon={<LinkedIn />} />
      <BottomNavigationAction label="GitHub" value="recents" icon={<GitHub />} />
      <BottomNavigationAction label="Facebook" value="nearby" icon={<Facebook/>} />
      <BottomNavigationAction label="LocationOnIcon" value="folder" icon={<LocationOnIcon/>} />
    </BottomNavigation>
  );
}
