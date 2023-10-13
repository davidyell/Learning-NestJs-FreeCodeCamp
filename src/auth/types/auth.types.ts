import { UUID } from 'crypto';

export interface Jwt {
  sub: UUID;
  email: string;
  iat: number;
  exp: number;
}
