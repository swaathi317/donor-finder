# EduQuest 
<h2> Simplying donor matching </h2>

Are you a Canadian Non-Profit that supports education?

We understand how crucial it is to find the right donor charities to support your cause. Our platform matches you with donors who align with your goals and are more likely to donate. We use data-driven insights to provide you with personalized recommendations.

With EduQuest, non-profits can focus on what really matters - making a positive impact on Canadian education.

Check out the website here : https://eduquest.cyclic.app/ 


### Data Collection
The donors data was web-scrapped from Charity Data (Canada). This site provides information on registered charities as disclosed by those charities in their T3010 annual return. It has records of 83,991 registered charities in Canada. It also has the information about donations made between charities.
Currently, the website has donation data for the years: 2018, 2019, 2020, 2021. The charity details are updated yearly. Hence, a streaming pipeline is not necessary for this usecase. In this project, a batch pipeline is built to fetch the donations and charity data from charitydata.ca by web-scrapping and further processing. 

Check out the data-pipeline that was used to web-scrape donors data : https://github.com/swaathi317/data-pipeline-to-extract-donation-records 


