import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { createResponse, logError } from 'src/common/utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter<Error> {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const response = ctx.getResponse();
    const request = ctx.getRequest<Request>();
    // const status = exception.getStatus();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    logError({
      method: request.method,
      url: request.url,
      body: req.body,
      userId: req.user?.id,
      error: exception,
      stacktrace: exception?.stack,
    });

    response.status(httpStatus).json(
      createResponse({
        success: false,
        statusCode: httpStatus,
        message: exception.message,
      }),
    );
  }
}
