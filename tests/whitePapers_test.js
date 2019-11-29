const fs = require('fs');
let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('White papers page ');

Before((I, cookiesFooter) => {
    I.amOnPage("/whitepapers");
    cookiesFooter.acceptCookies();
});

After((api) => {
    api.deleteUser(user.email);
});

Scenario('B2b challenges', (I, whitePapersMainPage, api) => {
    whitePapersMainPage.openB2bChallenges();
    I.waitUrlEquals('download-b2b-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    //api request
    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-top-5-b2b-challenges.pdf');
    api.verifyDownloadedAsset(user, user.b2bChallengesWP);
});

Scenario('Cloud benefits', (I, whitePapersMainPage, api) => {
    whitePapersMainPage.openCloudBenefits();
    I.waitUrlEquals('download-cloud-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-5-reasons-to-switch-your-ecommerce-to-the-cloud.pdf');
    //api request
    api.verifyDownloadedAsset(user, user.cloudBenefitsWP);
});

Scenario('Enterprise challenges', (I, whitePapersMainPage, api) => {
    whitePapersMainPage.openEnterpriseChallenges();
    I.waitUrlEquals('enterprise-ecommerce-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-ecommerce-platform-migration-problems.pdf');
    //api request
    api.verifyDownloadedAsset(user, user.enterpriseChallengesWP);
});

Scenario('Migration issues', (I, whitePapersMainPage, api) => {
    whitePapersMainPage.openMigrationIssues();
    I.waitUrlEquals('migration-whitepaper');
    whitePapersMainPage.downloadWhitePaper(user);
    I.waitUrlEquals('https://vcpro.blob.core.windows.net/blogs/whitepaper-ecommerce-platform-migration-problems.pdf');
    //api request
    api.verifyDownloadedAsset(user, user.migrationIssuesWP);
});

