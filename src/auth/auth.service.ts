import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    // save new user in the db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    // return the saved user
    return user;
  }

  signin() {
    return { msg: 'I have signed in' };
  }
}
