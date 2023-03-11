import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';
import FormSection from '../components/FormSection';
import IntroductionSection from '../components/IntroductionSection';

// import './AboutSectionStyle.css';

const HomePage = (props) => {

    let screenWidth = props.screenWidth;
    let toSetPageView = props.toSetPageView;
    let toSetResultsData = props.toSetResultsData;

    return (

        <div id="home-page">
            <IntroductionSection screenWidth={screenWidth} />
            <FormSection screenWidth={screenWidth} toSetPageView={toSetPageView} toSetResultsData={toSetResultsData} />
        </div>


    )
}

export default HomePage;
