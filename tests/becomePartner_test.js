const fs = require('fs');
let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('Become partner forms');

Before((I) => {
    I.amOnPage("/become-partner");
});

AfterSuite((api) => {
    console.log("After all tests");
    api.deleteUser(user.users_become_partner[1].email);
});

Scenario('Become partner page/Create user', async (I, becomePartnerPage, api) => {
    becomePartnerPage.enterFullInformation(user.users_become_partner[0]);
    I.waitUrlEquals('thank-you-partner-inq');
    api.verifyBecomePartner(user.users_become_partner[0]);
});

Scenario('Become partner page/Change user info', async (I, becomePartnerPage, api) => {
    becomePartnerPage.enterFullInformation(user.users_become_partner[1]);
    I.waitUrlEquals('thank-you-partner-inq');
    api.verifyBecomePartner(user.users_become_partner[1]);
});
