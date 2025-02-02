const express = require('express');
const app = express();
const exhbs = require('express-handlebars');
const PORT = process.env.PORT || 4321;

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// handlebars templating
// view engine set up
app.set('view engine', 'handlebars');
app.engine('handlebars', exhbs({defaultLayout: 'main'}));



// app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})