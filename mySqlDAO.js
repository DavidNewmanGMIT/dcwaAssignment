var mysql = require('promise-mysql')

//pool
var pool

mysql.createPool({
    connectionLimit : 3,
    host            : 'localhost',
    user            : 'root',
    password        : 'bungiez7',
    database        : 'geography'
})
.then((result) => {
    pool = result
})
.catch((error) => {
    console.log(error)
});

var getCities = function() {
    return new Promise((resolve, reject) => {
    pool.query('select * from city')
        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

var getCountries = function() {
    return new Promise((resolve, reject) => {
        pool.query('select * from country')
        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

/*
var addCountries = function() {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO country')
        .then((result) => {
            resolve(result)
        })
        .catch((error) => {
            reject(error)
        })
    })
}
*/


module.exports = { getCities, getCountries,addCountries }