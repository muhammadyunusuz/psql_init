const UserModel = require('./models/UserModel')

let users = new UserModel()


async function main () {
    let response =  await users.getUsers()
    console.log(response);
}

main()