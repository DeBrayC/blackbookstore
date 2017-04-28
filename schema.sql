DROP DATABASE IF EXISTS blackbookstore;
CREATE DATABASE blackbookstore;

\c blackbookstore

DROP TABLE IF EXISTS books;
CREATE TABLE books (
  ID SERIAL PRIMARY KEY,
  imageUrl VARCHAR,
  title VARCHAR,
  author VARCHAR,
  genre VARCHAR,
  description VARCHAR(1024)
);

INSERT INTO books (imageUrl, title, author, genre, description)
VALUES ('https://images-na.ssl-images-amazon.com/images/I/51zHrZ2JEvL._SX349_BO1,204,203,200_.jpg', 'Monster', 'Walter Dean Myers', 'fiction', 'This New York Times bestselling novel from acclaimed author Walter Dean Myers tells the story of Steve Harmon, a teenage boy in juvenile detention and on trial. Presented as a screenplay of Steve''s own imagination, and peppered with journal entries, the book shows how one single decision can change our whole lives.

Monster is a multi-award-winning, provocative coming-of-age story that was the first-ever Michael L. Printz Award recipient, an ALA Best Book, a Coretta Scott King Honor selection, and a National Book Award finalist. In 2016, Monster was turned into a film starring Jennifer Hudson, Kelvin Harrison, Jr., and A$AP Rocky.

The late Walter Dean Myers was a National Ambassador for Young People''s Literature, who was known for his commitment to realistically depicting kids from his hometown of Harlem.');

INSERT INTO books (imageUrl, title, author, genre, description)
VALUES ('https://images-na.ssl-images-amazon.com/images/I/81xvKYGSiiL.jpg', 'Chronicles of Negro Protest', 'Bradford Chambers', 'non-fiction', 'In trying to understand how racism became so pervassive in our culture, we have traditionally assented to an historical interpretation which allowed us to see our racial attitudes as developing gradually in repsonse to pragmatic, econmic interests. this book destorys that fiction and robs us of whatever comfort it made possible. The documents in Chronical of Negro Protest correctit an historical error. They make it clear that the enslavement of the African was not incidental to his helplessness, but from the fiery first it invlved a hatred of his blackness which was signified by an anxious willingness to believe in a mythical curse by a drunken old man what the black man was handed over by God for the white man''s exploitation.');
