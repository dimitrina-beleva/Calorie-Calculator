openTab('calorieCalculator', document.getElementById("calorieCalculator-button"), 'rgb(210, 250, 151)');

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

// Create table rows and columns based on products data
function createTable() {
    var tableBody = document.getElementById('products');

    products.forEach(function(product) {
        var row = document.createElement('tr');
  
        var name = document.createElement('td');
        name.appendChild(document.createTextNode(product.name));
        row.appendChild(name);

        var calories = document.createElement('td');
        calories.appendChild(document.createTextNode(product.calories));
        row.appendChild(calories);

        var input = document.createElement("input");
        input.type = "number";
        input.name = product.name;
        input.class = "quantity";
        input.value = product.quantity; 
        input.id = product.id;
        input.onchange = function(element) { setQuantity(element)};
        
        row.appendChild(input);

        tableBody.appendChild(row); 
    });
  }

  // Find product by id and set its quantity from input value
  var setQuantity = function (element) {
    products.forEach(function(product) {
        if (product.id == element.currentTarget.id)
        product.quantity = element.currentTarget.value;
    });
  }

  createTable();

function calculateCalories() {
    var sumElement = document.getElementById('sum');

    var sum = 0;
    products.forEach(function(product) {
        sum += (product.quantity / 100) * product.calories; // TODO: round number
    });

    sumElement.innerText = 'Total calories: ' + sum;
} 