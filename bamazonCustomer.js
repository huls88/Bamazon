var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({host: "localhost", port: 8889, user: "root", password: "root", database: "Bamazon"});

connection.connect(function(err) {
  if (err)
    throw err;

  // console.log(res);
  runSearch();
});
function runSearch() {
  inquirer.prompt({
    name: "product",
    type: "list",
    message: "What product did you want to buy?",
    choices: ["Nuts", "Other"]

  }).then(function(answer) {
    switch (answer.product) {
      case "Find types of nuts":
        nutSearch();
        break;
    }
  });
}

function nutSearch() {
  inquirer.prompt({name: "item_id", type: "input", message: "What nut would you like to search for?"});

  connect.query("select * from products", function(err, res) {

    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].item_id);
      console.log("Product: " + res[i].product_name);
      console.log("Department: " + res[i].department_name);
      console.log("Price: " + res[i].price);
      console.log("Quantity: " + res[i].stock_quantity);

    }
  });
}
