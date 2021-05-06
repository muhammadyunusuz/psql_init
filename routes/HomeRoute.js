const router = require('express').Router()
const Users = require('../models/UserModel')
const Referals = require('../models/ReferalModel')

router.get('/', async (req, res) => {
    let users = await Users.getUsers()
    let referals = await Referals.getReferals()

    res.render('index', {
        users,
        referals
    })
})

router.post('/', async (req, res) => {
    await Users.createUser(req.body.name, req.body.age, req.body.referal)
    res.redirect('/')
})


module.exports = {
    path: "/",
    router
}