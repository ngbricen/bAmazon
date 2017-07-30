var mysql = require("mysql");
var inquirer = require("inquirer");

//Create Connection to DB
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "webhost",

  // Your password
  password: "class1",
  database: "bAmazonDB"
});

//Return all existing products and start the application
connection.connect(function(err) {
  if (err) throw err;
  placeOrder();
  // connection.end();
});

function placeOrder(){
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
			// once you have the items, prompt the user for which they'd like to bid on
    	inquirer
	      .prompt([
	        {
	          name: "choice",
	          type: "rawlist",
	          choices: function() {
	            var choiceArray = [];
	            for (var i = 0; i < res.length; i++) {
	              choiceArray.push(res[i].product_name);
	            }
	            return choiceArray;
	          },
	          message: "What product Id would you like to buy?"
	        },
	        {
	          name: "quantity",
	          type: "input",
	          message: "How many would you like to purchase?"
	        }
	      ])
	      .then(function(answer) {
	      	// get the information of the chosen item
	        var chosenItem;
	        
	        for (var i = 0; i < res.length; i++) {
	          if (res[i].product_name === answer.choice) {
	            chosenItem = res[i];
	          }
	        }
       
      		if (chosenItem.stock_quantity <= 0){
      			console.log("Product is not currently available.  Please order another product.");
      			placeOrder();
      		}
      		else if (chosenItem.stock_quantity <= answer.quantity){
      			console.log("We don't have enough products to fulfill your command. Please place another order");	
      			placeOrder();
      		}
      		else {
      			updateProduct(chosenItem.item_id, chosenItem.stock_quantity - parseInt(answer.quantity));      			
      			placeOrder();
      		}

        });


  });
}

function updateProduct(id,quantity) {
  console.log("Updating ordered Products...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: quantity
      },
      {
        item_id: id
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}
