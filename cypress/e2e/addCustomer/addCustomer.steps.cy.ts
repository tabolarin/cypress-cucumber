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
    cy.wrap(customerInfo['FirstName']).as('aliasFirstName')

    cy.get('[ng-model="lName"]').type(customerInfo['LastName'])
    cy.wrap(customerInfo['FirstName']).as('aliasLastName')

    cy.get('[ng-model="postCd"]').type(customerInfo['Postcode'])
    cy.wrap(customerInfo['FirstName']).as('aliasPostcode')
});
When(/^I click add customer button$/, () => {
    cy.get('button[type="submit"]').click()
});
When(/^I select the customers tab$/, () => {
    cy.get('[ng-click="showCust()"]').click()
});
Then(/^Then customer information will be listed$/, () => {
    cy.then(function () {
        cy.xpath('//td[@class="ng-binding" and text()=\'' + this.aliasFirstName + '\']').should('be.visible')
        cy.xpath('//td[@class="ng-binding" and text()=\'' + this.aliasLastName + '\']').should('be.visible')
        cy.xpath('//td[@class="ng-binding" and text()=\'' + this.aliasPostcode + '\']').should('be.visible')
    })
});
When(/^I click on open account$/, () => {
    cy.get('[ng-click="openAccount()"]').click()
});
When(/^I select customer name (.*)$/, (customerName: string) => {
    cy.get('select#userSelect').select(customerName)
});
When(/^I select currency (.*)$/, (currency: string) => {
    cy.get('select#currency').select(currency)
});
When(/^I click the process button$/, () => {
    cy.get('button[type="submit"]').click()
});
Then(/^The alert popup will be displayed$/, () => {
    cy.on('window:alert', (text) => {
        expect(text).to.contain('Account created successfully')
    })
});
Then(/^The customer information will be displayed$/, (dataTable) => {
    // @ts-ignore
    const customerInfo = dataTable.rowsHash()
    cy.xpath('//td[@class="ng-binding" and text()=\'' + customerInfo['FirstName']+ '\']').should('be.visible')
    cy.wrap(customerInfo['FirstName']).as('aliasFirstName')

    cy.xpath('//td[@class="ng-binding" and text()=\'' + customerInfo['LastName'] + '\']').should('be.visible')
    cy.wrap(customerInfo['FirstName']).as('aliasLastName')
});
Then(/^I click on the delete button for customer$/, () => {
    cy.xpath('//td[@class="ng-binding" and text()="Albus"]/..//button[@ng-click="deleteCust(cust)"]').click()
});
Then(/^The customer information will not be displayed$/, function () {
    cy.then(function () {
        cy.xpath('//td[@class="ng-binding" and text()=\'' + this.aliasFirstName + '\']').should('be.visible')
        cy.xpath('//td[@class="ng-binding" and text()=\'' + this.aliasLastName + '\']').should('be.visible')
    })
});