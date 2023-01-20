const tmi = require('tmi.js')

const options = {
    identity: {
        username: '',
        password: ''
    }
}


const client =  new tmi.client(options)