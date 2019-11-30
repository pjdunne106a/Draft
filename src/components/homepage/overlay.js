import React, { Component } from 'react'
import Overlay from 'react-image-overlay'
import Choir from "./images/cotswold_choir3.jpg";
import Curtains from "./images/curtain_red_black.jpg";
 
class OverlayView extends Component {
  render () {
    return (
      <Overlay 
          url={Curtains} // required
          overlayUrl={Choir} // required
          imageWidth={1100}
          imageHeight={350}
          position={'center'}
          overlayWidth={500}
          overlayHeight={300}
          overlayPadding={100}
          watermark={false}
      />
    );
  }
}
export default OverlayView;