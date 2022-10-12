
Feature: Login

   Scenario: Login Adactin webpage with valid username and valid password
      Given User launch the Adactin webpage
      When User enters valid Username and valid password
      And User clicks Login button
      Then User able to Adactin Homepage

   Scenario: Login Adactin webpage with invalid username and valid password
      Given User launch the Adactin webpage
      When User enters invalid Username and valid password
      And User clicks Login button
      Then User unable to Adactin Homepage

   Scenario: Login Adactin webpage with valid username and invalid password
      Given User launch the Adactin webpage
      When User enters valid Username and invalid password
      And User clicks Login button
      Then User unable to Adactin Homepage

      Scenario: Login Adactin webpage with invalid username and invalid password
      Given User launch the Adactin webpage
      When User enters invalid Username and invalid password
      And User clicks Login button
      Then User unable to Adactin Homepage