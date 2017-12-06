var testPage = function (){
    //elements
    var menuLearn = element (by.xpath('//*[@id="navbar-main"]/div/div/ul/li[1]/a'));
    var menuFAQ = element (by.css('[href="https://docs.angularjs.org/misc/faq"]'));
    var btnHide = element (by.buttonText("Hide"));
    var btnSHow = element (by.buttonText("Show"));
    //access applications
    this.homepage = function(){
         browser.get("https://angularjs.org/");
    }
    //action
    this.clickmenuLearn = function(){
        menuLearn.click();
    }
    this.clickmenuFAQ = function (){
        menuFAQ.click();
    }
    this.clickbtnHide = function (){
        btnHide.click();
    }
    this.viewbtnShow = function (){
        expect((btnSHow).isPresent()).toBe(true);
    }

};
module.exports = testPage