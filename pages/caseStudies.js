const I = require('../steps_file.js')();

const boschLink = "//a[@href='/case-studies/bosch']";
const lavazzaLink = "//a[@href='/case-studies/lavazza']";
const spainLink = "//a[@href='/case-studies/estatespain']";
const proffLink = "//a[@href='/case-studies/proffsmagasinet']";
const boekhandelLink = "//a[@href='/case-studies/standaard-boekhandel']";
const eminentLink = "//a[@href='/case-studies/eminent']";
const kupinataoLink = "//a[@href='/case-studies/kupinatao']";
const giftLink = "//a[@href='/case-studies/gift']";
const cifericaLink = "//a[@href='/case-studies/ciferica']";

const email = "CaseStudy[Email]";
const name = "CaseStudy[Name]";
const downloadButton = "//input[@value='Download Now']";


module.exports = {

    clickBoschLink(){
        I.click(boschLink);
    },

    clickLavazzaLink(){
        I.click(lavazzaLink);
    },

    clickSpainLink(){
        I.click(spainLink);
    },

    clickProffLink(){
        I.click(proffLink);
    },

    clickBoekhandelLink(){
        I.click(boekhandelLink);
    },

    clickEminentLink(){
        I.click(eminentLink);
    },

    clickKupinataoLink(){
        I.click(kupinataoLink);
    },

    clickGiftLink(){
        I.click(giftLink);
    },
    clickCifericaLink(){
        I.click(cifericaLink);
    },

    downloadCaseStudies: (user) => {
        I.fillField(email, user.email);
        I.fillField(name, user.fullName);
        I.wait(2);
        I.click(downloadButton);
    }
}
