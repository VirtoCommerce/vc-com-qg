const fs = require('fs');
let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('White papers page ');

Before((I) => {
    I.amOnPage("/whitepapers");
    I.pressKey('Pagedown');
});

Scenario('B2b challenges', (I, whitePapersMainPage, api) => {
    whitePapersMainPage.openB2bChallenges();
    I.waitUrlEquals('download-b2b-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    //api request
    api.verifyFullRecordCreated(user);
    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-top-5-b2b-challenges.pdf');
});

Scenario('Cloud benefits', (I, whitePapersMainPage) => {
    whitePapersMainPage.openCloudBenefits();
    I.waitUrlEquals('download-cloud-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    //api request
    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-5-reasons-to-switch-your-ecommerce-to-the-cloud.pdf');
});

Scenario('Enterprise challenges', (I, whitePapersMainPage) => {
    whitePapersMainPage.openEnterpriseChallenges();
    I.waitUrlEquals('enterprise-ecommerce-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    //api request

    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-ecommerce-platform-migration-problems.pdf');
});

Scenario('Migration issues', (I, whitePapersMainPage) => {
    whitePapersMainPage.openMigrationIssues();
    I.waitUrlEquals('migration-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    //api request

    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-ecommerce-platform-migration-problems.pdf');
});
