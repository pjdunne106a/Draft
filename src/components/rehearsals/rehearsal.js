import React, {Component} from "react";
import NavBar from "../navbar/navbar";
import RehearsalPlan from "./rehearsalplan";
import Footer from "../homepage/footer";
import "./rehearsal.css";

class Rehearsal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper">
               <div className="page-header">
                  <NavBar />
               </div>
               <div className="page-main">
                  <RehearsalPlan />
               </div>
               <div className="page-footer">
                   <Footer />
               </div>
           </div>);
    }
}
export default Rehearsal;