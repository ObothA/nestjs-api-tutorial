import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// auth becomes the global prefix route for this controller, /auth/signuo
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
