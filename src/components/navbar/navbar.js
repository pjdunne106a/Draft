import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarMenu from '../homepage/sidebarmenu.js';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CoatOfArms from "../homepage/images/Cheltenham_coat_of_arms.jpg";
import Emblem from "../homepage/images/emblem.jpg";

class NavBar extends Component {
   constructor(props) {
       super(props);
       this.state={
           mobileOpen:false,
           direction:'rtl'
       }
       this.handleDrawerToggle=this.handleDrawerToggle.bind(this);
   }

   handleDrawerToggle() {
     this.setState({mobileOpen:!this.state.mobileOpen});
   }


  render() {
   return (
    <div>
      <AppBar position="fixed" style={{'height':'10%'}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <img src={Emblem} alt="logo" className="coatofarms" style={{'height':'70%'}}></img> 
          <Typography variant="h4" style={{'color':'rgb(255,255,153)'}}>
              &nbsp;&nbsp;Cotswold Male Voice Choir
          </Typography>
        </Toolbar>
     
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
      </AppBar>
      </div>)
    }
}
export default NavBar;