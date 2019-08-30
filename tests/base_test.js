const api = require('../tools/api.js');

BeforeSuite(I => {
    console.log("Before suite");
    console.log("apiKey: " + process.env.vcapikey);
    api.setApiKey(process.env.vcapikey);
})