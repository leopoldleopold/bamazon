# **Bamazon *(Inventory Management and Purchasing Software)* NODE APP** 

### What Bamazon Does
  Bamazon allows a customer to make a purchase, while automatically updating the quantity in storage database if a sufficient amount remains, or declines the purchase if the requested purchase is unavailable. 
  Bamazon also includes a Manager Mode that allows personnel to add additional stock to an item, add a new object to their inventory, view all available items, and view all items with a stock quantity below five. Bamazon uses NodeJs, Javascript, MySql, and Inquirer.

### Instructions
To use Bamazon, clone this repository into a folder on your computer. Enter the folder using Terminal or Git Bash. And call the program using the commands "node bamazoncustomer.js" or "node bamazonManager.js" 

**ALL COMMANDS TO BE EXECUTED AFTER CALLING NODE AND THE BamazonCustomer or BamazonManager PROGRAM:**

### Customer Commands -
*node bamazoncustomer.js*
###### Customer Mode:
  *Customer mode will display the items available for purchase. After selecting the item ID and quantity, the user will be greeted with their purchase and total.* 
![](customer.gif)
  *If the amount ordered by the customer exceeds availibility their purchase will be denied, followed by a prompt for item ID*
  ![](noinventory.gif)
*spotify-this-song*

### Manager Commands - 
*node bamazonManager.js*
###### Manager Mode: 
  *Manager mode will allow viewing of items/stock* 
  ![](viewinventory.gif)
   
  *Adding of new items*
  ![](addProduct.gif)
  
  *Adding of stock to current items*
  ![](addstock.gif)
  
  *Viewing items with stock below the value of 5*
  ![](lowinventory.gif)

## OverView
The app uses node plug-ins *MySql* and *Inquirer*. *MySql* is used to connect with the MySql Database which stores and retrieves Bamazon content. *Inquirer* is used to direct user choice. 

## My Role
I provided the initial code and structure of the app. 
