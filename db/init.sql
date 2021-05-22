CREATE DATABASE IF NOT EXISTS base;

USE base;

CREATE TABLE ideas (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(100),
    content VARCHAR(255),
    fistname VARCHAR(40),
    lastname VARCHAR(40),
    dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);