// app requirements
var mySql = require("mysql");
var inquirer = require("inquirer");
// variables
var hello = "Welcome to BAMAZON! An online web store" +
    " for all of your shopping needs!" + "\n";
var arr = [];
var cart = [];
var total = 0;
var valid = false;
// establish mySQL connection
var con = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "password",
    database: 'bamazon_DB'
});

// connect to mySql
con.connect(function (err) {
    if (err) throw err;
    initApp();
});
//function to initialize app
function initApp() {
    console.log(hello);
    main();
};
// function allowing user choice to exit, view history, purchase
function main() {
    console.log(
        "|--------------------Manager Mode--------------------|"
    );
    inquirer
        .prompt([
            {
                name: "main",
                type: "list",
                message: "Welcome to Manager Mode for BAMAZON." +
                " Select 'Manager Mode' to Manager Mode" +
                " Select 'EXIT' to exit BAMAZON.", 
                choices: ["Manager Mode", "EXIT"]
            }
        ])
        .then(function (answer) {
            var w = answer.home.charAt(0);
                if (w === E) {
                    console.log("Thank you for using BAMAZON!");
                    setTimeout(function () { connection.end(); }, 1000);
                } else {
                    home();
                }
        });
};
// function for home scrn in manager mode
function home() {
    inquirer
        .prompt([
            {
                name: "main",
                type: "list",
                message: "Select 'Products for Sale' to view current inventory." + "\n" +
                "Select 'View Low Inventory' to view inventory stock below the quantity of 5." + "\n" +
                "Select 'Add to Inventory' to add additional stock to an item within the current inventory." + "\n" +
                "Select 'Add New Product' to add a new product to the inventory.",
                choices: ["Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
            }
        ]);
}