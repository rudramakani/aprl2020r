package runner;

import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\tejas\\eclipse-workspace\\cucumber\\feature\\fea.feature",
glue= {"stepdefs"},
plugin= {"pretty","html:target/cucumber-html-report"})

public class Runner1 {

}
