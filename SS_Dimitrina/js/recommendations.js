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

//Changes the visibility of the read more/less button and shows and hides the hidden elements
function changeVisibility(info, button) {
    var infoElement = $('#' + info);
    var buttonElement = $('#' + button);
    var isVisible = infoElement.is(":visible");
    if (isVisible) {
    infoElement.css('visibility','hidden');
    infoElement.hide();
    buttonElement.text('READ MORE >>');
    } else {
    infoElement.css('visibility','visible');
    infoElement.show();
    buttonElement.text('<< READ LESS');
    }
    };