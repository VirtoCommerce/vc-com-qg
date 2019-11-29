const fs = require('fs');
let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));


Feature('Contribute agreement');

Before((I) => {
    I.amOnPage("/contribute-agreement");
});

AfterSuite((api) => {
    console.log("After all tests");
    api.deleteUser(user.users_contribute_agreement[0].email);
});

Scenario('Contribute agreement page/Create user', (I, contributeAgreementPage, api) => {
    contributeAgreementPage.enterFullInformation(user.users_contribute_agreement[0]);
    I.waitUrlEquals('thank-you-contributor');
    api.verifyContributeAgreement(user.users_contribute_agreement[0]);
});

Scenario('Contribute agreement page/Update user info', (I, contributeAgreementPage, api) => {
    contributeAgreementPage.enterFullInformation(user.users_contribute_agreement[1]);
    I.waitUrlEquals('thank-you-contributor');
    api.verifyContributeAgreement(user.users_contribute_agreement[1]);
});
