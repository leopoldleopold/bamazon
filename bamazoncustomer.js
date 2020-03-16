// app requirements
var mySql = require("mysql");
var inquirer = require("inquirer");
// variables
var hello = "Welcome to BAMAZON! An online web store" +
    " for all of your shopping needs!" + "\n";
var arr = [];
var cart =[];
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
    home();
    // openShop();
    // setTimeout(function(){openShop();}, 2000);
};
// function allowing user choice
function home() {
    inquirer
        .prompt([
            {
            name: "home",
            type: "list",
            message: "Select 'BAMAZON' to enter website." +
            " Select 'Purchase History' to view purchase history." +
            " Select 'EXIT' to exit BAMAZON",
            choices: ["BAMAZON", "Purchase History", "EXIT"]
            }
        ])
        .then(function(answer){
            console.log("WORKED");
            var w = answer.home.charAt(0);
            switch (w) {
                case "B":
                    console.log("BAAAA");
                    openShop();
                    break;
                case "P":
                    console.log("PUR");
                    break;
                case "E":
                    console.log("Thank you for using BAMAZON!");
                    setTimeout(function(){connection.end();}, 1000);
                    break;
            }
        });
};
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
        setTimeout(function(){ buy();}, 2000);
    });
};
// function to allow user to buy
var buy = function () {
    inquirer
        .prompt([
            {
                name: "id",
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
            var u = answer.id;
            var e = answer.qty;     
            checkId(u, e);
        });
}
// function to check if id exists in database and valid quantity amount
function checkId(x, y) {
    x--;
    if (x > arr.length) {
        console.log("That ID does not exist, please submit selection again.");
        setTimeout(function () { buy(); }, 2000);
    }
    else {
        if (y) {
            var a = arr[x].stock_quantity - y;
            if (a < 0) {
                console.log("Unfortunately we are out of stock....");
            }
            else {
                cart.push(arr[x]);
                console.log(cart);
                buy();
            }
        }
    }
};
// function to check if quantity exists

// function to run through db