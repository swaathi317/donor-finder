


/**
 * Method: getDonorRecommendation
 * Desc : gets donor recommendation for the given charity
 * @param {*} subCategory 
 * @param {*} employeeRange 
 * @param {*} charityProvince 
 */
let getDonorRecommendation = (subCategory, employeeRange, charityProvince) => {

    return new Promise((resolve, reject) => {
        let donorData = [
            {
                "donor_name": "XYZ",
                "donor_province": "XY",
                "charities_donated": "444",
                "number_of_donations": "667",
                "frequency_of_donation": "Very frequent; every year"
            },
            {
                "donor_name": "XYZ",
                "donor_province": "XY",
                "charities_donated": "444",
                "number_of_donations": "667",
                "frequency_of_donation": "Very frequent; every year"
            },
            {
                "donor_name": "XYZ",
                "donor_province": "XY",
                "charities_donated": "444",
                "number_of_donations": "667",
                "frequency_of_donation": "Very frequent; every year"
            }
        ];
        let result = {}
        result.data = donorData;
        result.statusCode = 200;

        resolve(result)

    });
}

module.exports = {
    getDonorRecommendation
}