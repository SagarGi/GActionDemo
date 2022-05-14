Feature: Login
    As a user
    I want to login to my account
    So that only i can access my account

    Scenario: Login with valid credential
        Given the user has browsed to login page
        When the user logs in with valid username "standard_user" and valid password "secret_sauce"
        Then the user should be able to acces his account