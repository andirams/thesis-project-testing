@featureFoto
Feature: Foto Page

    As a user
    I want to access times indonesia foto page
    So that I can read times indonesia foto contents

    Scenario: TCFP-01 - Open latest kopi times news
        Given I am on the times indonesia foto page
        When I get title outside kopi times 
        And I click on the most recent kopi times news
        Then I should see the most recent kopi times news

    Scenario: TCFP-02 - Slide carousel ketahanan informasi
        Given I am on the times indonesia foto page
        When I slide carousel ketahanan informasi news
        Then I should see ketahanan informasi news slided
