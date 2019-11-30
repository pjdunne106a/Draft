import React, {Component} from "react";
import NavBar from "../navbar/navbar";
import LoginForm from "./loginform";
import Footer from "../homepage/footer";
import "./login.css";

class Upload extends Component {
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
                  <LoginForm />
               </div>
               <div class="page-footer">
                   <Footer />
               </div>
           </div>);
    }
}

export default Upload;