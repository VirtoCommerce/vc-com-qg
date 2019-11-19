const fs = require('fs');
const api = require('../tools/api.js');
const assert = require('assert');

let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('Subscribe');

After(I => {
    api.deleteUser(user.email);
})

Scenario('Subscribe footer', async (I, basePage) => {
    I.amOnPage("/");
    basePage.enterUserEmailFooter(user);
    I.waitInUrl('thank-you-newsletters', 2);
    await api.verifyEmailRecord(user);

});

Scenario('Subscribe blog', async (I, basePage) => {
    I.amOnPage("/blog");
    await basePage.enterUserEmailSidePane(user);
    assert.deepStrictEqual(await I.grabTextFrom(basePage.subscribedPopup), 'Thank you, stay tuned for something awesome!');
    await api.verifyEmailRecord(user);

});