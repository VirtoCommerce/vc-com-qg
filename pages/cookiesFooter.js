const I = actor();
const acceptCookies = "//*[@id='cookieConsentAccept']";

module.exports = {

    acceptCookies: () => {
        I.click(acceptCookies);
    }
};
