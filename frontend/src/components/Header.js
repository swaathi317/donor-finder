import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';

// import './AboutSectionStyle.css';

const Header = (props) => {

    let screenWidth = props.screenWidth;
    let toSetPageView = props.toSetPageView;

    return (

        <div id="header" onClick={() => toSetPageView('home')}>
            <h1> EduQuest </h1>
        </div>


    )
}

export default Header;