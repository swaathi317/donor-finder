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
    const [charityNameError, setCharityNameError] = useState(false);
    const [charityProvinceError, setCharityProvinceError] = useState(false);
    const [charityFocusError, setCharityFocusError] = useState(false);
    const [charityEmployeesError, setCharityEmployeesError] = useState(false);

    let handleFormValidation = () => {
        let validation = true;
        if (charityName === '') {
            setCharityNameError(true);
        }
        if (charityProvince === '') {
            setCharityProvinceError(true);
        }
        if (charityFocus === '') {
            setCharityFocusError(true);
        }
        if (charityEmployees === '') {
            setCharityEmployeesError(true);
        }

        return validation;

    }

    let handleSubmit = (event) => {
        event.preventDefault();

        if (handleFormValidation()) {
            let queryData = {};
            queryData['charity_name'] = charityName;
            queryData['charity_province'] = charityProvince;
            queryData['charity_focus'] = charityFocus;
            queryData['charity_employees'] = charityEmployees;

            let platform = process.env.REACT_APP_ENV;
            const params = new URLSearchParams(queryData);
            let url = CONSTANTS.apiCall[platform] + params.toString();
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
        }
    }

    let handleNameChange = (event) => {
        setCharityName(event.target.value);
        if (charityNameError) {
            setCharityNameError(false);
        }

    }
    let handleFocusChange = (event) => {
        setCharityFocus(event.target.value);
        if (charityFocusError) {
            setCharityFocusError(false);
        }
    }

    let handleProvinceChange = (event) => {
        setCharityProvince(event.target.value);
        if (charityProvinceError) {
            setCharityProvinceError(false);
        }
    }

    let handleEmployeesChange = (event) => {
        setCharityEmployees(event.target.value);
        if (charityEmployeesError) {
            setCharityEmployeesError(false);
        }
    }


    return (

        <div id="form-section">
            <div className="form-elements-container">
                <div className="form-element">
                    <div className="form-label">
                        {CONSTANTS.formSection.form_element_1.label}
                    </div>
                    <div className="form-input">
                        <input type="text" id="charity-name" className={charityNameError ? "error-input" : ""} name="charityName" value={charityName} onChange={handleNameChange} placeholder={CONSTANTS.formSection.form_element_1.placeholder} />

                    </div>
                </div>
                <div className="form-element">
                    <div className="form-label">
                        {CONSTANTS.formSection.form_element_2.label}
                    </div>
                    <div className="form-input">
                        <select id="selectOption" value={charityFocus} onChange={handleFocusChange} className={charityFocusError ? "error-input" : ""}>
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
                        <select id="selectOption" value={charityProvince} onChange={handleProvinceChange} className={charityProvinceError ? "error-input" : ""}>
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
                        <select id="selectOption" value={charityEmployees} onChange={handleEmployeesChange} className={charityEmployeesError ? "error-input" : ""}>
                            <option value="">{CONSTANTS.formSection.form_element_4.placeholder}</option>
                            {
                                CONSTANTS.formSection.form_element_4.options.map((listItem, index) => (
                                    <option value={listItem.value} key={index}>{listItem.display}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>
                {
                    (charityNameError || charityFocusError || charityProvinceError || charityEmployeesError) &&

                    <div className="error-message">
                        Please fill all the fields
                    </div>
                }

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