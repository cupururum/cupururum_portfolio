import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 100,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: 'rgb(24, 32, 51)',
      boxShadow: '0 3px 5px 2px rgba(237, 117, 48, .3)',
    },
    customPaper: {
      boxShadow: ' 3px 5px 2px rgba(24, 32, 51, .3)'
    },
    customPaperRightTop: {
      boxShadow: ' 3px -5px 2px rgba(194, 193, 189, .3)'
    },
    customPaperLeftTop: {
      boxShadow: ' -3px -5px 2px rgba(172, 141, 95, .3)'
    },
    customPaperLeftBottom: {
      boxShadow: ' -3px 5px 2px rgba(165, 192, 206, .3)'
    }
    
  });

function Body(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container   
          direction="row"
          justify="center"
          alignItems="center" 
          spacing={24}>
            <Grid item lg={3}  xs={1}/>
            
            <Grid item lg={2} xs={4}>
              <div id='leftAngle' className={classes.customPaperLeftTop}/>
            </Grid>
            <Grid item lg={2} xs={2}/>
            <Grid item lg={2} xs={4}>
              <div id='rightAngle' className={classes.customPaperRightTop}/>  
            </Grid>
            <Grid item lg={3} xs={1}/>
    
        </Grid>
        <Grid container spacing={24}>
            <Grid item lg={3}   xs={1} />
           
            <Grid item lg={2}  xs={4}>
              <div id='leftBottomAngle' className={classes.customPaperLeftBottom}/>
            </Grid>
            <Grid item lg={2}  xs={2}/>
            <Grid item lg={2}  xs={4}>
              <div id='rightBottomAngle' className={classes.customPaper}/>  
            </Grid>
            <Grid item lg={3}  xs={1} />
         
        </Grid>
      </div>
        
    )
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Body);
