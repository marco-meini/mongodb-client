import config from "./config/config.mjs";
import { MongoClienManager } from "./lib/mongo-client-manager.mjs";

(async () => {
  let cm = new MongoClienManager(config.dbconfig, config.options);
  try {
    await cm.connect();
    // insert query here
    let result = await cm.db.collection("histories").distinct("customerId");
    console.log(result.length);
    // ********
    cm.disconnect();
  } catch (error) {
    console.error(error);
    cm.disconnect();
    process.exit(1);
  }
})();
