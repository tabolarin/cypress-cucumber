import {Given, Then} from "@badeball/cypress-cucumber-preprocessor"

// let result: string;
Given(/^I access api request end point to get employee information$/, () => {
    const url = 'https://reqres.in/api/users/3'
    cy.request('GET', url).as('response')
});
Given(/^I access api request end point to create employee information$/, () => {
    const url = 'https://reqres.in/api/users'
    cy.fixture('employee_james').as('employeeInfo')

    cy.then(function () {
        cy.log('Retrieved json is', this.employeeInfo)
        cy.request('POST', url, this.employeeInfo).as('response')
    })
});
Then(/^The response code is (.*)$/, (responseCode) => {
    cy.then(function () {
        if (typeof responseCode === "string") {
            expect(this.response.status).to.equal(parseInt(responseCode))
        }
    })
});
Then(/^The status is 'success'$/, function () {
    cy.then(function () {
        expect(this.response.body.status).to.equal('Success')
    })
});
Then(/^The customer information is$/, (dataTable) => {
    // @ts-ignore
    const employeeInfo = dataTable.rowsHash()

    cy.then(function () {
        expect(this.response.body.data.email).to.equal(employeeInfo['EmailAddress'])
        expect(this.response.body.data.first_name).to.equal(employeeInfo['FirstName'])
        expect(this.response.body.data.last_name).to.equal(employeeInfo['LastName'])
    })
});
Then(/^The response body is$/, (dataTable) => {
    // @ts-ignore
    const employeeInfo = dataTable.rowsHash()

    cy.then(function () {
        expect(this.response.body.name).to.equal(employeeInfo['Name'])
        expect(this.response.body.job).to.equal(employeeInfo['Job'])
    })
});