

/*
var Jasmine2HtmlReporter=require('C:/usr/local/node_modules/protractor-jasmine2-html-reporter');


exports.config = {
        directConnect : true,
        capabilities:{
                'browserName':'chrome'
        },
          framework: 'jasmine2',
          seleniumAddress: 'http://localhost:4444/wd/hub',
          specs: ['ChainLocators.js'],
          jasmineNodeOpts:{
            defaultTimeoutInterval : 30000  
          },

          onPreapre:function(){
              jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                  savePath:"./test-results/report"
              }));
          },
        }

*/


/*

module.exports = { 
config: {
framework: 'jasmine',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['Login_Screen.js'],
capabilities: {
  browserName: 'chrome'
  }   
},  
params: {
login: {
  email: 'default',
  password: 'default'
    }   
  }
}

*/
/*
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        '../Owl_Invest/protractor/Login.js'
    ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};

*/
/*
import { ProtractorBrowser, Config,browser } from 'protractor';

export let config: Config = {

    allScriptsTimeout: 60000,
    baseUrl: 'https://ux.owlinvest.com/#!/login/',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    capabilities:{
        browserName:'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);

    },specs:['./Login_Screen.js'],

};

*/
/*
import {ProtractorBrowser} from 'protractor';

  onPrepare: () => {
        let globals = require('protractor');
        let browser: ProtractorBrowser = globals.browser;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();  
    }


*/


/*
exports.config = {
		
		seleniumAddress:'http://localhost:4444/wd/hub',
		 capabilities: {
			    browserName: 'chrome',
			    user: 'admin@owlinvest.com',
			    password: 'admin123',
			//    platformName: 'Android'
			  },
		
		framework:'jasmine',
		
		specs: ['Login_Screen.js'],
		
		
		jasmineNodeOpts:  {
			
			showColors: true,
			defaultTimeInterval: 3000
			
		}
		
		
		
		
}

*/


var Jasmine2HtmlReporter =  require('protractor-jasmin2-html-reporter');
exports.config = {
		
		specs: ['login_screen1.js'],
		
		onPrepare: function()
        {
			
			browser.driver.manage().window().maximize();
			jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
				savePath:  'target/screeshots'
			})		
			
			);
			
        },
        
   suite :
	   {
	   Smoke : ['Login_Screen.js']
	   },
	   
	jasminNodeOpts:  {
		showColors: true,
	}   
	   
		
		
};

















































