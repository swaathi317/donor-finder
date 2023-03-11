const cassandraClient = '';



let getBestDonors = async (subCategory, employeeRange, charityProvince) => {
    const basePath = `/api/rest/v2/KEYSPACES/${process.env.ASTRA_DB_KEYSPACE}/collections/donor_data`;

    var params = {
        where: {
            donor_province: { $eq: charityProvince },
            donations_per_employee_range: { $eq: employeeRange },
        }
    };
    return new Promise(async (resolve, reject) => {

        const { data, status } = await cassandraClient.get({ params });

        resolve(data);


    })
}

module.exports = {
    getBestDonors
}