package stepdefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Demoweb {

	WebDriver driver;
@Given("user launched chrome browser")
public void user_launched_chrome_browser() {
    System.setProperty("webdriver.chrome.driver", "C:\\Users\\tejas\\Downloads\\chromedriver_win32\\chromedriver.exe");
    driver=new ChromeDriver();
}

@Given("user provides the valid url")
public void user_provides_the_valid_url() {
	driver.get("http://demowebshop.tricentis.com/");
}

@Given("user clicks on login hyperlink")
public void user_clicks_on_login_hyperlink() {
	driver.findElement(By.className("ico-login")).click();	
}


@When("user provides valid {string} and {string}")
public void user_provides_valid_and(String Email, String Password) {
	driver.findElement(By.id("Email")).sendKeys(Email);
	driver.findElement(By.id("Password")).sendKeys(Password);
}

@When("he clicks on Login button")
public void he_clicks_on_Login_button() {
	driver.findElement(By.cssSelector("input.button-1.login-button")).click();	   
}

@Then("user shall be able to view the homepage")
public void user_shall_be_able_to_view_the_homepage() {
	System.out.println("displayed the homepage");	   	  
}

@Then("see the welcome message")
public void see_the_welcome_message() {
	   System.out.println("welcome message is displayed..");
}


}

