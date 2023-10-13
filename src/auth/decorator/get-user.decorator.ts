import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from '../../user/user.entity';

export const GetUser = createParamDecorator((data: string | undefined, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  if (data) {
    return request.user[data];
  }
  return request.user as User;
});
