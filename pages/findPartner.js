const I = require('../steps_file.js')();

const firstName = 'firstname';
const lastName = 'lastname';
const email = 'email';
const phone = 'phone';
const company = 'company';
const website = 'website';
const region = 'region';
const comments = 'comments';
const findPartnerButton = "//button[text()='Find a Partner']";

module.exports = {

    enterFullInformation(user) {
        I.fillField(firstName, user.firstName);
        I.fillField(lastName, user.lastName);
        I.fillField(email, user.email);
        I.fillField(phone, user.phone);
        I.fillField(company, user.company);
        I.fillField(website, user.website);
        I.selectOption(region, user.region);
        I.fillField(comments, user.comments);
        I.wait(2);
        I.scrollPageToBottom();
        I.click(findPartnerButton);
    }
}
