Feature: Login to Demo web shop
  login process to Demo web shop

  Scenario Outline: successful login to Demo web shop
    Given user launched chrome browser
    And user provides the valid url
    And user clicks on login hyperlink
    When user provides valid "<Email>" and "<Password>"
    And he clicks on Login button
    Then user shall be able to view the homepage
    And see the welcome message

    Examples: 
      | Email                | Password   |
      | karthik456@gmail.com | karthik456 |
      
