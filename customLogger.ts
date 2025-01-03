export enum LogType {
    INFO = "INFO",
    ERROR = "ERROR"
}

export const logWithDetails = (type: LogType, message: string, details?: object) => {
    console.log(`[${type}] ${message}`, details);
}

