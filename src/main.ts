import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 9000
  const app = await NestFactory.create(AppModule);

  //
  app.enableCors({
    origin: [
      'https://gdn-hero.herokuapp.com',
      'http://localhost:3001',
      'http://localhost:2022',
    ],
  });

  const config = new DocumentBuilder()
    .setDescription('server for Gadlin project ')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);


  SwaggerModule.setup('docs', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || port, () =>
    console.log('server connected at port: ' + port),
  );
}
bootstrap();
