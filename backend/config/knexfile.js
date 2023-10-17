// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      user: 'root',
      password: '', //
      port: 3306,
      database: 'uefa_league',
      host: '127.0.0.1'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seed'
    }
  },



  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },



  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     process.env.username,
      password: process.env.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

