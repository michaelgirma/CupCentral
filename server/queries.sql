CREATE TABLE size (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    size TEXT NOT NULL,
    image TEXT NOT NULL
);

INSERT INTO size (title, size, image)
VALUES ('8oz', 'Small', 'https://i.pinimg.com/originals/14/6c/67/146c673da71faf72e037a4af7ac79b84.png'),
       ('12oz', 'Medium', 'https://i.pinimg.com/originals/e4/df/89/e4df893d7a603ecbb05a1d11a5d59ae8.png'),
       ('16oz', 'Large', 'https://i.pinimg.com/originals/a9/e3/0e/a9e30e3fed8449a7874ea498ec7d0b93.png');

CREATE TABLE color (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    color TEXT NOT NULL,
);

INSERT INTO color (title, color)
VALUES ('Black','#000000'),
       ('Green','#2F6F3E'),
       ('Blue','#012169'),
       ('Yellow','#E3E829'),
       ('Red','#C70000');


CREATE TABLE lid (
    id SERIAL PRIMARY KEY,
    size_id INT REFERENCES size(id),
    color_id INT REFERENCES color(id),
    image TEXT NOT NULL
);

CREATE TABLE cup (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    lid_id INT REFERENCES lid(id),
    color_id INT REFERENCES color(id),
    size_id INT REFERENCES size(id),
    image TEXT NOT NULL
);

CREATE TABLE cup (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    lid TEXT[] NOT NULL,
    color_id INT REFERENCES color(id),
    size_id INT REFERENCES size(id),
    image TEXT NOT NULL
);

UPDATE size SET image = 'https://cdn.iconscout.com/icon/free/png-512/free-s-character-alphabet-letter-32865.png?f=webp&w=256' WHERE id = 1;
    
UPDATE size SET image = 'https://cdn.iconscout.com/icon/free/png-512/free-m-character-alphabet-letter-32858.png?f=webp&w=256' WHERE id = 2;
    
UPDATE size SET image = 'https://cdn.iconscout.com/icon/free/png-512/free-l-character-alphabet-letter-32862.png?f=webp&w=256' WHERE id = 3;