import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseDetailsPage from "../pages/CourseDetailsPage";
class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund-policy" component={RefundPage}/>
                    <Route exact path="/terms-and-condition" component={TermsPage}/>
                    <Route exact path="/privacy-policy" component={PrivacyPage}/>
                    <Route exact path="/project-details" component={ProjectDetailsPage}/>
                    <Route exact path="/course-details" component={CourseDetailsPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;