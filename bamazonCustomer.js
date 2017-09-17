var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  // password: ,
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  //prompt the user
  start();
});


function start(){
	connection.query("SELECT * FROM products", function	(err, results){
			if (err) throw err;
		console.log(results);

		inquirer
		.prompt([
		{
			name: "id",
			type:"input",
			message: "What is the ID of the product you would like to buy?"
		},
		{
			name: "order",
			type: "input",
			message: "How many would you like to order?"
		}

		])//prompt
		.then(function(answer){
			var chosenItem;
			for (var i = 0; i < results.length; i++){
				if (results[i].id === parseInt(answer.id)){
					chosenItem = results[i];
				}
			}//end for loop
		//determine if there are enough items


		if (chosenItem.stock_quantity >= parseInt(answer.order)){
			var stockRemaining = chosenItem.stock_quantity - parseInt(answer.order);
			//if there's enough then update the database and let the user know
			connection.query(
				"UPDATE products SET ? WHERE ?",
				[
					{
						stock_quantity: stockRemaining
					},
					{
						id: chosenItem.id
					}
				],
				function(error){
					if (error) throw err;
					console.log("Your order was place successfully!")
				var purchaseTotal = chosenItem.price * answer.order;
					console.log("Your purchase cost is $"+ purchaseTotal);

				}//closes function
				)//closes connection.query
		}//closes if statement
		else{
			console.log("There aren't enough of those to fill your order.")
		}

		})
	});//connection.query
};//start function end