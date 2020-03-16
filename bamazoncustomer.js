// app requirements
var mySql = require("mysql");
var inquirer = require("inquirer");
// variables
var hello = "Welcome to BAMAZON! An online web store" +
" for all of your shopping needs!" + "\n";
// establish mySQL connection
var connection = mySql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: "password",
database: 'bamazon_DB'
});
// connect
connection.connect(function(err){
    if (err) throw err;
    initApp();
});
//function to initialize app
function initApp() {
    console.log(hello);
    setTimeout(function(){openShop();}, 2000);
}
// function to begin shop experience
function openShop() {
    connection.query('SELECT * FROM products', function (error, results) {
        if (error) throw error;
        console.log(
        "|-------------------------|Items|-------------------------|" + "\n"      
        );
        var arr = [];
        for (var i = 0; i < results.length; i++) {
            arr.push(results[i]);
            console.log("ID: " + results[i].item_id + " | "
             + "Product: " + results[i].product_name + " | "
             + "Department: " + results[i].department_name + " | "
             + "Price: " + results[i].price + " | "
             + "Quantity " + results[i].stock_quantity + "\n");
        }  
    });
};
