Feature: Get customer information
  As a User I want to retrieve customer information

  Scenario: Create customer information
    Given I access api request end point to create employee information
    Then The response code is 201
    And The response body is
      | Key  | Value       |
      | Name | James Brown |
      | Job  | QA Analyst  |


  Scenario: Get customer information
    Given I access api request end point to get employee information
    Then The response code is 200
    And The customer information is
      | Key          | Value               |
      | EmailAddress | emma.wong@reqres.in |
      | FirstName    | Emma                |
      | LastName     | Wong                |
