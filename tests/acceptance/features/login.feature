Feature: Login
    As a user
    I want to login to my account
    So that only i can access my account

    Scenario: Login with valid credential
        Given the user has browsed to login page
        When the user logs in with valid username "lambu" and valid password "1234"
        Then the user should be able to access his account
        