const CronJob = require("node-cron")

exports.init = () => {
  const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
    console.log("kör backend arbete");
  });
  scheduledJobFunction.start();
}

