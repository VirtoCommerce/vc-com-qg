const fs = require('fs');

Feature('Become partner forms');

Scenario('Become partner page', async (I, becomePartner,) => {
    I.amOnPage("/become-partner");
    let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));
    becomePartner.enterFullInformation(user);
    I.waitUrlEquals('/thank-you-partner-inq');
});
