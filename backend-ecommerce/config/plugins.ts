module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "napi_qyshm11gxwi0yxfv1io1av36w546jbktpvm8ufnw0t801bpllhu12zmzd6ub5r9h", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "ecommerce-coffe", // the neon project under wich your DB runs
        neonRole: "neondb_owner", // create it manually under roles for your project first
        gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },
  }