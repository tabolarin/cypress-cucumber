Feature: Get customer information
  As a User I want to retrieve customer information

  Scenario: Get customer information
    Given I access api request end point to get customer information
    Then The response code is '200'
    And The customer information is
      | Key            | Value       |
      | EmployeeName   | Tiger Nixon |
      | EmployeeSalary | 320800      |
      | EmployeeAge    | 61          |

  Scenario: Delete customer information
    Given I access api request end point to delete customer information
    Then The response code is '200'
  And The status is 'success'

#    add response validation using fixture