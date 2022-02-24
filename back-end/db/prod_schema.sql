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