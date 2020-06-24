import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function NestedList() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);


  const handleClick = () => {
    setOpen(!open);
  };
   const handleClick2 = () => {
    setOpen2(!open2);
  };


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
       <ListItem button onClick={handleClick}>
        <ListItemText primary="Vitamins" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            
            {/* <ListItemText primary="Starred" /> */}
            Starred
            Starred
            Starred
            Starred
          </ListItem>
        </List>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            
            {/* <ListItemText primary="Starred" /> */}
            Starred
            Starred
            Starred
            Starred
          </ListItem>
        </List>
      </Collapse>
{/* second */}
      <ListItem button onClick={handleClick2}>
        <ListItemText primary="Minerals" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
           
            <ListItemText primary="some dich" />
             
            <ListItemText primary="some dich" />

            <ListItemText primary="some dich" />
          </ListItem>
        </List>

        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
           
            <ListItemText primary="some dich" />
             
            <ListItemText primary="some dich" />

            <ListItemText primary="some dich" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
