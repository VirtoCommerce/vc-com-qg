const fs = require('fs');

Feature('Contact us');

Scenario('Contact us', async (I, basePage) => {
    I.amOnPage("/contact-us");
    let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));
    basePage.enterUserFull(user);
    I.waitUrlEquals('/thank-you');
});
