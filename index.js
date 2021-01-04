//Exprees function, top level.
var express = require('express')

var mySqlDAO = require('./mySqlDAO')
var mongoDAO = require('./mongoDAO')

var app = express();

app.set('view engine', 'ejs')

//Main Page
app.get('/', (req, res) => {
    res.render('showIndex')    
})

//List Countries
app.get('/Countries', (req, res) => {
    mySqlDAO.getCountries()
        .then((result) => {
            res.render('showCountries', {countries:result})
        })
        .catch((error) => {
            res.send(error)
        })
})

//List Cites
app.get('/Cities', (req, res) => {
    mySqlDAO.getCities()
        .then((result) => {
            res.render('showCities', {cities:result})
        })
        .catch((error) => {
            res.send(error)
        })
})

//List HeadsOfState
app.get('/HeadsOfState', (req, res) => {
    mongoDAO.getHeadsOfState()
    .then((documents) => {
        res.send(documents)
    })
    .catch((error) => {
        res.send(error)
    })
})

//add country
app.get('/addCountry', (req, res) => {
    mySqlDAO.getCountries()
        .then((result) => {
            res.render('showCountries', {countries:result})
        })
        .catch((error) => {
            res.send(error)
        })
})

app.listen(3000, () => {
    console.log("Report from port 3000")
})


