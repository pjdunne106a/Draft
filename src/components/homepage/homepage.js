import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import { PrivateRoute } from './privaterouter';
import CMVCMain  from './cmvcmain';
import LoginPage from '../member/login';
import LandingPage from './landingpage';
import UploadMedia from '../upload/upload';
import ScheduleDetails from '../schedule/scheduledetails';
import RegisterPerson from '../member/registerperson';
import Contact from '../contact/contact';
import Main from '../contact/main';
import Upload from '../upload/upload';
import Rehearsal from '../rehearsals/rehearsal';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <Router>
                        <div>
                            <Route exact path="/" component={CMVCMain} />
                            <PrivateRoute exact path="/member" component={CMVCMain} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/contact" component={Main} />
                            <Route path="/schedule" component={ScheduleDetails} />
                            <Route path="/landing" component={LandingPage} />
                            <Route path="/uploadmedia" component={Upload} />
                            <Route path="/registerperson" component={RegisterPerson} />
                            <Route path="/rehearsals" component={Rehearsal} />
                        </div>
                    </Router>   
                </div>
            </div>
        );
    }
}

export default HomePage; 