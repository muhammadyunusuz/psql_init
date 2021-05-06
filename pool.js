const ReferalModel = require('./models/ReferalModel')




async function main () {
    let response =  await ReferalModel.createReferal("Dosti orqali")
    console.log(response);
}

main()