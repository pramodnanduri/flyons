$().ready(
		function(){
			$("#logger").append("Document is ready");

			$('#flyButton').click(function(){
				//$("#logger").append("<br>width:"+docWidth+"<br>height:"+docHeight);
				animateAtCenter();
				
			});
			
			$(document).click(function(e){
				animateAtMouseClick(e);
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




