
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		// Add your code here
	
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		// Add your code here
		waf.sources.userClass.save({
			onSuccess : function(event) {
				$$('richText8').setValue('User information saved.');
				waf.sources.userClassRead.collectionRefresh();
				
				//if (waf.sources.userClass.getPosition() == -1) {
				//	waf.sources.userClass.addEntity(waf.sources.userClass.getCurrentElement());
			}
		});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		// Add your code here
		//waf.sources.userClass.insertUser();
		//$$('richText8').setValue('Added new user');
		waf.sources.userClass.addNewElement();
		//waf.sources.userClass.userName = 'New User';
		
		//waf.sources.userClass.serverRefresh();
		//waf.sources.userClass.collectionRefresh();
        waf.sources.userClass.serverRefresh({
             onSuccess: function(event) {
                 $$('richText8').setValue('Added new user'); //$$('messageText').setvalue("add new user");
                 waf.sources.userClassRead.collectionRefresh();
           }
        });
        //waf.sources.userClass.all();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
