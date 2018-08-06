import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Midpoint from './Midpoint'
import Flashcards from './Flashcards'
import FlyNews from './FlyNews'


const styles = theme => ({
    root: {
      flexGrow: 1,
      marginLeft: 20,
      textAlign: 'center',
      color: 'rgb(24, 32, 51)',
      padding: theme.spacing.unit,
          [theme.breakpoints.down('xs')]: {
                marginTop: 30
          },
          [theme.breakpoints.up('sm')]: {
            
          },
          [theme.breakpoints.up('md')]: {
                marginTop: 200
          },
          [theme.breakpoints.up('lg')]: {
            marginTop: 300
          },
    },
  });

function Projects(props) {
    const { classes } = props;
  
    return (
        <div className = {classes.root}> 
            <Typography variant="headline" gutterBottom>
              <Midpoint /><br/>
              <Flashcards /> <br/>
              <FlyNews /> <br/>
            </Typography>
        </div>
    )
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Projects);