import { PrismaService } from '../../prisma.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Role } from 'src/common/const';
import { createResponse } from 'src/common/utils';
import { JwtPayload } from 'src/middlewares/req.middleware';
import { validate } from 'src/validators';
import { userValidator } from 'src/validators/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    validate('User', { email, password }, (validator) => {
      return validator.partial().required({
        email: true,
        password: true,
      });
    });

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = {
      id: user.id,
      roles: user.roles as Role[],
    };
    return createResponse({
      // TODO refresh_token
      // TODO logout
      data: {
        access_token: await this.jwtService.signAsync(payload),
      },
      success: true,
    });
  }

  async signUp(email: string, password: string, username: string) {
    // 检测用户是否存在
    const existingUser = await this.prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (existingUser) {
      if (existingUser.email === email) {
        throw new BadRequestException('Email already exists');
      }
      throw new BadRequestException('Username already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // TODO 这里有点怪，目前为了兼容gql并复用代码，暂时这样写
    const data = userValidator.initCreateData({
      email,
      password: hashedPassword,
      username,
    });
    const user = await this.prisma.user.create({ data });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...res } = user;
    return createResponse({
      data: res,
      success: true,
    });
  }
}
