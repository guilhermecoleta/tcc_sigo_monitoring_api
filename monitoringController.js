var Chance = require('chance');
var randomItem = require('random-item');
const { products }= require('./products');
const { sellers } = require('./sellers');
const { suppliers } = require('./suppliers');

var monitoring = function (req, res, next) {
    var list = [];

    let chance = new Chance();

    sellers.forEach(function(sellerName){
        let numberSells = chance.integer({ min: 1, max: 5 });

        for (let index = 0; index <= numberSells; index ++){
            let day = chance.integer({ min: 1, max: 14 });

            let data = {
                seller: sellerName,
                dat: chance.date({year: 2021, month: 3, day: day}),
                value_total: 0,
                products: []
            };

            let listProducts = randomItem.multiple(products, chance.integer({ min: 1, max: 10 }));

            listProducts.forEach(function(productName) {
                var product = {
                    name: productName,
                    supplier: randomItem(suppliers),
                    value: chance.floating({ min: 0, max: 100, fixed: 2 }),
                    quantity: chance.integer({ min: 1, max: 100 })
                }
                data.products.push(product);
            })

            
            data.value_total = data.products.reduce(function(acc, product) {
                return acc + (product.value * product.quantity);
            }, 0);

            list.push(data);
        }
    });

    res.send(list);
    next();
}

module.exports = { monitoring };