const Category = require('../models/Category');
const Product = require('../models/Product');

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
    async post(req, res) {
        //Lógica de salvar com Async Await

        const keys = Object.keys(req.body)

        console.log("4- req.body "+keys)

        for (const key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        let results = await Product.create(req.body)
        
        console.log("5- results "+results)
        
        const productId = results.rows[0].id

        console.log("6- productId "+productId)

        results = await Category.all()
        const categories = results.rows
        
        return res.render('products/create.njk', { productId, categories })
    }
}