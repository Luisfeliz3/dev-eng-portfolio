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
// import memories from "./images/memories.png";
// import {getPosts} from './actions/posts';
// import Posts from "./component/Posts/Posts.js";
// import Form from "./component/Form/Form.js";
import useStyles from "./styles";
import backDrop from "./images/nyc-backdrop.jpg";
// import {useDispatch} from 'react-redux';
import BottomNav from "./components/BottomNav/BottomNav";
import Card from "./components/Card/Card";
const App = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const [currentId, setCurrentId] = useState(null);

  //  useEffect(() => {
  //  dispatch(getPosts());
  // }, [currentId,dispatch])

  return (
    <Container maxwidth="lg">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Luis Feliz
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="center"
            alignItems="stretch"
            spacing={3}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={classes.avatar}
            />

            {/* <img className={classes.backDrop} src={backDrop} alt="memories" width="100%"/> */}
            <Card />
          </Grid>

          <BottomNav />
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
