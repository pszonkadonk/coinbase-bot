const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();
const webSocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);
const envConfig = require('dotenv').config();


const API_KEY = process.env.API_KEY 
const API_SECRET = process.env.API_SECRET
const API_PASSPHRASE = process.env.API_PASSPHRASE 
const API_URI = process.env.API_URI

const SANDBOX_API_KEY = process.env.SANDBOX_API_KEY
const SANDBOX_API_SECRET = process.env.SANDBOX_API_SECRET
const SANDBOX_PASSPHRASE = process.env.SANDBOX_PASSPHRASE
const SANDBOX_URI = process.env.SANDBOX_URI


const ETH_ACCOUNT = process.env.ETH_ACCOUNT
const SANDBOX_BTC_ACCOUNT = process.env.SANDBOX_BTC_ACCOUNT
let TIMESTAMP = new Date().getTime()/1000;


const coinbaseCallback = ((err, req, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});

let sellParams = {
    'price': '3480',
    'size': '1',
    'product_id': 'BTC-USD'
};

console.log(API_KEY)

// let authenticatedClient = new Gdax.AuthenticatedClient(SANDBOX_API_KEY, SANDBOX_API_SECRET, SANDBOX_PASSPHRASE, SANDBOX_URI);

// authenticatedClient.getAccount(SANDBOX_BTC_ACCOUNT, coinbaseCallback);
// authenticatedClient.getAccountHistory(SANDBOX_BTC_ACCOUNT, coinbaseCallback);

// authenticatedClient.sell(sellParams, coinbaseCallback);

// authenticatedClient.getAccounts(coinbaseCallback);



// webSocket.on('message', (data) => {
//     console.log(data);
// })


