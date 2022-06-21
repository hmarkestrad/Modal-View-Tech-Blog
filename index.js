const express = require('express');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
    }));
app.use(express.static('public'))
app.get('/', (req, res) => {

res.render('main', {layout : 'index'}); });

app.listen(process.env.PORT || 3001, '0.0.0.0', () => console.log(`App listening to port: http://localhost:${port}`));
