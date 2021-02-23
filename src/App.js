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
import Appbar from "./components/Appbar/AppBar"
import useStyles from "./styles";
import BottomNav from "./components/BottomNav/BottomNav";
import Card from "./components/Card/Card";
import img from "./image/me.png";
const App = () => {
  const classes = useStyles();
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
            <Card />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
