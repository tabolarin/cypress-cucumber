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
    //add alias

    cy.get('[ng-model="postCd"]').type(customerInfo['Postcode'])
    //add alias
});
When(/^I click add customer button$/, () => {
    cy.get('button[type="submit"]').click()
});
When(/^I select the customers tab$/,  () =>{
    cy.get('[ng-click="showCust()"]').click()
});
Then(/^Then customer information will be listed$/, ()  =>{
    cy.then(function () {
        const firstName = this.aliasFirstName
        cy.log('First name is ' +firstName)
    })
});
When(/^I click on open account$/, () => {
    cy.get('[ng-click="openAccount()"]').click()
});

When(/^I select customer name (.*)$/, (customerName: String) => {
    cy.get('select#userSelect').select(customerName.replaceAll("\"",""))
});
When(/^I select currency (.*)$/, (currency: String) =>  {
    cy.get('select#currency').select(currency.replaceAll("\"",""))
});
When(/^I click the process button$/, () =>  {
    cy.get('button[type="submit"]').click()
});
Then(/^The alert popup will be displayed$/, () => {
    cy.on('window:alert',(text) =>{
        expect(text).to.contain('Account created successfully')
    })
});