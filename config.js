var config = {
    uber: {
        client_id: 'VuKGvYqVBlVxu7_y-WGdq-fG21ZVWcHS',
        client_secret: 'c7GdDwpVdHMK4toUm_TOQndFOmXzxqNRvuciVaav',
        server_token: 'GHhsesJuxGybklq14IACoT-9n-W-pSU7rw_xk5f0',
        name: 'Pley-Rebu',
        language: 'en_US', // optional, defaults to en_US
        sandbox: true // optional, defaults to false
    },
    yelp: {
        client_id: 'ZNFAtR-_p5Q4T7lDI4lX7Q',
        client_secret: 'ZwlFizn1ClDLnEl7ijKJ00h8XBmLlOPKH4cVLRY8zznNvESNRuovIqQ5iPm3ZJJi'
    }

};

config.mongoUri = 'mongodb://localhost:27017/pr';
//max session time out for remembered users

config.cookieMaxAge = 30 * 24 * 3600 * 2000;

module.exports = config;