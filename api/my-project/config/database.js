module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'my_first_ecommerce'),
      user: env('DATABASE_USERNAME', 'demirsami@hotmail.fr'),
      password: env('DATABASE_PASSWORD', 'M159ysql#$9'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
