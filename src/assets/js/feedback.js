$().ready(function() {
	pageWidth = $(document).width();
	pageHeight = $(document).height();
	
	createWidgetButton("defaultImage");
//	createWidgetButton();
	createFeedbackForm();
	$('#feedbackBtn').click(function(){
		$('#flyId').flyDown({"closeBtn":true});
		$('#feedbackInput').focus();
	});
	
});


function showFeedbackWidget() {
	
}

function getDefaultBtnParams() {
	var pageHeight = $(document).height();
	var top= pageHeight/2 - 60;
	var params = {"right":"0px", "top":top,"bgcolor":"orange",'height':'110px','width':'15px'};
	return params;
}


function addDefaultButtonStyle(element,params){			
	/*Block page overlay*/
	$(element).css({
		'position':'absolute',
		'top':params.top,
		'right':params.right,
		'background-color':params.bgcolor,
		'height':params.height,
		'width':params.width,
		'font-weight':'bold',
		'line-height' : '90%',
		'padding': '10px 1px 10px 10px',
		'cursor':'pointer',
		'border-top-left-radius': '4px',
		'border-bottom-left-radius': '4px'
//		'z-index':'10'
	});
}

function createDefaultWidgetButton() {
	var feedbackBtn = $('<div class = "feebackBtnCls" id="feedbackBtn">F<br>e<br>e<br>d<br>b<br>a<br>c<br>k<br></div>');
	$(feedbackBtn).appendTo('body');
	addDefaultButtonStyle(".feebackBtnCls",getDefaultBtnParams());
}

function getDefaultIconParams() {
//	var pageHeight = $(document).height();
//	var top= pageHeight/2 - 60;
	var params = {"right":"250px", "top":'0px','height':'30px','width':'30px'};
	return params;
}

function addDefaultIconStyle(element,params){			
	/*Block page overlay*/
	$('#'+element).css({
		'position':'absolute',
		'top':params.top,
		'right':params.right,
		'display':'inline',
//		'background-color':params.bgcolor,
		'height':params.height,
		'width':params.width,
//		'font-weight':'bold',
//		'line-height' : '90%',
		'padding': '10px',
		'cursor':'pointer',
//		'border-top-left-radius': '4px',
//		'border-bottom-left-radius': '4px'
//		'z-index':'10'
	});
}


function createDefaultWidgetIcon() {
	var feedbackBtn = $('<div class="feedbackIconCls"  id="feedbackBtn"><img src="assets/img/feedback.gif" alt="feedback" height="35px" ></div>');
	$(feedbackBtn).appendTo('body');
	addDefaultIconStyle('feedbackBtn', getDefaultIconParams());
}



function createWidgetButton(buttonType) {
		if(buttonType == "defaultImage") {
			createDefaultWidgetIcon();
		}
		else {
			createDefaultWidgetButton();
		}
}


function createFeedbackForm() {
	var feedForm = $('<div class="flyWindow" id="flyId"><div>Send us your feedback<div class="flyClose" id="flyCloseBtn">x</div></div><div><textarea id="feedbackInput" rows="10" cols="34" placeholder="Your feedback is very important!"></textarea></div><div class="sendBtn"><input type="button" class="btn-custom" value="Send" id="feedSendBtn"></div></div>');
	$(feedForm).appendTo('body');
	$(feedForm).hide();
}














