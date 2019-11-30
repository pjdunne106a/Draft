import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem'; 
import AudioVideo from '../player/audiovideo';
import './upload.css';

class FileViewer extends Component {
    constructor(props) {
        super(props)
        this.state={
            files:[],
            filechoice:"",
            showdialog:false

        };
      this.showfolders = this.showfolders.bind(this);
      this.playmedia = this.playmedia.bind(this);
      this.handleclose = this.handleclose.bind(this);
    }

    componentDidMount() {
        var data = null;
        const scope=this;
        // var xhr = new XMLHttpRequest(); 
        var media='[{"name":"audio","type":"folder","children":[{"name":"firsttenor","type":"folder","children":[{"type":"file","name":"file_example_MP3_700KB.mp3"},{"type":"file","name":"file1_example_MP3_700KB.mp3"}]},{"name":"secondtenor","type":"folder","children":[{"type":"file","name":"file_example_MP3_700KB.mp3"},{"type":"file","name":"file1_example_MP3_700KB.mp3"}]},{"name":"baritone","type":"folder","children":[{"type":"file","name":"file_example_MP3_700KB.mp3"},{"type":"file","name":"file1_example_MP3_700KB.mp3"}]},{"name":"bass","type":"folder","children":[{"type":"file","name":"file_example_MP3_700KB.mp3"},{"type":"file","name":"file1_example_MP3_700KB.mp3"}]}]},{"name":"video","type":"folder","children":[{"name":"demos","type":"folder","children":{"name":"demos","type":"folder","children":[]}},{"name":"concerts","type":"folder","children":[{"type":"file","name":"file_example_MP3_700KB.mp3"},{"type":"file","name":"file1_example_MP3_700KB.mp3"},{"name":"cheltenham","type":"folder","children":[{"type":"file","name":"file2.mp3"},{"type":"file","name":"file3.mp3"}]}]}]}]';
        // xhr.open('GET', '/mediafilelist');
        // xhr.send()
        // xhr.onload = function() {
        //   console.log("Received:"+xhr.responseText);
        //   scope.setState({files:JSON.parse(xhr.responseText)});
        scope.setState({files:JSON.parse(media)}); 
        //}
    }  

    handleclose() {
      console.log("**Closing");
      this.setState({showdialog:false});
    }

    playmedia(item) {
      console.log("**Play:"+item);
      this.setState({filechoice:item,showdialog:true});
    }


    showfolders(files, nodeindex, folder) {
       var children;
       var child;
       var nodeindex=1;
       var location="";
       var items=null;
       if (files) {
        if (files.length>0) {
          items=files.map((item)=> {
                    if (item.type=='file') {
                      nodeindex++;
                      location=folder+"$"+item.name;
                      return (<TreeItem key={nodeindex} nodeId={'${nodeindex}'} label={item.name} style={{'color':'black'}} onClick={()=>this.playmedia(location)} />)
                    }
                    if (item.type=="folder") {
                        nodeindex++;
                        folder = folder+"$"+item.name;
                        return(<TreeItem key={nodeindex} nodeId={'${nodeindex}'} label={item.name} >
                                 {this.showfolders(item.children,nodeindex, folder)}
                               </TreeItem>)
                    }   
                });
              }
            } 
        if (items==",") {
          items=null;
        }
        return items;
    }

    render() {
      var nodeindex=1;
      return (<div>
                 <Dialog
                    open={this.state.showdialog}
                    file={this.state.filechoice}
                    PaperProps={{
                        style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                   }}
                  >
                   <AudioVideo file={this.state.filechoice} />
                   <DialogActions>
                       <Button onClick={this.handleclose} style={{'color':'rgb(255,255,153)'}} variant="outlined">
                          Close
                      </Button>
                    </DialogActions>
                 </Dialog>
                 <TreeView
                   className="treeview"
                   defaultCollapseIcon={<ExpandMoreIcon />}
                   defaultExpandIcon={<ChevronRightIcon />}
                 >
                   <TreeItem nodeId="1" label="Media"> 
                     {this.showfolders(this.state.files,0,"")}           
                   </TreeItem>
                 </TreeView>
      </div>)  
     }
} 
export default FileViewer;