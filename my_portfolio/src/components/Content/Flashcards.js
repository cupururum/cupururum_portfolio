import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import flashcardsImg from '../../projects_img/flashcards.png'

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
        <Button onClick={this.handleClickOpen('paper')}> The Flashcard Game </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">The Flashcard Game</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Flashcards web-application to help people to learn new words. 
            User can play/learn with existing sets of words of the registered users. 
            If user wants to create unique set, the user needs  to register and login. <br/>
            NodeJS, Express, HandlebarsJS, PassportJS, MySQL, Sequilize, Materialize
            <br/>
                <img src={flashcardsImg} alt="flashcards" style= {{width: 550, height: 600}}/> <br/>
                <a href="https://flashcard-game-app.herokuapp.com/" >Demo </a> <br/>
                <a href="https://github.com/cupururum/FlashCardsApp" > GitHub Repo </a>
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