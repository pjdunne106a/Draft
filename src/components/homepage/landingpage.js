import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import EditIcon from "@material-ui/icons/Edit";
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ChoirService from "./images/cotswold_choir.jpg";
import ChristmasService from "./images/xmas_ellenborough.jpg";
import ComeSing from "./images/cotswold_stave.png";
import StowFestival from "./images/stow_festival.jpg";
import Remembrance from "./images/remembrance.jpg";
import Joint from "./images/joint_choir.jpg";
import Stave from "./images/dark_blue_stave_64.png";
import Emblem from "./images/emblem.jpg";
import Footer from "./footer";
import './landingpage.css';

var sectionStyle = {
   backgroundImage: "url(${Stave })",
   backgroundPosition: "right 10px",
   backgroundRepeat: "no-repeat"
 };

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (<div>
                 <AppBar position="static">
                  <Toolbar >
                     <Grid container direction="row">
                        <img  src={Emblem} alt="logo" className="coatofarms" style={{'height':'70%'}}></img> 
                        <Typography variant="h4" style={{'color':'rgb(255,255,153)'}}>
                           &nbsp;&nbsp;Cotswold Male Voice Choir
                       </Typography>
                      </Grid> 
                   <Grid style={sectionStyle} container direction="row">
                  <section className="appbar_menu">
                       <Button style={{"color":"#FFFF"}} component="span" >
                           What's on
                        </Button>
                        <Button style={{"color":"#FFFF"}} component="span" >
                           About us
                        </Button>
                        <Button style={{"color":"#FFFF"}} component="span" >
                           Members
                        </Button>
                  </section>
                 </Grid>
                </Toolbar>
               </AppBar>
               <Grid>
                    <img alt="choir service" src={ComeSing} />
                    <Button variant="contained" size="large" color="secondary">
                        Join Us
                    </Button>
               </Grid>
               <Grid container direction="row" spacing={2}>
                     <Grid item>
                       <img alt="choir service" src={ChoirService} style={{"height":"319px", "width":"319px"}}/>
                       <Typography paragraph style={{"font-family": "Helvetica Neue,Helvetica,Arial,sans serif","font-size":"18px","line-height":"26px"}}>
                            The choir at a prestigious event
                       </Typography>
                      </Grid>
                      <Grid item>
                          <img alt="stow festival" src={StowFestival} style={{"height":"322px", "width":"328px"}}/> 
                          <Typography paragraph style={{"font-family": "Helvetica Neue,Helvetica,Arial,sans serif","font-size":"18px","line-height":"26px"}}>
                             Festivals are fun
                          </Typography>
                      </Grid>
                      <Grid item>
                         <img alt="choir service" src={ChristmasService} /> 
                         <Typography paragraph style={{"font-family": "Helvetica Neue,Helvetica,Arial,sans serif","font-size":"18px","line-height":"26px"}}>
                            Christmas events are always a favourite
                        </Typography>
                    </Grid>
               </Grid>  
               <Grid container direction="row">
                      <Grid item>
                          <img alt="remembrance" src={Remembrance} style={{"height":"306px", "width":"568px"}} /> 
                          <Typography paragraph style={{"font-family": "Helvetica Neue,Helvetica,Arial,sans serif","font-size":"18px","line-height":"26px"}}>
                               Remembrance events we fully support
                          </Typography>
                      </Grid>
                      <Grid item>
                          <img alt="joint" src={Joint} /> 
                          <Typography paragraph style={{"font-family": "Helvetica Neue,Helvetica,Arial,sans serif","font-size":"18px","line-height":"26px"}}>
                               Joining with other choirs is quite special
                          </Typography>
                      </Grid>
               </Grid>
               <Footer />
               </div>)
    }
}
export default LandingPage;