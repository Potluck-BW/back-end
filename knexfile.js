module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/potluck.db3', 
        },
    },
    migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
};