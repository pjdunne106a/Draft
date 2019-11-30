import React, {Component} from "react";
import NavBar from "../navbar/navbar";
import CMVCBody from "./cmvcbody";
import Footer from "./footer";
import "./cmvcmain.css";

class CMVCMain extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper" >
               <div className="page-header">
                  <NavBar />
               </div>
               <div className="page-main">
                  <CMVCBody />
               </div>
               <div className="page-footer">
                   <Footer />
               </div>
           </div>);
    }
}

export default CMVCMain;