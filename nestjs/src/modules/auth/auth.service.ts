import { PrismaService } from '../../prisma.service';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/common/const';
import { createResponse } from 'src/common/utils';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    if (!email || !password) {
      throw new BadRequestException('Please input your email or password');
    }

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = {
      userId: user.id,
      roles: user.roles as Role[],
    };
    return createResponse({
      // TODO refresh_token
      // TODO logout
      access_token: await this.jwtService.signAsync(payload),
    });
  }

  async signUp(email: string, password: string, username: string) {
    // TODO 注册用户重复检查
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.prisma.user.create({
      data: {
        id: uuidv4(),
        email,
        password: hashedPassword,
        username,
        roles: [Role.USER],
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...data } = user;
    return createResponse(data);
  }
}

export interface JwtPayload {
  userId: string;
  roles: Role[];
}
