import { CronService } from "../cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";

export class Server {
  static start() {
    CronService.createJob("*/5 * * * * *", () => {
      new CheckService(
        () => console.log('Starting'),
        (error) => console.log(error)
      ).execute("http://localhost:3000/posts");
    });
  }
}
