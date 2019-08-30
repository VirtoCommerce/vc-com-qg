const I = require('../steps_file')();
const assert = require('assert');

const contactPattern = "v1/contact/%s";

let headers = {
    "Content-Type": "application/json",
    "Host": "api2.autopilothq.com"
};

async function sendGetRequest(apiPath) {
    let response = await I.sendGetRequest(apiPath, headers);
    console.log('GET REQUEST');
    console.log(apiPath);
    console.log(response.status);
    // console.log(response);
    try {
        for (let e of response.data.response.errors) {
            console.log(e);
        }
    } catch (err) {
    }
    return response;
};

async function sendDeleteRequest(apiPath) {
    let response = await I.sendDeleteRequest(apiPath, headers);
    console.log('DELETE REQUEST');
    console.log(apiPath);
    console.log(response.status);
    // console.log(response);
    try {
        for (let e of response.data.response.errors) {
            console.log(e);
        }
    } catch (err) {
    }
    return response;
};

function verifyRecord(expected, actual) {
    assert.deepStrictEqual(actual.FirstName, expected.fullName);
    assert.deepStrictEqual(actual.Email, expected.email);
    assert.deepStrictEqual(actual.Phone, expected.phone);
    assert.deepStrictEqual(actual.Company, expected.company);
    assert.deepStrictEqual(actual.Title, expected.jobTitle);
    assert.deepStrictEqual(actual.Website, expected.website);
    assert.deepStrictEqual(actual.custom_fields[0].value, expected.comments);
    assert.deepStrictEqual(actual.custom_fields[1].value, expected.region + " ");
    assert.deepStrictEqual(actual.custom_fields[2].value, expected.describe);
};

function verifyDownloadAssetRecord(expected, actual, assert_type) {
    assert.deepStrictEqual(actual.FirstName, expected.fullName);
    assert.deepStrictEqual(actual.Email, expected.email);
    //check asset type
    assert.deepStrictEqual(actual.custom_fields[0].value, assert_type);
}

function verifyBecomePartnerRecord(expected, actual) {
    assert.deepStrictEqual(actual.FirstName, expected.firstName);
    assert.deepStrictEqual(actual.LastName, expected.lastName);
    assert.deepStrictEqual(actual.Email, expected.email);
    assert.deepStrictEqual(actual.Phone, expected.phone);
    assert.deepStrictEqual(actual.Company, expected.company);
    assert.deepStrictEqual(actual.Website, expected.website);
    //custom fields
    assert.deepStrictEqual(actual.custom_fields[0].value, expected.comments);
}

function verifyContributeAgreementRecord(expected, actual) {
    assert.deepStrictEqual(actual.FirstName, expected.firstName);
    assert.deepStrictEqual(actual.LastName, expected.lastName);
    assert.deepStrictEqual(actual.Email, expected.email);
    assert.deepStrictEqual(actual.MailingCountry, expected.postalCode);
    assert.deepStrictEqual(actual.Phone, expected.phone);
    assert.deepStrictEqual(actual.Company, expected.company);
    //custom fields
    assert.deepStrictEqual(actual.custom_fields[0].value, expected.githubHandle);
    assert.deepStrictEqual(actual.custom_fields[1].value, expected.streetAddress);
}

function verifyFindPartnerRecord(expected, actual) {
    assert.deepStrictEqual(actual.FirstName, expected.firstName);
    assert.deepStrictEqual(actual.LastName, expected.lastName);
    assert.deepStrictEqual(actual.Email, expected.email);
    assert.deepStrictEqual(actual.Phone, expected.phone);
    assert.deepStrictEqual(actual.Company, expected.company);
    assert.deepStrictEqual(actual.Website, expected.website);
    //custom fields
    assert.deepStrictEqual(actual.custom_fields[0].value.trim(), expected.region);
    assert.deepStrictEqual(actual.custom_fields[1].value, expected.comments);
}

module.exports = {
    deleteUser: async (email) => {
        sendDeleteRequest(contactPattern.replace("%s", email));
    },

    verifyFullRecordCreated: async (user) => {
        let pilotUser = await sendGetRequest(contactPattern.replace("%s", user.email));
        verifyRecord(user, pilotUser.data);
    },

    verifyDownloadedAsset: async (user, asset_type) => {
        let pilotUser = await sendGetRequest(contactPattern.replace("%s", user.email));
        verifyDownloadAssetRecord(user, pilotUser.data, asset_type);
    },

    verifyBecomePartner: async (user) => {
        let pilotUser = await sendGetRequest(contactPattern.replace("%s", user.email));
        verifyBecomePartnerRecord(user, pilotUser.data);
    },

    verifyContributeAgreement: async (user) => {
        let pilotUser = await sendGetRequest(contactPattern.replace("%s", user.email));
        verifyContributeAgreementRecord(user, pilotUser.data);
    },

    verifyFindPartner: async (user) => {
        let pilotUser = await sendGetRequest(contactPattern.replace("%s", user.email));
        verifyFindPartnerRecord(user, pilotUser.data);
    }
};