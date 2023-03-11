import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';

// import './AboutSectionStyle.css';

const Header = (props) => {

    let screenWidth = props.screenWidth;

    return (

        <div id="header">
            <h1> EduQuest </h1>
        </div>


    )
}

export default Header;