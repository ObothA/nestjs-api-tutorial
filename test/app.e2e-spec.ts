import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';

import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from '../src/app.module';
import { AuthDto } from '../src/auth/dto';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = (
      await moduleRef
    ).createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
    await app.listen(3333);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl(
      'http://localhost:3333',
    );
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    const dto: AuthDto = {
      email: 'oboth@oboth.com',
      password: '123',
    };

    describe('Signup', () => {
      it('Should throw if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it('Should sign up', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(dto)
          .expectStatus(201);
        // .inspect(); log the result
      });
    });

    describe('Signin', () => {
      it('Should sign in', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(dto)
          .expectStatus(200);
      });
    });
  });

  describe('User', () => {
    describe('Get Me', () => {});
    describe('Edit User', () => {});
  });

  describe('Bookmarks', () => {
    describe('Creat bookmark', () => {});

    describe('Get Bookmarks', () => {});

    describe('Get bookmark by id.', () => {});

    describe('Edit Bookmark', () => {});

    describe('Delete bookmark', () => {});
  });
});
