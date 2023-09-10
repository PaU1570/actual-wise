let api = require('@actual-app/api');

(async () => {
  await api.init({
    // Budget data will be cached locally here, in subdirectories for each file.
    dataDir: '/tmp',
    // This is the URL of your running server
    serverURL: 'http://gureserver.local:5006',
    // This is the password you use to log into the server
    password: 'pingu',
  });

  // This is the ID from Settings → Show advanced settings → Sync ID
  await api.downloadBudget('83d9d4c5-d1b3-4cbc-89bb-11eb84a94f04');

  let budget = await api.getBudgetMonth('2023-09');
  console.log(budget);
  await api.shutdown();
})();