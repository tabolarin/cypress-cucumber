import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"


Given(/^I navigate to the login page$/, () => {
    cy.visit('/')
});
When(/^I click on bank manager login$/, () => {
    cy.xpath('//button[text()=\'Bank Manager Login\']').click()
});
When(/^I click on add customer$/, () => {
    cy.get('[ng-click="addCust()"]').click()
});

When(/^I enter first name "([^"]*)"$/, (guid) => {
    if (typeof guid === "string") {
        cy.get('[ng-model="fName"]').type(guid)
    }
});
When(/^I enter customer information$/, (dataTable) => {
    // @ts-ignore
    const customerInfo = dataTable.rowsHash()
    cy.get('[ng-model="fName"]').type(customerInfo['FirstName'])
    cy.get('[ng-model="lName"]').type(customerInfo['LastName'])
    cy.get('[ng-model="postCd"]').type(customerInfo['Postcode'])
});
When(/^I click add customer$/, () => {
    cy.get('button[type="submit"]').click()
});
When(/^I select the customers tab$/, function () {

});
Then(/^Then customer information will be listed$/, function () {

});