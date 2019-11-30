import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class RehearsalPlan extends Component {
    constructor(props) {
         super(props)
         this.state={
              rehearsallist:[]
         }
         this.getrehearsallist=this.getrehearsallist.bind(this);
         this.getsonglist=this.getsonglist.bind(this);
    }
   
    componentDidMount() {
        var data = null;
        const scope=this;
        //var xhr = new XMLHttpRequest();
        var rehearsals='[{"date":"Wednesday 10th Sept 2019","songs":["this is song e","this is song f","this is song g"]},{"date":"Wednesday 17th Sept 2019.txt","songs":["this is song a","this is song b","this is song d"]},{"date":"Wednesday 24th Sept 2019.txt","songs":["this is song e","this is song f","this is song g"]}]'; 
        //xhr.open('GET', '/rehearsallist');
        //console.log("Sending:");
        //xhr.send()
        //xhr.onload = function() {
        //   console.log("Received:"+xhr.responseText);
        //   scope.setState({rehearsallist:JSON.parse(xhr.responseText)});
        scope.setState({rehearsallist:JSON.parse(rehearsals)}); 
        //}
    }

    getsonglist(songs, nodeindex) {
       var items;
       items=songs.map((song)=> {
                        return(<Typography key={nodeindex+1} component="p">
                                 {song}
                               </Typography>);
       });
     return items
    }

    getrehearsallist(files) {
        var items=null;
        var nodeindex=0;
        items=files.map((item)=> {
            return(<ListItem>
                   <Paper>
                     <Typography key={nodeindex} variant="h6" component="h3">
                        {item.date}
                     </Typography>
                     {this.getsonglist(item.songs,nodeindex)}
                  </Paper>
                  </ListItem>)
        });
        return items;
    }

    render() {
       return (<List>
                  {this.getrehearsallist(this.state.rehearsallist)}
               </List>);
    }
}
export default RehearsalPlan;