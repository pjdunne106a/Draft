import React, {Component} from "react";
import NavBar from "../navbar/navbar";
import Contact from "./contact";
import Footer from "../homepage/footer";
import "./main.css";

class Main extends Component {
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
                  <Contact />
               </div>
               <div class="page-footer">
                   <Footer />
               </div>
           </div>);
    }
}

export default Main;