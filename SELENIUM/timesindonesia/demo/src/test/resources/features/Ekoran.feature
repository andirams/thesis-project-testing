@featureEkoran
Feature: Ekoran Page

    As a user
    I want to access times indonesia ekoran page
    So that I can read times indonesia ekoran contents

    Scenario: TCEP-01 - Load more ekoran
        Given I am on the times indonesia ekoran page
        When I click on the load more button ekoran
        Then I should see ekoran card increases

    Scenario: TCEP-02 - Back to top button
        Given I am on the times indonesia ekoran page
        When I scroll to bottom of the page
        And I click back to top button
        Then I should go back to top of the page

    # Scenario: TCEP-02-old - Open latest ekoran
    #     Given I am on the times indonesia ekoran page
    #     When I click on the most recent ekoran news
    #     Then I should see the most recent ekoran news
