import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import About from '../Content/About'
import Projects from '../Content/Projects'

const styles = {
    root: {
      marginTop: 30,
      marginBottom: 30
      },
    tabsIndicator: {
      backgroundColor: 'rgba(24, 32, 51, .8)'
    }
  };

  class NavAppBar extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };

    handleChangeIndex = index => {
      this.setState({ value: index });
    };
  
  
    render() {
      const { classes} = this.props;
  
      return (
        <Grid container   
          className={classes.root}>
          <Grid item  xs={12}>
            <Grid container   
            direction="row"
            justify="center"
            alignItems="center" 
            spacing={24}>
              <Tabs
                classes={{ indicator: classes.tabsIndicator }}
                value={this.state.value}
                onChange={this.handleChange}
                centered
              >
                <Tab label="About" />
                <Tab label="Projects" />
              </Tabs>
            <Grid container   
            direction="row"
            justify="center"
            alignItems="center" 
            spacing={24}>
              <SwipeableViews
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
              >
                <About />
                <Projects />
              </SwipeableViews>

            </Grid>

          </Grid>
        </Grid>
      </Grid>
      );
    }
  }
  
  NavAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NavAppBar);
 