import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as morgan from 'morgan';

@Injectable()
export class MorganInterceptor implements NestInterceptor {
    constructor(private readonly logger: Logger) { }

    intercept(
        context: ExecutionContext,
        next: CallHandler,
    ): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const res = context.switchToHttp().getResponse();

        // Sử dụng middleware Morgan
        morgan('combined', {
            stream: {
                write: (message: string) => this.logger.log(message.trim()),
            },
        })(req, res, () => { });

        return next.handle().pipe(
            tap(() => {
                // Có thể log thêm thông tin sau khi request được xử lý xong nếu cần
            }),
        );
    }
}