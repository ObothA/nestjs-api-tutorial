import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('App e2e', () => {
  beforeAll(async () => {
    const moduleRef = Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it.todo('should pass');
});
