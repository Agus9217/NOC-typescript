import fs from "fs";
import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogLevelSeverety } from "../../domain/entities/log.entity";

export class FileSystemDatasource implements LogDatasource {
  private readonly logPath = "logs/";
  private readonly allLogsPath = `${this.logPath}logs-all.log`;
  private readonly mediumLogsPath = `${this.logPath}logs-medium.log`;
  private readonly highLogsPath = `${this.logPath}logs-high.log`;

  constructor() {
    this.createLogsFile();
  }

  private createLogsFile = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogsPath].forEach(
      (path) => {
        if (fs.existsSync(path)) return;
        fs.writeFileSync(path, "");
      }
    );
  };

  async saveLog(newLog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;

    fs.appendFileSync(this.allLogsPath, logAsJson);
    if (newLog.level === LogLevelSeverety.low) return;
    if (newLog.level === LogLevelSeverety.medium) {
      fs.appendFileSync(this.mediumLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.highLogsPath, logAsJson);
    }
  }
  getLog(severityLevel: LogLevelSeverety): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
