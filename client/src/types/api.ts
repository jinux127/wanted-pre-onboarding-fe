export interface IError {
  response: {
    data: {
      statusCode: number;
      message: string;
      error: string;
    };
  };
}
