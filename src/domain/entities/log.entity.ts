export enum LogLevelSeverety {
  low = "low",
  medium = "medium",
  high = "high",
}

export class LogEntity {
  public level: LogLevelSeverety;
  public message: string;
  public createdAt: Date;

  constructor(level: LogLevelSeverety, message: string) {
    this.level = level;
    this.message = message;
    this.createdAt = new Date();
  }
}
