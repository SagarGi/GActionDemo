Feature: Install joomla

    Scenario: Install joomla after setting up
        Given the admin has browsed to installation page
        When the admin creates his account
        And the admin connects mysql to joomla
        And the admin finishes the installation
        Then the installation should be completed