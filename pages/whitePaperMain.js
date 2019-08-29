const I = require('../steps_file')();

//links to pages
const b2bChallenges = "//a[@href='/download-b2b-whitepaper']";
const cloudBenefits = "//a[@href='/download-cloud-whitepaper']";
const enterpriseChallenges = "//a[@href='/enterprise-ecommerce-whitepaper']";
const migrationIssues = "//a[@href='/migration-whitepaper']";

//pages elements
const email = "CaseStudy[Email]";
const name = "CaseStudy[Name]";
const downloadButton = "//input[@value='Download White Paper']";

module.exports = {
    openB2bChallenges() {
        I.click(b2bChallenges);
    },

    openCloudBenefits() {
        I.click(cloudBenefits);
    },

    openEnterpriseChallenges() {
        I.pressKey('Pagedown');
        I.click(enterpriseChallenges);
    },

    openMigrationIssues() {
        I.scrollPageToBottom();
        I.click(migrationIssues);
    },

    downloadWhitePaper(user) {
        I.scrollPageToBottom();
        I.fillField(email, user.email);
        I.fillField(name, user.fullName);
        //workaround for filling forms
        I.wait(3);
        I.click(downloadButton);
    }
};

