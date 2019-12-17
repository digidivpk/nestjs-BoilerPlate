import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { getFromContainer, MetadataStorage } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  const metadatas = (getFromContainer(MetadataStorage) as any)
    .validationMetadatas;
  const schemas = validationMetadatasToSchemas(metadatas);

  console.log('TCL: bootstrap -> MetadataStorage', metadatas);
  document.components.schemas = schemas;

  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
