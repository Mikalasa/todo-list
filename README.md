# Todo Web App

![todo screenshot](./screenshot.png)

### _**It has been deployed on AWS EC2 instance.**_
### _**[Click here to see the live demo](https://stringhotpot.com/)**_

***

# Instructions for Deploying Locally
## Set up database
- use a tool such as XAMPP to set up a local server
- start the Apache and MySql services
- create a MySql database called 'todo'
- import the 'todo.sql' file into the database

## Set up the project
- use a tool such as XAMPP
- copy the all project files and folders (of root folder) into the htdocs (if using XAMPP) folder
- find the following code in ```index.php``` and replace the values with your database information
```PHP
$host = 'localhost';
$user = 'root';
$password = '';
$db   = 'todo';
```
- open ```localhost/index.php``` in browser
