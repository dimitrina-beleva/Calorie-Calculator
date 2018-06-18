//// Loads the current page
function loadPage(page) {
    location.href = page;
}

// Changes styling of the tab content and tab link
function openTab(tabName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

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

// When the user clicks on the button, crolls to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}