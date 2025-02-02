const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 4321;


// handlebars templating
// view engine set up
app.engine("hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

app.set('view engine', 'hbs')
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('index', {home: true})
});

app.get('/about', (req,res) => {
    res.render('about', {home: true})
});

app.get('/services', (req,res) => {
    res.render('services', {home: true})
})



app.get('/contact', (req,res) => {
    res.render('contact', {home: true})
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);  
})