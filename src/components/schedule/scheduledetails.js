import React, {Component} from "react";
import NavBar from "../navbar/navbar";
import Schedule from "./schedule";
import Footer from "../homepage/footer";
import "./scheduledetails.css";

class ScheduleDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class="wrapper">
               <div class="page-header">
                  <NavBar />
               </div>
               <div class="page-main">
                  <Schedule />
               </div>
               <div class="page-footer">
                   <Footer />
               </div>
           </div>);
    }
}

export default ScheduleDetails;