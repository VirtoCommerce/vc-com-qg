const fs = require('fs');
let user = JSON.parse(fs.readFileSync("./resources/user.json", 'utf-8'));

Feature('Case studies page');

Before((I) => {
    I.amOnPage("/case-studies");
    I.pressKey("PageDown");
});

After((api) => {
    api.deleteUser(user.email);
});

Scenario('Bosch page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickBoschLink();
    I.waitUrlEquals("case-studies/bosch");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("assets/files/bosch-case-study.pdf");
    api.verifyDownloadedAsset(user, user.boschCaseStudy);
});

Scenario('Lavazza page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickLavazzaLink();
    I.waitUrlEquals("case-studies/lavazza");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/lavazza-case-study.pdf");
    api.verifyDownloadedAsset(user, user.lavazzaCaseStudy);
});

Scenario('Spain estate page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickSpainLink();
    I.waitUrlEquals("case-studies/estatespain");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/estatespain-case-study.pdf");
    api.verifyDownloadedAsset(user, user.spainCaseStudy);
});

Scenario('Proffsmagasinet page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickProffLink();
    I.waitUrlEquals("case-studies/proffsmagasinet");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/case-study-proffs.pdf");
    api.verifyDownloadedAsset(user, user.proffsCaseStudy);
});

Scenario('Boekhandel page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickBoekhandelLink();
    I.waitUrlEquals("case-studies/standaard-boekhandel");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/standaard-boekhandel-case-study.pdf");
    api.verifyDownloadedAsset(user, user.boekhandelCaseStudy);
});

Scenario('Eminent IT page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickEminentLink();
    I.waitUrlEquals("case-studies/eminent");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/eminent-case-study.pdf");
    api.verifyDownloadedAsset(user, user.eminentCaseStudy);
});

Scenario('Kupinatao IT page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickKupinataoLink();
    I.waitUrlEquals("case-studies/kupinatao");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/kupinatao-case-study.pdf");
    api.verifyDownloadedAsset(user, user.kupinataoCaseStudy);
});

Scenario('Giftcertificates page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickGiftLink();
    I.waitUrlEquals("case-studies/gift");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/gc-case-study.pdf");
    api.verifyDownloadedAsset(user, user.giftCaseStudy);
});

Scenario('Ciferica page', (I, caseStudiesPage, api) => {
    caseStudiesPage.clickCifericaLink();
    I.waitUrlEquals("https://virtocommerce.com/case-studies/ciferica");
    caseStudiesPage.downloadCaseStudies(user);
    I.waitUrlEquals("https://vcpro.blob.core.windows.net/blogs/niteco-cifereca-case-study.pdf");
    api.verifyDownloadedAsset(user, user.cifericaCaseStudy);
});
