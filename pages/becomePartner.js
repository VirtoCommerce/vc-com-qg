const I = actor();

const fullName = "fullname";
const email = "email";
const phone = "phone";
const company = "company";
const website = "//label[text() = 'Website']/../input";
const comments = "comments";
const requestPartnership = "//button[@type = 'submit'][text() = 'Inquire about Partnership']";

module.exports = {

    enterFullInformation: (user) => {
        I.fillField(fullName, user.fullName);
        I.fillField(email, user.email);
        I.fillField(phone, user.phone);
        I.fillField(company, user.company);
        I.fillField(website, user.website);
        I.fillField(comments, user.comments);
        I.pressKey('Pagedown');
        I.click(requestPartnership);
    }
};
