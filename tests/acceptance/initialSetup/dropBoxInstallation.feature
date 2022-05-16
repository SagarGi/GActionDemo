Feature: Install Dropbox in Joomla

As a user
I want to install Dropbox in Joomla
So that I can make use of Dropbox in joomla

Background:
Given the user has logged in using webUI

Scenario: Dropbox is not installed
Given the dropbox extension 'is not' installed
When the user goes to the Install Extension page
Then the user should see the Upload section
When the user uploads the Dropbox extension zip file
Then the user should be on the Dropbox page


Scenario: Dropbox is already installed
Given the dropbox extension 'is' installed
When the user clicks on the Dropbox option
Then the user should be on the Dropbox page