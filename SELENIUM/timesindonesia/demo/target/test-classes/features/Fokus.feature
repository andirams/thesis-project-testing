@featureFokus
Feature: Fokus Page

    As a user
    I want to access times indonesia fokus page
    So that I can read times indonesia fokus contents

    Scenario: TCFKP-01 - Load more fokus berita hashtag
        Given I am on the times indonesia fokus page
        When I click on the load more button fokus
        Then I should see hashtag increases

    Scenario: TCFKP-02 - Opening the first hashtag of Fokus Berita
        Given I am on the times indonesia fokus page
        When I get title outside hashtag
        And I click on the first hashtag
        Then I should see the topics based on hashtag