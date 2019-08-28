const I = require('../steps_file')();

const firstName = "firstname";
const lastName = "lastname";
const email = "email";
const githubHandle = "githubHandle";
const streetAddress = "address";
const postalcode = "city";
const phone = "phone";
const companyName = "company";
const agreeField = "agree";
const submit = "//button[@type = 'submit'][text() = 'Submit Agreement']";

module.exports = {

    enterFullInformation: (user) => {
        I.fillField(firstName, user.firstName);
        I.fillField(lastName, user.lastName);
        I.fillField(email, user.email);
        I.fillField(githubHandle, user.githubHandle);
        I.fillField(streetAddress, user.streetAddress);
        I.fillField(postalcode, user.postalCode);
        I.fillField(phone, user.phone);
        I.fillField(companyName, user.company);
        I.fillField(agreeField, user.agree);
        I.scrollPageToBottom();
        I.click(submit);
    }
}
