// Changes styling of the tab content on open tab
openTab('recipes', document.getElementById("recipes-button"), 'rgb(252, 202, 137)');

//TODO
$(function showRecipe(recipeToBeShown) {
    var recipe = $('#' + recipeToBeShown);
    var isVisible = recipe.is(":visible");
    if (isVisible) {
    recipe.css('visibility','hidden');
    recipe.hide();
    } else {
    recipe.css('visibility','visible');
    recipe.show();
    }
});