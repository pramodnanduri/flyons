$().ready(
		function(){
			$("#logger").append("Document is ready");

			$('#flyButton').click(function(){
				//$("#logger").append("<br>width:"+docWidth+"<br>height:"+docHeight);
				animateAtCenter();
				
			});
			
			$(document).click(function(e){
				clickX = e.pageX;
				clickY = e.pageY;
				animate(clickX,clickY);
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

function animateAtMouseClick()
{
	
}




