export class APIError {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly code: string;

  constructor (message = 'Internal server error', statusCode = 500, code = 'internal_error') {
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}
