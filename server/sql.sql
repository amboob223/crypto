CREATE DATABASE invest;
CREATE TABLE crypto(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    price INTEGER,
    amount INTEGER,
    description VARCHAR(255),
    sector VARCHAR(255)
);

