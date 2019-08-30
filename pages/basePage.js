const I = actor();
const codecept = require('../codecept.conf.js');

const firstName = "Contact[FirstName]";
const lastName = "Contact[LastName]";
const email = "Contact[Email]";
const phone = "Contact[Phone]";
const company = "Contact[Company]";
const jobTitle = "Contact[JobTitle]";
const website = "Contact[Website]";
const region = "Contact[GlobalRegion]";
const describe = "Contact[Message]";
const comments = "Contact[Comments]";
const requestDemo = "//button[@type='submit'][text()='Request Demo']";

module.exports = {
    
    enterUserFull: (user) => {
        console.log(user);
        I.fillField(firstName, user.firstName);
        I.fillField(lastName, user.lastName);
        I.fillField(email, user.email);
        I.fillField(phone, user.phone);
        I.fillField(company, user.company);
        I.fillField(jobTitle, user.jobTitle);
        I.fillField(website, user.website);
        I.selectOption(region, user.region);
        I.selectOption(describe, user.describe);
        I.fillField(comments, user.comments);
        I.scrollPageToBottom();
        I.click(requestDemo);
        I.waitUrlEquals(codecept.config.helpers.WebDriver.url + "thank-you");
    }
};