@featureKanal
Feature: Kanal Page

    As a user
    I want to access times indonesia kanal page
    So that I can read times indonesia kanal contents

    Scenario: TCKP-01 - Open first hashtag to see news
        Given I am on the times indonesia kanal page
        When I get title outside hashtag kanal
        And I click on the first hashtag kanal
        Then I should see the topics based on hashtag kanal

# Scenario: TCKP-01-old - Search news with correct input
#     Given I am on the times indonesia kanal page
#     When I type news topic in search field Pendidikan
#     And I click search button kanal
#     Then I can see the news im looking for Pendidikan

# Scenario: TCKP-02 - Search news with random input
#     Given I am on the times indonesia kanal page
#     When I type random news topic in search field kanal
#     And I click search button kanal
#     Then I can not see the news im looking for

# Scenario: TCKP-03 - Search news with number input only
#     Given I am on the times indonesia kanal page
#     When I type only number news topic in search field kanal
#     And I click search button kanal
#     Then I can not see the news im looking for
