import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptors';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Main');
  const httpAdapter = app.get(HttpAdapterHost);

  app.setGlobalPrefix('api');

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter, logger));
  app.useGlobalInterceptors(new LoggingInterceptor(logger));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve todo lo que no está incluido en los DTOs.
      forbidNonWhitelisted: true, // Retorna Bad Request si hay propiedades en el objeto que no son requeridas.
    }),
  );

  // Asumiendo que estás usando Passport para la autenticación
  // app.use((req, res, next) => {
  //   req.user = req.user || { id: 'anonymous' };
  //   next();
  // });

  await app.listen(envs.port, () => {
    Logger.log(`🚀 Server running on port: ${envs.port}`, 'MAIN');
  });
}
bootstrap();
