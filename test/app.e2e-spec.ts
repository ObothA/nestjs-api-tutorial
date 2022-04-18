import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../src/prisma/prisma.service';

import { AppModule } from '../src/app.module';

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

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('Signup', () => {
      it.todo('Should sign up');
    });

    describe('Signin', () => {
      it.todo('Should sign in');
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
