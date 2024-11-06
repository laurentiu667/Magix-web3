CREATE TABLE parties_magix (
    id SERIAL PRIMARY KEY,
    joueur__nom VARCHAR(50) NOT NULL,
    ennemi__nom VARCHAR(50) NOT NULL,
    date_partie TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gagnant VARCHAR(50) NOT NULL
);