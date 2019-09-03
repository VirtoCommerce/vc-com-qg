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

const subscribeEmail = "//*[@name='Index[Email]']";
const subscribeBtn = subscribeEmail + "/../button";

const blogEmail = "Blog[Email]";
const blogSubscribe = "//div[@class='blog-sidebar ']//button[text()='Subscribe']";
const subscribedPopup = "//div[@class='modal-header ng-scope']";

module.exports = {
    subscribedPopup: subscribedPopup,
    
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
    },

    enterUserEmailFooter: (user) => {
        I.scrollPageToBottom();
        I.fillField(subscribeEmail, user.email);
        I.wait(2);
        I.click(subscribeBtn);
    },

    enterUserEmailSidePane: (user) => {
        I.fillField(blogEmail, user.email);
        I.wait(2);
        I.click(blogSubscribe);
    }
};