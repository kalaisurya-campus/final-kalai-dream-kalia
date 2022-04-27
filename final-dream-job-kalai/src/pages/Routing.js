import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Logins from "./dreamspages/Logins";
import Signup from "./dreamspages/Dreams";
import Creates from "./dreamspages/Creates";
import EmployeeSearchpage from "./dreamspages/EmployeeSearchpage";
import Notifationpage from "./dreamspages/Notifationpage";
import JobsApplypage from "./dreamspages/JobsApplypage";
import Resumattached from "./dreamspages/Resumattached";
import Successpage from "./dreamspages/Successpage";
import Booksmarks from "./dreamspages/Booksmarks";
import Applicationpage from "./dreamspages/Applicationpage";
import Reviewapplications from "./dreamspages/Reviewapplications";
import Notsutables from "./dreamspages/Notsutables";
import Interviews from "./dreamspages/Interviews";
import Jobsviews from "./dreamspages/Jobsviews";
import Statusview from "../components/dreams/managerstatus/statuspage/Statusview";
import Appliedjob from "./dreamspages/Appliedjob";
import YourDetailspage from "./dreamspages/YourDetailspage";
import Yourapplications from "./dreamspages/Yourapplications";
import Demaokalai from "./dreamspages/Demaokalai";
import Notify from "./dreamspages/Notify";
import Employeitems from "./dreamspages/Employeitems";
import FormCodes from "./dreamspages/FormCodes";
import Jobsforyous from "./dreamspages/Jobsforyous";
import history from "../components/dreams/history/history";
import Formvalidationcreate from "./dreamspages/Formvalidationcreate";
import Homepages from "./dreamspages/Homepages";
import SamplesLogin from "./dreamspages/SamplesLogin";
import Animateds from "./dreamspages/Animateds";
import DemoSampleCodeFunction from "../components/dreams/demoyourapplicaionsample/DemoSampleCodeFunction";
import Samplepost from "./Samplepost";
import Chats from "./dreamspages/Chats";
import Reduxdatakalai from "../components/dreams/reduxproviderdata/reduxdatakalai/Reduxdatakalai";
import Fire from "./dreamspages/Fire";

import SignupFire from "./dreamspages/SignupFire";
import FireLogin from "./dreamspages/FireLogin";

class Routing extends Component {
    constructor() {
        super();
        this.state = {
            users: false,
        };
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Homepages} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Logins} />
                        <Route path="/create" component={Creates} />
                        <Route
                            path="/employserach"
                            component={EmployeeSearchpage}
                        />
                        <Route
                            path="/notification"
                            component={Notifationpage}
                        />

                        <Route path="/jobapply/:id" component={JobsApplypage} />
                        <Route
                            path="/resumeattch/:id"
                            component={Resumattached}
                        />
                        <Route path="/success" component={Successpage} />
                        <Route path="/bookmarks" component={Booksmarks} />
                        <Route
                            path="/application"
                            component={Applicationpage}
                        />
                        <Route
                            path="/reviewapplication"
                            component={Reviewapplications}
                        />
                        <Route
                            path="/notsutableapplication"
                            component={Notsutables}
                        />
                        <Route
                            path="/interviewapplication"
                            component={Interviews}
                        />
                        <Route path="/jobsview" component={Jobsviews} />
                        <Route path="/statuspage/:id" component={Statusview} />
                        <Route path="/appliedpage/:id" component={Appliedjob} />
                        <Route
                            path="/yourdetailsjobs"
                            component={YourDetailspage}
                        />
                        <Route
                            path="/yourapplication/:id"
                            component={Yourapplications}
                        />
                        <Route path="/demo" component={Demaokalai} />
                        <Route path="/yourno" component={Notify} />
                        <Route path="/employeitems" component={Employeitems} />
                        <Route path="/forms" component={FormCodes} />
                        <Route path="/jobsfor/:id" component={Jobsforyous} />

                        {/* <Route path="/formcreate" component={Formvalidationcreate} />

            <Route path="/llogin" component={SamplesLogin} />

            <Route path="/a" component={Animateds} />

            <Route path="/main" component={Samplepost} />

            <Route path="/chat" component={Chats} />

            <Route path="/reduxs" component={Reduxdatakalai} />

            <Route path="/fires" component={Fire}/>
            <Route path="/firelogin" component={FireLogin}/>
            <Route path="/firesignup" component={SignupFire}/> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routing;
