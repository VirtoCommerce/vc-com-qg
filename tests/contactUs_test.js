const fs = require('fs');
const api = require('../tools/api.js');

let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('Contact us');

After(I => {
    api.deleteUser(user.user_contact_us[0].email);
})

Scenario('Contact us 1', async (I, basePage) => {
    I.amOnPage("/contact-us");
    basePage.enterUserFull(user.user_contact_us[0]);

    await api.verifyFullRecordCreated(user.user_contact_us[0]);

});

Scenario('Contact us 2', async (I, basePage) => {
    I.amOnPage("/contact-us");
    basePage.enterUserFull(user.user_contact_us[1]);

    await api.verifyFullRecordCreated(user.user_contact_us[1]);

});

Scenario('Contact us 3', async (I, basePage) => {
    I.amOnPage("/contact-us");
    basePage.enterUserFull(user.user_contact_us[2]);

    await api.verifyFullRecordCreated(user.user_contact_us[2]);

    I.amOnPage("/contact-us");
    basePage.enterUserFull(user.user_contact_us[3]);

    await api.verifyFullRecordCreated(user.user_contact_us[3]);

});