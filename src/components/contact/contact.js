import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import './contact.css';

const styles = {
  root: {
    background: "#3f51b5"
  },
  input: {
    color: "rgb(255,255,153)"
  }
};

class Contact extends Component {
   constructor(props) {
       super(props);
       this.properties=props;
       this.copyright=this.copyright.bind(this);
   }

 copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Cotswold Male Voice Choir
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  render() {
   const {classes} = this.properties;
   return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           Contact Us
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="lname"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="question"
                label="Question"
                type="question"
                id="question"
                autoComplete="new-question"
                className={classes.root}
                InputProps={{
                  className: classes.input
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Send
          </Button>
        </form>
      </div>
      <Box mt={5}>
       {this.copyright()}
      </Box>
    </Container>
  );
 }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Contact);