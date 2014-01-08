
$().ready(
		function(){
			pageWidth = $(document).width();
			pageHeight = $(document).height();

//			$("#logger").append("Document is ready");

			$('#flyButton').click(function(){
				//$("#logger").append("<br>width:"+docWidth+"<br>height:"+docHeight);
				animateAtCenter();

			});

			$(document).on("click", '#flyCloseBtn', function (e) {
				$("#flyId").closeFlyon();
			 }
			);
			
			$('#flyCloseBtn').click(function(){
				//$("#logger").append("<br>width:"+docWidth+"<br>height:"+docHeight);
				closeFlyon();

			});

			
			$(document).click(function(e){
				//animateAtMouseClick(e);
			});

		});


function animate(x,y)
{
	var docWidth = $(document).width();
	var docHeight = $(document).height();
	
	$("#pmdanimation").show();
	$('#element-left').animate({"left":x ,"top":y},"slow");
	$('#element-right').animate({"right":docWidth-x ,"top":y},"slow");
	$('#element-left-bottom').animate({"left":x ,"bottom":docHeight-y},"slow");
	$('#element-right-bottom').animate({"right":docWidth-x ,"bottom":docHeight-y},"slow");

}

function animateAtCenter()
{
	fadePage();
	var docWidth = $(document).width()/2;
	var docHeight = $(document).height()/2;
	animate(docWidth, docHeight);
}

function resetAnimator()
{
	$('#pmdanimation').hide();
	$('#element-left').css({"left":0 ,"top":0},"slow");
	$('#element-right').css({"right":0 ,"top":0},"slow");
	$('#element-left-bottom').css({"left":0 ,"bottom":0},"slow");
	$('#element-right-bottom').css({"right":0 ,"bottom":0},"slow");
}

function animateAtMouseClick(e)
{
	resetAnimator();
	clickX = e.pageX;
	clickY = e.pageY;
	animate(clickX,clickY);
}

function fadePage() {
	var fadeDiv = $('<div class = "fadeDiv" id="flyonFadePageId"></div>');
	$(fadeDiv).appendTo('body');
	addFadeStyle();
	$('.fadeDiv').animate({"background-color":"rgba(0,0,0,0.6)"}, "slow");
}

function resetPage() {
	$('#pmdanimation').fadeOut('fast');
	$('.fadeDiv').remove().fadeOut();
	
}

function addFadeStyle(){			
	/*Block page overlay*/
	$('.fadeDiv').css({
		'position':'absolute',
		'top':'0',
		'left':'0',
		'background-color':'rgba(0,0,0,0.4)',
		'height':pageHeight,
		'width':pageWidth,
		'z-index':'10'
	});
}

function createDefaultFlyBox(content) {
	fadePage();
	var flyBox = "<div class='defaultFadeWindow'>"+content+"</div>";
	return flyBox;
}
function createFlyBox() {
	
}

$.fn.fly = function(){
	
};

$.fn.flyRight = function() {
	this.addClass('defaultFlyWindow defaultGoRight');
	var left =$(document).width()/2 - this.width()/2;
	var top= $(document).height()/2 - this.height()/2; 
	this.css({'top':  top});
	animateAtCenter(this, left, top);
};

$.fn.flyDown = function(params) {
	this.addClass('defaultFlyWindow defaultGoDown');
	var left =$(document).width()/2 - this.width()/2;
	var top= $(document).height()/2 - this.height(); 
	this.css({'left':  left});
	animateAtCenter(this, left, top);
	if(params.closeBtn == true) {
		
	}
};


function addCloseBtn() {
	
}

$.fn.closeFlyon = function( ) {
	closeFlyonUp(this);
};

function closeFlyonUp(flyElement) {
	var element =$(flyElement);
	var top = 0;
	var position = element.position();
	var left = position.left;
//	animateDown(element, left, top);
	animateTop(element, left, top);
//	removeFadePage();
}

function removeFadePage() {
	
	$('#flyonFadePageId').remove();
}

function animateTop(element, left, top) {
	var elementPos= element.position();
	var shakeTop = elementPos.top+100;
	element.animate({"left":left ,"top":shakeTop},100);
	element.animate({"left":left ,"top":top},300, function(){ removeFadePage(); element.hide(); });
}

function animateDown(element,left,top) {
	var elementPos= element.position();
	var exitTop = $(document).height(); 
	var shakeTop = elementPos.top-50;
	element.animate({"left":left ,"top":shakeTop},100);
	element.animate({"left":left ,"top":exitTop},300, function(){ removeFadePage(); element.hide(); element.remove();});
	
}

function postAnimation(element) {
	removeFadePage();
	element.hide();
//	element.remove();
}


function animateAtCenter(element, left, top) {
//	var width = $(document).width()/2;
//	var height = $(document).height()/2;
//	elementHeight = element.height();
	fadePage();
	$(element).show();
	$(element).animate({"left":left ,"top":top+50},300);
	$(element).animate({"left":left ,"top":top-50},100);
}







