module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "172.17.0.2"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "iotce_web_api_dev"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgres"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
