import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import githubLogo from '../../icons/github_logo.png'
import linkedInLogo from '../../icons/linkedin_logo.png'


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

function About(props) {
    const { classes } = props;
  
    return (
        <div className = {classes.root}> 
            <Typography variant="headline" gutterBottom>
                Valeriya Romashchenko. <br/>
                Web-Developer. Scientist. <br/>
                <a href='https://github.com/cupururum' target="_blank">
                    <img style={{marginRight: 10}} src={githubLogo} alt='githubLogo'/>
                </a>
                <a href='https://www.linkedin.com/in/cupururum/' target="_blank">
                    <img src={linkedInLogo} alt='linkedinLogo'/>
                </a>
            </Typography>
        </div>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(About);