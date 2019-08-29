const I = require('../steps_file')();

const firstName = "Partner[FirstName]";
const lastName = "Partner[LastName]";
const email = "Partner[Email]";
const phone = "Partner[Phone]";
const company = "Partner[CompanyName]";
const website = "Partner[Website]";
const comments = "Partner[Message]";
const requestPartnership = "//button[@type = 'submit'][text() = 'Inquire about Partnership']";

module.exports = {

    enterFullInformation: (user) => {
        I.fillField(firstName, user.firstName);
        I.fillField(lastName, user.lastName);
        I.fillField(email, user.email);
        I.fillField(phone, user.phone);
        I.fillField(company, user.company);
        I.fillField(website, user.website);
        I.fillField(comments, user.comments);
        I.pressKey('Pagedown');
        I.wait(3);
        I.click(requestPartnership);
    }
};
