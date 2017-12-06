var testPage = require ('./page/myFirstTest_page.js');

describe ("Hide FAQ", function (){
   beforeEach(function(){
       var get = new testPage();
       get.homepage();
   });
 
  it ("click hide button", function(){
        var actclickmenuLearn = new testPage();
        var actclickmenuFAQ = new testPage();
        var actbtnHide = new testPage();
        var expectbtnSHow = new testPage();
        
        actclickmenuLearn.clickmenuLearn();
        actclickmenuFAQ.clickmenuFAQ();
        actbtnHide.clickbtnHide ();
        
        expectbtnSHow.viewbtnShow();

  });

});