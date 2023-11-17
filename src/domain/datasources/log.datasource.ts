import { LogEntity, LogLevelSeverety } from "../entities/log.entity";

export abstract class LogDatasource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLog(severityLevel: LogLevelSeverety): Promise<void>;
}
