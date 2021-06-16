const express = require('express');
const exphbs = require('express-handlebars');
// Require the 'express-session' module
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(session({
	secret: 'alsdjkflaksjdf',
	resave: false,
	saveUninitialized: false
}));

app.listen(PORT, () => {
	console.log('App listening on PORT ' + PORT);
});
