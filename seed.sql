CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  user_id INTEGER REFERENCES users(id)
)

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment Text,
  post_id INTEGER REFERENCES post(id)
)

-- add column to tables
ALTER TABLE posts
ADD category_id INTEGER REFERENCES categories(id)

ALTER TABLE comments
ADD CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

-- single item delete
DELETE FROM posts
WHERE id = 1;

-- Multiple items delete
DELETE FROM posts
WHERE id BETWEEN 4 AND 13;

SELECT * FROM posts WHERE id = params.id

SELECT * FROM posts
  ORDER BY title ASC

