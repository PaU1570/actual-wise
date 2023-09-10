let api = require('@actual-app/api');

(async () => {
  await api.init({
    // Budget data will be cached locally here, in subdirectories for each file.
    dataDir: '/tmp',
    // This is the URL of your running server
    serverURL: process.env.SERVER_URL,
    // This is the password you use to log into the server
    password: process.env.PASSWORD,
  });

  // This is the ID from Settings → Show advanced settings → Sync ID
  await api.downloadBudget(process.env.SYNC_ID);

  let budget = await api.getBudgetMonth('2023-09');
  console.log(budget);
  await api.shutdown();
})();