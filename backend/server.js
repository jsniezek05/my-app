const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const db = require('./config/database');


db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))


const app = express();

app.use(cors());
app.use(bodyParser());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', (req,res) => res.send('STUFF'));


app.use('/article', require('./routes/articles'));


const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log('Server started on port: ' + PORT));
