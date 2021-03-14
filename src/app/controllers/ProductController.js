const Category = require('../models/Category');

module.exports = {
    create(req, res) {
        //Pegar categorias com Promisses
        Category.all()
        .then(function(results) {
            const categories = results.rows;
            
            return res.render('products/create.njk', {categories})

        }).catch(function(err) {
            throw new Error(err)
        })
    },
    post(req, res) {
        //Lógica de salvar com Async Await

        /*const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        Category.create(req.body, function(categories) {
            return res.redirect(`products/${}`)
        })*/
    }
}