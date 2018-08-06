import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../NavBar/NavBar'


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
            borderTop: '200px solid ',
            borderRight: '200px solid transparent',
          },
          [theme.breakpoints.up('md')]: {
            borderTop: '300px solid ',
            borderRight: '300px solid transparent',
          },
          [theme.breakpoints.up('lg')]: {
            borderTop: '400px solid ',
            borderRight: '400px solid transparent',
          },
      boxShadow: ' -3px -5px 2px rgba(172, 141, 95, .3)'
    },
    
  });

function Body(props) {
    const { classes } = props;
  
    return (
      
      <Grid container   
          className={classes.root}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <Grid container   
              direction="row"
              // justify="center"
              // alignItems="center" 
              spacing={24}
              >
                       <Grid item lg={2} md={1} sm={1} xs={1}/> {/*first column */}
                              
                        <Grid item lg={3} xs={3} > {/*second column */}
                              <Grid container direction="row"> {/*// top row */}
                              <div id='leftAngle' className={classes.angle} style={{padding: '0px', borderTopColor: 'rgb(165, 192, 206)'}}/> 
                            </Grid>
                        
                            <Grid container direction="row">
                              <div className={classes.angle} style={{padding: '0px', transform: 'rotate(-90deg)', borderTopColor: 'rgb(172, 141, 95)'}} />
                            </Grid>
                        </Grid> {/*// close second column */}

                      
                        <Grid item lg={2} xs={4} > {/*third column */}
                          <NavBar />
                        </Grid>


                        <Grid item lg={3} xs={3}> {/*forth column */}
                            <Grid container direction="row" justify="flex-end"> {/*// top row */}
                              <div id='rightAngle' className={classes.angle} style={{padding: '0px', transform: 'rotate(90deg)', borderTopColor: 'rgb(194, 193, 189)'}} /> 
                            </Grid>
                        
                            <Grid container direction="row" justify="flex-end">
                              <div className={classes.angle} style={{padding: '0px', transform: 'rotate(180deg)', borderTopColor: 'rgb(24, 32, 51)'}}/> 
                            </Grid>
                        </Grid> {/*// close forth column */}
                      
                        <Grid item  lg={2} xs={1} /> {/*// close fifth column */}
                          
              </Grid>
          </Grid>
      </Grid>
    )
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Body);
