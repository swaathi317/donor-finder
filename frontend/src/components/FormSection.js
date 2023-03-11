import React, { useState, useEffect } from 'react';
import CONSTANTS from '../constants/textConstants.json';

import './formSectionStyles.css';

const FormSection = (props) => {

    let screenWidth = props.screenWidth;
    let toSetPageView = props.toSetPageView;
    let toSetResultsData = props.toSetResultsData;

    const [charityName, setCharityName] = useState("");
    const [charityProvince, setCharityProvince] = useState("");
    const [charityFocus, setCharityFocus] = useState("");
    const [charityEmployees, setCharityEmployees] = useState("");

    let handleSubmit = (event) => {
        event.preventDefault();
        let queryData = {};
        queryData['charity_name'] = charityName;
        queryData['charity_province'] = charityProvince;
        queryData['charity_focus'] = charityFocus;
        queryData['charity_employees'] = charityEmployees;


        const params = new URLSearchParams(queryData);
        let url = CONSTANTS.apiCall.url + params.toString();
        //call API 
        fetch(url, {
            method: "GET"
        }).then((response) => response.json())
            .then((donorResp) => {

                if (donorResp.length !== 0) {
                    toSetResultsData(donorResp);
                    toSetPageView('results');
                }
            })
            .catch((err) => console.log('error', err));





        // toSetResultsData();

    }

    let handleNameChange = (event) => {
        setCharityName(event.target.value);
    }
    let handleFocusChange = (event) => {
        setCharityFocus(event.target.value);
    }

    let handleProvinceChange = (event) => {
        setCharityProvince(event.target.value);
    }

    let handleEmployeesChange = (event) => {
        setCharityEmployees(event.target.value);
    }


    return (

        <div id="form-section">
            <div className="form-elements-container">
                <div className="form-element">
                    <div className="form-label">
                        {CONSTANTS.formSection.form_element_1.label}
                    </div>
                    <div className="form-input">
                        <input type="text" id="charity-name" name="charityName" value={charityName} onChange={handleNameChange} placeholder={CONSTANTS.formSection.form_element_1.placeholder} />

                    </div>
                </div>
                <div className="form-element">
                    <div className="form-label">
                        {CONSTANTS.formSection.form_element_2.label}
                    </div>
                    <div className="form-input">
                        <select id="selectOption" value={charityFocus} onChange={handleFocusChange}>
                            <option value="">{CONSTANTS.formSection.form_element_2.placeholder}</option>
                            {
                                CONSTANTS.formSection.form_element_2.options.map((listItem, index) => (
                                    <option value={listItem.value} key={index}>{listItem.display}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>
                <div className="form-element">
                    <div className="form-label">
                        {CONSTANTS.formSection.form_element_3.label}
                    </div>
                    <div className="form-input">
                        <select id="selectOption" value={charityProvince} onChange={handleProvinceChange}>
                            <option value="">{CONSTANTS.formSection.form_element_3.placeholder}</option>
                            {
                                CONSTANTS.formSection.form_element_3.options.map((listItem, index) => (
                                    <option value={listItem.value} key={index}>{listItem.display}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>
                <div className="form-element">
                    <div className="form-label">
                        {CONSTANTS.formSection.form_element_4.label}
                    </div>
                    <div className="form-input">
                        <select id="selectOption" value={charityEmployees} onChange={handleEmployeesChange}>
                            <option value="">{CONSTANTS.formSection.form_element_4.placeholder}</option>
                            {
                                CONSTANTS.formSection.form_element_4.options.map((listItem, index) => (
                                    <option value={listItem.value} key={index}>{listItem.display}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>

            </div>
            <div className="form-submit-container">
                <div className="submit-button" onClick={handleSubmit}>
                    {CONSTANTS.formSection['submit-button']}
                </div>
            </div>
        </div>


    )
}

export default FormSection;