const fs = require('fs');
let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('Find partner page');


Before((I) => {
    I.amOnPage("/find-implementation-partner");
});

AfterSuite((api) => {
    console.log('drop all users');
    for (i = 0; i < user.user_find_partner.length - 1; i++) {
        api.deleteUser(user.user_find_partner[i].email);
    }
});

Scenario('Find partner/Region Americas', (I, findPartnerPage, api) => {
    test_user = user.user_find_partner[0];
    findPartnerPage.enterFullInformation(test_user);
    I.waitUrlEquals("thank-you-find-partner");
    api.verifyFindPartner(test_user);
});

Scenario('Find partner/Region APAC', (I, findPartnerPage, api) => {
    test_user = user.user_find_partner[1];
    findPartnerPage.enterFullInformation(test_user);
    I.waitUrlEquals("thank-you-find-partner");
    api.verifyFindPartner(test_user);
});

Scenario('Find partner/Region EMEA', (I, findPartnerPage, api) => {
    test_user = user.user_find_partner[2];
    findPartnerPage.enterFullInformation(test_user);
    I.waitUrlEquals("thank-you-find-partner");
    api.verifyFindPartner(test_user);


});

Scenario('Find partner/Region EMEA/ Changed information', (I, findPartnerPage, api) => {
    test_user = user.user_find_partner[3];
    findPartnerPage.enterFullInformation(test_user);
    I.waitUrlEquals("thank-you-find-partner");
    api.verifyFindPartner(test_user);
});
