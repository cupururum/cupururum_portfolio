import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = {
    root: {
      marginTop: 30
      },
    tabsIndicator: {
      backgroundColor: 'rgba(24, 32, 51, .8)',
    }
  };

  class NavAppBar extends React.Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };
  
    render() {
      const { classes } = this.props;
  
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
            //indicatorColor="primary"
            //textColor="inherit"
            centered
          >
            <Tab label="About" />
            <Tab label="Projects" />
          </Tabs>
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
 
// function NavAppBar(props) {
//     const { classes } = props;
//     return (
      
//       <Grid container   
//           className={classes.root}>
//           <Grid item  xs={12}>
//             <Grid container   
//             direction="row"
//             justify="center"
//             alignItems="center" 
//             spacing={24}>
              
//                   <Button> About </Button>
//                   <Button> Projects </Button>
//                   <Button> Contact </Button> 
               
//               </Grid>
//           </Grid>
//       </Grid>
//     );
//   }
  
//   NavAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
//   export default withStyles(styles)(NavAppBar);