
-- Creates the "burgers_db" database --
CREATE DATABASE IF NOT EXISTS burgers_db;

-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Create a burgers table with 3 columns id,burger_name,devoured --

CREATE TABLE IF NOT EXISTS burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);