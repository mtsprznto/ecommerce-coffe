module.exports = {
  'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: "napi_4hl9tlu7dtuiidc7e0h4nyrv96ppxoor294ayyuuzvjpy0gk69wzs766e4z2sn5w", // get it from here: https://console.neon.tech/app/settings/api-keys
      neonProjectName: "ecommerce-coffe", // the neon project under wich your DB runs
      neonRole: "neondb_owner", // create it manually under roles for your project first
      gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
    }
  },
}