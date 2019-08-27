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
        I.wait(2);
        I.fillField(lastName, user.lastName);
        I.wait(2);
        I.fillField(email, user.email);
        I.wait(2);
        I.fillField(githubHandle, user.githubHandle);
        I.wait(2);
        I.fillField(streetAddress, user.streetAddress);
        I.wait(2);
        I.fillField(postalcode, user.postalCode);
        I.wait(2);
        I.fillField(phone, user.phone);
        I.wait(2);
        I.fillField(companyName, user.company);
        I.wait(2);
        I.fillField(agreeField, user.agree);
        I.pressKey('Pagedown');
        I.wait(2);
        I.click(submit);
    }
}
