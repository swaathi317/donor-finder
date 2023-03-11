const fs = require('fs');

/**
 * Method: getDonorRecommendation
 * Desc : gets donor recommendation for the given charity
 * @param {*} subCategory 
 * @param {*} employeeRange 
 * @param {*} charityProvince 
 */
let getDonorRecommendation = (subCategory, employeeRange, charityProvince) => {

    return new Promise((resolve, reject) => {


        fs.readFile('./src/service/donor_data_min.json', 'utf8', (error, data) => {
            if (error) {
                console.error(error);
                return;
            }

            const jsonData = JSON.parse(data);

            const filteredObjects = jsonData.filter(obj =>
                obj.donor_province === charityProvince && obj.frequent_sub_category === parseInt(subCategory) && obj.donations_per_employee_range === parseInt(employeeRange)
            );

            filteredObjects.sort((a, b) => b.num_charities_supported - a.num_charities_supported);
            let result = {};
            result.data = filteredObjects;
            result.statusCode = 200;

            resolve(result)
        })



    });
}

module.exports = {
    getDonorRecommendation
}