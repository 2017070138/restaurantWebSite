const {Client} = require('../models/database');

async function register(name, email, password) {
    try {
        return await Client.create({name, email, password});

    }catch (e) {
        throw e;
    }

}

module.exports = {register};