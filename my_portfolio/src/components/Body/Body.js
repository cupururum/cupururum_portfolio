import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '../Content/Button';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 100,
      color: 'rgb(24, 32, 51, .5)'
    },
    angle: {
      width: 0,
      height: 0,
      padding: theme.spacing.unit,
          [theme.breakpoints.down('xs')]: {
            borderTop: '100px solid',
            borderRight: '100px solid transparent',
          },
          [theme.breakpoints.up('sm')]: {
            borderTop: '200px solid rgb(165, 192, 206)',
            borderRight: '200px solid transparent',
          },
          [theme.breakpoints.up('md')]: {
            borderTop: '300px solid rgb(165, 192, 206)',
            borderRight: '300px solid transparent',
          },
          [theme.breakpoints.up('lg')]: {
            borderTop: '400px solid rgb(165, 192, 206)',
            borderRight: '400px solid transparent',
          },
      boxShadow: ' -3px -5px 2px rgba(172, 141, 95, .3)'
    },
    
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
              <div id='leftAngle' className={classes.angle} style={{padding: '0px', borderTopColor: 'rgb(165, 192, 206)'}}/> 
            </Grid>
            <Grid item lg={2} xs={2}/>
            <Grid item lg={2} xs={4}>
              <div id='rightAngle' className={classes.angle} style={{padding: '0px', transform: 'rotate(90deg)', borderTopColor: 'rgb(194, 193, 189)'}} /> 
              
            </Grid>
            <Grid item lg={3} xs={1}/>
    
        </Grid>
        <Grid container spacing={24}>
            <Grid item lg={3}   xs={1} />
           
            <Grid item lg={2}  xs={4}>
                <div className={classes.angle} style={{padding: '0px', transform: 'rotate(-90deg)', borderTopColor: 'rgb(172, 141, 95)'}} />
            </Grid>
            <Grid item lg={2}  xs={2}/>
            <Grid item lg={2}  xs={4}>
                <div className={classes.angle} style={{padding: '0px', transform: 'rotate(180deg)', borderTopColor: 'rgb(24, 32, 51)'}}/>  
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
