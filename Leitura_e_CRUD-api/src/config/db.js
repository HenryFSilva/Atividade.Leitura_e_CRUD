const mysql2 = require ("mysql2/promise");

async function conectarBancoDeDados() {

    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }
    const connection = await mysql2.createConnection({
        host: 'localhost',
        port: '3306',
        database: 'cliente_api',
        user: 'root',
        password: '1234',
        multipleStatements:true
    });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = conectarBancoDeDados;