export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly success: false;
  public readonly errors: Record<string, string[]> | undefined;
  public readonly meta: Record<string, unknown> | undefined;

  constructor(
    statusCode: number,
    message = "Something went wrong",
    errors?: Record<string, string[]>,
    meta?: Record<string, unknown>
  ) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;
    this.errors = errors;
    this.meta = meta;

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}
