const db           = require('../config/database');
const Ink     = {};

Ink.findAll   = () => {
  return db.manyOrNone(`
    SELECT * FROM wiki ORDER BY title DESC, likes DESC`
    );
};

Ink.findById = (id) => {
  return db.one(`
    SELECT *
    FROM wiki
    WHERE id = $1`,
    [id]);
}

//title \\ category \\ article \\ --> don't
//time or likes because those are set separately

//*****
//
Ink.update = (ink, id) => {
  return db.none(`
    UPDATE wiki
      SET
        title     = $1,
        category  = $2,
        article   = $3
    WHERE id = $4`,
    [ink.title, ink.category, ink.article, id]
    );
}


Ink.save = (ink, time, markdown) => {
  return db.none(`
    INSERT INTO wiki
    (title, category, article, stamp)
    VALUES ($1, $2, $3, $4)`,
    [ink.title, ink.category, markdown, time]
    );
}

Ink.like = (id) => {
  return db.none(`
    UPDATE wiki
    SET likes = likes+1
    WHERE id = $1`, [id]
    );
}


Ink.destroy = (id) => {
  return db.none(`DELETE FROM wiki WHERE id = $1`, [id]);
}

module.exports     = Ink;
