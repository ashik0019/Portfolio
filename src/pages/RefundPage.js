import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundSection from "../components/RefundSection/RefundSection";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund Policy || Ash Astro"/>
                <PageTop pageTitle="Refund Policy"/>
                <RefundSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;