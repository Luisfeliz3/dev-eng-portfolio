import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: purple[500],
    
  },
  buttons: {
    backgroundColor: purple[500],
    margin: '20px', 
  },
}));

export default function RecipeReviewCard(props) {
  const {
    id,
    title,
    description,
    icon,
    blurb,
    icon2,
    description_title,
    link_1,
    link_2,
    link_3,
  } = props.cards;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props.cards.icon);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {icon2}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={title}
        subheader={blurb}
      />
      <CardMedia className={classes.media} image={icon} title="DEV-PICS" />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description_title}</Typography>
        
            {props.cards.details}
            {id === 3 ? 
          <ul >
           <li>
           <Button className={classes.buttons} variant="contained" color="primary" href= {link_1}>
            Prepair Application
            </Button>
           </li>
           <li>
            <Button className={classes.buttons} variant="contained" color="primary" href= {link_2}>
            How To
            </Button>
            </li>
            <li>
            <Button  className={classes.buttons} variant="contained" color="primary" href= {link_3}>
            Prepair Application
            </Button>
            </li>
            </ul> : " " 
          }
         
        </CardContent>
      </Collapse>
    </Card>
  );
}
