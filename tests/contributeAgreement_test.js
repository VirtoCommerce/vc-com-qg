const fs = require('fs');

Feature('Contribute agreement');

Scenario('Contribute agreement page' , (I, contributeAgreement) => {
    I.amOnPage("/contribute-agreement");
    let user = JSON.parse(fs.readFileSync('./resources/user.json', 'utf-8'));
    contributeAgreement.enterFullInformation(user);
    I.waitUrlEquals('thank-you-contributor');
});
