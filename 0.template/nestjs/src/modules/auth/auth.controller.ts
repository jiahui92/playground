import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RolesGuard } from 'src/guards/roles.guard';
import { Role } from 'src/common/const';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @RolesGuard([Role.GUEST])
  async signIn(@Body() signInDto: Record<string, any>) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('signUp')
  @RolesGuard([Role.GUEST])
  async signUp(@Body() signInDto: Record<string, any>) {
    return await this.authService.signUp(
      signInDto.email,
      signInDto.password,
      signInDto.username,
    );
  }
}
