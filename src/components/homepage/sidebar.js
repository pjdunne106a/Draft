import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SideBarMenu from './sidebarmenu.js';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import CoatOfArms from "./images/Cheltenham_coat_of_arms.jpg";
import Choir from "./images/2019_Berkeley.jpg";
import "./homepage.css";

class CMVCSideBar extends Component {
  constructor(props) {
      super(props);
      this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
      this.state={
          mobileOpen:false,
          direction:'rtl'
      }
      this.container = props;
  }

  handleDrawerToggle() {
    this.setState({mobileOpen:!this.state.mobileOpen});
  }

  render() {
   const { classes } = this.props;
   return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <img src={CoatOfArms} alt="logo" className="coatofarms"></img> 
          <Typography variant="h6" noWrap>
              &nbsp;&nbsp;Cotswold Male Voice Choir
          </Typography>
        </Toolbar>
      </AppBar>
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                variant="persistent"
                anchor="left"
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                     keepMounted: true, // Better open performance on mobile.
                }}
            >
            <IconButton onClick={this.handleDrawerToggle}>
                {this.state.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
                <SideBarMenu />
            </Drawer>
      </nav>
      <main style={{'display':'inline'}}>
        <img src={Choir} alt="logo" style={{'width':'100%','height':'40%'}} className="choirpic"></img> 
        <div />
        <Typography paragraph>
        The choir was first formed in May 1949, and they were known as the S.Smith and Sons (England) 
        Ltd Male Voice choir. The choir steadily grew in number and popularity and notable success 
        points include producing their first recording in 1950, tours to Ireland and Germany, 
        remembrance events for the armed forces and joint ventures with other choirs.
        </Typography>
      </main>
    </div>
  );
 }
}

export default CMVCSideBar;