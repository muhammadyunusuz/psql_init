-- CREATE DATABASE sample_database;


CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_name VARCHAR(32) NOT NULL,
    user_age INT NOT NULL
);