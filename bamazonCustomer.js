var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Bamazon",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
  start();
});

var start = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    console.table(res);
    purchaseItem();
  });
};

var purchaseItem = function () {
  inquirer
    .prompt([
      {
        name: "itemID",
        type: "input",
        message: "What item would you like to purchase? Select using ID.",
        validate: function (value) {
          var valid = value.match(/^[0-9]+$/);
          if (valid) {
            return true;
          }
          return "Please enter a valid Product ID";
        },
      },
      {
        name: "stockQuantity",
        type: "input",
        message: "How many would you like to purchase?",
        validate: function (value) {
          var valid = value.match(/^[0-9]+$/);
          if (valid) {
            return true;
          }
          return "Please enter a valid quantity.";
        },
      },
    ])
    .then(function (answer) {
      connection.query(
        "SELECT * FROM products WHERE itemID = ?",
        [answer.itemID],
        function (err, res) {
          console.log(res);
          if (answer.stockQuantity > res[0].stockQuantity) {
            console.log("Insufficient quantity!");
            quitBamazon();
            purchaseItem();
          } else {
            priceTotal = res[0].price * answer.stockQuantity;
            currentDepartment = res[0].departmentName;
            console.log("Your Total Amount is $" + priceTotal);
            console.log("Thanks for your order");
            console.log("");
            var math = res[0].stockQuantity - parseInt(answer.stockQuantity);
            connection.query(
              "UPDATE products SET stockQuantity= " +
                math +
                " WHERE itemID =" +
                answer.itemID
            );
            quitBamazon();
          }
        }
      );
    });
};

var quitBamazon = function () {
  connection.end();
};
