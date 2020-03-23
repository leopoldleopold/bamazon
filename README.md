# **Bamazon *(Inventory Management and Purchasing Software)* NODE APP** 

### What Bamazon Does
  Bamazon allows a customer to make a purchase, while automatically updating the quantity in storage database if a sufficient amount remains, or declines the purchase if the requested purchase is unavailable. 
  Bamazon also includes a Manager Mode that allows personnel to add additional stock to an item, add a new object to their inventory, view all available items, and view all items with a stock quantity below five. Bamazon uses NodeJs, Javascript, MySql, and Inquirer.

### Instructions
To use Bamazon, clone this repository into a folder on your computer. Enter the folder using Terminal or Git Bash. And call the program using the commands "node bamazoncustomer.js" or "node bamazonManager.js" 

#### Commands
**ALL COMMANDS TO BE EXECUTED AFTER CALLING NODE AND THE BamazonCustomer PROGRAM:**

*node bamazoncustomer.js*
###### Song Search:
*spotify-this-song*
###### Movie Search:
*movie-this*
###### Concert Search:
*concert-this*
###### Random Selection From User History **(Will only work if there is a User History):**
*random-history*
###### Display User History **(Will only work if there is a User History):**
*display-history*

#### Using Commands - 
#### Spotify Song Search:
To search for a song, type the following into the command line -  

  *node liri.js spotify-this-song usersong*
  ![](songsearch.gif)

#### Movie Search:
To search for a movie, type the following into the command line -

  *node liri.js movie-this usermovie*
  ![](moviesearch.gif)
  
#### Concert Search:
To search for a concert, type the following into the command line - 

  *node liri.js concert-this userband*
  ![](concertsearch.gif)
 
#### Random Selection from User History:
To randomly select a previous search from user history type the following into the command line -

  *node liri.js random-history*
  ![](randomhistory.gif)
 
#### Display all of User History
To display the User History in it's entirety, type the following into the command line - 

  *node liri.js display-history*
  ![](displayhistory.gif)


## OverView
The app uses node plug-ins *MySql* and *Inquirer*. *MySql* is used to connect with the MySql Database which stores and retrieves Bamazon content. *Inquirer* is used to direct user choice. 

## My Role
I provided the initial code and structure of the app. 
