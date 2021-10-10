const contentfulManagement = require("contentful-management")

module.exports = function() {
    const contentfulClient = contentfulManagement.createClient({
        accessToken: 'CFPAT-jex3BICcgiYDFQcYVTimE8PmCum1vTB5UyxUMJ_XIeU',
    })

    return contentfulClient
        .getSpace('xu97rx4oayin')
        .then(space => space.getEnvironment('master'))
}