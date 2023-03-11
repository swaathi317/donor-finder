import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './resultsPageStyles.css';

const ResultsPage = (props) => {

    let screenWidth = props.screenWidth;
    let toSetPageView = props.toSetPageView;
    let resultData = props.resultData;

    const donationConsistency = (consistency) => {
        let consistency_range = ''
        switch (consistency) {
            case 1: consistency_range = 'Rare';
                break;
            case 2: consistency_range = 'Occasional';
                break;
            case 3: consistency_range = 'Frequent';
                break;
            default: consistency_range = 'Very Frequent';
        }

        return consistency_range;
    }

    return (

        <div id="results-page">
            <div className="results-count">
                We found 10 donors who are more likely to donate for your cause
            </div>
            <div className="results-container">

                {
                    resultData.map((data) => (

                        <div className="results-item">
                            <div className="result-head">
                                <div className="donor-name">
                                    {data.donor_name}
                                </div>
                                <div className="donor-location">
                                    {data.donor_province}
                                </div>
                            </div>
                            <div className="result-body">
                                <div className="donor-detail-label">
                                    {CONSTANTS.resultSection.num_charities_label}
                                </div>
                                <div className="donor-detail-value">
                                    {data.num_charities_supported}
                                </div>
                            </div>
                            <div className="result-body">
                                <div className="donor-detail-label">
                                    {CONSTANTS.resultSection.num_donations_label}
                                </div>
                                <div className="donor-detail-value">
                                    {data.total_donations}
                                </div>
                            </div>
                            <div className="result-body">
                                <div className="donor-detail-label">
                                    {CONSTANTS.resultSection.freq_donor_label}
                                </div>
                                <div className="donor-detail-value">
                                    {donationConsistency(data.donation_consistency)}
                                </div>
                            </div>
                        </div>



                    ))
                }




            </div>
            <div className="back-to-home" onClick={() => toSetPageView('home')} >
                {CONSTANTS.resultSection.back_to_home}
            </div>
        </div>


    )
}

export default ResultsPage;