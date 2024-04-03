@featureLogin
Feature: Login to Times Indonesia CMS Admin Account

    As an admin
    I want to login to cms times admin account
    So that I can manage times indonesia contents

    Scenario: TCCMS-01 - Input correct username and correct password
        Given I am on the cms times login page
        And I type correct username
        And I type correct password
        When I click on the login button
        Then I should redirected to cms times dashboard

    Scenario: TCCMS-02 - Input correct username and incorrect password
        Given I am on the cms times login page
        And I type correct username
        And I type incorrect password
        When I click on the login button
        Then I should see incorrect alert notification

    # Scenario: TCCMS-03 - Input incorrect username and correct password
    #     Given I am on the cms times login page
    #     And I type incorrect username
    #     And I type correct password
    #     When I click on the login button
    #     Then I should see incorrect alert notification

    # Scenario: TCCMS-04 - Input incorrect username and incorrect password
    #     Given I am on the cms times login page
    #     And I type incorrect username
    #     And I type incorrect password
    #     When I click on the login button
    #     Then I should see incorrect alert notification

    # Scenario: TCCMS-05 - Logout from the account
    #     Given I am on the cms times login page
    #     And I type correct username
    #     And I type correct password
    #     When I click on the login button
    #     And I click on the keluar button
    #     Then I should redirected back to cms times login page

