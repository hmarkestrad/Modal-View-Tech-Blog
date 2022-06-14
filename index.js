const express = require('express');
const app = express();
const port = 5000;
const handlebars = require('express-handlebars');

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
    }));
app.use(express.static('public'))
app.get('/', (req, res) => {

//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port: http://localhost:${port}`));
