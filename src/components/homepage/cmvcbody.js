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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SideBarMenu from './sidebarmenu.js';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, Theme, withStyles, createStyles } from '@material-ui/core/styles';
import CoatOfArms from "./images/Cheltenham_coat_of_arms.jpg";
import OverlayView from './overlay';
import NextEvent from "./images/Next_Concert.gif";
import "./cmvcbody.css";

class CMVCBody extends Component {
  constructor(props) {
      super(props);
  }

  render() {
   return (
    <div>
        <OverlayView />
        <Divider />
        <Typography paragraph style={{'background-color':'#3f51b5','color':'rgb(255,255,153)','font-style':'oblique'}}>
        The choir was first formed in May 1949, and they were known as the S.Smith and Sons (England) 
        Ltd Male Voice choir. The choir steadily grew in number and popularity. Notable success 
        points include producing their first recording in 1950, tours to Ireland and Germany, 
        remembrance events for the armed forces and joint ventures with other choirs. The choir
        is available for charity concerts, corporate events, weddings, funerals or any event where
        you'd like live quality singing. Please use our contact page to get in touch. If you'd like
        to join the choir also contact us and take a look at our rehearsals page.
        </Typography>
    </div>
  );
 }
}

export default CMVCBody;