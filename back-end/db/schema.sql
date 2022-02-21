DROP DATABASE IF EXISTS products_dev;
CREATE DATABASE products_dev;

\c products_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    description TEXT,
    price NUMERIC,
    rating NUMERIC,
    is_featured BOOLEAN
);


