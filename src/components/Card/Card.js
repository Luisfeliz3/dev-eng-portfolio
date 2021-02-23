
import React, { useEffect, useState } from "react";

  import { makeStyles } from "@material-ui/core/styles";
  import { cards} from '../../data/cardData'
  import CardContext from "../CardContext/CardContext"
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
        marginTop: theme.spacing(20),
        height: theme.spacing(60),
        width: theme.spacing(40),
      }
    }
  }));
  
  export default function Card() {
    const classes = useStyles();
    const [data, setData] = useState(cards)
    useEffect(() => {
    }, [data])
    return (
      <div className={classes.root}>
     	{data.cards ? data.cards.map((card, index) => (
					<div key={index} data-id={index}>
						<CardContext cards={card} index={index} />
					</div>
				)) : null}
      </div>
    );
  }
