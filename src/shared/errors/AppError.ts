class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 4000) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
