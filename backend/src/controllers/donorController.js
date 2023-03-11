const donorService = require('../service/donorService');


/**
 * Method : getDonorRecommendation
 * Desc   : gets donor recommendation for the given charity 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
let getDonorRecommendation = (request, response, next) => {

    let subCategory = request.query.charity_focus;
    let employeeRange = request.query.charity_employees;
    let charityProvince = request.query.charity_province;


    donorService.getDonorRecommendation(subCategory, employeeRange, charityProvince).then((result) => {

        response.status(result.statusCode).json(result.data);

        console.log('info: Get donor recommendation request completed');
    });
}

module.exports = {
    getDonorRecommendation
};