const db = require('../../config/db')

module.exports = {
    create(data) {

        console.log("1- data(req.body) "+data)

        const query = `
            INSERT INTO products (
                category_id,
                user_id,
                name,
                description,
                old_price,
                price,
                quantity,
                status
            )
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8
            ) 
            RETURNING id
        `
        console.log("2- query "+query)

        const values = [
            data.category_id,
            data.user_id || 4,
            data.name,
            data.description,
            data.old_price || data.price,
            data.price,
            data.quantity,
            data.status || 1
        ]

        console.log("3- values "+values)

        return db.query(query, values)
    }
}