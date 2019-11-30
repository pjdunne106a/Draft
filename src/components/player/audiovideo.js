import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class AudioVideo extends Component {
   constructor(props) {
     super(props);
     this.get_remote_url=this.get_remote_url.bind(this);
   }

  get_remote_url(file) {
    file = file.replace(new RegExp('$', 'g'), '\/');
    console.log("**URL:"+file);
    return file;
  }

  render () {
    return <ReactPlayer url={this.get_remote_url(this.props.file)} playing />
  }
}
export default AudioVideo;