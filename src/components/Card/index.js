import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const { tableData } = props;

  return (
    <List className={classes.root}>
      {tableData.map((item, index) => {
        return (
          <div key={index}>
            <ListItem alignItems="flex-start" >
              <ListItemAvatar>
                <Avatar alt={item.name.first} src={`/static/images/avatar/${index}.jpg`} />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.name.first} ${item.name.last}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                     Phone:{item.cell}
                    </Typography>
                    {` — I'll be available at ${item.email}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}
      
      
    </List>
  );
}
