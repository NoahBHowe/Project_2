const express                = require('express');
const app                    = express();

const logger                 = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

const methodOverride        = require('method-override');
app.use(methodOverride('_method'));

const path                   = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser             = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const resources              = require('./resources');
app.use(resources);

const PORT                   = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Today\'s PORT will be', PORT);
});
