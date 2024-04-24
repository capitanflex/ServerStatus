CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255)
);
CREATE TABLE gameStatus (
    id SERIAL PRIMARY KEY,
    gameID INTEGER,
    ping VARCHAR(255),
    errors VARCHAR(255),
    FOREIGN KEY (gameID) REFERENCES game (id)
);
