import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import People from '@material-ui/icons/People';
import Work from '@material-ui/icons/Work';
import MenuIcon from '@material-ui/icons/Menu';

class SideBarMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Divider />
            <List>
               <ListItem button key="Home" component={Link} to="/">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="Landing" component={Link} to="/landing">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Landing" />
                </ListItem>
                <ListItem button key="Schedule" component={Link} to="/schedule">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Schedule" />
                </ListItem>
                <ListItem button key="Rehearsals" component={Link} to="/rehearsals">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Rehearsals" />
                </ListItem>
               <ListItem button key="Contact" component={Link} to="/contact">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
               <ListItem button key="Media" component={Link} to="/uploadmedia">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Media" />
                </ListItem>
               <ListItem button key="Register" component={Link} to="/registerperson">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItem>
            </List>
            <Divider />
            <List>
               <ListItem button key="Member" component={Link} to="/login">
                  <ListItemIcon><People /></ListItemIcon>
                  <ListItemText primary="Member" />
                </ListItem>
                <ListItem button key="Administer" >
                  <ListItemIcon><Work /></ListItemIcon>
                  <ListItemText primary="Administer" />
                </ListItem>
            </List>
          </div>)
     }  
}
export default SideBarMenu;
