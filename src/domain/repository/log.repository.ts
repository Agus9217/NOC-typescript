import { LogEntity, LogLevelSeverety } from "../entities/log.entity";

export abstract class LogRepository {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLog(severityLevel: LogLevelSeverety): Promise<void>;
}
