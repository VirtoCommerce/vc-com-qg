const I = actor();

const fullName = "fullname";
const email = "email";
const phone = "phone";
const company = "company";
const jobTitle = "jobtitle";
const website = "website";
const region = "region";
const describe = "Please select from the following";
const comments = "comments";
const requestDemo = "//button[@type='submit'][text()='Request Demo']";

module.exports = {

    enterUserFull: (user) => {
        I.fillField(fullName, user.fullName);
        I.fillField(email, user.email);
        I.fillField(phone, user.phone);
        I.fillField(company, user.company);
        I.fillField(jobTitle, user.jobTitle);
        I.fillField(website, user.website);
        I.selectOption(region, user.region);
        I.selectOption(describe, user.describe);
        I.fillField(comments, user.comments);
        I.pressKey('Pagedown');
        I.click(requestDemo);
    }
};