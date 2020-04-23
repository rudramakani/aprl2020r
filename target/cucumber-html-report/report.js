$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/tejas/eclipse-workspace/cucumber/feature/fea.feature");
formatter.feature({
  "name": "Login to Demo web shop",
  "description": "  login process to Demo web shop",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "successful login to Demo web shop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user provides the valid url",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login hyperlink",
  "keyword": "And "
});
formatter.step({
  "name": "user provides valid \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "he clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "user shall be able to view the homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "see the welcome message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "karthik456@gmail.com",
        "karthik456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "successful login to Demo web shop",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user launched chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Demoweb.user_launched_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides the valid url",
  "keyword": "And "
});
formatter.match({
  "location": "Demoweb.user_provides_the_valid_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login hyperlink",
  "keyword": "And "
});
formatter.match({
  "location": "Demoweb.user_clicks_on_login_hyperlink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides valid \"karthik456@gmail.com\" and \"karthik456\"",
  "keyword": "When "
});
formatter.match({
  "location": "Demoweb.user_provides_valid_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefs.Demoweb.user_provides_valid_and(Demoweb.java:33)\r\n\tat ✽.user provides valid \"karthik456@gmail.com\" and \"karthik456\"(file:/C:/Users/tejas/eclipse-workspace/cucumber/feature/fea.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "he clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Demoweb.he_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user shall be able to view the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Demoweb.user_shall_be_able_to_view_the_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "see the welcome message",
  "keyword": "And "
});
formatter.match({
  "location": "Demoweb.see_the_welcome_message()"
});
formatter.result({
  "status": "skipped"
});
});