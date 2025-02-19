import { NestFactory, Reflector } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
// import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptors';
import { envs } from './config/envs';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Main');
  // const httpAdapter = app.get(HttpAdapterHost);

  app.setGlobalPrefix('api');

  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter, logger));
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve todo lo que no está incluido en los DTOs.
      forbidNonWhitelisted: true, // Retorna Bad Request si hay propiedades en el objeto que no son requeridas.
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Food-Api')
    .setDescription('Documentacion para consumir los endpoint de Foodapi')
    .setVersion(envs.npm_package_version || '1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, documentFactory);

  // Asumiendo que estás usando Passport para la autenticación
  // app.use((req, res, next) => {
  //   req.user = req.user || { id: 'anonymous' };
  //   next();
  // });

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  await app.listen(envs.port, () => {
    Logger.log(`🚀 Server running on port: ${envs.port}`, 'MAIN');
  });
}
bootstrap();
