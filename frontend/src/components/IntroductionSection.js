import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';
import homeImage from '../assets/home_image.jpg'

import './introductionSectionStyles.css';

const IntroductionSection = (props) => {

    let screenWidth = props.screenWidth;

    const styledText = (text, keywords) => {
        return text.split(" ").map(word => {
            let trimmedWord = word.replace(/[,.\s]+$/, '');
            if (keywords.includes(trimmedWord)) {

                return <span className="highlight-text">{word + " "} </span>;
            } else {
                return word + " ";
            }
        })
    }

    return (

        <div id="introduction">
            <div className="introduction-container">
                <div className="introduction-text">
                    <div className="intro-para para-bold">
                        {CONSTANTS.introductionSection.introduction_para_1}
                    </div>
                    <div className="intro-para">
                        {styledText(CONSTANTS.introductionSection.introduction_para_2, CONSTANTS.introductionSection.keywords)}
                    </div>
                    <div className="intro-para para-bold">
                        {CONSTANTS.introductionSection.introduction_para_3}
                    </div>
                </div>
                <div className="introduction-image">
                    <img src={homeImage} alt="children studying" />
                </div>
            </div>
        </div>


    )
}

export default IntroductionSection;