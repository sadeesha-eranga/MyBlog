DROP DATABASE IF EXISTS myblog;

CREATE DATABASE myblog;

USE myblog;

CREATE TABLE user (
    id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    email VARCHAR(256) NOT NULL,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL,
    imagePath VARCHAR(1024) DEFAULT '5aaa08186a4254.57974316.jpg',
    CONSTRAINT PRIMARY KEY (id)
);

INSERT INTO user (id, name, email, username, password, imagePath) VALUES (1, 'Sadeesha Eranga Cooray', 'msadeeshaeranga@gmail.com', 'admin', '123456', '5aaa08186a4254.57974316.jpg');

CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(256) NOT NULL,
    description VARCHAR(256) NOT NULL,
    date DATE NOT NULL,
    content LONGBLOB NOT NULL,
    CONSTRAINT PRIMARY KEY (id)
);