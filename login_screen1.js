describe('login screen',function() {
	
	it('Open an application',function() {
		
		browser.get("https://ux.owlinvest.com/#!/login");
		
		element(by.model("usernameemail")).sendKeys("admin@owlinvest.com");
	    element(by.model("userpassword")).sendKeys("admin123");
	    element(by.buttonText("Login"));
	});
});