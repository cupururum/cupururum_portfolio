import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import flynewsImg from '../../projects_img/flynews.png'

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
        <Button onClick={this.handleClickOpen('paper')}> FlyNews </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">FlyNews</DialogTitle>
          <DialogContent>
            <DialogContentText>
                Web application features an “earthquake” map of trending tweets across the United States. 
                Circles of larger magnitude are correlated with a larger tweet volume on Twitter. 
                Users may explore the map by scrolling the mouse over the circles. 
                A list of trending news topics for that area will populate. 
                Users press on the words in the list to surface the most popular 
                articles from news API related to the trending topic. <br/>
                Olease, Twitter Trends API, Google Maps API for React, ReactJS, News API, Passport JS, MongoDB <br/>
                
            <br/>
                <img src={flynewsImg} alt="flynews" style= {{width: 550, height: 600}}/> <br/>
                
                <a href="https://github.com/cupururum/flynews" > GitHub Repo </a>
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