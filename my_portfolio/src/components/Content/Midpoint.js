import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import midpointImg from '../../projects_img/midpoint.png'

class Content extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen('paper')}>Midpoint on the Root </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Midpoint on the Route</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Midpoint Of The Route web-app helps to plan road trip. 
                It finds midpoint of the route, shows hotels and restaurants around the midpoint, 
                and electric-car charging stations along the route. <br/>
                Google Maps JS API, Google Places, Bootstrap. <br/>
                <img src={midpointImg} alt="midpoint" style= {{width: 550, height: 600}}/> <br/>
                <a href="https://cupururum.github.io/FirstGroupProject/" >Demo </a> <br/>
                <a href="https://github.com/cupururum/FirstGroupProject" > GitHub Repo </a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Content;