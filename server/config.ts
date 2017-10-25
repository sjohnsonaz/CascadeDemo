var config = {
    url: 'http://localhost:3002',
    debug: false,
    port: 3002,
    mongodb: {
        uri: 'mongodb://localhost/cascade-demo',
        options: {
        },
        session: {
            collection: 'sessions',
            resave: false,
            saveUninitialized: true,
            secret: 'This is a secret'
        }
    },
    hashAlgorithm: 'sha256',
    publicPath: '../public',
    viewsPath: '../views',
    passwordVersion: 0
};

export default config;
