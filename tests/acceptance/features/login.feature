Feature: Login
    As a user
    I want to login to my account
    So that only i can access my account

    Scenario: Login with valid credential
        Given the user has browsed to login page
        When the user logs in with valid username "lambu" and valid password "12345"
        Then the user should be able to access his account

    Scenario Outline: Login with valid credential
        Given the user has browsed to login page
        When the user logs in with valid username '<username>' and valid password '<invalid>'
        Then the user should see the message 'Username and password do not match or you do not have an account yet.'
        Examples:
        | username  | password |
        | valid     | invalid  |
        | invalid   | invalid  |
        | invalid   | valid    |
        