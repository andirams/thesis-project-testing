@featureHome
Feature: Home Page

    As a user
    I want to access times indonesia home page
    So that I can read times indonesia contents

    Scenario: TCHP-01 - Search news with correct input
        Given I am on the times indonesia home page
        When I type news topic in search field Bola
        And I click search button
        Then I can see the news im looking for

    Scenario: TCHP-02 - Search news with random input
        Given I am on the times indonesia home page
        When I type random news topic in search field
        And I click search button
        Then I can not see the news im looking for

    # Scenario: TCHP-03 - Search news with number input only
    #     Given I am on the times indonesia home page
    #     When I type only number news topic in search field
    #     And I click search button
    #     Then I can not see the news im looking for