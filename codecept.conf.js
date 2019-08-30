exports.config = {
    tests: 'tests/*_test.js',
    output: './output',
    helpers: {
        REST: {
            endpoint: "https://api2.autopilothq.com/"
        },
        WebDriver: {
            url: 'https://virtocommerce.com/',
            browser: 'chrome',
            seleniumAddress: 'http://localhost:4444/wd/hub',
            desiredCapabilities: {
                chromeOptions: {
                    args: ["--window-size=1920,1080"]
                }
            },
            waitForTimeout: 50000,
            smartWait: 30000,
            scriptsTimeout: 30000,
            getPageTimeout: 30000
        }
    },
    include: {
        I: './steps_file.js',
        basePage: './pages/basePage.js',
        becomePartnerPage: './pages/becomePartner.js',
        contributeAgreementPage: './pages/contributeAgreement.js',
        whitePapersMainPage: './pages/whitePaperMain.js',
        caseStudiesPage: './pages/caseStudies.js',
        findPartnerPage: './pages/findPartner.js',
        api: './tools/api.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'abm-quality-gate'
}