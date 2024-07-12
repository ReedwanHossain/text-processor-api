import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TextAnalyzeModule } from './../src/text-analyze/text-analyze.module';
import * as path from 'path';

describe('TextAnalyzeController (e2e) test suit:', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: path.resolve(
            __dirname,
            `../.env.${process.env.NODE_ENV || 'dev'}`,
          ),
        }),
        MongooseModule.forRoot(process.env.MONGO_URI_TEST),
        AppModule,
        TextAnalyzeModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/text (POST)', async () => {
    const response = await request(app.getHttpServer())
      .post('/text')
      .send({ content: 'The quick brown fox jumps over the lazy dog' })
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    expect(response.body.content).toBe(
      'The quick brown fox jumps over the lazy dog',
    );
  });

  it('/text/:id (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/text')
      .send({ content: 'The quick brown fox jumps over the lazy dog' })
      .expect(201);

    const textId = createResponse.body._id;

    const response = await request(app.getHttpServer())
      .get(`/text/${textId}`)
      .expect(200);

    expect(response.body).toHaveProperty('_id');
    expect(response.body._id).toBe(textId);
  });

  it('/text/:id/words (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/text')
      .send({ content: 'The quick brown fox jumps over the lazy dog' })
      .expect(201);

    const textId = createResponse.body._id;

    const response = await request(app.getHttpServer()).get(
      `/text/${textId}/words`,
    );

    expect(response.body.count).toBe(9);
  });

  it('/text/:id/characters (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/text')
      .send({ content: 'The quick brown fox jumps over the lazy dog' })
      .expect(201);

    const textId = createResponse.body._id;

    const response = await request(app.getHttpServer())
      .get(`/text/${textId}/characters`)
      .expect(200);

    expect(response.body.count).toBe(35);
  });

  it('/text/:id/sentences (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/text')
      .send({
        content:
          'The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.',
      })
      .expect(201);

    const textId = createResponse.body._id;

    const response = await request(app.getHttpServer())
      .get(`/text/${textId}/sentences`)
      .expect(200);

    expect(response.body.count).toBe(2);
  });

  it('/text/:id/paragraphs (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/text')
      .send({
        content:
          'The quick brown fox jumps over the lazy dog.\n\nThe lazy dog slept in the sun.',
      })
      .expect(201);

    const textId = createResponse.body._id;

    const response = await request(app.getHttpServer())
      .get(`/text/${textId}/paragraphs`)
      .expect(200);

    expect(response.body.count).toBe(2);
  });

  it('/text/:id/longest-word (GET)', async () => {
    const createResponse = await request(app.getHttpServer())
      .post('/text')
      .send({ content: 'The quick brown fox jumps over the lazy dog' })
      .expect(201);

    const textId = createResponse.body._id;

    const response = await request(app.getHttpServer())
      .get(`/text/${textId}/longest-word`)
      .expect(200);

    expect(response.body.longestWord).toBe('quick');
  });
});
