import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SLOW_REQUEST_THRESHOLD } from 'src/common/const';
import { logWarn } from 'src/common/utils';

// 此拦截器无法拦截gql，gql的拦截在"src/graphql/plugins/LoggerPlugin.ts"中
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now(); // 请求开始时间

    return next.handle().pipe(
      tap(() => {
        const executionTime = Date.now() - now; // 计算执行时间
        const request = context.switchToHttp().getRequest();

        // 如果执行时间超过阈值，记录日志
        if (executionTime > SLOW_REQUEST_THRESHOLD) {
          const msg = `Slow API: ${executionTime}ms`;
          logWarn({
            method: request.method,
            url: request.url,
            body: request.body,
            userId: request.user?.id,
            msg,
          });
        }
      }),
    );
  }
}
