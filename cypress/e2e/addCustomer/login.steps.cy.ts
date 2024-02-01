import {Given, When} from "@badeball/cypress-cucumber-preprocessor"

Given(/^I navigate to the login page$/, () => {
    cy.visit('/')
});
When(/^I click on bank manager login$/, () => {
    cy.xpath('//button[text()=\'Bank Manager Login\']').click()
});
When(/^I click on add customer$/, () => {
    cy.get('[ng-click="addCust()"]').click()
});

When(/^I enter first name "([^"]*)"$/, function (guid) {
    if (typeof guid === "string") {
        cy.get('[ng-model="fName"]').type(guid)
    }
});