// import React , {useState, useEffect} from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
  Button,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Appbar from "./components/Appbar/AppBar"
// import memories from "./images/memories.png";
// import {getPosts} from './actions/posts';
// import Posts from "./component/Posts/Posts.js";
// import Form from "./component/Form/Form.js";
import useStyles from "./styles";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
// import gmail from '@material-ui/icons/gmail';
// import {useDispatch} from 'react-redux';
import BottomNav from "./components/BottomNav/BottomNav";
import Card from "./components/Card/Card";
import img from "./image/me.png";
const App = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const [currentId, setCurrentId] = useState(null);

  //  useEffect(() => {
  //  dispatch(getPosts());
  // }, [currentId,dispatch])

  return (
    <Container maxwidth="lg">

      
      <Appbar/>


 




      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="center"
            alignItems="stretch"
            spacing={3}
          >
            <Avatar alt="Remy Sharp" src={img} className={classes.avatar} />

            {/* <img className={classes.backDrop} src={backDrop} alt="memories" width="100%"/> */}
            <Card />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
