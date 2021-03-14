var Chance = require('chance');
var randomItem = require('random-item');
var tecidos = require('./tecidos');
module.exports = {

    monitoring: (req, res, next) => {
        var chance = new Chance();

        var size = 10;

        var list = [];
        
        for(var i = 0; i <= size; i++){
            var data = {
                seller: chance.name(),
                dat: chance.date({year: 2021, month: 3}),
                value_total: 0,
                products: []
            };

            var listTecidos = randomItem.multiple(tecidos.tecidos, chance.integer({ min: 1, max: 23 }));
            
            listTecidos.forEach(function(tecido) {
                var product = {
                    name: tecido,
                    supplier: chance.name(),
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
       
        res.send(list);
        next();
    }

}