/*var login_page = function login()

{
	
   this.uname = element(by.model("usernameemail"));
   this.pwd   = element(by.model("userpassword"));
   this.login = element(by.buttonText("Login"))

 
   
   this.get = function(){
   
   browser.get('http://localhost:12344/#/login');
   
   };
   
   
   this.login =  function(username,password)  {
	
	/*   login_page = function(username,password)  {
		this.uname.sendKeys(nameemail);
		this.pwd.sendKeys(password);
		this.login.click();
	    browser.waitForAngular();
   */	    
	/*	
	        this.login = function(email, password){
	        this.email.clear();
	        this.email.sendKeys(email);
	        this.password.clear();
	        this.password.sendKeys(password);
	        this.loginButton.click();
	    
		
	   };
	   };
	   
	  module.exports =  new login_page();
	   
s   };
   */


/*
function login()

{
	
	   this.uname = element(by.model("usernameemail"));
	   this.pwd   = element(by.model("userpassword"));
	   this.login = element(by.buttonText("Login"));
	   
	   this.get = function(){
		   
		   browser.get('http://localhost:12344/#/login');
		   
		   };
		   

}


*/




require('./Login_Screen.js');
 
var home_page = function() {
     
    this.name = element(by.model('usernameemail'));
    this.pass = element(by.model('userpassword'));
    this.login = element(by.buttonText("Login"))

     
    this.enterName = function(name) {
        this.name.sendKeys(name);
    };
     
    this.enterPwd = function(pass) {
        this.name.sendKeys(pass);
    };
     
    this.login = function() {
        this.login.click();
        return require('./Login_Screen.js');
    };
};



































































