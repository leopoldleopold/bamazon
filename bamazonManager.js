// app requirements
var mySql = require("mysql");
var inquirer = require("inquirer");
// variables
var hello = "Welcome to BAMAZON! An online web store" +
    " for all of your shopping needs!" + "\n";
var valid = false;
var arr = [];
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
            var w = answer.main.charAt(0);
            if (w === "E") {
                console.log("Thank you for using BAMAZON!");
                setTimeout(function () { con.end(); }, 1000);
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
                name: "home",
                type: "list",
                message: "Select 'Products for Sale' to view current inventory." + "\n" +
                    "Select 'View Low Inventory' to view inventory stock below the quantity of 5." + "\n" +
                    "Select 'Add to Inventory' to add additional stock to an item within the current inventory." + "\n" +
                    "Select 'Add New Product' to add a new product to the inventory." + "\n" +
                    "Select 'EXIT' to exit Manager Mode",
                choices: ["Products for Sale",
                    "View Low Inventory",
                    "Add to Inventory",
                    "Add New Product",
                    "EXIT"]
            }
        ])
        .then(function (answer) {
            var c = answer.home.length;
            switch (c) {
                case 17:
                    forSale();
                    break;
                case 18:
                    lowStock();
                    break;
                case 16:
                    addStock();
                    break;
                case 15:
                    addProduct();
                    break;
                case 4:
                    main();
                    break;
            }
        });
};
// function to view all stock for Sale
function forSale() {
    con.query('SELECT * FROM products', function (error, results) {
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
        if (valid) {
            addStock();
            valid = false;
        }
        else {
            home();
        }
    });
};
// function to view low inventory
function lowStock() {
    con.query('SELECT * FROM products WHERE stock_quantity < 5', function (error, results) {
        if (error) throw error;
        console.log(
            "|-------------------------|!!LOW INVENTORY!!|-------------------------|" + "\n"
        );
        for (var i = 0; i < results.length; i++) {
            console.log("ID: " + results[i].item_id + " | "
                + "Product: " + results[i].product_name + " | "
                + "Department: " + results[i].department_name + " | "
                + "Price: " + results[i].price + " | "
                + "Quantity " + results[i].stock_quantity + "\n");
        }
        home();
    });
};
// function to add stock to 
var addStock = function () {
    if (valid) {
        inquirer
            .prompt([
                {
                    name: "id",
                    type: "number",
                    message: "What is the ID of the item" +
                    " you would like to add stock to?"
                },
                {
                    name: "qty",
                    type: "number",
                    message: "How much stock would you like to add?"
                }
            ])
            .then(function(answer){
                var i = answer.id, a = answer.id;
                i--;
                var e = answer.qty + arr[i].stock_quantity;
                con.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: e
                        },
                        {
                            item_id: a
                        }
                    ],
                )
                console.log("STOCK ADDED! SHIPMENT RECEIVED!");
                home();
            });
    }
    else {
        valid = true;
        forSale();
    }
};
// function to add product
var addProduct = function () {
    console.log("Please enter information for item to be stored in inventory.")
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the product name?"
            },
            {
                name: "dpt",
                type: "input",
                message: "What department will this item be stored in?"
            },
            {
                name: "price",
                type: "number",
                message: "Enter item price in 00000.00 format"
            },
            {
                name: "qty",
                type: "number",
                message: "Number of stock to be held?"
            },
        ])
        .then(function(answer){
            con.query(
                "INSERT INTO products SET ?",
                {
                    product_name: answer.name,
                    department_name: answer.dpt,
                    price: answer.price,
                    stock_quantity: answer.qty
                }                         
            )
            console.log("ITEM ADDED!");
            home();
        });
};
