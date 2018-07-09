openTab('recommendations', document.getElementById("recommendations-button"), 'rgb(253, 251, 148)')

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