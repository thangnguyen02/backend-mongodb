class HandleError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;

    // capturing the stack trace keeps the reference to your error class
    Error.captureStackTrace(this, this.constructor);
  }
}

export default HandleError;
