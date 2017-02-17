const db           = require('../config/database');
const Gif     = {};

Gif.findAll   = () => {
  return db.manyOrNone(`SELECT * FROM gifs ORDER BY likes DESC`);
};

Gif.findById = (id) => {
  return db.one(`
    SELECT * FROM gifs WHERE id = $1`, [id]);
}


Gif.update = (gif, id) => {
  return db.none(`
    UPDATE gifs
    SET
      name = $1,
      url  = $2
    WHERE id = $3`,
    [gif.name, gif.url, id]);
}


Gif.save = (gif) => {
  return db.none(`
    INSERT INTO gifs
    (name, url)
    VALUES ($1, $2)`,
    [gif.name, gif.url]
    );
}

Gif.like = (id) => {
  return db.none(`
    UPDATE gifs
    SET likes = likes+1
    WHERE id = $1`, [id]);
}



Gif.destroy = (id) => {
  return db.none(`DELETE FROM gifs WHERE id = $1`, [id]);
}

module.exports     = Gif;
