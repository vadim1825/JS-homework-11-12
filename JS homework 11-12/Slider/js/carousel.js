(function($) {

    $.fn.myCarousel = function() {

    	//declare variables

    	var $leftArrow = $(".arrow_left");

    	var $rightArrow = $(".arrow_right");

    	var $elementsList = $('.carousel_list');

    	var $pixelsOffset = 175;                                 //step carousel

        var $currentLeftValue = 0;                               //starting position

        var $numOfPic = $elementsList.find("li").length;

        var $rightStop = - (($numOfPic - 5) * $pixelsOffset);    //the right edge

        var $leftStop = 0;                                       //the left edge


      /*if the initial position is not the left -
       clicking on the left button to move the list to the left 175px*/


        $leftArrow.click(function() {

        	if ($currentLeftValue != $leftStop) {

        		$currentLeftValue += 175;

                $elementsList.animate({ 

            	    left: $currentLeftValue + "px"

                }, 500);

        	}; 

        });


        /*if the initial position is not the right -
       clicking on the right button to move the list to the right 175px*/


        $rightArrow.click(function() {

        	if ($currentLeftValue != $rightStop) {

        		$currentLeftValue -= 175;

                $elementsList.animate({

                    left: $currentLeftValue + "px"

                }, 500);
        	};

        });

    };



})(jQuery);