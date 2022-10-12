Feature: cancel

    Scenario: Canceling the bookings

        Given User launch the Adactin webpage
        When User enters valid Username and valid password
        And User clicks Login button
        When User navigate to Booked iteration page
        And User verifying the cancelation page
        And User deselect all booked 
        Then User clicks cancel booked 
       
           