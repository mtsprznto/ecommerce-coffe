export default ({ env }) => {
  const port = env.int('PORT', 1337); // Predeterminado: 1337
  console.log(`Servidor iniciado en el puerto: ${port}`);
  return {
    host: env('HOST', '0.0.0.0'),
    port,
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};
