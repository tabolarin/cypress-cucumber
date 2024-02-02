import {Given, Then} from "@badeball/cypress-cucumber-preprocessor"

// let result: string;
Given(/^I access api request end point to get customer information$/, () => {
    const url = 'https://dummy.restapiexample.com/api/v1/employee/1'
    cy.request('GET', url).as('response')
});
Given(/^I access api request end point to delete customer information$/, () => {
    const url = 'https://dummy.restapiexample.com/api/v1/delete/2'
    cy.request('DELETE', url).as('response')
});
Then(/^The response code is '200'$/, () => {
    cy.then(function () {
        expect(this.response.status).to.eq(200)
    })
});
Then(/^The customer information is$/, (dataTable) => {
    // @ts-ignore
    const employeeInfo = dataTable.rowsHash()

    cy.then(function () {
        expect(this.response.body.data.employee_name).to.equal(employeeInfo['EmployeeName'])
        expect(this.response.body.data.employee_salary).to.equal(parseInt(employeeInfo['EmployeeSalary']))
        expect(this.response.body.data.employee_age).to.equal(parseInt(employeeInfo['EmployeeAge']))
    })
});