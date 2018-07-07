//Adds function to scroll event
window.onscroll = function() {scrollFunction()};

// Displays the scroll button, when scrolling down more than 20px from the top of the document
function scrollFunction() {
    if(document.getElementById("scrollButton")) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollButton").style.display = "block";
        } else {
            document.getElementById("scrollButton").style.display = "none";
        }
    }
}

// Scrolls to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Shows the hidden elements
$(function(){
    $('#readMore1').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenInfoProtein:hidden').css('visibility','visible');
           $('#hiddenInfoProtein:hidden').show(); 
           $('#readLess1:hidden').css('visibility','visible');
           $('#readLess1:hidden').show();
        });          
    });
    $('#readMore2').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenAvoidSugary:hidden').css('visibility','visible');
           $('#hiddenAvoidSugary:hidden').show(); 
           $('#readLess2:hidden').css('visibility','visible');
           $('#readLess2:hidden').show();
        });          
    });
    $('#readMore3').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenMoreWater:hidden').css('visibility','visible');
           $('#hiddenMoreWater:hidden').show(); 
           $('#readLess3:hidden').css('visibility','visible');
           $('#readLess3:hidden').show();
        });          
    });
    $('#readMore4').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenDoExercise:hidden').css('visibility','visible');
           $('#hiddenDoExercise:hidden').show(); 
           $('#readLess4:hidden').css('visibility','visible');
           $('#readLess4:hidden').show();
        });          
    });
    $('#readMore5').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenReduceCarbs:hidden').css('visibility','visible');
           $('#hiddenReduceCarbs:hidden').show(); 
           $('#readLess5:hidden').css('visibility','visible');
           $('#readLess5:hidden').show();
        });          
    });
});


// Hides the elements
$(function(){
    $('#readLess1').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenInfoProtein:visible').css('visibility','hidden');
           $('#hiddenInfoProtein:visible').hide(); 
           $('#readMore1').show(); 
        });          
    });
    $('#readLess2').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenAvoidSugary:visible').css('visibility','hidden');
           $('#hiddenAvoidSugary:visible').hide(); 
           $('#readMore2').show(); 
        });          
    });
    $('#readLess3').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenMoreWater:visible').css('visibility','hidden');
           $('#hiddenMoreWater:visible').hide(); 
           $('#readMore3').show(); 
        });          
    });
    $('#readLess4').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenDoExercise:visible').css('visibility','hidden');
           $('#hiddenDoExercise:visible').hide(); 
           $('#readMore4').show(); 
        });          
    });
    $('#readLess5').click(function(){
        $(this).fadeOut(function(){
            $('#hiddenReduceCarbs:visible').css('visibility','hidden');
           $('#hiddenReduceCarbs:visible').hide(); 
           $('#readMore5').show(); 
        });          
    });
});