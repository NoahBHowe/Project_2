DROP TABLE IF EXISTS wiki;
CREATE TABLE wiki (
  id  BIGSERIAL PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  category VARCHAR (255) NOT NULL,
  article  TEXT NOT NULL,
  stamp  TEXT NOT NULL,
  likes INTEGER DEFAULT 0);



