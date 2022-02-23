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

-- DROP TABLE IF EXISTS reviews;

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     reviewer TEXT,
--     title TEXT,
--     content TEXT,
--     rating NUMERIC, 
--     CHECK (rating >= 0 AND rating <=5),
--     product_id INTEGER REFERENCES products (id)
--     ON DELETE CASCADE
-- );