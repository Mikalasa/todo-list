# Todo Web App

![Todo Screenshot](./screenshot.png)

### _**It has been deployed on an AWS EC2 instance.**_
### _**[Click here to see the live demo](https://stringhotpot.com/)**_

## Introduction
This web app was developed using vanilla JavaScript, HTML, and CSS, with PHP as the backend language. 
### It includes the following features:
- Login and registration system
- CRUD functionality
- Circular statistical display and UI animations
- Responsive UI for optimal viewing on all devices

***

# Instructions for Deploying Locally

## Setting Up the Database

1. **Install and configure XAMPP (or any other local server tool):**
    - This guide uses XAMPP. You can download and install it from [the official website](https://www.apachefriends.org/index.html).
    - Start the Apache and MySQL services through the XAMPP control panel.

2. **Create the database:**
    - Open phpMyAdmin by navigating to `http://localhost/phpmyadmin` in your web browser.
    - Create a new MySQL database named `todo`.
    - Import the `todo.sql` file into the `todo` database.

## Setting Up the Project

1. **Copy project files:**
    - Copy all project files and folders from the root directory into the `htdocs` folder of your XAMPP installation (or the corresponding folder if you are using a different local server tool).

2. **Configure database connection:**
    - Open the `index.php` file in a text editor.
    - Find and replace the following code with your database information:
    ```php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $db   = 'todo';
    ```

3. **Run the application:**
    - Open your web browser and navigate to `http://localhost/index.php`.

## Troubleshooting

- **Service issues:** Ensure the Apache and MySQL services are running in XAMPP (or the respective services in your local server tool).
- **Database errors:** Verify the database name, username, and password in `index.php` are correct.
