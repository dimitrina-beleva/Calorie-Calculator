// Changes styling of the tab content on open tab
openTab('calorieCalculator', document.getElementById("calorieCalculator-button"), 'rgb(210, 250, 151)');

//Array with products
var products = [ 
    {id: 'product-1', name: 'Apple', calories: 64, quantity: null},
    {id: 'product-2', name: 'Avocado', calories: 175, quantity: null},
    {id: 'product-3', name: 'Banana', calories: 92, quantity: null},
    {id: 'product-4', name: 'Watermelon', calories: 26, quantity: null},
    {id: 'product-5', name: 'Lemon', calories: 37, quantity: null},
    {id: 'product-6', name: 'Brocoli', calories: 42, quantity: null},
    {id: 'product-7', name: 'Tomatos', calories: 23, quantity: null},
    {id: 'product-8', name: 'Peas', calories: 91, quantity: null},
    {id: 'product-9', name: 'Cabbage', calories: 22, quantity: null},
    {id: 'product-10', name: 'Potatos', calories: 80, quantity: null},
    {id: 'product-11', name: 'Eggs', calories: 157, quantity: null},
    {id: 'product-12', name: 'Tuna fish', calories: 140, quantity: null},
    {id: 'product-13', name: 'Salmon', calories: 138, quantity: null},
    {id: 'product-14', name: 'Yogurt', calories: 50, quantity: null},
    {id: 'product-15', name: 'Cheese', calories: 300, quantity: null},
    {id: 'product-16', name: 'Rice', calories: 355, quantity: null},
    {id: 'product-17', name: 'Chocolate', calories: 530, quantity: null},
    {id: 'product-18', name: 'Ice cream', calories: 140, quantity: null},
    {id: 'product-19', name: 'Coca Cola', calories: 42, quantity: null},
    {id: 'product-20', name: 'Beer', calories: 53, quantity: null},
    {id: 'product-21', name: 'Wine', calories: 82, quantity: null},
];

// Creates table rows and columns based on products data
function createTable() {    
    var tableBody = document.getElementById('products');

    products.forEach(function(product) {
        // Creates table row element
        var row = document.createElement('tr');

        // Creates table data element for product's name and appends it to the table row
        var name = document.createElement('td');
        name.appendChild(document.createTextNode(product.name));
        row.appendChild(name);

        // Creates table data element for product's calories and appends it to the table row
        var calories = document.createElement('td');
        calories.appendChild(document.createTextNode(product.calories));
        row.appendChild(calories);

        // Creates input element and appends it to the table row
        var input = document.createElement("input");
        input.type = "number";
        input.name = product.name;
        input.class = "quantity";
        input.value = product.quantity; 
        input.id = product.id;
        input.onchange = function(element) { setQuantity(element)};
        
        row.appendChild(input);

        // Appends table row to a table body
        tableBody.appendChild(row); 
    });
  }

  // Finds product by id and sets its quantity from input value
  var setQuantity = function (element) {
    products.forEach(function(product) {
        if (product.id == element.currentTarget.id)
        product.quantity = element.currentTarget.value;
    });
  }

  createTable();

  //Searches for a product from the array and sets a filter
  $(function(){
    $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#table-products tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

// Calculates the sum of all product's quantity multiplied by product's calories
function calculateCalories() {
    var sumElement = document.getElementById('sum');

    var sum = 0;
    products.forEach(function(product) {
        sum += (product.quantity / 100) * product.calories;
    });

    sumElement.innerText = 'Total calories: ' + Math.round(sum);
} 

// Resets all product quantities to null and clears the total amount
function resetCalories() {
    products.forEach(function(product) {
        var productElement = document.getElementById(product.id);
        productElement.value = '';
        product.quantity = null;
    });

    var sumElement = document.getElementById('sum');
    sumElement.innerText = '';
}

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });

  $("#recommended-intake-form").validate({
    rules: {
      field: {
        required: true
      }
    }
  });

  $(function() {
    $("#recommended-intake-form").submit(function submit() {

      var isMale = $("#gender").val() == "Male";
      var weight = $("#weight").val();
      var height = $("#height").val();
      var age = $("#age").val();
      var total = 0;
          
      if ($(isMale)) {
        total = Math.round(((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity.value);
      } else {
        total = Math.round(((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity.value);
      }
      var values = $("#recommended-intake-form").serialize();
      $("#result-RDCI").text(values);
      $("input[type='checkbox'], input[type='radio']").on("click", submit);
      $("select").on("change", submit);
      $("span#result-RDCI").text(total);
      submit();
    });
});

$(function() { 

  //Reset handler that clears the form
  $('form[name="recommended-intake-form"] input:reset').click(function () {
      $('form[name="recommended-intake-form"]')
          .find(":radio, :checkbox").removeAttr("checked").end()
          .find("textarea, :text, select").val('')
      return false;
  });
});