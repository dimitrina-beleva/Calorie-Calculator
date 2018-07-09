// Loads the current page
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

/* Adds function to scroll event and displays the scroll button,
when scrolling down more than 20px from the top of the document
*/

    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $('#scrollButton').fadeIn();
        } else {
            $('#scrollButton').fadeOut();
        }
    });
    // Scrolls to the top of the document
    $('#scrollButton').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
