openTab('calorieCalculator', document.getElementById("calorieCalculator-button"), 'rgb(210, 250, 151)');

$(document).ready(function(){
    $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#table-products tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

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

$(function() {
    var cssClasses = [
      'rangeslider-is-lowest-or-highest-value',
      'rangeslider-is-low-or-high-value',
    ];
    
    $("input[type=range]").rangeslider({
        polyfill: false
      })
      .on("input", function() {
        var fractionMax = (this.max - this.value);
        var fractionMin = (this.value - this.min);
        if (fractionMax <= 10 || fractionMin <= 10) {
          this.nextSibling.classList.add(cssClasses[0]);
        } else if ((fractionMax <= 30 && fractionMax > 10) || (fractionMin <= 30 && fractionMin > 10)) {
          this.nextSibling.classList.add(cssClasses[1]);
        } else {
            this.nextSibling.classList.remove(...cssClasses)
          }
      });
  });

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
    $("#activity").selectmenu();
  });

  $(function() {
    $("#weightInputId").change(function() {
        var pId = $("#weightInputId").val();
        $.get('updateProduct', {
            productID: pId.trim()    
        },
        function(oninput) {    
    $("#weight-value").val(oninput);
        }
);
});
});

  $(function() {
    $("#calculateRDCI-Button").click(function() {
          var age = $("#age").val();
          var gender = $("#gender").val();
          var height = $("#height").val();
          var weight = $("#weight").val();
          var activity = $("#activity").val();
          if ($("#activity") == "Little/No exercise") {
              activity = 1.2;
          }
          else if ($("#activity") == "1-2 times per week") {
              activity = 1.375;
          }
          else if ($("#activity") == "3-5 times per week") {
            activity = 1.5;
        }
        else if ($("#activity") == "6-7 times per week") {
            activity = 1.725;
        }
        else {
            activity = 1.9;
        }
          var total = 0;
          if ($(gender = "male")) {
            var total = Math.round(((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity);
          } else {
            var total = Math.round(((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity);
          }
          $("span#result-RDCI").val(total);
    });
    });