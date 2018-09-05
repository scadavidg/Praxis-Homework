import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join }  from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('NoteApp')
    .setDescription('API description of noteApp')
    .setVersion('1.0')
    .addTag('notes')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const SERVER_PORT = process.env.PORT || 3000;
  const CLIENT_FILES = join(__dirname, '..', '..', 'client', 'dist');

  await app.listen(SERVER_PORT);
}
bootstrap();
 