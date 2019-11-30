import React, {Component} from "react";
import NavBar from "../navbar/navbar";
import Register from "./register";
import Footer from "../homepage/footer";
import "./register.css";

class RegisterPerson extends Component {
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
                  <Register />
               </div>
               <div class="page-footer">
                   <Footer />
               </div>
           </div>);
    }
}

export default RegisterPerson;