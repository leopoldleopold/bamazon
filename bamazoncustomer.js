// app requirements
var mySql = require("mysql");
var inquirer = require("inquirer");
// variables
var hello = "Welcome to BAMAZON! An online web store" +
    " for all of your shopping needs!" + "\n";
var arr = [];
// establish mySQL connection
var connection = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "password",
    database: 'bamazon_DB'
});

// connect to mySql
connection.connect(function (err) {
    if (err) throw err;
    initApp();
});
//function to initialize app
function initApp() {
    console.log(hello);
    openShop();
    // setTimeout(function(){openShop();}, 2000);
}
// function to begin shop experience
function openShop() {
    connection.query('SELECT * FROM products', function (error, results) {
        if (error) throw error;
        console.log(
            "|-------------------------|Items|-------------------------|" + "\n"
        );
        for (var i = 0; i < results.length; i++) {
            arr.push(results[i]);
            console.log("ID: " + results[i].item_id + " | "
                + "Product: " + results[i].product_name + " | "
                + "Department: " + results[i].department_name + " | "
                + "Price: " + results[i].price + " | "
                + "Quantity " + results[i].stock_quantity + "\n");
        }
        setTimeout(function () { buy(); }, 2000);
    });
};
// function to allow user to buy
var buy = function () {
    inquirer
        .prompt([
            {
                name: "buy",
                type: "number",
                message: "What is the ID of the item" +
                    " you would like to buy?"
            },
            {
                name: "qty",
                type: "number",
                message: 'How many would you like?'
            }
        ])
        .then(function (answer) {
            // console.log(answer.buy);
            var u = answer.buy;
            u;
            var e = answer.qty;
            // console.log(u); 
            // console.log(arr[u].item_id);      
            checkId(u, e);
        });
}
// function to check if id exists in database and quantity
function checkId(x, y) {
    x--;
    console.log(x);
    console.log(y);
    // console.log(arr[x].product_name);
    if (x > arr.length) {
        console.log("That ID does not exist, please submit selection again.");
        setTimeout(function () { buy(); }, 2000);
    };
    if (y) {
        var u = arr[x].stock_quantity;
        if (y - u === 0) {
            console.log("less than");
        }
        else if (y - u > 0) {
            console.log("greater than");
        }
    }
};
// function to check if quantity exists

// function to run through db