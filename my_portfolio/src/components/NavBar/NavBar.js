import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
      background: 'rgb(24, 32, 51, .5)',
      flexGrow: 1,
      color: '#ED7630', 
    },
    menuButton: {
      marginLeft: -18,
      marginRight: 10,
    },
  };
 
function NavAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar variant="dense">
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Meet Valeriya
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  NavAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavAppBar);