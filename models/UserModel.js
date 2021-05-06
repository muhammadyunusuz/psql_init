const Database = require('../modules/postgres')

class UserModel {
    async createUser (name, age, referal_id) {
        let { rows } = await Database.query(`INSERT INTO users (user_name, user_age, referal_id) VALUES ('${name}', '${age}', ${referal_id})`)
        return rows
    }

    async getUsers() {
        let { rows } = await Database.query(`SELECT * FROM users INNER JOIN referal ON referal.referal_id = users.referal_id`)
        return rows
    }
}

module.exports =  new UserModel()